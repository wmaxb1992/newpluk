import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Amplify } from 'aws-amplify';
import awsconfig from './src/aws-exports-placeholder';

// Initialize Amplify
try {
  Amplify.configure(awsconfig);
} catch (error) {
  console.log('Error configuring Amplify:', error);
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Pluk Driver Dashboard</Text>
        <Text style={styles.subtitle}>Welcome to the Pluk Driver Dashboard</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
});
