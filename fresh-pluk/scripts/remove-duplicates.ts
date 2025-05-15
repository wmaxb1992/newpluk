/**
 * Script to identify and remove duplicate categories, subcategories, and produce types
 * in the Pluk database. For each entity type, it keeps one instance and removes duplicates.
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
interface CategoryResponse {
  listProduceCategories: {
    items: Category[];
  };
}

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

// GraphQL Queries
const LIST_CATEGORIES = /* GraphQL */ `
  query ListProduceCategories {
    listProduceCategories {
      items {
        id
        name
      }
    }
  }
`;

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

// GraphQL Mutations
const DELETE_CATEGORY = /* GraphQL */ `
  mutation DeleteProduceCategory($input: DeleteProduceCategoryInput!) {
    deleteProduceCategory(input: $input) {
      id
      name
    }
  }
`;

const DELETE_SUBCATEGORY = /* GraphQL */ `
  mutation DeleteProduceSubcategory($input: DeleteProduceSubcategoryInput!) {
    deleteProduceSubcategory(input: $input) {
      id
      name
    }
  }
`;

const DELETE_PRODUCE_TYPE = /* GraphQL */ `
  mutation DeleteProduceType($input: DeleteProduceTypeInput!) {
    deleteProduceType(input: $input) {
      id
      name
    }
  }
`;

