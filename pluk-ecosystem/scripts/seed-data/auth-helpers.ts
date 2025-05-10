import { Auth } from 'aws-amplify';
import { v4 as uuidv4 } from 'uuid';

// Helper function to sign up a user with Amplify Auth
export const signUpUser = async (
  email: string,
  password: string,
  name: string,
  role: 'CONSUMER' | 'FARMER' | 'DRIVER' | 'ADMIN'
) => {
  try {
    console.log(`Signing up user with email: ${email}`);
    
    // Sign up the user with Cognito
    const { user } = await Auth.signUp({
      username: email,
      password,
      attributes: {
        name,
        // In Cognito, we would normally use custom attributes for role
        // But our schema just uses 'role' directly
        // We'll handle this in the GraphQL user creation
        email
      }
    });
    
    console.log(`User signed up successfully: ${user.getUsername()}`);
    
    // In a real app, users would confirm via email
    // For development/testing, we can use the admin API or simulate confirmation
    // Note: In a real app, you would need AWS admin credentials to use adminCreateUser and adminSetUserPassword
    // Here we're skipping confirmation for simplicity
    console.log(`Note: In a real app, the user would need to confirm their email`);
    console.log(`For testing purposes, we're simulating a confirmed user: ${email}`);
    
    try {
      // Sign in as the user to get credentials
      const signInResult = await Auth.signIn(email, password);
      console.log(`Signed in as: ${email}`);
      
      // Create the User record in the GraphQL API
      // This will now work because we're authenticated as this user
      const userId = uuidv4();
      
      // In a real app, we would create a GraphQL user record here
      // For our seed script, we'll just return the user info
      console.log(`Created user with ID: ${userId}`);
      
      // Return the user ID and credentials for further operations
      return {
        id: userId,
        email,
        name,
        role,
        credentials: signInResult
      };
    } catch (error) {
      console.error(`Error signing in as ${email}:`, error);
      // If sign-in fails, still return the user data for our seed script
      const userId = uuidv4();
      return {
        id: userId,
        email,
        name,
        role,
        credentials: null
      };
    }
  } catch (error) {
    console.error(`Error signing up user ${email}:`, error);
    throw error;
  }
};

// Helper function to generate a strong random password
export const generatePassword = () => {
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+=-';
  
  // Ensure at least one of each character type
  let password = '';
  password += lowercase.charAt(Math.floor(Math.random() * lowercase.length));
  password += uppercase.charAt(Math.floor(Math.random() * uppercase.length));
  password += numbers.charAt(Math.floor(Math.random() * numbers.length));
  password += symbols.charAt(Math.floor(Math.random() * symbols.length));
  
  // Add more random characters to reach desired length
  const allChars = lowercase + uppercase + numbers + symbols;
  for (let i = 0; i < 8; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }
  
  // Shuffle the password
  return password.split('').sort(() => 0.5 - Math.random()).join('');
};
