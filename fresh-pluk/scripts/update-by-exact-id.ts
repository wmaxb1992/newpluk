/**
 * Script to update a produce type by its exact ID
 * This allows fixing specific produce types in the database
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
const GET_SUBCATEGORY = /* GraphQL */ `
  query GetProduceSubcategory($id: ID!) {
    getProduceSubcategory(id: $id) {
      id
      name
      categoryId
    }
  }
`;

const GET_PRODUCE_TYPE = /* GraphQL */ `
  query GetProduceType($id: ID!) {
    getProduceType(id: $id) {
      id
      name
      subcategoryId
      description
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
  description?: string;
}

interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
}

interface GetProduceTypeResponse {
  getProduceType: ProduceType;
}

interface GetSubcategoryResponse {
  getProduceSubcategory: Subcategory;
}

async function updateProduceTypeById() {
  try {
    // The exact type ID to update
    const typeId = 'type_orange';
    
    // The subcategory ID to assign
    const citrusSubcategoryId = '2da220ea-2618-4077-b4ef-1ea66989c4ea';
    
    // 1. Verify the produce type exists
    console.log(`Verifying produce type with ID: ${typeId}...`);
    let typeExists = false;
    
    try {
      const typeResult = await client.graphql({
        query: GET_PRODUCE_TYPE,
        variables: { id: typeId }
      }) as GraphQLResult<GetProduceTypeResponse>;
      
      if (typeResult.data?.getProduceType) {
        const type = typeResult.data.getProduceType;
        typeExists = true;
        console.log(`Found produce type: ${type.name} (ID: ${type.id}, Current subcategoryId: ${type.subcategoryId})`);
      }
    } catch (error) {
      console.log(`Produce type with ID ${typeId} not found.`);
    }
    
    if (!typeExists) {
      console.log(`The produce type with ID ${typeId} doesn't exist. Nothing to update.`);
      return;
    }
    
    // 2. Verify the subcategory exists
    console.log(`\nVerifying subcategory with ID: ${citrusSubcategoryId}...`);
    let subcategoryExists = false;
    let subcategoryName = '';
    
    try {
      const subcategoryResult = await client.graphql({
        query: GET_SUBCATEGORY,
        variables: { id: citrusSubcategoryId }
      }) as GraphQLResult<GetSubcategoryResponse>;
      
      if (subcategoryResult.data?.getProduceSubcategory) {
        const subcategory = subcategoryResult.data.getProduceSubcategory;
        subcategoryExists = true;
        subcategoryName = subcategory.name;
        console.log(`Found subcategory: ${subcategory.name} (ID: ${subcategory.id})`);
      }
    } catch (error) {
      console.log(`Subcategory with ID ${citrusSubcategoryId} not found.`);
    }
    
    if (!subcategoryExists) {
      console.log(`The subcategory with ID ${citrusSubcategoryId} doesn't exist. Cannot update produce type.`);
      return;
    }
    
    // 3. Update the produce type
    console.log(`\nUpdating produce type ${typeId} to connect to subcategory ${subcategoryName}...`);
    
    try {
      const updateResult = await client.graphql({
        query: UPDATE_PRODUCE_TYPE,
        variables: {
          input: {
            id: typeId,
            subcategoryId: citrusSubcategoryId
          }
        }
      });
      
      console.log(`✅ Successfully updated produce type with ID ${typeId} to subcategory ${subcategoryName}`);
    } catch (error) {
      console.error(`❌ Failed to update produce type with ID ${typeId}:`, error);
    }
    
  } catch (error) {
    console.error('Error in update produce type by ID script:', error);
  }
}

// Run the script
updateProduceTypeById().catch(error => {
  console.error('Script execution failed:', error);
}); 