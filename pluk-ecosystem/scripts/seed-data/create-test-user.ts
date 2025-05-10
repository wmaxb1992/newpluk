import { Amplify } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';
import { API, graphqlOperation } from 'aws-amplify';

// Configure Amplify
const amplifyConfig = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint: 'https://7pmhulha6vfsxhc6iqghyux52e.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-tnt5itq4gvb5ddu3ynaw6t42mi',
};

// Configure Amplify
Amplify.configure(amplifyConfig);
console.log('Amplify configured successfully');

// GraphQL mutation for creating a user
const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      name
      role
      createdAt
      updatedAt
    }
  }
`;

// Create a test user
const createTestUser = async () => {
  try {
    console.log('Creating test user...');
    
    const userData = {
      id: uuidv4(),
      email: 'test-farmer@example.com',
      name: 'Test Farmer',
      role: 'FARMER'
    };
    
    console.log('User data:', userData);
    
    const response = await API.graphql(graphqlOperation(createUser, {
      input: userData
    }));
    
    console.log('Response:', JSON.stringify(response, null, 2));
    console.log('Test user created successfully!');
  } catch (error) {
    console.error('Error creating test user:', error);
    console.error('Error details:', JSON.stringify(error, null, 2));
  }
};

// Run the function
createTestUser();