// Type definitions
interface Category {
  id: string;
  name: string;
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

// Helper function to find duplicates
function findDuplicates<T>(items: T[], getKey: (item: T) => string): Record<string, T[]> {
  const map: Record<string, T[]> = {};
  
  items.forEach(item => {
    const key = getKey(item);
    if (!map[key]) {
      map[key] = [];
    }
    map[key].push(item);
  });
  
  // Filter to keep only entries with duplicates
  return Object.fromEntries(
    Object.entries(map).filter(([_, arr]) => arr.length > 1)
  );
}

// Function to remove duplicates from categories
async function removeDuplicateCategories() {
  try {
    // Fetch all categories
    const result = await client.graphql({
      query: LIST_CATEGORIES
    }) as GraphQLResult<CategoryResponse>;
    
    const categories = result.data?.listProduceCategories?.items || [];
    
    console.log(`Found ${categories.length} categories`);
    
    // Find duplicates by name
    const duplicates = findDuplicates(categories, cat => cat.name.toLowerCase().trim());
    
    if (Object.keys(duplicates).length === 0) {
      console.log('No duplicate categories found');
      return;
    }
    
    console.log(`Found ${Object.keys(duplicates).length} duplicate category names`);
    
    // Process each set of duplicates
    for (const [name, items] of Object.entries(duplicates)) {
      console.log(`\nProcessing duplicate category: ${name}`);
      console.log(`Found ${items.length} instances with IDs: ${items.map(item => item.id).join(', ')}`);
      
      // Keep the first one, delete the rest
      const [keeper, ...duplicatesToRemove] = items;
      console.log(`Keeping ID: ${keeper.id}`);
      
      for (const dupe of duplicatesToRemove) {
        console.log(`Deleting category ID: ${dupe.id}`);
        try {
          await client.graphql({
            query: DELETE_CATEGORY,
            variables: { input: { id: dupe.id } }
          });
          console.log(`Successfully deleted category ID: ${dupe.id}`);
        } catch (error) {
          console.error(`Failed to delete category ID: ${dupe.id}`, error);
        }
      }
    }
    
    console.log('\nCompleted processing duplicate categories');
  } catch (error) {
    console.error('Error removing duplicate categories:', error);
  }
}

// Function to remove duplicates from subcategories
async function removeDuplicateSubcategories() {
  try {
    // Fetch all subcategories
    const result = await client.graphql({
      query: LIST_SUBCATEGORIES
    }) as GraphQLResult<SubcategoryResponse>;
    
    const subcategories = result.data?.listProduceSubcategories?.items || [];
    
    console.log(`Found ${subcategories.length} subcategories`);
    
    // Find duplicates by name within the same category
    const duplicates = findDuplicates(
      subcategories, 
      subcat => `${subcat.categoryId}:${subcat.name.toLowerCase().trim()}`
    );
    
    if (Object.keys(duplicates).length === 0) {
      console.log('No duplicate subcategories found');
      return;
    }
    
    console.log(`Found ${Object.keys(duplicates).length} duplicate subcategory entries`);
    
    // Process each set of duplicates
    for (const [key, items] of Object.entries(duplicates)) {
      const [categoryId, name] = key.split(':');
      console.log(`\nProcessing duplicate subcategory: ${name} in category ${categoryId}`);
      console.log(`Found ${items.length} instances with IDs: ${items.map(item => item.id).join(', ')}`);
      
      // Keep the first one, delete the rest
      const [keeper, ...duplicatesToRemove] = items;
      console.log(`Keeping ID: ${keeper.id}`);
      
      for (const dupe of duplicatesToRemove) {
        console.log(`Deleting subcategory ID: ${dupe.id}`);
        try {
          await client.graphql({
            query: DELETE_SUBCATEGORY,
            variables: { input: { id: dupe.id } }
          });
          console.log(`Successfully deleted subcategory ID: ${dupe.id}`);
        } catch (error) {
          console.error(`Failed to delete subcategory ID: ${dupe.id}`, error);
        }
      }
    }
    
    console.log('\nCompleted processing duplicate subcategories');
  } catch (error) {
    console.error('Error removing duplicate subcategories:', error);
  }
}

// Function to remove duplicates from produce types
async function removeDuplicateProduceTypes() {
  try {
    // Fetch all produce types
    const result = await client.graphql({
      query: LIST_PRODUCE_TYPES
    }) as GraphQLResult<ProduceTypeResponse>;
    
    const produceTypes = result.data?.listProduceTypes?.items || [];
    
    console.log(`Found ${produceTypes.length} produce types`);
    
    // Find duplicates by name within the same subcategory
    const duplicates = findDuplicates(
      produceTypes, 
      type => `${type.subcategoryId}:${type.name.toLowerCase().trim()}`
    );
    
    if (Object.keys(duplicates).length === 0) {
      console.log('No duplicate produce types found');
      return;
    }
    
    console.log(`Found ${Object.keys(duplicates).length} duplicate produce type entries`);
    
    // Process each set of duplicates
    for (const [key, items] of Object.entries(duplicates)) {
      const [subcategoryId, name] = key.split(':');
      console.log(`\nProcessing duplicate produce type: ${name} in subcategory ${subcategoryId}`);
      console.log(`Found ${items.length} instances with IDs: ${items.map(item => item.id).join(', ')}`);
      
      // Keep the first one, delete the rest
      const [keeper, ...duplicatesToRemove] = items;
      console.log(`Keeping ID: ${keeper.id}`);
      
      for (const dupe of duplicatesToRemove) {
        console.log(`Deleting produce type ID: ${dupe.id}`);
        try {
          await client.graphql({
            query: DELETE_PRODUCE_TYPE,
            variables: { input: { id: dupe.id } }
          });
          console.log(`Successfully deleted produce type ID: ${dupe.id}`);
        } catch (error) {
          console.error(`Failed to delete produce type ID: ${dupe.id}`, error);
        }
      }
    }
    
    console.log('\nCompleted processing duplicate produce types');
  } catch (error) {
    console.error('Error removing duplicate produce types:', error);
  }
}

// Main function to run the duplicate removal process
async function main() {
  console.log('Starting duplicate removal process...');
  
  // First remove duplicate categories
  console.log('\n=== REMOVING DUPLICATE CATEGORIES ===');
  await removeDuplicateCategories();
  
  // Then remove duplicate subcategories
  console.log('\n=== REMOVING DUPLICATE SUBCATEGORIES ===');
  await removeDuplicateSubcategories();
  
  // Finally remove duplicate produce types
  console.log('\n=== REMOVING DUPLICATE PRODUCE TYPES ===');
  await removeDuplicateProduceTypes();
  
  console.log('\nDuplicate removal process completed');
}

// Run the script
main().catch(error => {
  console.error('Error running duplicate removal script:', error);
}); 