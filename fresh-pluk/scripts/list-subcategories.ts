import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { GraphQLResult } from '@aws-amplify/api-graphql';

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

const LIST_SUBCATEGORIES = /* GraphQL */ `
  query ListProduceSubcategories {
    listProduceSubcategories {
      items {
        id
        name
      }
    }
  }
`;

async function listSubcategories() {
  try {
    const result = await client.graphql({
      query: LIST_SUBCATEGORIES
    }) as GraphQLResult<{
      listProduceSubcategories: {
        items: Array<{
          id: string;
          name: string;
        }>;
      };
    }>;
    console.log('Subcategories:', JSON.stringify(result.data.listProduceSubcategories.items, null, 2));
  } catch (error) {
    console.error('Error listing subcategories:', error);
  }
}

listSubcategories();
