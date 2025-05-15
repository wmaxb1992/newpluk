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

const UPDATE_PRODUCE_TYPE = /* GraphQL */ `
  mutation UpdateProduceType($input: UpdateProduceTypeInput!) {
    updateProduceType(input: $input) {
      id
      name
      description
      icon
      image
      subcategoryId
      slug
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
  }
`;

async function updateTestProduceType() {
  try {
    console.log('Updating test apple...');
    const result = await client.graphql({
      query: UPDATE_PRODUCE_TYPE,
      variables: {
        input: {
          id: 'test-apple-1',
          slug: 'test-apple-1',
          iconUrl: '/icons/types/apple.svg',
          tasteProfile: 'Sweet and crisp',
          commonUses: ['Fresh eating', 'Baking'],
          subcategoryID: 'fruits-pome',
          tags: ['fruit', 'sweet'],
          farmCountInApp: 0,
          farmCountInZone: 0,
          farmCountNearby: 0,
          seasonalMonths: [9, 10, 11]
        }
      },
      authMode: 'apiKey'
    });
    console.log('Success:', result);
  } catch (error) {
    console.error('Error updating produce type:', error);
  }
}

updateTestProduceType();
