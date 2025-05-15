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
      iconUrl
      description
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
  }
`;

async function createTestProduceTypes() {
  const testTypes = [
    {
      id: 'test-apple-2',
      name: 'Test Apple 2',
      slug: 'test-apple-2',
      description: 'A test apple produce type',
      iconUrl: '/icons/types/apple.svg',
      tasteProfile: 'Sweet and crisp',
      commonUses: ['Fresh eating', 'Baking'],
      subcategoryID: 'fruits-pome',
      tags: ['fruit', 'sweet'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [9, 10, 11]
    },
    {
      id: 'test-carrot-2',
      name: 'Test Carrot 2',
      slug: 'test-carrot-2',
      description: 'A test carrot produce type',
      iconUrl: '/icons/types/carrot.svg',
      tasteProfile: 'Sweet and earthy',
      commonUses: ['Raw', 'Cooking', 'Juicing'],
      subcategoryID: 'root-vegetables-taproot',
      tags: ['vegetable', 'root'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [6, 7, 8, 9]
    },
    {
      id: 'test-basil-2',
      name: 'Test Basil 2',
      slug: 'test-basil-2',
      description: 'A test basil produce type',
      iconUrl: '/icons/types/basil.svg',
      tasteProfile: 'Sweet and peppery',
      commonUses: ['Cooking', 'Garnish', 'Pesto'],
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
