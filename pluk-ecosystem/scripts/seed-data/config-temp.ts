import { Amplify } from 'aws-amplify';

// Load Amplify configuration
const amplifyConfig = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint: 'https://3tvmaj3hgzgsfh3vx5y7rsj5ta.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-qkh755tkrfdrbmrnzscejowsfy',
};

// Configure Amplify
export const configureAmplify = () => {
  Amplify.configure(amplifyConfig);
  console.log('Amplify configured successfully');
};

// Seed data configuration
export const seedConfig = {
  // Number of records to create
  userCount: 20,
  farmCount: 10,
  produceCategoryCount: 8,
  produceSubcategoryCount: 4, // per category
  produceTypeCount: 3, // per subcategory
  produceVarietyCount: 2, // per type
  inventoryBatchCount: 5, // per farm
  preHarvestListingCount: 3, // per inventory batch
  farmPostCount: 5, // per farm
  produceListingCount: 10, // per farm
  
  // Probabilities
  commentProbability: 0.7, // 70% chance of a comment on a post
  likeProbability: 0.5, // 50% chance of a like on a post
  followProbability: 0.3, // 30% chance of a user following a farm
  reservationProbability: 0.4, // 40% chance of a pre-harvest reservation
  
  // Image URLs (placeholder images for development)
  farmImageUrls: [
    'https://images.unsplash.com/photo-1500937386664-56d1dfef3854',
    'https://images.unsplash.com/photo-1500595046743-cd271d694d30',
    'https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5',
    'https://images.unsplash.com/photo-1516054575922-f0b8eeadec1a',
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef',
  ],
  produceImageUrls: [
    'https://images.unsplash.com/photo-1518843875459-f738682238a6',
    'https://images.unsplash.com/photo-1566842600175-97dca3c5ad8e',
    'https://images.unsplash.com/photo-1610348725531-843dff563e2c',
    'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
    'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716',
  ],
};
