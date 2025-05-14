# Pluk App API Package

This package provides a shared API layer for the Pluk app, including GraphQL operations, authentication hooks, and data fetching utilities.

## Features

- **GraphQL Operations**: Pre-defined queries, mutations, and subscriptions for all Pluk app entities
- **Authentication**: Hooks for user authentication (sign up, sign in, sign out)
- **Data Fetching**: Custom hooks for fetching and manipulating data
- **Real-time Updates**: Subscription handlers for real-time data updates

## Installation

```bash
# From the root of the monorepo
yarn workspace @pluk/api install
```

## Setup

1. Configure AWS Amplify with your AWS AppSync and Cognito settings:

```typescript
import { configureAmplify } from '@pluk/api';

configureAmplify({
  region: 'us-east-1',
  userPoolId: 'your-user-pool-id',
  userPoolWebClientId: 'your-user-pool-web-client-id',
  identityPoolId: 'your-identity-pool-id',
  appsyncGraphqlEndpoint: 'your-appsync-graphql-endpoint',
});
```

2. Wrap your app with the Apollo Provider:

```typescript
import { ApolloProvider } from '@pluk/api';

const App = () => {
  return (
    <ApolloProvider 
      graphqlEndpoint="your-appsync-graphql-endpoint"
      region="us-east-1"
    >
      {/* Your app components */}
    </ApolloProvider>
  );
};
```

3. Wrap your app with the Auth Provider:

```typescript
import { AuthProvider } from '@pluk/api';

const App = () => {
  return (
    <AuthProvider>
      {/* Your app components */}
    </AuthProvider>
  );
};
```

## Authentication

Use the `useAuth` hook to access authentication functionality:

```typescript
import { useAuth } from '@pluk/api';

const MyComponent = () => {
  const { 
    user,
    isAuthenticated,
    isLoading,
    signUp,
    confirmSignUp,
    signIn,
    signOut,
    forgotPassword,
    resetPassword,
    updateUser
  } = useAuth();

  // Sign up a new user
  const handleSignUp = async () => {
    try {
      await signUp({
        email: 'user@example.com',
        password: 'Password123!',
        name: 'John Doe',
        role: 'CONSUMER'
      });
      // User needs to confirm sign up with verification code
    } catch (error) {
      console.error('Sign up error:', error);
    }
  };

  // Confirm sign up with verification code
  const handleConfirmSignUp = async () => {
    try {
      await confirmSignUp({
        email: 'user@example.com',
        code: '123456'
      });
      // User can now sign in
    } catch (error) {
      console.error('Confirm sign up error:', error);
    }
  };

  // Sign in an existing user
  const handleSignIn = async () => {
    try {
      await signIn({
        email: 'user@example.com',
        password: 'Password123!'
      });
      // User is now authenticated
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  // Sign out the current user
  const handleSignOut = async () => {
    try {
      await signOut();
      // User is now signed out
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : isAuthenticated ? (
        <div>
          <p>Welcome, {user?.name || user?.email}!</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <button onClick={handleSignIn}>Sign In</button>
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      )}
    </div>
  );
};
```

## Data Fetching

### User Operations

```typescript
import { useUser } from '@pluk/api';

const UserComponent = () => {
  const { 
    getUser,
    listUsers,
    createUser,
    updateUser,
    deleteUser,
    loading,
    errors
  } = useUser();

  // Fetch a user by ID
  const fetchUser = async (id: string) => {
    const user = await getUser({ id });
    console.log('User:', user);
  };

  // List all users
  const fetchUsers = async () => {
    const users = await listUsers();
    console.log('Users:', users);
  };

  // Create a new user
  const createNewUser = async () => {
    const newUser = await createUser({
      email: 'newuser@example.com',
      name: 'New User',
      role: 'CONSUMER'
    });
    console.log('New user:', newUser);
  };

  return (
    <div>
      {/* Your component UI */}
    </div>
  );
};
```

### Farm Operations

```typescript
import { useFarm } from '@pluk/api';

const FarmComponent = () => {
  const { 
    getFarm,
    listFarms,
    getFarmsByOwnerId,
    createFarm,
    updateFarm,
    deleteFarm,
    loading,
    errors
  } = useFarm();

  // Fetch a farm by ID
  const fetchFarm = async (id: string) => {
    const farm = await getFarm({ id });
    console.log('Farm:', farm);
  };

  // List all farms
  const fetchFarms = async () => {
    const farms = await listFarms();
    console.log('Farms:', farms);
  };

  // Get farms by owner ID
  const fetchFarmsByOwner = async (ownerId: string) => {
    const farms = await getFarmsByOwnerId(ownerId);
    console.log('Owner farms:', farms);
  };

  return (
    <div>
      {/* Your component UI */}
    </div>
  );
};
```

### Listing Operations

```typescript
import { useListing } from '@pluk/api';

const ListingComponent = () => {
  const { 
    getListing,
    listListings,
    getListingsByFarmId,
    createListing,
    updateListing,
    deleteListing,
    onCreateListing,
    onUpdateListing,
    onDeleteListing,
    loading,
    errors
  } = useListing();

  // Fetch a listing by ID
  const fetchListing = async (id: string) => {
    const listing = await getListing({ id });
    console.log('Listing:', listing);
  };

  // List all listings
  const fetchListings = async () => {
    const listings = await listListings();
    console.log('Listings:', listings);
  };

  // Get listings by farm ID
  const fetchListingsByFarm = async (farmId: string) => {
    const listings = await getListingsByFarmId(farmId);
    console.log('Farm listings:', listings);
  };

  // Subscribe to new listings
  useEffect(() => {
    if (onCreateListing.data?.onCreateProduceListing) {
      console.log('New listing created:', onCreateListing.data.onCreateProduceListing);
    }
  }, [onCreateListing.data]);

  return (
    <div>
      {/* Your component UI */}
    </div>
  );
};
```

### Order Operations

```typescript
import { useOrder } from '@pluk/api';

const OrderComponent = () => {
  const { 
    getOrder,
    listOrders,
    getOrdersByUserId,
    createOrder,
    updateOrder,
    deleteOrder,
    createOrderItem,
    updateOrderItem,
    onCreateOrder,
    onUpdateOrder,
    loading,
    errors
  } = useOrder();

  // Fetch an order by ID
  const fetchOrder = async (id: string) => {
    const order = await getOrder({ id });
    console.log('Order:', order);
  };

  // List all orders
  const fetchOrders = async () => {
    const orders = await listOrders();
    console.log('Orders:', orders);
  };

  // Get orders by user ID
  const fetchOrdersByUser = async (userId: string) => {
    const orders = await getOrdersByUserId(userId);
    console.log('User orders:', orders);
  };

  // Subscribe to order updates
  useEffect(() => {
    if (onUpdateOrder.data?.onUpdateOrder) {
      console.log('Order updated:', onUpdateOrder.data.onUpdateOrder);
    }
  }, [onUpdateOrder.data]);

  return (
    <div>
      {/* Your component UI */}
    </div>
  );
};
```

## Development

### Generating GraphQL Types

This package uses GraphQL Code Generator to generate TypeScript types and hooks from the GraphQL schema. To update the generated types:

1. Update the GraphQL operations in the `src/graphql/operations` directory
2. Run the code generation script:

```bash
# From the root of the monorepo
yarn workspace @pluk/api generate
```

### Testing

To test the API package, you can use the provided test component:

```typescript
import { ApiTest } from '@pluk/api/src/test/ApiTest';

const TestApp = () => {
  return <ApiTest />;
};
```

## License

This package is part of the Pluk app and is subject to the same license as the main application.
