import { faker } from '@faker-js/faker';
import { 
  executeGraphQL, 
  randomInventoryStatus, 
  formatAWSDate, 
  randomDate, 
  randomBoolean,
  randomProduceImage
} from '../utils';
import { 
  createInventoryBatch, 
  createPreHarvestListing, 
  createPreHarvestReservation 
} from '../graphql';
import { seedConfig } from '../config';
import {
  Farm,
  ProduceVariety,
  InventoryBatch,
  PreHarvestListing,
  PreHarvestReservation,
  User,
  CreateInventoryBatchResponse,
  CreatePreHarvestListingResponse,
  CreatePreHarvestReservationResponse
} from '../types';

// Generate inventory batches
export const generateInventoryBatches = async (
  farms: Farm[], 
  varieties: ProduceVariety[],
  count: number = seedConfig.inventoryBatchCount
) => {
  console.log(`Generating inventory batches for ${farms.length} farms...`);
  
  const batches: InventoryBatch[] = [];
  
  for (const farm of farms) {
    // Generate inventory batches for each farm
    for (let i = 0; i < count; i++) {
      // Select a random variety
      const variety = faker.helpers.arrayElement(varieties);
      
      // Generate dates
      const now = new Date();
      const plantingDate = randomDate(
        new Date(now.getFullYear(), now.getMonth() - 3, 1), 
        new Date(now.getFullYear(), now.getMonth(), 1)
      );
      
      const estimatedHarvestDate = randomDate(
        new Date(now.getFullYear(), now.getMonth(), 15),
        new Date(now.getFullYear(), now.getMonth() + 1, 15)
      );
      
      const actualHarvestDate = randomBoolean(0.7) ? randomDate(
        estimatedHarvestDate,
        new Date(estimatedHarvestDate.getTime() + 7 * 24 * 60 * 60 * 1000) // 7 days after estimated
      ) : null;
      
      const expirationDate = actualHarvestDate ? new Date(
        actualHarvestDate.getTime() + faker.number.int({ min: 7, max: 30 }) * 24 * 60 * 60 * 1000
      ) : null;
      
      const batchData = {
        farmID: farm.id,
        varietyID: variety.id,
        plantingDate: formatAWSDate(plantingDate),
        estimatedHarvestDate: formatAWSDate(estimatedHarvestDate),
        actualHarvestDate: actualHarvestDate ? formatAWSDate(actualHarvestDate) : null,
        expirationDate: expirationDate ? formatAWSDate(expirationDate) : null,
        quantity: faker.number.float({ min: 10, max: 500, precision: 0.1 }),
        unit: faker.helpers.arrayElement(['kg', 'lb', 'bunch', 'each']),
        status: randomInventoryStatus(),
        storageConditions: faker.helpers.arrayElement([
          'Refrigerated', 'Cool and dry', 'Room temperature', 'Cold storage'
        ]),
        notes: faker.lorem.sentence(),
        ownerId: farm.ownerId
      };
      
      try {
        const response = await executeGraphQL<CreateInventoryBatchResponse>(createInventoryBatch, {
          input: batchData
        });
        
        const batch = response.data.createInventoryBatch;
        batches.push(batch);
        console.log(`Created inventory batch: ${batch.id} for farm ${farm.name} and variety ${variety.name}`);
      } catch (error) {
        console.error(`Failed to create inventory batch for farm ${farm.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${batches.length} inventory batches`);
  return batches;
};

// Generate pre-harvest listings
export const generatePreHarvestListings = async (
  inventoryBatches: InventoryBatch[],
  farms: Farm[],
  varieties: ProduceVariety[],
  count: number = seedConfig.preHarvestListingCount
) => {
  console.log(`Generating pre-harvest listings for ${inventoryBatches.length} inventory batches...`);
  
  const listings: PreHarvestListing[] = [];
  const farmMap = new Map(farms.map(farm => [farm.id, farm]));
  const varietyMap = new Map(varieties.map(variety => [variety.id, variety]));
  
  for (const batch of inventoryBatches) {
    // Only create pre-harvest listings for batches that are planned, planted, or growing
    if (!['PLANNED', 'PLANTED', 'GROWING'].includes(batch.status)) {
      continue;
    }
    
    // Generate pre-harvest listings for each eligible batch
    const listingCount = faker.number.int({ min: 1, max: count });
    
    for (let i = 0; i < listingCount; i++) {
      const farm = farmMap.get(batch.farmID);
      const variety = varietyMap.get(batch.varietyID);
      
      if (!farm || !variety) {
        console.error(`Missing farm or variety for batch ${batch.id}`);
        continue;
      }
      
      const listingData = {
        farmId: batch.farmID,
        varietyId: batch.varietyID,
        inventoryBatchId: batch.id,
        title: `Pre-order ${variety.name} from ${farm.name}`,
        description: faker.lorem.paragraph(),
        estimatedHarvestDate: batch.estimatedHarvestDate,
        estimatedQuantity: faker.number.float({ min: 5, max: batch.quantity * 0.8, precision: 0.1 }),
        unit: batch.unit,
        pricePerUnit: faker.number.float({ min: 2, max: 20, precision: 0.01 }),
        organic: true, // Set to true since we don't have this in the Farm model anymore
        images: [randomProduceImage(), randomProduceImage()],
        ownerId: farm.ownerId
      };
      
      try {
        const response = await executeGraphQL<CreatePreHarvestListingResponse>(createPreHarvestListing, {
          input: listingData
        });
        
        const listing = response.data.createPreHarvestListing;
        listings.push(listing);
        console.log(`Created pre-harvest listing: ${listing.title} (${listing.id})`);
      } catch (error) {
        console.error(`Failed to create pre-harvest listing for batch ${batch.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${listings.length} pre-harvest listings`);
  return listings;
};

// Generate pre-harvest reservations
export const generatePreHarvestReservations = async (
  preHarvestListings: PreHarvestListing[],
  users: User[]
) => {
  console.log(`Generating pre-harvest reservations...`);
  
  const reservations: PreHarvestReservation[] = [];
  const consumerUsers = users.filter(user => user.role === 'CONSUMER');
  
  if (consumerUsers.length === 0) {
    console.error('No consumer users found for pre-harvest reservations');
    return reservations;
  }
  
  for (const listing of preHarvestListings) {
    // Determine if this listing will have reservations based on probability
    if (!randomBoolean(seedConfig.reservationProbability)) {
      continue;
    }
    
    // Generate 1-3 reservations per listing
    const reservationCount = faker.number.int({ min: 1, max: 3 });
    
    // Select random users for reservations
    const selectedUsers = faker.helpers.arrayElements(consumerUsers, reservationCount);
    
    for (const user of selectedUsers) {
      const reservationData = {
        preHarvestListingID: listing.id,
        userID: user.id,
        quantity: faker.number.float({ min: 1, max: listing.estimatedQuantity / 4, precision: 0.1 }),
        unit: listing.unit,
        status: faker.helpers.arrayElement(['PENDING', 'CONFIRMED']),
        notes: faker.helpers.arrayElement([null, faker.lorem.sentence()]),
        owner: user.id
      };
      
      try {
        const response = await executeGraphQL<CreatePreHarvestReservationResponse>(createPreHarvestReservation, {
          input: reservationData
        });
        
        const reservation = response.data.createPreHarvestReservation;
        reservations.push(reservation);
        console.log(`Created pre-harvest reservation: ${reservation.id} for listing ${listing.id} by user ${user.name}`);
      } catch (error) {
        console.error(`Failed to create pre-harvest reservation for listing ${listing.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${reservations.length} pre-harvest reservations`);
  return reservations;
};
