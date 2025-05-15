/**
 * Script to seed produce varieties from the GraphQL mutations file
 * This script parses the mutations and inserts them into the database
 */

import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import type { GraphQLResult } from '@aws-amplify/api-graphql';
import * as fs from 'fs';
import * as path from 'path';
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

interface TypeIdMap {
  [typeName: string]: string;
}

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

const CREATE_PRODUCE_VARIETY = /* GraphQL */ `
  mutation CreateProduceVariety($input: CreateProduceVarietyInput!) {
    createProduceVariety(input: $input) {
      id
      name
      typeId
      description
      season
      averageShelfLife
      averageWeight
      weightUnit
    }
  }
`;

interface ProduceType {
  id: string;
  name: string;
  subcategoryId: string;
}

interface ProduceVariety {
  typeId: string;
  name: string;
  description: string;
  image?: string;
  icon?: string;
  season?: string[];
  harvestInstructions?: string;
  storageInstructions?: string;
  averageShelfLife?: number;
  averageWeight?: number;
  weightUnit?: string;
}

interface ProduceTypeResponse {
  listProduceTypes: {
    items: ProduceType[];
  };
}

async function loadProduceTypes(): Promise<TypeIdMap> {
  try {
    const result = await client.graphql({
      query: LIST_PRODUCE_TYPES
    }) as GraphQLResult<ProduceTypeResponse>;
    
    const produceTypes = result.data?.listProduceTypes?.items || [];
    
    // Create a map of base type names to IDs
    const typeIdMap: TypeIdMap = {};
    produceTypes.forEach(type => {
      // Extract base name (remove whitespace and convert to lowercase)
      const baseName = type.name.replace(/\s+/g, '').toLowerCase();
      typeIdMap[baseName] = type.id;
      
      // Also add the original name for exact matches
      typeIdMap[type.name.toLowerCase()] = type.id;
    });
    
    return typeIdMap;
  } catch (error) {
    console.error('Error loading produce types:', error);
    return {};
  }
}

function parseMutation(mutationBlock: string): ProduceVariety | null {
  try {
    // Extract the input object between createProduceVariety(input: { and })
    const inputMatch = mutationBlock.match(/createProduceVariety\s*\(\s*input\s*:\s*\{([^}]+)\}\)/s);
    if (!inputMatch || !inputMatch[1]) return null;
    
    const inputText = inputMatch[1].trim();
    const variety: ProduceVariety = {
      typeId: "AUTO-GENERATE-TYPE-ID", // Will be replaced later
      name: "",
      description: ""
    };
    
    // Parse each field
    const fieldsRegex = /(\w+)\s*:\s*(?:"([^"]+)"|(\d+(?:\.\d+)?)|(\[[^\]]+\]))/g;
    let match;
    
    while ((match = fieldsRegex.exec(inputText)) !== null) {
      const fieldName = match[1];
      const stringValue = match[2];
      const numberValue = match[3];
      const arrayValue = match[4];
      
      if (fieldName === "name" || fieldName === "description" || 
          fieldName === "image" || fieldName === "icon" || 
          fieldName === "harvestInstructions" || fieldName === "storageInstructions" || 
          fieldName === "weightUnit") {
        (variety as any)[fieldName] = stringValue;
      } else if (fieldName === "averageShelfLife" || fieldName === "averageWeight") {
        (variety as any)[fieldName] = parseFloat(numberValue);
      } else if (fieldName === "season" && arrayValue) {
        // Parse array value like ["Summer", "Fall"]
        const seasonItems = arrayValue.match(/"([^"]+)"/g);
        if (seasonItems) {
          variety.season = seasonItems.map(item => item.replace(/"/g, ''));
        }
      }
    }
    
    return variety;
  } catch (error) {
    console.error('Error parsing mutation:', error);
    return null;
  }
}

function extractTypeFromVarietyName(varietyName: string): string {
  // First, extract the produce type from the variety name
  // Format is usually "<Color/Variety> <Produce Type>"
  const parts = varietyName.split(' ');
  if (parts.length < 2) return varietyName; // Can't extract type
  
  // The last part is usually the produce type (e.g., "Orange", "Lemon")
  return parts[parts.length - 1];
}

async function seedProduceVarieties(filePath: string) {
  try {
    // Load produce types to get their IDs
    console.log('Loading produce types from database...');
    const typeIdMap = await loadProduceTypes();
    console.log(`Loaded ${Object.keys(typeIdMap).length} produce types`);
    
    // Group varieties by produce type for status reporting
    const varietiesByType: { [type: string]: number } = {};
    
    // Read file line by line
    const fileStream = fs.createReadStream(filePath);
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    
    let currentMutation = '';
    let successCount = 0;
    let failureCount = 0;
    let totalVarieties = 0;
    
    for await (const line of rl) {
      if (line.trim().startsWith('mutation {')) {
        // Start of a new mutation
        currentMutation = line;
      } else if (line.trim() === '}' && currentMutation.length > 0) {
        // End of mutation
        currentMutation += line;
        
        // Parse the mutation
        const variety = parseMutation(currentMutation);
        if (variety) {
          totalVarieties++;
          
          // Extract produce type from variety name
          const produceType = extractTypeFromVarietyName(variety.name);
          const typeKey = produceType.toLowerCase();
          
          // Find the typeId
          let typeId = typeIdMap[typeKey];
          if (!typeId) {
            // Try removing spaces and checking again
            const compactKey = typeKey.replace(/\s+/g, '');
            typeId = typeIdMap[compactKey];
          }
          
          if (typeId) {
            // Update the typeId
            variety.typeId = typeId;
            
            // Count by type
            varietiesByType[produceType] = (varietiesByType[produceType] || 0) + 1;
            
            try {
              // Create the variety in the database
              await client.graphql({
                query: CREATE_PRODUCE_VARIETY,
                variables: { input: variety }
              });
              
              console.log(`Created variety: ${variety.name}`);
              successCount++;
            } catch (error) {
              console.error(`Failed to create variety: ${variety.name}`, error);
              failureCount++;
            }
          } else {
            console.warn(`No produce type found for: ${produceType} (variety: ${variety.name})`);
            failureCount++;
          }
        }
        
        // Reset for next mutation
        currentMutation = '';
      } else if (currentMutation.length > 0) {
        // Continue building current mutation
        currentMutation += line;
      }
    }
    
    console.log('\n=== SEED RESULTS ===');
    console.log(`Total varieties processed: ${totalVarieties}`);
    console.log(`Successfully created: ${successCount}`);
    console.log(`Failed to create: ${failureCount}`);
    
    console.log('\n=== VARIETIES BY PRODUCE TYPE ===');
    Object.entries(varietiesByType).forEach(([type, count]) => {
      console.log(`${type}: ${count} varieties`);
    });
    
  } catch (error) {
    console.error('Error seeding produce varieties:', error);
  }
}

// Run the script
const filePath = '/Users/maxwoldenberg/Downloads/produce_varieties_seed.graphql';
seedProduceVarieties(filePath).catch(error => {
  console.error('Script execution failed:', error);
}); 