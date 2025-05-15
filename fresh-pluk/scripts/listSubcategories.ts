import { Amplify } from 'aws-amplify';
import { generateClient } from '@aws-amplify/api';

type GraphQLResult<T> = {
  data?: T;
  errors?: Array<{
    message: string;
  }>;
};

interface CategoriesData {
  listProduceCategories: {
    items: Category[];
  };
}

interface SubcategoriesData {
  listProduceSubcategories: {
    items: Subcategory[];
  };
}

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

const LIST_CATEGORIES = `
  query ListCategories {
    listProduceCategories {
      items {
        id
        name
      }
    }
  }
`;

async function listSubcategories() {
  try {
    // Get all categories
    const categoriesResult = await client.graphql({
      query: LIST_CATEGORIES
    }) as GraphQLResult<CategoriesData>;
    
    if (!categoriesResult.data) {
      throw new Error('No categories data returned');
    }
    const categories = categoriesResult.data.listProduceCategories.items;
    
    // Get all subcategories
    const subcategoriesResult = await client.graphql({
      query: LIST_SUBCATEGORIES
    }) as GraphQLResult<SubcategoriesData>;
    
    if (!subcategoriesResult.data) {
      throw new Error('No subcategories data returned');
    }
    const subcategories = subcategoriesResult.data.listProduceSubcategories.items;
    
    // Group subcategories by category
    console.log('\nSubcategories by Category:');
    console.log('-------------------------');
    
    for (const category of categories) {
      const categorySubcategories = subcategories.filter((sub: Subcategory) => sub.categoryId === category.id);
      console.log(`\n${category.name} (${category.id}):`);
      if (categorySubcategories.length === 0) {
        console.log('  No subcategories found');
      } else {
        categorySubcategories.forEach((sub: Subcategory) => {
          console.log(`  - ${sub.name} (${sub.id})`);
        });
      }
    }

  } catch (err) {
    console.error('Error:', err);
  }
}

listSubcategories();
