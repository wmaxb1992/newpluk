import { faker } from '@faker-js/faker';
import { executeGraphQL, generateFarmData, randomLocation } from '../utils';
import { createFarm, createZone, createMarketSchedule } from '../graphql';
import { seedConfig } from '../config';
import { CreateFarmResponse, CreateZoneResponse, CreateMarketScheduleResponse, Farm, Zone, MarketSchedule } from '../types';

// Generate farms
export const generateFarms = async (users: any[] = [], count: number = seedConfig.farmCount) => {
  console.log(`Generating ${count} farms...`);
  
  const farms: Farm[] = [];
  
  // Filter users to get only farmers
  const farmerUsers = users.filter(user => user.role === 'FARMER');
  
  // If no farmer users, we can't create farms
  if (farmerUsers.length === 0) {
    console.log('No farmer users found. Cannot create farms.');
    return farms;
  }
  
  for (let i = 0; i < count; i++) {
    // Get a random farmer user
    const farmerUser = farmerUsers[i % farmerUsers.length];
    
    // Generate farm data with the farmer's ID as owner
    const farmData = generateFarmData(farmerUser.id);
    
    try {
      const response = await executeGraphQL<CreateFarmResponse>(createFarm, {
        input: farmData
      });
      
      const farm = response.data.createFarm;
      farms.push(farm);
      console.log(`Created farm: ${farm.name} (${farm.id})`);
    } catch (error) {
      console.error(`Failed to create farm ${i + 1}:`, error);
    }
  }
  
  console.log(`Successfully created ${farms.length} farms`);
  return farms;
};

// Generate zones
export const generateZones = async (farms: Farm[]) => {
  console.log(`Generating zones for ${farms.length} farms...`);
  
  const zones: Zone[] = [];
  
  for (const farm of farms) {
    // Generate 1-3 zones per farm
    const zoneCount = faker.number.int({ min: 1, max: 3 });
    
    for (let i = 0; i < zoneCount; i++) {
      const zoneName = faker.helpers.arrayElement([
        'North Field', 'South Field', 'East Field', 'West Field',
        'Greenhouse', 'Orchard', 'Garden', 'Hydroponic Area'
      ]);
      
      const zoneData = {
        farmId: farm.id,
        farmOwnerId: farm.ownerId,
        name: `${zoneName} ${i + 1}`,
        description: faker.lorem.sentence(),
        location: `${faker.location.city()}, ${faker.location.state()}`,
        size: faker.number.float({ min: 0.1, max: 10, precision: 0.1 }),
        sizeUnit: faker.helpers.arrayElement(['acres', 'hectares', 'sq ft'])
      };
      
      try {
        const response = await executeGraphQL<CreateZoneResponse>(createZone, {
          input: zoneData
        });
        
        const zone = response.data.createZone;
        zones.push(zone);
        console.log(`Created zone: ${zone.name} (${zone.id}) for farm ${farm.name}`);
      } catch (error) {
        console.error(`Failed to create zone for farm ${farm.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${zones.length} zones`);
  return zones;
};

// Generate market schedules
export const generateMarketSchedules = async (farms: Farm[]) => {
  console.log(`Generating market schedules for ${farms.length} farms...`);
  
  const schedules: MarketSchedule[] = [];
  
  for (const farm of farms) {
    // Generate 1-3 market schedules per farm
    const scheduleCount = faker.number.int({ min: 1, max: 3 });
    const usedDays = new Set();
    
    for (let i = 0; i < scheduleCount; i++) {
      // Generate a unique day of week (0-6, Sunday-Saturday)
      let dayOfWeek;
      do {
        dayOfWeek = faker.number.int({ min: 0, max: 6 });
      } while (usedDays.has(dayOfWeek));
      
      usedDays.add(dayOfWeek);
      
      // Generate start time between 7am and 11am
      const startHour = faker.number.int({ min: 7, max: 11 });
      const startTime = `${startHour.toString().padStart(2, '0')}:00:00.000Z`;
      
      // Generate end time 3-6 hours after start time
      const duration = faker.number.int({ min: 3, max: 6 });
      const endHour = startHour + duration;
      const endTime = `${endHour.toString().padStart(2, '0')}:00:00.000Z`;
      
      const scheduleData = {
        farmId: farm.id,
        farmOwnerId: farm.ownerId,
        marketName: `${faker.company.name()} Farmers Market`,
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        dayOfWeek,
        startTime,
        endTime,
        active: true
      };
      
      try {
        const response = await executeGraphQL<CreateMarketScheduleResponse>(createMarketSchedule, {
          input: scheduleData
        });
        
        const schedule = response.data.createMarketSchedule;
        schedules.push(schedule);
        console.log(`Created market schedule: Day ${schedule.dayOfWeek} (${schedule.id}) for farm ${farm.name}`);
      } catch (error) {
        console.error(`Failed to create market schedule for farm ${farm.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${schedules.length} market schedules`);
  return schedules;
};
