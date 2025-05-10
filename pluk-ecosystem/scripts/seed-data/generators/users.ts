import { faker } from '@faker-js/faker';
import { signUpUser, generatePassword } from '../auth-helpers';
import { seedConfig } from '../config';
import { User } from '../types';

// Generate users
export const generateUsers = async (count: number = seedConfig.userCount) => {
  console.log(`Generating ${count} users...`);
  console.log('User count from config:', seedConfig.userCount);
  
  const users: User[] = [];
  
  // Create users with specific roles to ensure we have all types
  const roles: ('CONSUMER' | 'FARMER' | 'DRIVER' | 'ADMIN')[] = ['CONSUMER', 'FARMER', 'DRIVER', 'ADMIN'];
  
  // First create one user of each role to ensure we have them
  for (let i = 0; i < roles.length; i++) {
    const role = roles[i];
    const email = `test-${role.toLowerCase()}@example.com`;
    const name = `Test ${role.charAt(0) + role.slice(1).toLowerCase()}`;
    const password = generatePassword();
    
    console.log(`Attempting to create ${role} user with email: ${email}`);
    
    try {
      const userResult = await signUpUser(email, password, name, role);
      
      const user: User = {
        id: userResult.id,
        email: userResult.email,
        name: userResult.name,
        role: userResult.role
      };
      
      users.push(user);
      console.log(`Created ${role} user: ${user.name} (${user.id})`);
    } catch (error) {
      console.error(`Failed to create ${role} user:`, error);
      console.error('Error details:', JSON.stringify(error, null, 2));
    }
  }
  
  // Then create the remaining users with random roles
  for (let i = roles.length; i < count; i++) {
    const role = roles[Math.floor(Math.random() * roles.length)];
    const email = `user-${i}@example.com`;
    const name = faker.person.fullName();
    const password = generatePassword();
    
    try {
      const userResult = await signUpUser(email, password, name, role);
      
      const user: User = {
        id: userResult.id,
        email: userResult.email,
        name: userResult.name,
        role: userResult.role
      };
      
      users.push(user);
      console.log(`Created user: ${user.name} (${user.id})`);
    } catch (error) {
      console.error(`Failed to create user ${i + 1}:`, error);
    }
  }
  
  console.log(`Successfully created ${users.length} users`);
  return users;
};
