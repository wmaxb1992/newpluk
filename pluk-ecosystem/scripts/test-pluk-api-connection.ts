import { Amplify, API, graphqlOperation } from 'aws-amplify';

// Configure Amplify with hardcoded values from config.ts
const config = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint: 'https://7pmhulha6vfsxhc6iqghyux52e.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-tnt5itq4gvb5ddu3ynaw6t42mi',
};

Amplify.configure(config);

// GraphQL query to get the schema types
const listTypes = /* GraphQL */ `
  query IntrospectionQuery {
    __schema {
      types {
        name
        kind
        description
      }
    }
  }
`;

// Function to test the API connection
async function testApiConnection() {
  try {
    console.log('Testing API connection...');
    console.log(`GraphQL Endpoint: ${config.aws_appsync_graphqlEndpoint}`);
    
    // Execute the introspection query
    const result: any = await API.graphql(graphqlOperation(listTypes));
    
    // Extract the types from the result
    const types = result.data.__schema.types;
    
    // Filter for OBJECT types only (excluding internal types)
    const objectTypes = types.filter(
      (type: any) => type.kind === 'OBJECT' && !type.name.startsWith('__')
    );
    
    console.log('\nAvailable model types in the schema:');
    objectTypes.forEach((type: any) => {
      console.log(`- ${type.name}`);
    });
    
    // Check for specific Pluk app types
    const plukTypes = ['User', 'Farm', 'ProduceCategory', 'ProduceVariety', 'InventoryBatch', 'ProduceListing'];
    const foundPlukTypes = plukTypes.filter(typeName => 
      objectTypes.some((type: any) => type.name === typeName)
    );
    
    if (foundPlukTypes.length > 0) {
      console.log('\nFound Pluk app types:');
      foundPlukTypes.forEach(typeName => {
        console.log(`- ${typeName}`);
      });
      console.log('\nAPI connection successful! The Pluk app schema is available.');
    } else {
      console.log('\nWarning: No Pluk app specific types found in the schema.');
      console.log('The API connection works, but the schema might not be the Pluk app schema.');
    }
    
    return true;
  } catch (error) {
    console.error('Error testing API connection:', error);
    return false;
  }
}

// Run the test
testApiConnection()
  .then(success => {
    if (!success) {
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
  });
