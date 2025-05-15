/**
 * Script to seed additional produce types extracted from varieties file
 * This ensures we have the necessary types before seeding varieties
 */

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import type { GraphQLResult } from '@aws-amplify/api-graphql';
import * as fs from 'fs';
import * as readline from 'readline';

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

const CREATE_PRODUCE_TYPE = /* GraphQL */ `
  mutation CreateProduceType($input: CreateProduceTypeInput!) {
    createProduceType(input: $input) {
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

// Map of produce type to subcategory id
const typeToSubcategoryMap: { [type: string]: string } = {
  'Orange': 'fruits-citrus',  // Assuming this ID for Citrus subcategory
  'Lemon': 'fruits-citrus',   // Assuming this ID for Citrus subcategory
  // Add more mappings as needed
};

async function extractVarietyTypesFromFile(filePath: string): Promise<Set<string>> {
  const types = new Set<string>();
  
  try {
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    
    for await (const line of rl) {
      // Look for lines containing the variety name
      const nameMatch = line.match(/name:\s*"([^"]+)"/);
      if (nameMatch && nameMatch[1]) {
        const varietyName = nameMatch[1];
        // Extract produce type from variety name
        const parts = varietyName.split(' ');
        if (parts.length >= 2) {
          // Last word is usually the produce type
          const produceType = parts[parts.length - 1];
          types.add(produceType);
        }
      }
    }
    
    return types;
  } catch (error) {
    console.error('Error extracting types from file:', error);
    return types;
  }
}

async function checkAndCreateProduceTypes(filePath: string) {
  try {
    // 1. Extract unique produce types from varieties file
    console.log('Extracting produce types from varieties file...');
    const varietyTypes = await extractVarietyTypesFromFile(filePath);
    console.log(`Found ${varietyTypes.size} unique produce types in the varieties file`);
    
    // 2. Fetch existing produce types from database
    console.log('Fetching existing produce types from database...');
    const typesResult = await client.graphql({
      query: LIST_PRODUCE_TYPES
    }) as GraphQLResult<ProduceTypeResponse>;
    
    const existingTypes = typesResult.data?.listProduceTypes?.items || [];
    const existingTypeNames = new Set(existingTypes.map(t => t.name.toLowerCase()));
    
    console.log(`Found ${existingTypeNames.size} existing produce types in the database`);
    
    // 3. Fetch all subcategories
    console.log('Fetching subcategories from database...');
    const subcategoriesResult = await client.graphql({
      query: LIST_SUBCATEGORIES
    }) as GraphQLResult<SubcategoryResponse>;
    
    const subcategories = subcategoriesResult.data?.listProduceSubcategories?.items || [];
    
    // Create a map of subcategory names to IDs
    const subcategoryMap: { [name: string]: string } = {};
    subcategories.forEach(sub => {
      subcategoryMap[sub.name.toLowerCase()] = sub.id;
    });
    
    console.log(`Found ${subcategories.length} subcategories in the database`);
    
    // 4. Create missing produce types
    const missingTypes: string[] = [];
    
    for (const type of varietyTypes) {
      if (!existingTypeNames.has(type.toLowerCase())) {
        missingTypes.push(type);
      }
    }
    
    console.log(`Found ${missingTypes.length} missing produce types to create`);
    
    if (missingTypes.length === 0) {
      console.log('All produce types already exist. No new types need to be created.');
      return;
    }
    
    // Default subcategory IDs for common produce types
    const defaultSubcategoryId = subcategories.length > 0 ? subcategories[0].id : null;
    
    // Create each missing type
    let successCount = 0;
    let failureCount = 0;
    
    for (const typeName of missingTypes) {
      console.log(`Creating produce type: ${typeName}`);
      
      // Determine subcategory ID
      let subcategoryId = typeToSubcategoryMap[typeName];
      
      if (!subcategoryId) {
        // Try to intelligently guess based on subcategory names
        for (const [subName, subId] of Object.entries(subcategoryMap)) {
          if (subName.includes(typeName.toLowerCase())) {
            subcategoryId = subId;
            break;
          }
        }
      }
      
      // If still not found, use the default
      if (!subcategoryId && defaultSubcategoryId) {
        subcategoryId = defaultSubcategoryId;
        console.log(`Using default subcategory for ${typeName}`);
      }
      
      if (!subcategoryId) {
        console.error(`Cannot create type ${typeName}: No subcategory ID available`);
        failureCount++;
        continue;
      }
      
      try {
        await client.graphql({
          query: CREATE_PRODUCE_TYPE,
          variables: {
            input: {
              name: typeName,
              subcategoryId: subcategoryId,
              description: `${typeName} produce type`
            }
          }
        });
        
        console.log(`Successfully created produce type: ${typeName}`);
        successCount++;
      } catch (error) {
        console.error(`Failed to create produce type: ${typeName}`, error);
        failureCount++;
      }
    }
    
    console.log('\n=== PRODUCE TYPE CREATION RESULTS ===');
    console.log(`Successfully created: ${successCount}`);
    console.log(`Failed to create: ${failureCount}`);
    
  } catch (error) {
    console.error('Error checking and creating produce types:', error);
  }
}

// Run the script
const filePath = '/Users/maxwoldenberg/Downloads/produce_varieties_seed.graphql';
checkAndCreateProduceTypes(filePath).catch(error => {
  console.error('Script execution failed:', error);
}); 