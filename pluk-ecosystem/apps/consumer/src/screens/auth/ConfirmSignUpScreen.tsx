import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import type { AuthStackParamList } from '../../navigation/AuthNavigator';
import { useAuth } from '../../context/AuthContext';

type ConfirmSignUpScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList, 'ConfirmSignUp'>;
type ConfirmSignUpScreenRouteProp = RouteProp<AuthStackParamList, 'ConfirmSignUp'>;

const ConfirmSignUpScreen: React.FC = () => {
  const [confirmationCode, setConfirmationCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const { confirmSignUp } = useAuth();
  const navigation = useNavigation<ConfirmSignUpScreenNavigationProp>();
  const route = useRoute<ConfirmSignUpScreenRouteProp>();
  const { username } = route.params;

  const handleConfirmSignUp = async () => {
    if (!confirmationCode) {
      Alert.alert('Error', 'Please enter the confirmation code');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await confirmSignUp(username, confirmationCode);
      
      Alert.alert(
        'Success',
        'Your account has been verified successfully!',
        [
          {
            text: 'Login',
            onPress: () => navigation.navigate('Login')
          }
        ]
      );
    } catch (error) {
      console.error('Confirmation error:', error);
      let errorMessage = 'Unknown error occurred';
      
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      
      Alert.alert('Verification Failed', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = () => {
    // Here you would implement resend code functionality using Auth.resendSignUp(username)
    Alert.alert('Resend Code', 'A new verification code has been sent to your email.');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Verify Your Account</Text>
        <Text style={styles.subtitle}>Enter the confirmation code sent to your email</Text>
        
        <View style={styles.form}>
          <Text style={styles.usernameText}>Username: {username}</Text>
          
          <TextInput
            style={styles.input}
            placeholder="Confirmation Code"
            value={confirmationCode}
            onChangeText={setConfirmationCode}
            keyboardType="number-pad"
            autoCapitalize="none"
          />
          
          <TouchableOpacity 
            style={styles.button}
            onPress={handleConfirmSignUp}
            disabled={isLoading}
          >
            <Text style={styles.buttonText}>{isLoading ? 'Verifying...' : 'Verify Account'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.resendButton}
            onPress={handleResendCode}
          >
            <Text style={styles.resendButtonText}>Resend Code</Text>
          </TouchableOpacity>
          
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already verified? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginLink}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#555555',
    marginBottom: 30,
  },
  form: {
    width: '100%',
  },
  usernameText: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#DDDDDD',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resendButton: {
    alignSelf: 'center',
    marginTop: 20,
    padding: 10,
  },
  resendButtonText: {
    color: '#2E7D32',
    fontSize: 14,
    fontWeight: '500',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  loginText: {
    fontSize: 14,
    color: '#555555',
  },
  loginLink: {
    fontSize: 14,
    color: '#2E7D32',
    fontWeight: 'bold',
  },
});

export default ConfirmSignUpScreen;
