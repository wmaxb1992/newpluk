import { getClient } from '../config/amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { Amplify } from '@aws-amplify/core';
import NetInfo from '@react-native-community/netinfo';

export const TEST_QUERY = /* GraphQL */ `
  query TestQuery {
    __typename
  }
`;

interface ProduceListing {
  id: string;
  title: string;
  price: number;
}

interface ListProduceListingsResponse {
  listProduceListings: {
    items: ProduceListing[];
  };
}

export const testDatabaseConnection = async () => {
  try {
    console.log('Testing DynamoDB connection through AppSync...');
    
    // Log current Amplify configuration
    const currentConfig = Amplify.getConfig();
    console.log('Current Amplify config:', {
      hasEndpoint: !!(currentConfig as any).API?.GraphQL?.endpoint,
      hasApiKey: !!(currentConfig as any).API?.GraphQL?.apiKey,
      authType: (currentConfig as any).API?.GraphQL?.defaultAuthMode
    });

    const client = getClient();
    
    // Make the query
    const response = (await client.graphql({
      query: TEST_QUERY,
      authMode: 'apiKey'
    })) as GraphQLResult<{ __typename: string }>;
    
    if (!response.data) {
      throw new Error('No data returned from API');
    }

    console.log('Connection successful!');
    console.log('Response:', JSON.stringify(response.data, null, 2));
    return response;
  } catch (error) {
    console.error('Connection failed:', error);
    
    // Log detailed error information
    if (error instanceof Error) {
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });

      if (error.message.includes('No api-key configured')) {
        console.error('API Key missing in configuration. Please check Amplify.configure() call.');
      } else if (error.message.includes('Network error')) {
        console.error('Network error details:', {
          endpoint: (Amplify.getConfig() as any).API?.GraphQL?.endpoint,
          networkState: await NetInfo.fetch()
        });
      }
    }

    // Log raw error object for debugging
    console.error('Raw error:', JSON.stringify(error, null, 2));
    
    throw error;
  }
};
