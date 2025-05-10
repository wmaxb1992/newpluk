# Pluk Ecosystem Implementation Plan

## Overview

The Pluk ecosystem consists of four interconnected applications sharing a common backend:

1. **Consumer App** - Mobile app for end users to browse and purchase produce
2. **Farmer Portal** - Mobile and web dashboard for farmers to manage inventory and orders
3. **Driver App** - Mobile app for delivery drivers
4. **Admin Portal** - Web dashboard for Pluk administrators

## Phase 1: Foundation (Weeks 1-2)

### 1. Monorepo Setup

```bash
# Create the base directory structure
mkdir -p pluk-ecosystem/{packages/{api,ui,styles,animations,hooks,services,store,types,utils},apps/{consumer,farmer-portal/{mobile,web},driver,admin-portal},tools/{scripts,generators,mock-data},docs/{architecture,api,user-guides}}

# Initialize Git repository
cd pluk-ecosystem
git init
```

### 2. Configure Monorepo Management

Set up Yarn workspaces for efficient package management:

```json
// package.json
{
  "name": "pluk-ecosystem",
  "private": true,
  "workspaces": [
    "packages/*",
    "apps/*",
    "apps/farmer-portal/*"
  ],
  "scripts": {
    "start:consumer": "yarn workspace consumer start",
    "start:farmer-mobile": "yarn workspace farmer-portal-mobile start",
    "start:farmer-web": "yarn workspace farmer-portal-web start",
    "start:driver": "yarn workspace driver start",
    "start:admin": "yarn workspace admin-portal start",
    "lint": "eslint --ext .js,.jsx,.ts,.tsx ."
  }
}
```

### 3. Shared TypeScript Configuration

```json
// tsconfig.base.json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "esnext",
    "moduleResolution": "node",
    "jsx": "react-native",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "baseUrl": ".",
    "paths": {
      "@pluk/api": ["packages/api/src"],
      "@pluk/ui": ["packages/ui/src"],
      "@pluk/styles": ["packages/styles/src"],
      "@pluk/hooks": ["packages/hooks/src"],
      "@pluk/services": ["packages/services/src"],
      "@pluk/store": ["packages/store/src"],
      "@pluk/types": ["packages/types/src"],
      "@pluk/utils": ["packages/utils/src"]
    }
  }
}
```

### 4. Set Up ESLint and Prettier

```javascript
// .eslintrc.js
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
```

```json
// .prettierrc
{
  "singleQuote": true,
  "trailingComma": "es5",
  "printWidth": 100,
  "tabWidth": 2,
  "semi": true,
  "bracketSpacing": true,
  "arrowParens": "avoid"
}
```

### 5. Set Up Husky for Pre-commit Hooks

```json
// package.json additions
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

## Phase 2: AWS Amplify Setup (Weeks 2-3)

### 1. Initialize Amplify Project

```bash
# Install Amplify CLI
npm install -g @aws-amplify/cli

# Initialize Amplify
amplify init

# Add authentication
amplify add auth

# Add API
amplify add api

# Add storage
amplify add storage
```

### 2. Reorganize GraphQL Schemas

Reorganize schemas into domain-based structure:

```
amplify/backend/api/plukapi/schema/
├── core/
│   ├── schema.graphql
│   ├── directives.graphql
│   └── enums.graphql
├── produce/
│   ├── category.graphql
│   ├── subcategory.graphql
│   ├── type.graphql
│   ├── variety.graphql
│   └── nutrient.graphql
├── user/
│   ├── user.graphql
│   ├── preferences.graphql
│   └── address.graphql
├── farm/
│   ├── farm.graphql
│   ├── zone.graphql
│   └── schedule.graphql
├── inventory/
│   ├── batch.graphql
│   └── pre-harvest.graphql
├── social/
│   ├── post.graphql
│   ├── comment.graphql
│   └── follow.graphql
├── commerce/
│   ├── cart.graphql
│   ├── order.graphql
│   └── payment.graphql
└── delivery/
    ├── driver.graphql
    ├── delivery.graphql
    └── location.graphql
```

### 3. Configure Authorization Rules

Example authorization rules for different user types:

```graphql
# User model with multi-auth
type User 
  @model 
  @auth(rules: [
    { allow: owner },
    { allow: groups, groups: ["Farmers"], operations: [read] },
    { allow: groups, groups: ["Drivers"], operations: [read] },
    { allow: groups, groups: ["Admins"] }
  ]) {
  id: ID!
  username: String!
  email: String!
  # Other fields
}

# Farm model with farmer-specific permissions
type Farm 
  @model 
  @auth(rules: [
    { allow: owner },
    { allow: groups, groups: ["Admins"] },
    { allow: public, operations: [read] }
  ]) {
  id: ID!
  name: String!
  # Other fields
}
```

## Phase 3: Shared Packages (Weeks 3-4)

### 1. API Package

```typescript
// packages/api/src/index.ts
export * from './graphql';
export * from './mutations';
export * from './queries';
export * from './subscriptions';
```

### 2. UI Package with Tamagui

```typescript
// packages/ui/src/index.ts
export * from './common';
export * from './produce';
export * from './farm';
export * from './cart';
export * from './forms';
```

### 3. Tamagui Configuration

```typescript
// packages/ui/src/tamagui.config.ts
import { createTamagui } from 'tamagui'
import { createInterFont } from '@tamagui/font-inter'
import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/theme-base'
import { createAnimations } from '@tamagui/animations-react-native'

