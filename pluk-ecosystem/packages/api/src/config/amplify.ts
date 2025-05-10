import { Amplify } from 'aws-amplify';

// Initialize Amplify with your AWS AppSync and Cognito configuration
export const configureAmplify = (config: {
  region: string;
  userPoolId: string;
  userPoolWebClientId: string;
  identityPoolId?: string;
  appsyncGraphqlEndpoint: string;
}) => {
  Amplify.configure({
    Auth: {
      region: config.region,
      userPoolId: config.userPoolId,
      userPoolWebClientId: config.userPoolWebClientId,
      identityPoolId: config.identityPoolId,
    },
    API: {
      GraphQL: {
        endpoint: config.appsyncGraphqlEndpoint,
        region: config.region,
        defaultAuthMode: 'userPool',
        apiKey: undefined,
      },
    },
  });
};

// Default configuration that can be overridden in the app
export const defaultAmplifyConfig = {
  region: 'us-east-1', // Default AWS region
  userPoolId: process.env.COGNITO_USER_POOL_ID || '',
  userPoolWebClientId: process.env.COGNITO_USER_POOL_WEB_CLIENT_ID || '',
  identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID,
  appsyncGraphqlEndpoint: process.env.APPSYNC_GRAPHQL_ENDPOINT || '',
};
