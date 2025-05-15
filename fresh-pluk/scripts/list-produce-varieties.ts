/**
 * Script to list produce varieties from the database
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

const LIST_PRODUCE_VARIETIES = /* GraphQL */ `
  query ListProduceVarieties($typeId: ID) {
    listProduceVarieties(filter: { typeId: { eq: $typeId } }, limit: 100) {
      items {
        id
        name
        typeId
        description
        season
        averageShelfLife
        averageWeight
        weightUnit
        harvestInstructions
        storageInstructions
      }
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

interface ProduceVarietyResponse {
  listProduceVarieties: {
    items: ProduceVariety[];
  };
}

async function listProduceVarieties() {
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
    
    // 2. Gather statistics
    const varietiesByType: { [typeName: string]: ProduceVariety[] } = {};
    let totalVarieties = 0;
    
    // 3. Fetch varieties for a few selected types to avoid overloading the output
    const sampleTypes = produceTypes.filter(type => 
      ['Orange', 'Lemon', 'Apple', 'Tomato', 'Carrot'].includes(type.name)
    );
    
    if (sampleTypes.length === 0) {
      // If specific types not found, just take the first few
      sampleTypes.push(...produceTypes.slice(0, 5));
    }
    
    console.log(`\nFetching varieties for ${sampleTypes.length} sample types...`);
    
    for (const type of sampleTypes) {
      console.log(`\nFetching varieties for: ${type.name} (ID: ${type.id})`);
      
      const varietiesResult = await client.graphql({
        query: LIST_PRODUCE_VARIETIES,
        variables: { typeId: type.id }
      }) as GraphQLResult<ProduceVarietyResponse>;
      
      const varieties = varietiesResult.data?.listProduceVarieties?.items || [];
      totalVarieties += varieties.length;
      
      varietiesByType[type.name] = varieties;
      
      console.log(`Found ${varieties.length} varieties for ${type.name}`);
      
      // Print first 5 varieties as a sample
      if (varieties.length > 0) {
        console.log('\nSample varieties:');
        varieties.slice(0, 5).forEach(variety => {
          console.log(`- ${variety.name}: ${variety.description.substring(0, 50)}...`);
          console.log(`  Season: ${variety.season?.join(', ') || 'N/A'}`);
          console.log(`  Weight: ${variety.averageWeight} ${variety.weightUnit || 'units'}`);
          console.log(`  Shelf Life: ${variety.averageShelfLife} days`);
        });
        
        if (varieties.length > 5) {
          console.log(`... and ${varieties.length - 5} more varieties`);
        }
      }
    }
    
    // 4. Show overall statistics
    console.log('\n=== PRODUCE VARIETY STATISTICS ===');
    console.log(`Total varieties checked: ${totalVarieties}`);
    Object.entries(varietiesByType).forEach(([typeName, varieties]) => {
      console.log(`${typeName}: ${varieties.length} varieties`);
    });
    
  } catch (error) {
    console.error('Error listing produce varieties:', error);
  }
}

// Run the script
listProduceVarieties().catch(error => {
  console.error('Script execution failed:', error);
}); 