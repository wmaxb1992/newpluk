import { configureAmplify } from './config';
import { generateUsers } from './generators/users';
import { 
  generateProduceCategories, 
  generateProduceSubcategories, 
  generateProduceTypes, 
  generateProduceVarieties,
  generateProduceNutrients
} from './generators/produce';
import { 
  generateFarms, 
  generateZones, 
  generateMarketSchedules 
} from './generators/farms';
import { 
  generateInventoryBatches, 
  generatePreHarvestListings, 
  generatePreHarvestReservations 
} from './generators/inventory';
import { 
  generateFarmPosts, 
  generatePostComments, 
  generatePostLikes, 
  generateFarmFollows 
} from './generators/social';
import { 
  generateProduceListings, 
  generateListingReviews, 
  generateCarts, 
  generateCartItems, 
  generateOrders 
} from './generators/commerce';

// Main function to run all seed data generators
const seedData = async () => {
  try {
    console.log('Configuring Amplify...');
    configureAmplify();
    
    console.log('Starting seed data generation...');
    
    // Skip user generation due to authorization constraints
    console.log('Skipping user generation due to authorization constraints...');
    console.log('To create users with proper roles (CONSUMER, FARMER, DRIVER, ADMIN):');
    console.log('1. Use the AWS Cognito console to create users');
    console.log('2. Then use the Amplify Auth API to sign in as those users');
    console.log('3. Create corresponding User records in the GraphQL API with the appropriate roles');
    console.log('For now, we will focus on generating the produce taxonomy data.');
    const users: any[] = [];
    
    // Generate produce taxonomy
    const categories = await generateProduceCategories();
    const subcategories = await generateProduceSubcategories(categories);
    const types = await generateProduceTypes(subcategories);
    const varieties = await generateProduceVarieties(types);
    await generateProduceNutrients(varieties);
    
    // Generate farms and related data
    const farms = await generateFarms(users);
    await generateZones(farms);
    await generateMarketSchedules(farms);
    
    // Generate inventory data
    const inventoryBatches = await generateInventoryBatches(farms, varieties);
    const preHarvestListings = await generatePreHarvestListings(inventoryBatches, farms, varieties);
    await generatePreHarvestReservations(preHarvestListings, users);
    
    // Generate social data
    const farmPosts = await generateFarmPosts(farms, preHarvestListings);
    await generatePostComments(farmPosts, users);
    await generatePostLikes(farmPosts, users);
    await generateFarmFollows(farms, users);
    
    // Generate commerce data
    const produceListings = await generateProduceListings(farms, varieties, inventoryBatches);
    await generateListingReviews(produceListings, users);
    const carts = await generateCarts(users);
    await generateCartItems(carts, produceListings);
    await generateOrders(users, produceListings);
    
    console.log('Seed data generation completed successfully!');
  } catch (error) {
    console.error('Error generating seed data:', error);
  }
};

// Run the seed data generation
seedData();
