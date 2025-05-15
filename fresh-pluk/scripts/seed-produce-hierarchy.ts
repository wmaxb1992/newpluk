import { Amplify } from '@aws-amplify/core';
import { generateClient } from '@aws-amplify/api';
import { 
  CREATE_PRODUCE_CATEGORY,
  CREATE_PRODUCE_SUBCATEGORY,
  CREATE_PRODUCE_TYPE,
  CREATE_PRODUCE_VARIETY 
} from '../src/graphql/mutations';
import {
  fruitsData,
  vegetablesData,
  leafyGreensData,
  rootVegetablesData,
  herbsAromaticsData,
  mushroomsFungiData,
  nutsSeedsData,
  legumesPulsesData,
  edibleFlowersData,
  microgreensData
} from './seed-data';

// AWS AppSync configuration
const awsConfig = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint: 'https://7pmhulha6vfsxhc6iqghyux52e.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-tnt5itq4gvb5ddu3ynaw6t42mi',
};

// Configure Amplify
Amplify.configure(awsConfig);

// Generate client with explicit auth mode
const client = generateClient({
  authMode: 'apiKey',
  apiKey: awsConfig.aws_appsync_apiKey
});

// All category data
const allData = [
  fruitsData,
  vegetablesData,
  leafyGreensData,
  rootVegetablesData,
  herbsAromaticsData,
  mushroomsFungiData,
  nutsSeedsData,
  legumesPulsesData,
  edibleFlowersData,
  microgreensData
];

async function seedProduceHierarchy() {
  try {
    console.log('Starting to seed produce hierarchy...');
    
    // Seed each category's data
    for (const data of allData) {
      // Create category
      console.log(`Creating category: ${data.category.name}`);
      console.log('Category data:', JSON.stringify(data.category, null, 2));
      await client.graphql({
        query: CREATE_PRODUCE_CATEGORY,
        variables: { input: data.category },
        authMode: 'apiKey'
      });

      // Create subcategories
      for (const subcategory of data.subcategories) {
        console.log(`Creating subcategory: ${subcategory.name}`);
        await client.graphql({
          query: CREATE_PRODUCE_SUBCATEGORY,
          variables: { input: subcategory },
          authMode: 'apiKey'
        });
      }

      // Create types
      for (const type of data.types) {
        console.log(`Creating type: ${type.name}`);
        await client.graphql({
          query: CREATE_PRODUCE_TYPE,
          variables: { input: type },
          authMode: 'apiKey'
        });
      }

      // Create varieties
      for (const variety of data.varieties) {
        console.log(`Creating variety: ${variety.name}`);
        await client.graphql({
          query: CREATE_PRODUCE_VARIETY,
          variables: { input: variety },
          authMode: 'apiKey'
        });
      }
    }

    console.log('Successfully seeded all produce data!');
  } catch (error) {
    console.error('Error seeding produce data:', error);
    throw error;
  }
}

// Run the seed function
seedProduceHierarchy();
