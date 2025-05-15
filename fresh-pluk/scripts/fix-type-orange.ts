/**
 * Script to fix the type_orange produce type connection to the correct Citrus subcategory
 * This ensures that all orange types show up under Citrus in the UI
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

async function fixTypeOrangeConnection() {
  try {
    // 1. Find the type_orange produce type
    console.log('Searching for type_orange produce type...');
    const typesResult = await client.graphql({
      query: LIST_PRODUCE_TYPES
    }) as GraphQLResult<ProduceTypeResponse>;
    
    const produceTypes = typesResult.data?.listProduceTypes?.items || [];
    
    // Find produce type with id type_orange
    const typeOrange = produceTypes.find(type => type.id === 'type_orange');
    
    if (!typeOrange) {
      console.log('The type_orange produce type was not found. Nothing to fix.');
      return;
    }
    
    console.log(`Found type_orange: ${typeOrange.name} (Current subcategoryId: ${typeOrange.subcategoryId})`);
    
    // 2. Find the Citrus subcategory
    console.log('\nSearching for Citrus subcategory...');
    const subcategoriesResult = await client.graphql({
      query: LIST_SUBCATEGORIES
    }) as GraphQLResult<SubcategoryResponse>;
    
    const subcategories = subcategoriesResult.data?.listProduceSubcategories?.items || [];
    
    // Find subcategories with 'Citrus' in the name (case insensitive)
    const citrusSubcategory = subcategories.find(sub => 
      sub.name.toLowerCase().includes('citrus')
    );
    
    if (!citrusSubcategory) {
      console.log('No Citrus subcategory found. Cannot proceed with fix.');
      return;
    }
    
    console.log(`Found Citrus subcategory: ${citrusSubcategory.name} (ID: ${citrusSubcategory.id})`);
    
    // 3. Check if already connected to the Citrus subcategory
    if (typeOrange.subcategoryId === citrusSubcategory.id) {
      console.log('\nThe type_orange produce type is already connected to the Citrus subcategory. No fix needed.');
      return;
    }
    
    // 4. Update type_orange to connect to the Citrus subcategory
    console.log('\nUpdating type_orange to connect to the Citrus subcategory...');
    
    try {
      await client.graphql({
        query: UPDATE_PRODUCE_TYPE,
        variables: {
          input: {
            id: typeOrange.id,
            subcategoryId: citrusSubcategory.id
          }
        }
      });
      
      console.log(`✅ Successfully updated "${typeOrange.name}" (ID: ${typeOrange.id}) to connect to the Citrus subcategory.`);
    } catch (error) {
      console.error(`❌ Failed to update "${typeOrange.name}" (ID: ${typeOrange.id}):`, error);
    }
    
    console.log('\nConnection fix completed!');
    
  } catch (error) {
    console.error('Error in type_orange connection fix:', error);
  }
}

// Run the script
fixTypeOrangeConnection().catch(error => {
  console.error('Script execution failed:', error);
}); 