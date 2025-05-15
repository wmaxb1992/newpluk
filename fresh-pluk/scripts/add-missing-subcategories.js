const { Amplify } = require('aws-amplify');
const { generateClient } = require('aws-amplify/api');

// Configure Amplify
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://7pmhulha6vfsxhc6iqghyux52e.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-tnt5itq4gvb5ddu3ynaw6t42mi'
    }
  }
});

const client = generateClient();

// The ID for the vegetables category
const VEGETABLES_CATEGORY_ID = '96f9cc0f-c8b1-4dba-8de9-f2612fedf626';

// The missing subcategories to create
const missingSubcategories = [
  {
    id: 'sc1',
    name: 'Tomatoes',
    categoryId: VEGETABLES_CATEGORY_ID,
    description: 'Various tomato varieties for cooking and fresh eating'
  },
  {
    id: 'sc2',
    name: 'Leafy Greens',
    categoryId: VEGETABLES_CATEGORY_ID,
    description: 'Nutrient-rich leafy green vegetables'
  },
  {
    id: 'sc3',
    name: 'Peppers',
    categoryId: VEGETABLES_CATEGORY_ID,
    description: 'Sweet and hot peppers in various colors'
  },
  {
    id: 'sc4',
    name: 'Root Vegetables',
    categoryId: VEGETABLES_CATEGORY_ID,
    description: 'Underground vegetables including tubers, bulbs, and true roots'
  }
];

const CREATE_SUBCATEGORY = /* GraphQL */ `
  mutation CreateProduceSubcategory($input: CreateProduceSubcategoryInput!) {
    createProduceSubcategory(input: $input) {
      id
      name
      categoryId
      description
      createdAt
      updatedAt
    }
  }
`;

async function addMissingSubcategories() {
  console.log('=== ADDING MISSING SUBCATEGORIES ===\n');
  
  for (const subcategory of missingSubcategories) {
    try {
      console.log(`Creating subcategory: ${subcategory.name} (ID: ${subcategory.id})`);
      
      const response = await client.graphql({
        query: CREATE_SUBCATEGORY,
        variables: {
          input: subcategory
        },
        authMode: 'apiKey'
      });
      
      console.log(`✅ Successfully created subcategory: ${subcategory.name}`);
    } catch (error) {
      console.error(`❌ Error creating subcategory ${subcategory.name}:`, error);
    }
  }
  
  console.log('\nAll subcategories processed. Please restart your app to see the changes.');
}

addMissingSubcategories(); 