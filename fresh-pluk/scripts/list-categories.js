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

const LIST_CATEGORIES = /* GraphQL */ `
  query ListCategories {
    listProduceCategories(limit: 100) {
      items {
        id
        name
        description
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

async function listCategories() {
  try {
    // Fetch all categories
    const categoriesResponse = await client.graphql({
      query: LIST_CATEGORIES
    });
    const categories = categoriesResponse.data.listProduceCategories.items;
    
    // Fetch all subcategories
    const subcategoriesResponse = await client.graphql({
      query: LIST_SUBCATEGORIES
    });
    const subcategories = subcategoriesResponse.data.listProduceSubcategories.items;
    
    // Create a map of category IDs to names
    const categoryMap = {};
    categories.forEach(cat => {
      categoryMap[cat.id] = cat.name;
    });
    
    // Print out all categories
    console.log('=== ALL CATEGORIES ===\n');
    categories.forEach(cat => {
      console.log(`Category: ${cat.name} (ID: ${cat.id})`);
      console.log(`Description: ${cat.description || 'N/A'}`);
      console.log(''); // Empty line for readability
    });
    
    // Group subcategories by category
    const subcategoriesByCategory = {};
    subcategories.forEach(sub => {
      const categoryId = sub.categoryId;
      if (!subcategoriesByCategory[categoryId]) {
        subcategoriesByCategory[categoryId] = [];
      }
      subcategoriesByCategory[categoryId].push(sub);
    });
    
    // Print out subcategories by category
    console.log('=== SUBCATEGORIES BY CATEGORY ===\n');
    
    Object.keys(subcategoriesByCategory).forEach(categoryId => {
      const categoryName = categoryMap[categoryId] || 'Unknown Category';
      const subsInCategory = subcategoriesByCategory[categoryId];
      
      console.log(`Category: ${categoryName} (ID: ${categoryId})`);
      console.log(`Found ${subsInCategory.length} subcategories:`);
      
      subsInCategory.forEach(sub => {
        console.log(`  - ${sub.name} (ID: ${sub.id})`);
      });
      
      console.log(''); // Empty line for readability
    });
    
    // Look specifically for sc1, sc2, sc3, sc4 subcategories
    console.log('=== CHECKING SPECIFIC SUBCATEGORY IDs ===\n');
    ['sc1', 'sc2', 'sc3', 'sc4'].forEach(scId => {
      const subcategory = subcategories.find(sub => sub.id === scId);
      if (subcategory) {
        const categoryId = subcategory.categoryId;
        const categoryName = categoryMap[categoryId] || 'Unknown Category';
        console.log(`Subcategory ID '${scId}' (${subcategory.name}) belongs to category: ${categoryName} (ID: ${categoryId})`);
      } else {
        console.log(`Subcategory ID '${scId}' not found in database`);
      }
    });
    
  } catch (error) {
    console.error('Error listing categories:', error);
  }
}

listCategories(); 