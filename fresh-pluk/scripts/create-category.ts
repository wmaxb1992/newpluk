import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import { GraphQLResult } from '@aws-amplify/api-graphql';

// Configure Amplify
Amplify.configure({
  API: {
    GraphQL: {
      endpoint: 'https://4mxqywjlzbehtlxtqpopt277vm.appsync-api.us-east-1.amazonaws.com/graphql',
      region: 'us-east-1',
      defaultAuthMode: 'apiKey',
      apiKey: 'da2-5bf5n5jkjjhmrhzsktppa2k3dm'
    }
  }
});

const client = generateClient();

const CREATE_CATEGORY = /* GraphQL */ `
  mutation CreateProduceCategory($input: CreateProduceCategoryInput!) {
    createProduceCategory(input: $input) {
      id
      name
      description
      image
      icon
      createdAt
      updatedAt
    }
  }
`;

async function createCategory() {
  const input = {
    name: 'Vegetables',
    description: 'Fresh, locally grown vegetables',
    image: 'https://placehold.co/400x400?text=Vegetables',
    icon: 'vegetable'
  };

  try {
    const result = await client.graphql({
      query: CREATE_CATEGORY,
      variables: { input }
    }) as GraphQLResult<{
      createProduceCategory: {
        id: string;
        name: string;
        description: string;
        image: string;
        icon: string;
      };
    }>;

    console.log('Created category:', JSON.stringify(result.data?.createProduceCategory, null, 2));
    return result.data?.createProduceCategory.id;
  } catch (error) {
    console.error('Error creating category:', error);
    return null;
  }
}

createCategory();
