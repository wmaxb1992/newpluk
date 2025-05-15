/**
 * Script to seed mock produce varieties for testing the UI
 */

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import type { GraphQLResult } from '@aws-amplify/api-graphql';

// Configure Amplify
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://7pmhulha6vfsxhc6iqghyux52e.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-tnt5itq4gvb5ddu3ynaw6t42mi'
    }
  }
});

const client = generateClient();

// GraphQL Operations
const LIST_PRODUCE_TYPES = /* GraphQL */ `
  query ListProduceTypes {
    listProduceTypes {
      items {
        id
        name
        subcategoryId
      }
    }
  }
`;

const CREATE_PRODUCE_VARIETY = /* GraphQL */ `
  mutation CreateProduceVariety($input: CreateProduceVarietyInput!) {
    createProduceVariety(input: $input) {
      id
      name
      typeId
      description
      season
      averageShelfLife
      weightUnit
    }
  }
`;

interface ProduceType {
  id: string;
  name: string;
  subcategoryId: string;
}

interface ProduceTypeResponse {
  listProduceTypes: {
    items: ProduceType[];
  };
}

// Standard varieties for certain produce types
const LEMON_VARIETIES = [
  { name: 'Meyer Lemon', description: 'Sweeter than regular lemons, with thinner skin', rank: 5 },
  { name: 'Eureka Lemon', description: 'Classic tart lemon with abundant juice', rank: 4 },
  { name: 'Lisbon Lemon', description: 'Smooth skin with very few seeds', rank: 3 },
  { name: 'Bearss Lemon', description: 'Juicy and seedless with bright flavor', rank: 2 },
  { name: 'Pink Variegated Lemon', description: 'Pink flesh with striped skin', rank: 1 }
];

const ORANGE_VARIETIES = [
  { name: 'Navel Orange', description: 'Sweet, seedless orange with a navel-like formation', rank: 5 },
  { name: 'Valencia Orange', description: 'Juicy orange perfect for juicing', rank: 4 },
  { name: 'Blood Orange', description: 'Deep red flesh with berry-like flavor', rank: 3 },
  { name: 'Cara Cara Orange', description: 'Pink-fleshed navel orange with low acidity', rank: 2 },
  { name: 'Seville Orange', description: 'Bitter orange best for marmalade', rank: 1 }
];

// Generic varieties for any produce type
const GENERIC_VARIETIES = [
  { name: 'Organic', description: 'Certified organic, no synthetic pesticides', rank: 5 },
  { name: 'Heirloom', description: 'Traditional variety passed down for generations', rank: 4 },
  { name: 'Local', description: 'Grown locally within 50 miles', rank: 3 },
  { name: 'Premium', description: 'Top-quality selection, hand-picked', rank: 2 },
  { name: 'Budget', description: 'Affordable option, may have cosmetic imperfections', rank: 1 }
];

async function seedMockVarieties() {
  try {
    // 1. Fetch all produce types
    console.log('Fetching produce types...');
    const typesResult = await client.graphql({
      query: LIST_PRODUCE_TYPES
    }) as GraphQLResult<ProduceTypeResponse>;
    
    const produceTypes = typesResult.data?.listProduceTypes?.items || [];
    console.log(`Found ${produceTypes.length} produce types`);
    
    // 2. Find Lemon and Orange types specifically
    const lemonType = produceTypes.find(type => 
      type.name.toLowerCase() === 'lemon'
    );
    
    const orangeType = produceTypes.find(type => 
      type.name.toLowerCase() === 'orange'
    );
    
    // 3. Seed varieties for each type
    let totalCreated = 0;
    
    // Seed Lemon varieties if found
    if (lemonType) {
      console.log(`\nCreating varieties for Lemon (ID: ${lemonType.id})`);
      
      for (const variety of LEMON_VARIETIES) {
        try {
          const result = await client.graphql({
            query: CREATE_PRODUCE_VARIETY,
            variables: {
              input: {
                typeId: lemonType.id,
                name: variety.name,
                description: variety.description,
                averageShelfLife: variety.rank * 3, // Just using rank to generate some data
                season: ["Summer", "Fall"]
              }
            }
          });
          
          console.log(`Created ${variety.name} variety for Lemon`);
          totalCreated++;
        } catch (error) {
          console.error(`Failed to create ${variety.name} variety:`, error);
        }
      }
    } else {
      console.log('Lemon produce type not found');
    }
    
    // Seed Orange varieties if found
    if (orangeType) {
      console.log(`\nCreating varieties for Orange (ID: ${orangeType.id})`);
      
      for (const variety of ORANGE_VARIETIES) {
        try {
          const result = await client.graphql({
            query: CREATE_PRODUCE_VARIETY,
            variables: {
              input: {
                typeId: orangeType.id,
                name: variety.name,
                description: variety.description,
                averageShelfLife: variety.rank * 3,
                season: ["Winter", "Spring"]
              }
            }
          });
          
          console.log(`Created ${variety.name} variety for Orange`);
          totalCreated++;
        } catch (error) {
          console.error(`Failed to create ${variety.name} variety:`, error);
        }
      }
    } else {
      console.log('Orange produce type not found');
    }
    
    // Seed generic varieties for a few random produce types
    const randomTypes = produceTypes
      .filter(type => type.id !== lemonType?.id && type.id !== orangeType?.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    for (const type of randomTypes) {
      console.log(`\nCreating generic varieties for ${type.name} (ID: ${type.id})`);
      
      for (const variety of GENERIC_VARIETIES) {
        try {
          const result = await client.graphql({
            query: CREATE_PRODUCE_VARIETY,
            variables: {
              input: {
                typeId: type.id,
                name: `${variety.name} ${type.name}`,
                description: variety.description,
                averageShelfLife: variety.rank * 3,
                season: ["All Year"]
              }
            }
          });
          
          console.log(`Created ${variety.name} variety for ${type.name}`);
          totalCreated++;
        } catch (error) {
          console.error(`Failed to create ${variety.name} variety for ${type.name}:`, error);
        }
      }
    }
    
    console.log(`\n===== SEEDING COMPLETE =====`);
    console.log(`Total varieties created: ${totalCreated}`);
    
  } catch (error) {
    console.error('Error in seed script:', error);
  }
}

// Run the script
seedMockVarieties().catch(error => {
  console.error('Script execution failed:', error);
}); 