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

const CREATE_PRODUCE_TYPE = /* GraphQL */ `
  mutation CreateProduceType($input: CreateProduceTypeInput!) {
    createProduceType(input: $input) {
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
    }
  }
`;

async function createTestProduceTypes() {
  const testTypes = [
    {
      id: 'test-apple',
      name: 'Test Apple',
      slug: 'test-apple',
      description: 'A test apple produce type',
      iconUrl: '/icons/types/apple.svg',
      tasteProfile: 'Sweet, crisp',
      commonUses: ['Eating', 'Baking'],
      subcategoryID: 'fruits-pome',
      tags: ['fruit', 'sweet'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [9, 10, 11]
    },
    {
      id: 'test-carrot',
      name: 'Test Carrot',
      slug: 'test-carrot',
      description: 'A test carrot produce type',
      iconUrl: '/icons/types/carrot.svg',
      tasteProfile: 'Sweet, earthy',
      commonUses: ['Raw', 'Cooking'],
      subcategoryID: 'root-vegetables-taproot',
      tags: ['vegetable', 'root'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [6, 7, 8, 9]
    },
    {
      id: 'test-basil',
      name: 'Test Basil',
      slug: 'test-basil',
      description: 'A test basil produce type',
      iconUrl: '/icons/types/basil.svg',
      tasteProfile: 'Sweet, peppery',
      commonUses: ['Cooking', 'Garnish'],
      subcategoryID: 'herbs-culinary',
      tags: ['herb', 'aromatic'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [5, 6, 7, 8]
    }
  ];

  for (const type of testTypes) {
    try {
      console.log(`Creating produce type: ${type.name}`);
      const result = await client.graphql({
        query: CREATE_PRODUCE_TYPE,
        variables: { input: type },
        authMode: 'apiKey'
      });
      console.log('Success:', result);
    } catch (error) {
      console.error('Error creating produce type:', type.name, error);
    }
  }
}

createTestProduceTypes();