const interFont = createInterFont()

// Define custom colors for Pluk
const plukColors = {
  green1: '#E7F5E8',
  green2: '#C5E6C6',
  green3: '#A3D6A5',
  green4: '#81C784',
  green5: '#66BB6A',  // Primary
  green6: '#4CAF50',
  green7: '#43A047',
  green8: '#388E3C',
  green9: '#2E7D32',
  green10: '#1B5E20',
  
  orange1: '#FFF3E0',
  orange2: '#FFE0B2',
  orange3: '#FFCC80',
  orange4: '#FFB74D',
  orange5: '#FFA726',
  orange6: '#FF9800',  // Secondary
  orange7: '#FB8C00',
  orange8: '#F57C00',
  orange9: '#EF6C00',
  orange10: '#E65100',
  
  // Add other colors
  background: '#FFFFFF',
  text: '#212121',
  error: '#F44336',
  success: '#8BC34A',
  warning: '#FFC107',
  info: '#2196F3',
}

// Create custom tokens
const customTokens = {
  ...tokens,
  color: {
    ...tokens.color,
    ...plukColors,
  },
  space: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  size: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  radius: {
    xs: 2,
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    xxl: 32,
  },
}

// Create custom themes
const customThemes = {
  light: {
    ...themes.light,
    background: plukColors.background,
    color: plukColors.text,
    primary: plukColors.green6,
    secondary: plukColors.orange6,
  },
  dark: {
    ...themes.dark,
    background: '#121212',
    color: '#FFFFFF',
    primary: plukColors.green5,
    secondary: plukColors.orange5,
  },
}

// Create animations
const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 10,
    mass: 0.9,
    stiffness: 100,
  },
  lazy: {
    type: 'spring',
    damping: 20,
    stiffness: 60,
  },
  quick: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
})

const tamaguiConfig = createTamagui({
  animations,
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: false,
  themeClassNameOnRoot: false,
  shorthands,
  fonts: {
    heading: interFont,
    body: interFont,
  },
  themes: customThemes,
  tokens: customTokens,
})

export type AppConfig = typeof tamaguiConfig
export default tamaguiConfig
```

## Phase 4: Mock Data Generation (Week 4)

### 1. Create Seed Data Scripts

```typescript
// tools/mock-data/generateProduceData.ts
import { writeFileSync } from 'fs';
import { ProduceCategory, ProduceSubcategory, ProduceType, ProduceVariety } from '@pluk/types';

const categories: ProduceCategory[] = [
  {
    id: 'cat-1',
    name: 'Vegetables',
    image: 'https://example.com/vegetables.jpg',
    subcategories: ['subcat-1', 'subcat-2', 'subcat-3'],
  },
  // More categories
];

// Generate subcategories, types, varieties
// ...

// Write to JSON files
writeFileSync('./tools/mock-data/categories.json', JSON.stringify(categories, null, 2));
// Write other data files
```

### 2. Set Up Data Relationships

Ensure proper relationships between entities in mock data:

```typescript
// Example farm with related inventory batches
const farms = [
  {
    id: 'farm-1',
    name: 'Green Valley Farm',
    description: 'Organic family farm since 1982',
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    inventoryBatches: ['batch-1', 'batch-2', 'batch-3'],
    // Other fields
  },
  // More farms
];

const inventoryBatches = [
  {
    id: 'batch-1',
    farmID: 'farm-1',
    varietyID: 'variety-1',
    plantingDate: '2025-01-15',
    estimatedHarvestDate: '2025-05-01',
    actualHarvestDate: null,
    quantity: 500,
    unit: 'lb',
    status: 'GROWING',
    // Other fields
  },
  // More batches
];
```

## Phase 5: Consumer App Implementation (Weeks 5-8)

### 1. Initialize React Native Expo Project

```bash
cd apps/consumer
expo init . --template blank-typescript
```

### 2. Set Up Navigation

```typescript
// apps/consumer/src/navigation/AppNavigator.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home/HomeScreen';
import ExploreScreen from '../screens/explore/ExploreScreen';
import CartScreen from '../screens/cart/CartScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
// Import other screens

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Explore" component={ExploreScreen} />
    <Tab.Screen name="Cart" component={CartScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      {/* Add other screens */}
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
```

## Next Steps

After completing these initial phases, we will:

1. Implement the Farmer Portal (mobile and web)
2. Implement the Driver App
3. Implement the Admin Portal
4. Integrate all platforms with shared backend
5. Implement advanced features like real-time updates and offline support

## Development Guidelines

1. **Commit Frequently**: Make small, focused commits with clear messages
2. **Branch Strategy**: Use feature branches and pull requests
3. **Testing**: Write tests for all shared packages and critical features
4. **Documentation**: Document all APIs, components, and architecture decisions
5. **Code Reviews**: Require code reviews for all pull requests
6. **Performance**: Monitor and optimize performance regularly
