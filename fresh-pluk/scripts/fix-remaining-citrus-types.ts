/**
 * Script to fix all remaining citrus produce types to the correct Citrus subcategory
 * This ensures that all citrus produce types show up under Citrus in the UI
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

async function fixCitrusProduceTypes() {
  try {
    // 1. Find all citrus produce types
    console.log('Loading all produce types...');
    const typesResult = await client.graphql({
      query: LIST_PRODUCE_TYPES
    }) as GraphQLResult<ProduceTypeResponse>;
    
    const produceTypes = typesResult.data?.listProduceTypes?.items || [];
    
    // 2. Find the Citrus subcategory
    console.log('Searching for Citrus subcategories...');
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
    
    // 3. Find all citrus-related produce types
    const citrusTerms = ['orange', 'lemon', 'lime', 'grapefruit', 'citrus', 'tangerine', 'mandarin', 'kumquat', 'citron', 'pomelo'];
    const citrusTypes = produceTypes.filter(type => 
      citrusTerms.some(term => type.name.toLowerCase().includes(term))
    );
    
    console.log(`\nFound ${citrusTypes.length} citrus-related produce types:`);
    citrusTypes.forEach(type => {
      console.log(`- ${type.name} (ID: ${type.id}, Current subcategoryId: ${type.subcategoryId})`);
    });
    
    if (citrusTypes.length === 0) {
      console.log('No citrus produce types found. Nothing to fix.');
      return;
    }
    
    // 4. Update each citrus produce type to connect to the Citrus subcategory
    console.log('\nUpdating citrus produce types...');
    
    for (const type of citrusTypes) {
      // Skip if already connected to a citrus subcategory
      if (citrusSubcategories.some(sub => sub.id === type.subcategoryId)) {
        console.log(`Skipping ${type.name} (ID: ${type.id}): Already connected to a citrus subcategory.`);
        continue;
      }
      
      try {
        await client.graphql({
          query: UPDATE_PRODUCE_TYPE,
          variables: {
            input: {
              id: type.id,
              subcategoryId: citrusSubcategory.id
            }
          }
        });
        
        console.log(`✅ Successfully updated "${type.name}" (ID: ${type.id}) to connect to citrus subcategory.`);
      } catch (error) {
        console.error(`❌ Failed to update "${type.name}" (ID: ${type.id}):`, error);
      }
    }
    
    console.log('\nConnection fix completed!');
    
  } catch (error) {
    console.error('Error in citrus produce types connection fix:', error);
  }
}

// Run the script
fixCitrusProduceTypes().catch(error => {
  console.error('Script execution failed:', error);
}); 