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

// Query to check for Pluk app specific types
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

async function testPlukApi() {
  try {
    console.log('Testing connection to Pluk GraphQL API...');
    const response = await API.graphql(graphqlOperation(testQuery));
    console.log('Connection successful!');
    
    // Check if the response has the expected structure
    if (response && 
        typeof response === 'object' && 
        'data' in response && 
        response.data && 
        '__schema' in response.data) {
      
      const types = response.data.__schema.types;
      
      // Look for Pluk-specific types
      const plukTypes = [
        'User', 'Farm', 'ProduceCategory', 'ProduceVariety', 
        'InventoryBatch', 'ProduceListing', 'Order'
      ];
      
      console.log('\nChecking for Pluk app specific types:');
      
      const foundTypes = plukTypes.filter(typeName => 
        types.some((t: any) => t.name === typeName)
      );
      
      const missingTypes = plukTypes.filter(typeName => 
        !types.some((t: any) => t.name === typeName)
      );
      
      if (foundTypes.length > 0) {
        console.log('\n✅ Found Pluk types:');
        foundTypes.forEach(type => console.log(`- ${type}`));
      }
      
      if (missingTypes.length > 0) {
        console.log('\n❌ Missing Pluk types:');
        missingTypes.forEach(type => console.log(`- ${type}`));
      }
      
      console.log('\nAll available types (first 20):');
      types.slice(0, 20).forEach((type: any) => {
        console.log(`- ${type.name} (${type.kind})`);
      });
      console.log(`... and ${types.length - 20} more types`);
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

testPlukApi();
