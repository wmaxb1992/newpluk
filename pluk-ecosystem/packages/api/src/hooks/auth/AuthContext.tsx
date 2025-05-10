import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Amplify } from 'aws-amplify';
import { fetchAuthSession, getCurrentUser, signIn, signOut, signUp, confirmSignUp, resetPassword, updateUserAttributes, fetchUserAttributes } from 'aws-amplify/auth';
import type { AuthUser as CognitoUser } from 'aws-amplify/auth';
import { 
  AuthContextType, 
  AuthState, 
  SignUpParams, 
  SignInParams, 
  ConfirmSignUpParams,
  ForgotPasswordParams,
  ResetPasswordParams,
  UpdateUserParams,
  AuthUser
} from './types';
import { UserRole } from '../../graphql/generated';

// Create the authentication context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Initial authentication state
const initialAuthState: AuthState = {
  user: null,
  isLoading: true,
  isAuthenticated: false,
  error: null,
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(initialAuthState);

  // Function to extract user data from Cognito user
  const extractUserFromCognitoUser = async (cognitoUser: CognitoUser): Promise<AuthUser> => {
    const userAttributes = await Auth.userAttributes(cognitoUser);
    
    const getAttr = (key: string) => {
      const attr = userAttributes.find(attr => attr.Name === key);
      return attr ? attr.Value : undefined;
    };

    return {
      id: getAttr('sub') || '',
      email: getAttr('email') || '',
      name: getAttr('name'),
      phoneNumber: getAttr('phone_number'),
      role: getAttr('custom:role') as UserRole | undefined,
      isVerified: getAttr('email_verified') === 'true',
    };
  };

  // Check if user is authenticated on mount
  useEffect(() => {
    const checkAuthState = async () => {
      try {
        const cognitoUser = await Auth.currentAuthenticatedUser();
        const user = await extractUserFromCognitoUser(cognitoUser);
        
        setAuthState({
          user,
          isLoading: false,
          isAuthenticated: true,
          error: null,
        });
      } catch (error) {
        // User is not authenticated
        setAuthState({
          user: null,
          isLoading: false,
          isAuthenticated: false,
          error: null,
        });
      }
    };

    checkAuthState();
  }, []);

  // Sign up a new user
  const signUp = async ({ email, password, name, phoneNumber, role }: SignUpParams) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
          ...(name && { name }),
          ...(phoneNumber && { phone_number: phoneNumber }),
          ...(role && { 'custom:role': role }),
        },
      });
      
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false,
        // Not authenticated yet, need to confirm signup
        isAuthenticated: false,
      }));
    } catch (error) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: error as Error 
      }));
      throw error;
    }
  };

  // Confirm sign up with verification code
  const confirmSignUp = async ({ email, code }: ConfirmSignUpParams) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      await Auth.confirmSignUp(email, code);
      
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false,
        // Still not authenticated, need to sign in
        isAuthenticated: false,
      }));
    } catch (error) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: error as Error 
      }));
      throw error;
    }
  };

  // Sign in an existing user
  const signIn = async ({ email, password }: SignInParams) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const cognitoUser = await Auth.signIn(email, password);
      const user = await extractUserFromCognitoUser(cognitoUser);
      
      setAuthState({
        user,
        isLoading: false,
        isAuthenticated: true,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: error as Error 
      }));
      throw error;
    }
  };

  // Sign out the current user
  const signOut = async () => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      await Auth.signOut();
      
      setAuthState({
        user: null,
        isLoading: false,
        isAuthenticated: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: error as Error 
      }));
      throw error;
    }
  };

  // Initiate forgot password flow
  const forgotPassword = async ({ email }: ForgotPasswordParams) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      await Auth.forgotPassword(email);
      
      setAuthState(prev => ({ ...prev, isLoading: false }));
    } catch (error) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: error as Error 
      }));
      throw error;
    }
  };

  // Reset password with verification code
  const resetPassword = async ({ email, code, newPassword }: ResetPasswordParams) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      await Auth.forgotPasswordSubmit(email, code, newPassword);
      
      setAuthState(prev => ({ ...prev, isLoading: false }));
    } catch (error) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: error as Error 
      }));
      throw error;
    }
  };

  // Update user attributes
  const updateUser = async ({ name, phoneNumber, role }: UpdateUserParams) => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true, error: null }));
      
      const cognitoUser = await Auth.currentAuthenticatedUser();
      
      const attributes: Record<string, string> = {};
      if (name) attributes.name = name;
      if (phoneNumber) attributes.phone_number = phoneNumber;
      if (role) attributes['custom:role'] = role;
      
      await Auth.updateUserAttributes(cognitoUser, attributes);
      
      // Get updated user data
      const updatedUser = await extractUserFromCognitoUser(cognitoUser);
      
      setAuthState(prev => ({ 
        ...prev, 
        user: updatedUser,
        isLoading: false,
      }));
    } catch (error) {
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: error as Error 
      }));
      throw error;
    }
  };

  // Provide the authentication context value
  const contextValue: AuthContextType = {
    ...authState,
    signUp,
    confirmSignUp,
    signIn,
    signOut,
    forgotPassword,
    resetPassword,
    updateUser,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the authentication context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
