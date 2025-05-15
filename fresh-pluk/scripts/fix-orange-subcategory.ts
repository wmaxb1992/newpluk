/**
 * Script to fix Orange produce type connections to the correct Citrus subcategory
 * This ensures that all Orange produce types show up under Citrus in the UI
 */

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import type { GraphQLResult } from '@aws-amplify/api-graphql';

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

// GraphQL Operations
const LIST_PRODUCE_TYPES = /* GraphQL */ `
  query ListProduceTypes {
    listProduceTypes {
      items {
        id
        name
        subcategoryId
      }
    }
  }
`;

const LIST_SUBCATEGORIES = /* GraphQL */ `
  query ListSubcategories {
    listProduceSubcategories {
      items {
        id
        name
        categoryId
      }
    }
  }
`;

const UPDATE_PRODUCE_TYPE = /* GraphQL */ `
  mutation UpdateProduceType($input: UpdateProduceTypeInput!) {
    updateProduceType(input: $input) {
      id
      name
      subcategoryId
    }
  }
`;

interface ProduceType {
  id: string;
  name: string;
  subcategoryId: string;
}

interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
}

interface ProduceTypeResponse {
  listProduceTypes: {
    items: ProduceType[];
  };
}

interface SubcategoryResponse {
  listProduceSubcategories: {
    items: Subcategory[];
  };
}

async function fixOrangeSubcategoryConnection() {
  try {
    // 1. Find all Orange produce types
    console.log('Searching for Orange produce types...');
    const typesResult = await client.graphql({
      query: LIST_PRODUCE_TYPES
    }) as GraphQLResult<ProduceTypeResponse>;
    
    const produceTypes = typesResult.data?.listProduceTypes?.items || [];
    
    // Find produce types with 'Orange' in the name (case insensitive)
    const orangeTypes = produceTypes.filter(type => 
      type.name.toLowerCase().includes('orange')
    );
    
    console.log(`Found ${orangeTypes.length} orange produce types:`);
    orangeTypes.forEach(orange => {
      console.log(`- ${orange.name} (ID: ${orange.id}, Current subcategoryId: ${orange.subcategoryId})`);
    });
    
    if (orangeTypes.length === 0) {
      console.log('No Orange produce types found. Nothing to fix.');
      return;
    }
    
    // 2. Find the Citrus subcategory
    console.log('\nSearching for Citrus subcategories...');
    const subcategoriesResult = await client.graphql({
      query: LIST_SUBCATEGORIES
    }) as GraphQLResult<SubcategoryResponse>;
    
    const subcategories = subcategoriesResult.data?.listProduceSubcategories?.items || [];
    
    // Find subcategories with 'Citrus' in the name (case insensitive)
    const citrusSubcategories = subcategories.filter(sub => 
      sub.name.toLowerCase().includes('citrus')
    );
    
    if (citrusSubcategories.length === 0) {
      console.log('No Citrus subcategories found. Cannot proceed with fix.');
      return;
    }
    
    console.log(`Found ${citrusSubcategories.length} citrus subcategories:`);
    citrusSubcategories.forEach(sub => {
      console.log(`- ${sub.name} (ID: ${sub.id}, Category ID: ${sub.categoryId})`);
    });
    
    // Use the first citrus subcategory found
    const citrusSubcategory = citrusSubcategories[0];
    console.log(`\nUsing subcategory "${citrusSubcategory.name}" (ID: ${citrusSubcategory.id}) for the connection fix.`);
    
    // 3. Update each Orange produce type to connect to the Citrus subcategory
    console.log('\nUpdating Orange produce types...');
    
    for (const orange of orangeTypes) {
      // Skip if already connected to a citrus subcategory
      if (citrusSubcategories.some(sub => sub.id === orange.subcategoryId)) {
        console.log(`Skipping ${orange.name} (ID: ${orange.id}): Already connected to a citrus subcategory.`);
        continue;
      }
      
      try {
        await client.graphql({
          query: UPDATE_PRODUCE_TYPE,
          variables: {
            input: {
              id: orange.id,
              subcategoryId: citrusSubcategory.id
            }
          }
        });
        
        console.log(`✅ Successfully updated "${orange.name}" (ID: ${orange.id}) to connect to citrus subcategory.`);
      } catch (error) {
        console.error(`❌ Failed to update "${orange.name}" (ID: ${orange.id}):`, error);
      }
    }
    
    console.log('\nConnection fix completed!');
    
  } catch (error) {
    console.error('Error in orange subcategory connection fix:', error);
  }
}

// Run the script
fixOrangeSubcategoryConnection().catch(error => {
  console.error('Script execution failed:', error);
}); 