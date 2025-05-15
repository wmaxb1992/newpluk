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
      description
      icon
      image
      subcategoryId
      createdAt
      updatedAt
    }
  }
`;

async function createTestProduceTypes() {
  const testTypes = [
    {
      id: 'test-apple-1',
      name: 'Test Apple 1',
      description: 'A test apple produce type',
      icon: '/icons/types/apple.svg',
      image: '/icons/types/apple.svg',
      subcategoryId: 'fruits-pome'
    },
    {
      id: 'test-carrot-1',
      name: 'Test Carrot 1',
      description: 'A test carrot produce type',
      icon: '/icons/types/carrot.svg',
      image: '/icons/types/carrot.svg',
      subcategoryId: 'root-vegetables-taproot'
    },
    {
      id: 'test-basil-1',
      name: 'Test Basil 1',
      description: 'A test basil produce type',
      icon: '/icons/types/basil.svg',
      image: '/icons/types/basil.svg',
      subcategoryId: 'herbs-culinary'
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
