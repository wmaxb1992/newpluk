import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import MainNavigator from './src/navigation/MainNavigator';
import { configureAmplify } from './src/config/amplify';
import { testDatabaseConnection } from './src/utils/testConnection';
import { checkAllTables } from './src/utils/checkTables';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const initializeApp = async () => {
      try {
        // Configure Amplify and get the client
        const client = await configureAmplify();
        
        if (!mounted) return;

        // Test database connection
        console.log('Testing database connection...');
        const testResult = await testDatabaseConnection();

        if (!mounted) return;

        if (!testResult.data?.__typename) {
          throw new Error('Database connection test failed');
        }

        // Check all tables
        console.log('\nChecking all tables...');
        await checkAllTables();
        
        if (mounted) {
          setIsReady(true);
        }
      } catch (error) {
        console.error('Initialization error:', error);
        if (mounted) {
          setDbError(error instanceof Error ? error.message : 'Unknown error');
          setIsReady(true);
        }
      }
    };

    initializeApp();

    return () => {
      mounted = false;
    };
  }, []);

  if (!isReady) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 10 }}>Connecting to database...</Text>
      </View>
    );
  }

  if (dbError) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ color: 'red', marginBottom: 10 }}>Database Connection Error</Text>
        <Text style={{ textAlign: 'center' }}>{dbError}</Text>
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
