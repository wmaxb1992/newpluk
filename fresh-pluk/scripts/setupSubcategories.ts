import { Amplify } from 'aws-amplify';
import { generateClient } from '@aws-amplify/api';

type GraphQLResult<T> = {
  data?: T;
  errors?: Array<{
    message: string;
  }>;
};

interface Category {
  id: string;
  name: string;
}

interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
}

const awsConfig = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint: 'https://7pmhulha6vfsxhc6iqghyux52e.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-tnt5itq4gvb5ddu3ynaw6t42mi'
};

Amplify.configure(awsConfig);
const client = generateClient({
  authMode: 'apiKey'
});

const DELETE_SUBCATEGORY = `
  mutation DeleteProduceSubcategory($input: DeleteProduceSubcategoryInput!) {
    deleteProduceSubcategory(input: $input) {
      id
      name
    }
  }
`;

const CREATE_SUBCATEGORY = `
  mutation CreateProduceSubcategory($input: CreateProduceSubcategoryInput!) {
    createProduceSubcategory(input: $input) {
      id
      name
      categoryId
    }
  }
`;

const LIST_SUBCATEGORIES = `
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

const CATEGORY_IDS = {
  FRUITS: 'a55e2212-c9c7-4797-b864-f4caa100d531',
  HERBS: '0af522d1-36b0-4db1-9063-17a6c2b518df',
  VEGETABLES: '96f9cc0f-c8b1-4dba-8de9-f2612fedf626'
};

const NEW_SUBCATEGORIES = {
  [CATEGORY_IDS.FRUITS]: [
    'Berries',
    'Citrus',
    'Tropical',
    'Stone Fruits',
    'Pome Fruits',
    'Melons'
  ],
  [CATEGORY_IDS.VEGETABLES]: [
    'Leafy Greens',
    'Root Vegetables',
    'Cruciferous',
    'Nightshades',
    'Squash',
    'Alliums'
  ],
  [CATEGORY_IDS.HERBS]: [
    'Culinary Herbs',
    'Medicinal Herbs',
    'Aromatic Herbs',
    'Tea Herbs',
    'Garnishing Herbs'
  ]
};

async function setupSubcategories() {
  try {
    // 1. Get existing subcategories
    const result = await client.graphql({
      query: LIST_SUBCATEGORIES
    }) as GraphQLResult<{ listProduceSubcategories: { items: Subcategory[] } }>;

    if (!result.data) {
      throw new Error('No data returned');
    }

    const existingSubcategories = result.data.listProduceSubcategories.items;
    console.log('Found existing subcategories:', existingSubcategories.length);

    // 2. Delete existing subcategories
    for (const subcategory of existingSubcategories) {
      await client.graphql({
        query: DELETE_SUBCATEGORY,
        variables: {
          input: {
            id: subcategory.id
          }
        }
      });
      console.log(`Deleted subcategory: ${subcategory.name}`);
    }

    // 3. Create new subcategories
    for (const [categoryId, subcategories] of Object.entries(NEW_SUBCATEGORIES)) {
      for (const name of subcategories) {
        const createResult = await client.graphql({
          query: CREATE_SUBCATEGORY,
          variables: {
            input: {
              categoryId,
              name,
              description: `${name} subcategory`
            }
          }
        });
        console.log(`Created subcategory: ${name} for category ${categoryId}`);
      }
    }

    console.log('Subcategory setup complete!');
  } catch (err) {
    console.error('Error:', err);
  }
}

setupSubcategories();
