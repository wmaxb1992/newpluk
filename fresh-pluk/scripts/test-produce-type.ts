import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { CREATE_PRODUCE_TYPE } from '../src/graphql/mutations';

// Configure Amplify
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://4mxqywjlzbehtlxtqpopt277vm.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-5bf5n5jkjjhmrhzsktppa2k3dm'
    }
  }
});

const client = generateClient();

async function createTestProduceType() {
  const input = {
    name: 'Heirloom Tomato',
    description: 'A flavorful variety of tomato known for its unique appearance and rich taste.',
    image: 'https://placehold.co/400x400?text=Tomato',
    icon: 'tomato',
    subcategoryId: '93a6b643-00ef-4fee-83b7-5fc352151533',
    slug: 'heirloom-tomato',
    iconUrl: 'https://placehold.co/64x64?text=🍅',
    tasteProfile: ['Sweet', 'Tangy', 'Rich'],
    commonUses: ['Salads', 'Sandwiches', 'Sauces'],
    tags: ['Heirloom', 'Summer', 'Organic'],
    farmCountInApp: 5,
    farmCountInZone: 3,
    farmCountNearby: 2,
    seasonalMonths: ['June', 'July', 'August', 'September']
  };

  try {
    const result = await client.graphql({
      query: CREATE_PRODUCE_TYPE,
      variables: { input }
    });
    console.log('Successfully created produce type:', result);
  } catch (error) {
    console.error('Error creating produce type:', error);
  }
}

createTestProduceType();
