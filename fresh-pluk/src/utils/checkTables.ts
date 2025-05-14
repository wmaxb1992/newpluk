import { getClient } from '../config/amplify';
import { GraphQLResult } from '@aws-amplify/api-graphql';

interface User {
  id: string;
  email: string;
  name?: string;
  role: string;
}

interface ProduceCategory {
  id: string;
  name: string;
}

interface ProduceSubcategory {
  id: string;
  name: string;
  categoryId: string;
}

interface ProduceListing {
  id: string;
  title: string;
  price: number;
  farmId: string;
}

interface ListUsersResponse {
  listUsers: {
    items: User[];
  };
}

interface ListProduceResponse {
  listProduceCategories: {
    items: ProduceCategory[];
  };
  listProduceSubcategories: {
    items: ProduceSubcategory[];
  };
  listProduceListings: {
    items: ProduceListing[];
  };
}

const LIST_USERS = /* GraphQL */ `
  query ListUsers {
    listUsers {
      items {
        id
        email
        name
        role
      }
    }
  }
`;

const LIST_PRODUCE = /* GraphQL */ `
  query ListAllProduce {
    listProduceCategories {
      items {
        id
        name
      }
    }
    listProduceSubcategories {
      items {
        id
        name
        categoryId
      }
    }
    listProduceListings {
      items {
        id
        title
        price
        farmId
      }
    }
  }
`;

export const checkAllTables = async () => {
  try {
    const client = getClient();

    console.log('Checking Users table...');
    const usersResponse = await client.graphql({
      query: LIST_USERS,
      authMode: 'apiKey'
    }) as GraphQLResult<ListUsersResponse>;

    if (usersResponse.data?.listUsers?.items) {
      console.log('Users found:', usersResponse.data.listUsers.items.length);
    }

    console.log('\nChecking Produce tables...');
    const produceResponse = await client.graphql({
      query: LIST_PRODUCE,
      authMode: 'apiKey'
    }) as GraphQLResult<ListProduceResponse>;

    if (produceResponse.data) {
      console.log('Categories found:', produceResponse.data.listProduceCategories?.items?.length || 0);
      console.log('Subcategories found:', produceResponse.data.listProduceSubcategories?.items?.length || 0);
      console.log('Listings found:', produceResponse.data.listProduceListings?.items?.length || 0);
    }
  } catch (error) {
    console.error('Error checking tables:', error);
    throw error;
  }
};
