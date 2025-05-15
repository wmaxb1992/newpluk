/**
 * Script to fix orphaned produce type references after removing duplicate subcategories
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

// Type definitions for GraphQL responses
interface SubcategoryResponse {
  listProduceSubcategories: {
    items: Subcategory[];
  };
}

interface ProduceTypeResponse {
  listProduceTypes: {
    items: ProduceType[];
  };
}

interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
}

interface ProduceType {
  id: string;
  name: string;
  subcategoryId: string;
}

// GraphQL Queries
const LIST_SUBCATEGORIES = /* GraphQL */ `
  query ListProduceSubcategories {
    listProduceSubcategories {
      items {
        id
        name
        categoryId
      }
    }
  }
`;

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

// GraphQL Mutation to update a produce type's subcategory
const UPDATE_PRODUCE_TYPE = /* GraphQL */ `
  mutation UpdateProduceType($input: UpdateProduceTypeInput!) {
    updateProduceType(input: $input) {
      id
      name
      subcategoryId
    }
  }
`;

async function fixOrphanedReferences() {
  try {
    // 1. Fetch all subcategories
    const subcategoriesResult = await client.graphql({
      query: LIST_SUBCATEGORIES
    }) as GraphQLResult<SubcategoryResponse>;
    
    const subcategories = subcategoriesResult.data?.listProduceSubcategories?.items || [];
    console.log(`Found ${subcategories.length} subcategories`);
    
    // Create a map of subcategory ids to validate against
    const validSubcategoryIds = new Set(subcategories.map(sub => sub.id));
    
    // Create a map of subcategory names for finding valid replacements
    const subcategoryNameMap = new Map<string, Subcategory[]>();
    subcategories.forEach(sub => {
      const name = sub.name.toLowerCase().trim();
      if (!subcategoryNameMap.has(name)) {
        subcategoryNameMap.set(name, []);
      }
      subcategoryNameMap.get(name)?.push(sub);
    });
    
    // 2. Fetch all produce types
    const produceTypesResult = await client.graphql({
      query: LIST_PRODUCE_TYPES
    }) as GraphQLResult<ProduceTypeResponse>;
    
    const produceTypes = produceTypesResult.data?.listProduceTypes?.items || [];
    console.log(`Found ${produceTypes.length} produce types`);
    
    // 3. Find produce types with orphaned subcategory references
    const orphanedProduceTypes = produceTypes.filter(type => 
      !validSubcategoryIds.has(type.subcategoryId)
    );
    
    console.log(`Found ${orphanedProduceTypes.length} produce types with orphaned subcategory references`);
    
    // Known mapping of deleted subcategory IDs to their replacements
    const replacementMap: Record<string, string> = {
      // From our previous operation, we know:
      'sc2': 'fafb8872-76a5-4226-aa41-72ee44ad4baf', // Leafy Greens
      'sc4': '67be79e4-e3b4-4434-949f-65a8652d8965', // Root Vegetables
    };
    
    // 4. Update each orphaned produce type
    let successCount = 0;
    let failureCount = 0;
    
    for (const type of orphanedProduceTypes) {
      const oldSubcategoryId = type.subcategoryId;
      const newSubcategoryId = replacementMap[oldSubcategoryId];
      
      if (!newSubcategoryId) {
        console.log(`No replacement found for subcategory ID: ${oldSubcategoryId} for produce type: ${type.name} (${type.id})`);
        failureCount++;
        continue;
      }
      
      console.log(`Updating produce type: ${type.name} (ID: ${type.id})`);
      console.log(`  Changing subcategory ID: ${oldSubcategoryId} -> ${newSubcategoryId}`);
      
      try {
        await client.graphql({
          query: UPDATE_PRODUCE_TYPE,
          variables: {
            input: {
              id: type.id,
              subcategoryId: newSubcategoryId
            }
          }
        });
        console.log(`  Successfully updated produce type: ${type.name}`);
        successCount++;
      } catch (error) {
        console.error(`  Failed to update produce type: ${type.name}`, error);
        failureCount++;
      }
    }
    
    console.log('\nSummary:');
    console.log(`Successfully updated ${successCount} produce types`);
    console.log(`Failed to update ${failureCount} produce types`);
    
  } catch (error) {
    console.error('Error fixing orphaned references:', error);
  }
}

// Run the script
fixOrphanedReferences().catch(error => {
  console.error('Script execution failed:', error);
}); 