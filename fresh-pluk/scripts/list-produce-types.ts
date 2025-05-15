import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

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

const LIST_PRODUCE_TYPES = /* GraphQL */ `
  query ListProduceTypes {
    listProduceTypes(limit: 1000) {
      items {
        id
        name
        subcategoryId
        icon
        image
      }
    }
  }
`;

const LIST_SUBCATEGORIES = /* GraphQL */ `
  query ListSubcategories {
    listProduceSubcategories(limit: 100) {
      items {
        id
        name
        categoryId
      }
    }
  }
`;

async function listProduceTypes() {
  try {
    // Fetch all produce types
    const typesResponse = await client.graphql({
      query: LIST_PRODUCE_TYPES
    });
    const types = typesResponse.data.listProduceTypes.items;
    
    // Fetch all subcategories
    const subcategoriesResponse = await client.graphql({
      query: LIST_SUBCATEGORIES
    });
    const subcategories = subcategoriesResponse.data.listProduceSubcategories.items;
    
    // Create a map of subcategory IDs to names
    const subcategoryMap = {};
    subcategories.forEach(sub => {
      subcategoryMap[sub.id] = sub.name;
    });
    
    // Group produce types by subcategory
    const typesBySubcategory = {};
    types.forEach(type => {
      const subcategoryId = type.subcategoryId;
      if (!typesBySubcategory[subcategoryId]) {
        typesBySubcategory[subcategoryId] = [];
      }
      typesBySubcategory[subcategoryId].push(type);
    });
    
    // Print out the results
    console.log('=== PRODUCE TYPES BY SUBCATEGORY ===\n');
    
    Object.keys(typesBySubcategory).forEach(subcategoryId => {
      const subcategoryName = subcategoryMap[subcategoryId] || 'Unknown Subcategory';
      const typesInSubcategory = typesBySubcategory[subcategoryId];
      
      console.log(`Subcategory: ${subcategoryName} (ID: ${subcategoryId})`);
      console.log(`Found ${typesInSubcategory.length} produce types:`);
      
      typesInSubcategory.forEach(type => {
        console.log(`  - ${type.name} (ID: ${type.id})`);
      });
      
      console.log(''); // Empty line for readability
    });
    
    // Look specifically for produce types with subcategoryId 'sc1', 'sc2', 'sc3', 'sc4'
    console.log('=== CHECKING FOR SPECIFIC SUBCATEGORY IDs ===\n');
    ['sc1', 'sc2', 'sc3', 'sc4'].forEach(scId => {
      const typesInSc = types.filter(type => type.subcategoryId === scId);
      console.log(`Subcategory ID '${scId}': Found ${typesInSc.length} produce types`);
      if (typesInSc.length > 0) {
        typesInSc.forEach(type => {
          console.log(`  - ${type.name} (ID: ${type.id})`);
        });
      }
      console.log('');
    });
    
  } catch (error) {
    console.error('Error listing produce types:', error);
  }
}

listProduceTypes(); 