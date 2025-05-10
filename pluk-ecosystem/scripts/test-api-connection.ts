import { Amplify, API, graphqlOperation } from 'aws-amplify';

// Configure Amplify with the provided credentials
const amplifyConfig = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint: 'https://3tvmaj3hgzgsfh3vx5y7rsj5ta.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-qkh755tkrfdrbmrnzscejowsfy',
};

Amplify.configure(amplifyConfig);

// Simple query to test API connection
const testQuery = /* GraphQL */ `
  query ListTypes {
    __schema {
      types {
        name
        kind
      }
    }
  }
`;

async function testConnection() {
  try {
    console.log('Testing connection to GraphQL API...');
    const response = await API.graphql(graphqlOperation(testQuery));
    console.log('Connection successful!');
    console.log('Available types in the schema:');
    
    // Check if the response has the expected structure
    if (response && 
        typeof response === 'object' && 
        'data' in response && 
        response.data && 
        '__schema' in response.data) {
      // Print the first 10 types to verify schema content
      const types = response.data.__schema.types.slice(0, 10);
      types.forEach((type: any) => {
        console.log(`- ${type.name} (${type.kind})`);
      });
      console.log(`... and ${response.data.__schema.types.length - 10} more types`);
    } else {
      console.log('Unexpected response format:', response);
    }
  } catch (error: any) {
    console.error('Error connecting to GraphQL API:', error);
    if (error.errors) {
      error.errors.forEach((err: any) => {
        console.error('- Error:', err.message);
      });
    }
  }
}

testConnection();
