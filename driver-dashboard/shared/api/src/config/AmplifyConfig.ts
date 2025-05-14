import { Amplify } from 'aws-amplify';
import { cognitoUserPoolsTokenProvider } from '@aws-amplify/backend-auth';
import { generateClient } from '@aws-amplify/api';

export const configureAmplify = () => {
  Amplify.configure({
    API: {
      GraphQL: {
        endpoint: process.env.GRAPHQL_ENDPOINT,
        region: process.env.AWS_REGION,
        defaultAuthMode: 'userPool',
      },
    },
    Auth: {
      Cognito: {
        userPoolId: process.env.USER_POOL_ID,
        userPoolClientId: process.env.USER_POOL_CLIENT_ID,
      },
    },
  });

  // Configure auth provider for GraphQL client
  cognitoUserPoolsTokenProvider.setKeyValueStorage({
    sync: true,
    getItem: (key: string) => localStorage.getItem(key),
    setItem: (key: string, value: string) => localStorage.setItem(key, value),
    removeItem: (key: string) => localStorage.removeItem(key),
  });

  // Create and export the GraphQL client
  export const client = generateClient();
};