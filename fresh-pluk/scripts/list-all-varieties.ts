/**
 * Script to list all produce varieties from the database
 * This script will show all varieties grouped by produce type
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
    listProduceTypes(limit: 1000) {
      items {
        id
        name
        subcategoryId
      }
    }
  }
`;

const LIST_ALL_VARIETIES = /* GraphQL */ `
  query ListAllProduceVarieties($nextToken: String) {
    listProduceVarieties(limit: 100, nextToken: $nextToken) {
      items {
        id
        name
        typeId
        description
        season
        averageShelfLife
        averageWeight
        weightUnit
      }
      nextToken
    }
  }
`;

interface ProduceType {
  id: string;
  name: string;
  subcategoryId: string;
}

interface ProduceVariety {
  id: string;
  name: string;
  typeId: string;
  description: string;
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

interface AllVarietiesResponse {
  listProduceVarieties: {
    items: ProduceVariety[];
    nextToken?: string;
  };
}

async function listAllProduceVarieties() {
  try {
    // 1. Fetch all produce types
    console.log('Fetching produce types...');
    const typesResult = await client.graphql({
      query: LIST_PRODUCE_TYPES
    }) as GraphQLResult<ProduceTypeResponse>;
    
    const produceTypes = typesResult.data?.listProduceTypes?.items || [];
    console.log(`Found ${produceTypes.length} produce types`);
    
    // Create a map of type IDs to type names for later reference
    const typeIdToName: { [id: string]: string } = {};
    produceTypes.forEach(type => {
      typeIdToName[type.id] = type.name;
    });
    
    // 2. Fetch all varieties
    console.log('\nFetching all produce varieties...');
    let allVarieties: ProduceVariety[] = [];
    let nextToken: string | undefined = undefined;
    
    do {
      const result = await client.graphql({
        query: LIST_ALL_VARIETIES,
        variables: { nextToken }
      }) as GraphQLResult<AllVarietiesResponse>;
      
      const varieties = result.data?.listProduceVarieties?.items || [];
      allVarieties = [...allVarieties, ...varieties];
      
      nextToken = result.data?.listProduceVarieties?.nextToken;
      console.log(`Fetched ${varieties.length} varieties (total: ${allVarieties.length})...`);
    } while (nextToken);
    
    console.log(`\nTotal varieties found: ${allVarieties.length}`);
    
    // 3. Group varieties by produce type
    const varietiesByType: { [typeId: string]: ProduceVariety[] } = {};
    allVarieties.forEach(variety => {
      if (!varietiesByType[variety.typeId]) {
        varietiesByType[variety.typeId] = [];
      }
      varietiesByType[variety.typeId].push(variety);
    });
    
    // 4. Show statistics by produce type
    console.log('\n=== VARIETIES BY PRODUCE TYPE ===');
    Object.entries(varietiesByType).forEach(([typeId, varieties]) => {
      const typeName = typeIdToName[typeId] || 'Unknown Type';
      console.log(`${typeName} (ID: ${typeId}): ${varieties.length} varieties`);
      
      // Print first 3 varieties as a sample
      if (varieties.length > 0) {
        console.log('  Sample varieties:');
        varieties.slice(0, 3).forEach(variety => {
          console.log(`  - ${variety.name}`);
        });
        
        if (varieties.length > 3) {
          console.log(`  ... and ${varieties.length - 3} more`);
        }
        console.log();
      }
    });
    
    // 5. Count total by type name (combining different type IDs with the same name)
    const varietiesByTypeName: { [typeName: string]: number } = {};
    Object.entries(varietiesByType).forEach(([typeId, varieties]) => {
      const typeName = typeIdToName[typeId] || 'Unknown Type';
      varietiesByTypeName[typeName] = (varietiesByTypeName[typeName] || 0) + varieties.length;
    });
    
    console.log('\n=== SUMMARY BY TYPE NAME ===');
    Object.entries(varietiesByTypeName)
      .sort((a, b) => b[1] - a[1]) // Sort by count in descending order
      .forEach(([typeName, count]) => {
        console.log(`${typeName}: ${count} varieties`);
      });
    
  } catch (error) {
    console.error('Error listing produce varieties:', error);
  }
}

// Run the script
listAllProduceVarieties().catch(error => {
  console.error('Script execution failed:', error);
}); 