import { fruitsData } from './seed-data/categories/01-fruits';
import { rootVegetablesData } from './seed-data/categories/04-root-vegetables';
import { herbsAromaticsData } from './seed-data/categories/05-herbs-aromatics';
import { mushroomsFungiData } from './seed-data/categories/06-mushrooms-fungi';
import { nutsSeedsData } from './seed-data/categories/07-nuts-seeds';
import { legumesPulsesData } from './seed-data/categories/08-legumes-pulses';
import { edibleFlowersData } from './seed-data/categories/09-edible-flowers';
import { microgreensData } from './seed-data/categories/10-microgreens-sprouts';
import { CategoryData } from './seed-data/types';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

// Configure Amplify
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: process.env.API_ENDPOINT || 'https://7pmhulha6vfsxhc6iqghyux52e.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: process.env.API_KEY || 'da2-tnt5itq4gvb5ddu3ynaw6t42mi'
    }
  }
});

const client = generateClient();

// Import GraphQL operations from generated files
import { 
  CREATE_PRODUCE_CATEGORY,
  CREATE_PRODUCE_SUBCATEGORY,
  CREATE_PRODUCE_TYPE,
  UPDATE_PRODUCE_TYPE
} from '../src/graphql/mutations';

const LIST_PRODUCE_TYPES = /* GraphQL */ `
  query ListProduceTypes($filter: ModelProduceTypeFilterInput, $limit: Int, $nextToken: String) {
    listProduceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        description
        iconUrl
        tasteProfile
        commonUses
        subcategoryID
        tags
        farmCountInApp
        farmCountInZone
        farmCountNearby
        seasonalMonths
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;

const CREATE_PRODUCE_VARIETY = /* GraphQL */ `
  mutation CreateProduceVariety($input: CreateProduceVarietyInput!) {
    createProduceVariety(input: $input) {
      id
      name
    }
  }
`;

// Function to seed a category and its related data
async function seedCategory(categoryData: CategoryData) {
  try {
    // Create category
    console.log(`Creating category ${categoryData.category.name}...`);
    try {
      const categoryInput = {
        id: categoryData.category.id,
        name: categoryData.category.name,
        description: categoryData.category.description,
        icon: categoryData.category.icon,
        image: categoryData.category.image,
        iconUrl: categoryData.category.iconUrl
      };

      await client.graphql({
        query: CREATE_PRODUCE_CATEGORY,
        variables: { input: categoryInput }
      });
    } catch (error) {
      console.log('Category already exists, skipping...');
    }

    // Create subcategories
    console.log('Creating subcategories...');
    for (const subcategory of categoryData.subcategories) {
      try {
        const subcategoryInput = {
          id: subcategory.id,
          name: subcategory.name,
          categoryId: subcategory.categoryId,
          description: subcategory.description,
          icon: subcategory.icon,
          image: subcategory.image,
          iconUrl: subcategory.iconUrl
        };

        await client.graphql({
          query: CREATE_PRODUCE_SUBCATEGORY,
          variables: { input: subcategoryInput }
        });
      } catch (error) {
        console.log(`Subcategory ${subcategory.name} already exists, skipping...`);
      }
    }

    // Create produce types
    console.log('Creating produce types...');
    for (const produceType of categoryData.types) {
      try {
        console.log(`Processing produce type: ${produceType.name}`);
        
        // Check if type exists
        const existingType = await client.graphql({
          query: LIST_PRODUCE_TYPES,
          variables: { 
            filter: { 
              id: { eq: produceType.id }
            }
          },
          authMode: 'apiKey'
        });
        
        const items = (existingType as any).data?.listProduceTypes?.items || [];
        
        if (items.length > 0) {
          console.log(`Produce type ${produceType.name} already exists, updating...`);
          const { id, ...updateData } = produceType;
          await client.graphql({
            query: UPDATE_PRODUCE_TYPE,
            variables: { 
              input: {
                id,
                ...updateData
              }
            },
            authMode: 'apiKey'
          });
        } else {
          console.log(`Creating new produce type ${produceType.name}...`);
          await client.graphql({
            query: CREATE_PRODUCE_TYPE,
            variables: { input: produceType },
            authMode: 'apiKey'
          });
        }
      } catch (error: any) {
        console.error('Error processing produce type', produceType.name + ':', error);
      }
    }

    // Create varieties
    console.log('Creating varieties...');
    for (const variety of categoryData.varieties) {
      try {
        const varietyInput = {
          id: variety.id,
          name: variety.name,
          typeId: variety.typeId,
          description: variety.description,
          averageShelfLife: variety.averageShelfLife
        };

        await client.graphql({
          query: CREATE_PRODUCE_VARIETY,
          variables: { input: varietyInput }
        });
      } catch (error) {
        console.log(`Variety ${variety.name} already exists, skipping...`);
      }
    }
  } catch (error) {
    console.log('Error seeding category:', error);
  }
}

async function seedData() {
  try {
    // Seed all categories
    const categories = [
      fruitsData,
      rootVegetablesData,
      herbsAromaticsData,
      mushroomsFungiData,
      nutsSeedsData,
      legumesPulsesData,
      edibleFlowersData,
      microgreensData
    ];

    for (const categoryData of categories) {
      await seedCategory(categoryData);
    }
    console.log('Data seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
}

seedData();
