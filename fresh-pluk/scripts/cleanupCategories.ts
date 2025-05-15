const { Amplify } = require('aws-amplify');
const { generateClient } = require('aws-amplify/api');

interface Category {
  id: string;
  name: string;
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

const LIST_PRODUCE_CATEGORIES = `
  query ListProduceCategories {
    listProduceCategories {
      items {
        id
        name
      }
    }
  }
`;

const DELETE_PRODUCE_CATEGORY = `
  mutation DeleteProduceCategory($input: DeleteProduceCategoryInput!) {
    deleteProduceCategory(input: $input) {
      id
      name
    }
  }
`;

async function cleanupCategories() {
  try {
    // IDs we want to keep
    const keepIds = new Set([
      'a55e2212-c9c7-4797-b864-f4caa100d531', // Fruits
      '0af522d1-36b0-4db1-9063-17a6c2b518df', // Herbs
      '96f9cc0f-c8b1-4dba-8de9-f2612fedf626'  // Vegetables
    ]);

    // Fetch all categories
    const result = await client.graphql({
      query: LIST_PRODUCE_CATEGORIES
    });

    if (!result.data) {
      throw new Error('No data returned from query');
    }

    const categories = result.data.listProduceCategories.items;
    console.log(`Found ${categories.length} total categories`);

    // Find categories to delete
    const categoriesToDelete = categories.filter((cat: Category) => !keepIds.has(cat.id));
    console.log(`Will delete ${categoriesToDelete.length} duplicate categories`);

    // Delete categories
    for (const category of categoriesToDelete) {
      try {
        await client.graphql({
          query: DELETE_PRODUCE_CATEGORY,
          variables: {
            input: {
              id: category.id
            }
          }
        });
        console.log(`Deleted category: ${category.name} (${category.id})`);
      } catch (err) {
        console.error(`Failed to delete category ${category.id}:`, err);
      }
    }

    console.log('Cleanup complete!');
  } catch (err) {
    console.error('Error during cleanup:', err);
  }
}

// Run the cleanup
cleanupCategories();
