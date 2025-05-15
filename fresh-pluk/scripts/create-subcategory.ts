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

const CREATE_SUBCATEGORY = /* GraphQL */ `
  mutation CreateProduceSubcategory($input: CreateProduceSubcategoryInput!) {
    createProduceSubcategory(input: $input) {
      id
      name
      image
      icon
      createdAt
      updatedAt
    }
  }
`;

async function createSubcategory() {
  const input = {
    name: 'Nightshades',
    image: 'https://placehold.co/400x400?text=Nightshades',
    icon: 'vegetable',
    categoryId: '81fc426a-bc1e-4dfb-85ae-4553f632d94d'
  };

  try {
    const result = await client.graphql({
      query: CREATE_SUBCATEGORY,
      variables: { input }
    }) as GraphQLResult<{
      createProduceSubcategory: {
        id: string;
        name: string;
        image: string;
        icon: string;
      };
    }>;

    console.log('Created subcategory:', JSON.stringify(result.data?.createProduceSubcategory, null, 2));
    return result.data?.createProduceSubcategory.id;
  } catch (error) {
    console.error('Error creating subcategory:', error);
    return null;
  }
}

createSubcategory();
