import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// TODO: Replace with real auth context
const useAuth = () => ({
  user: { attributes: { name: 'User' } },
  signOut: () => console.log('Sign out')
});

export default function HomeScreen() {
  const { user, signOut } = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, {user?.attributes?.name || 'User'}!</Text>
      <Text style={styles.subtitle}>Fresh produce from local farms delivered to your door</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2E7D32'
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    textAlign: 'center',
    color: '#555555'
  }
});
