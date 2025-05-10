import { faker } from '@faker-js/faker';
import { API, graphqlOperation } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { seedConfig } from './config';
import { GraphQLResponse } from './types';

// GraphQL operation helper
export const executeGraphQL = async <T>(query: string, variables = {}): Promise<GraphQLResponse<T>> => {
  try {
    const response = await API.graphql(graphqlOperation(query, variables));
    // Handle both Promise and Observable responses
    if (response && typeof response === 'object' && 'data' in response) {
      return response as GraphQLResponse<T>;
    } else {
      // If it's an Observable, we need to convert it to a Promise
      return new Promise((resolve, reject) => {
        const subscription = (response as any).subscribe({
          next: (result: GraphQLResponse<T>) => {
            resolve(result);
            subscription.unsubscribe();
          },
          error: (error: any) => {
            reject(error);
            subscription.unsubscribe();
          }
        });
      });
    }
  } catch (error) {
    console.error('GraphQL operation failed:', error);
    throw error;
  }
};

// Random item from array
export const randomItem = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

// Random items from array
export const randomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Random boolean with probability
export const randomBoolean = (probability = 0.5): boolean => {
  return Math.random() < probability;
};

// Random date between two dates
export const randomDate = (start: Date, end: Date): Date => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

// Format date for AWS
export const formatAWSDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

// Format datetime for AWS
export const formatAWSDateTime = (date: Date): string => {
  return date.toISOString();
};

// Random farm image URL
export const randomFarmImage = (): string => {
  return randomItem(seedConfig.farmImageUrls);
};

// Random produce image URL
export const randomProduceImage = (): string => {
  return randomItem(seedConfig.produceImageUrls);
};

// Generate a random location in the US
export const randomLocation = () => {
  // Approximate US bounds
  const lat = faker.location.latitude({ min: 24, max: 49 });
  const lng = faker.location.longitude({ min: -125, max: -66 });
  
  return {
    latitude: lat,
    longitude: lng,
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    postalCode: faker.location.zipCode(),
    country: 'USA'
  };
};

// Generate random user role
export const randomUserRole = (): 'CONSUMER' | 'FARMER' | 'DRIVER' | 'ADMIN' => {
  const roles: ('CONSUMER' | 'FARMER' | 'DRIVER' | 'ADMIN')[] = ['CONSUMER', 'FARMER', 'DRIVER', 'ADMIN'];
  const weights = [0.7, 0.2, 0.08, 0.02]; // 70% consumers, 20% farmers, 8% drivers, 2% admins
  
  const random = Math.random();
  let sum = 0;
  
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i];
    if (random < sum) {
      return roles[i];
    }
  }
  
  return 'CONSUMER'; // Default fallback
};

// Generate random inventory status
export const randomInventoryStatus = (): 'PLANNED' | 'PLANTED' | 'GROWING' | 'HARVESTED' | 'SOLD_OUT' | 'EXPIRED' => {
  const statuses: ('PLANNED' | 'PLANTED' | 'GROWING' | 'HARVESTED' | 'SOLD_OUT' | 'EXPIRED')[] = [
    'PLANNED', 'PLANTED', 'GROWING', 'HARVESTED', 'SOLD_OUT', 'EXPIRED'
  ];
  return randomItem(statuses);
};

// Generate random post type
export const randomPostType = (): 'GENERAL' | 'GROWING_UPDATE' | 'HARVEST_ANNOUNCEMENT' | 'EDUCATIONAL' => {
  const types: ('GENERAL' | 'GROWING_UPDATE' | 'HARVEST_ANNOUNCEMENT' | 'EDUCATIONAL')[] = [
    'GENERAL', 'GROWING_UPDATE', 'HARVEST_ANNOUNCEMENT', 'EDUCATIONAL'
  ];
  return randomItem(types);
};

// Generate random order status
export const randomOrderStatus = (): 'PENDING' | 'PROCESSING' | 'READY_FOR_PICKUP' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED' => {
  const statuses: ('PENDING' | 'PROCESSING' | 'READY_FOR_PICKUP' | 'OUT_FOR_DELIVERY' | 'DELIVERED' | 'CANCELLED')[] = [
    'PENDING', 'PROCESSING', 'READY_FOR_PICKUP', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'
  ];
  return randomItem(statuses);
};

// Generate a delay function
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Generate a batch of operations with delay to avoid throttling
export const processBatch = async <T>(
  items: T[],
  processFn: (item: T) => Promise<any>,
  batchSize = 10,
  delayMs = 1000
) => {
  const results = [];
  
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(batch.map(processFn));
    results.push(...batchResults);
    
    if (i + batchSize < items.length) {
      console.log(`Processed ${i + batchSize}/${items.length} items. Waiting ${delayMs}ms before next batch...`);
      await delay(delayMs);
    }
  }
  
  return results;
};

// Generate random produce data
export const generateProduceData = () => {
  return {
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    image: randomProduceImage()
  };
};

// Generate random farm data
export const generateFarmData = (ownerId: string = uuidv4()) => {
  const location = randomLocation();
  return {
    name: `${faker.company.name()} Farms`,
    description: faker.company.catchPhrase(),
    location: location.city + ', ' + location.state,
    website: faker.internet.url(),
    email: faker.internet.email(),
    address: faker.location.streetAddress(),
    city: location.city,
    state: location.state,
    zipCode: location.postalCode,
    profileImage: randomFarmImage(),
    coverImage: randomFarmImage(),
    active: true,
    certified: true,
    certifications: ['USDA Organic', 'Non-GMO'],
    yearEstablished: faker.number.int({ min: 1950, max: 2023 }),
    ownerId: ownerId
  };
};

// Generate random user data
export const generateUserData = (role?: 'CONSUMER' | 'FARMER' | 'DRIVER' | 'ADMIN') => {
  return {
    email: faker.internet.email(),
    name: faker.person.fullName(),
    role: role || randomUserRole(),
    id: uuidv4()
  };
};
