import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { configureAmplify, defaultAmplifyConfig } from '../config/amplify';
import { ApolloProvider } from '../providers/ApolloProvider';
import { AuthProvider, useAuth } from '../hooks/auth/AuthContext';
import { useFarm } from '../hooks/graphql/useFarm';
import { useListing } from '../hooks/graphql/useListing';
import { useUser } from '../hooks/graphql/useUser';

// Configure Amplify with your AWS AppSync and Cognito configuration
// This would typically be done in your app's entry point
const initializeApp = () => {
  configureAmplify({
    region: process.env.AWS_REGION || defaultAmplifyConfig.region,
    userPoolId: process.env.COGNITO_USER_POOL_ID || defaultAmplifyConfig.userPoolId,
    userPoolWebClientId: process.env.COGNITO_USER_POOL_WEB_CLIENT_ID || defaultAmplifyConfig.userPoolWebClientId,
    identityPoolId: process.env.COGNITO_IDENTITY_POOL_ID || defaultAmplifyConfig.identityPoolId,
    appsyncGraphqlEndpoint: process.env.APPSYNC_GRAPHQL_ENDPOINT || defaultAmplifyConfig.appsyncGraphqlEndpoint,
  });
};

// Main test component
export const ApiTest: React.FC = () => {
  // Initialize Amplify
  useEffect(() => {
    initializeApp();
  }, []);

  return (
    <AuthProvider>
      <ApolloProvider 
        graphqlEndpoint={process.env.APPSYNC_GRAPHQL_ENDPOINT || defaultAmplifyConfig.appsyncGraphqlEndpoint}
        region={process.env.AWS_REGION || defaultAmplifyConfig.region}
      >
        <TestContent />
      </ApolloProvider>
    </AuthProvider>
  );
};

// Test content component that uses the hooks
const TestContent: React.FC = () => {
  const { user, isAuthenticated, isLoading: authLoading, signIn, signOut } = useAuth();
  const { listFarms, loading: farmsLoading } = useFarm();
  const { listListings, loading: listingsLoading } = useListing();
  const { listUsers, loading: usersLoading } = useUser();
  
  const [farms, setFarms] = useState<any[]>([]);
  const [listings, setListings] = useState<any[]>([]);
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  // Handle sign in
  const handleSignIn = async () => {
    try {
      await signIn({ 
        email: 'test@example.com', // Replace with actual test credentials
        password: 'Password123!' 
      });
    } catch (err) {
      setError(`Sign in error: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Fetch data when authenticated
  const fetchData = async () => {
    try {
      setError(null);
      
      // Fetch farms
      const farmsData = await listFarms();
      if (farmsData) {
        setFarms(farmsData);
      }
      
      // Fetch listings
      const listingsData = await listListings();
      if (listingsData) {
        setListings(listingsData);
      }
      
      // Fetch users
      const usersData = await listUsers();
      if (usersData) {
        setUsers(usersData);
      }
    } catch (err) {
      setError(`Data fetch error: ${err instanceof Error ? err.message : String(err)}`);
    }
  };
  
  // Loading state
  const isLoading = authLoading || farmsLoading.listFarms || listingsLoading.listListings || usersLoading.listUsers;
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Pluk API Test</Text>
      
      {/* Authentication status */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Authentication</Text>
        <Text>Status: {isAuthenticated ? 'Authenticated' : 'Not authenticated'}</Text>
        {isAuthenticated && user && (
          <View>
            <Text>User ID: {user.id}</Text>
            <Text>Email: {user.email}</Text>
            <Text>Name: {user.name || 'N/A'}</Text>
            <Text>Role: {user.role || 'N/A'}</Text>
          </View>
        )}
        
        {!isAuthenticated ? (
          <Button title="Sign In" onPress={handleSignIn} disabled={isLoading} />
        ) : (
          <Button title="Sign Out" onPress={signOut} disabled={isLoading} />
        )}
      </View>
      
      {/* Data fetching */}
      {isAuthenticated && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data</Text>
          <Button title="Fetch Data" onPress={fetchData} disabled={isLoading} />
          
          {isLoading && <Text>Loading data...</Text>}
          
          {/* Farms */}
          {farms.length > 0 && (
            <View style={styles.dataSection}>
              <Text style={styles.dataSectionTitle}>Farms ({farms.length})</Text>
              {farms.map(farm => (
                <View key={farm.id} style={styles.dataItem}>
                  <Text>Name: {farm.name}</Text>
                  <Text>Owner ID: {farm.ownerId}</Text>
                </View>
              ))}
            </View>
          )}
          
          {/* Listings */}
          {listings.length > 0 && (
            <View style={styles.dataSection}>
              <Text style={styles.dataSectionTitle}>Listings ({listings.length})</Text>
              {listings.map(listing => (
                <View key={listing.id} style={styles.dataItem}>
                  <Text>Title: {listing.title}</Text>
                  <Text>Farm ID: {listing.farmId}</Text>
                  <Text>Price: {listing.price} {listing.priceUnit}</Text>
                </View>
              ))}
            </View>
          )}
          
          {/* Users */}
          {users.length > 0 && (
            <View style={styles.dataSection}>
              <Text style={styles.dataSectionTitle}>Users ({users.length})</Text>
              {users.map(user => (
                <View key={user.id} style={styles.dataItem}>
                  <Text>Email: {user.email}</Text>
                  <Text>Name: {user.name || 'N/A'}</Text>
                  <Text>Role: {user.role || 'N/A'}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      )}
      
      {/* Error display */}
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  section: {
    marginBottom: 24,
    padding: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dataSection: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
  dataSectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dataItem: {
    marginBottom: 8,
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  errorContainer: {
    padding: 12,
    backgroundColor: '#ffebee',
    borderRadius: 4,
    marginBottom: 16,
  },
  errorText: {
    color: '#d32f2f',
  },
});
