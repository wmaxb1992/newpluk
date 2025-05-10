import { Amplify, API, graphqlOperation } from 'aws-amplify';
import fs from 'fs';
import path from 'path';

// Function to extract API details from amplify-meta.json
function getApiDetails() {
  try {
    const metaFilePath = path.join(__dirname, '../amplify/backend/amplify-meta.json');
    if (fs.existsSync(metaFilePath)) {
      const meta = JSON.parse(fs.readFileSync(metaFilePath, 'utf8'));
      
      if (meta.api && Object.keys(meta.api).length > 0) {
        const apiName = Object.keys(meta.api)[0];
        const apiDetails = meta.api[apiName];
        
        return {
          endpoint: apiDetails.output.GraphQLAPIEndpointOutput,
          apiKey: apiDetails.output.GraphQLAPIKeyOutput,
          region: meta.providers.awscloudformation.Region || 'us-east-1'
        };
      }
    }
    
    console.log('No API configuration found in amplify-meta.json');
    return null;
  } catch (error) {
    console.error('Error reading API details:', error);
    return null;
  }
}

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
async function verifyApiConnection() {
  try {
    const apiDetails = getApiDetails();
    
    if (!apiDetails) {
      console.log('Could not find API details. Please make sure the API is properly configured.');
      return false;
    }
    
    // Configure Amplify with the extracted API details
    const config = {
      aws_project_region: apiDetails.region,
      aws_appsync_graphqlEndpoint: apiDetails.endpoint,
      aws_appsync_region: apiDetails.region,
      aws_appsync_authenticationType: 'API_KEY',
      aws_appsync_apiKey: apiDetails.apiKey,
    };
    
    Amplify.configure(config);
    
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
      
      // Save the API details to a config file for easy access
      const configOutput = `
// API Configuration - Generated on ${new Date().toISOString()}
export const API_CONFIG = {
  GRAPHQL_ENDPOINT: "${config.aws_appsync_graphqlEndpoint}",
  GRAPHQL_API_KEY: "${config.aws_appsync_apiKey}",
  REGION: "${config.aws_appsync_region}"
};
`;
      fs.writeFileSync(path.join(__dirname, 'api-config.ts'), configOutput);
      console.log('\nAPI configuration saved to scripts/api-config.ts');
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

// Run the verification
verifyApiConnection()
  .then(success => {
    if (!success) {
      process.exit(1);
    }
  })
  .catch(error => {
    console.error('Unexpected error:', error);
    process.exit(1);
  });
