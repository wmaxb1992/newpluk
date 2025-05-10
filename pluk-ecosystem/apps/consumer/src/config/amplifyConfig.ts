// AWS Amplify configuration - IMPORTANT: You need to replace these placeholder values with your actual credentials
// To find your credentials:
// 1. Log in to AWS Console at https://console.aws.amazon.com
// 2. Navigate to Amazon Cognito
// 3. Select "User Pools" and choose your User Pool
// 4. User Pool ID is on the main Pool details page
// 5. App client ID is under the "App integration" tab

const amplifyConfig = {
  Auth: {
    // Region of your Cognito User Pool (e.g., us-east-1, us-west-2, etc.)
    region: 'us-east-1',
    
    // Amazon Cognito User Pool ID (format: region_alphanumericString)
    userPoolId: 'us-east-1_G6fi9TTYH',
    
    // Amazon Cognito Web Client ID
    userPoolWebClientId: '7qjk1mqg8cult0c5r0aofdv44m'
  },
  
  // You can add additional configurations as needed:
  // API: {
  //   GraphQL: {
  //     endpoint: 'https://xxxxxxxxxxxxxxxxxxxxxxxxxx.appsync-api.us-east-1.amazonaws.com/graphql',
  //     region: 'us-east-1',
  //     defaultAuthMode: 'userPool'
  //   }
  // }
};

export default amplifyConfig;
