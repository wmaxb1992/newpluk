import { Amplify } from '@aws-amplify/core';
import { generateClient } from '@aws-amplify/api';
import NetInfo from '@react-native-community/netinfo';

const awsConfig = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint: 'https://7pmhulha6vfsxhc6iqghyux52e.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-tnt5itq4gvb5ddu3ynaw6t42mi',
};

// Initialize with null, will be set after configuration
let graphqlClient: any = null;

export const configureAmplify = async () => {
  try {
    // Check network state before configuring
    const netInfo = await NetInfo.fetch();
    console.log('Current network state:', netInfo.isConnected);

    if (!netInfo.isConnected) {
      throw new Error('No network connection available');
    }

    // Configure Amplify with explicit API settings
    const config = {
      ...awsConfig,
      // Explicitly set API configuration
      aws_appsync_graphqlEndpoint: awsConfig.aws_appsync_graphqlEndpoint,
      aws_appsync_region: awsConfig.aws_appsync_region,
      aws_appsync_authenticationType: awsConfig.aws_appsync_authenticationType,
      aws_appsync_apiKey: awsConfig.aws_appsync_apiKey,
    };

    Amplify.configure(config);

    // Generate the client after configuration with explicit authMode
    graphqlClient = generateClient({
      authMode: 'apiKey',
      apiKey: config.aws_appsync_apiKey
    });

    // Test the configuration
    console.log('Amplify configured with:', {
      endpoint: config.aws_appsync_graphqlEndpoint,
      region: config.aws_appsync_region,
      authType: config.aws_appsync_authenticationType,
      hasApiKey: !!config.aws_appsync_apiKey
    });

    // Subscribe to network state changes
    NetInfo.addEventListener(state => {
      console.log('Network state changed:', state.isConnected);
    });

    return graphqlClient;
  } catch (error) {
    console.error('Failed to configure Amplify:', error);
    throw error;
  }
};

// Export a function to get the client
export const getClient = () => {
  if (!graphqlClient) {
    throw new Error('Amplify must be configured before using the client');
  }
  return graphqlClient;
};
