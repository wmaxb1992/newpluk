# Pluk Ecosystem

A comprehensive farm-to-consumer marketplace platform built with React Native, Expo, and AWS Amplify.

## Project Overview

The Pluk ecosystem consists of four interconnected applications:

1. **Consumer App (fresh-pluk)** - Mobile app for end users to browse and purchase produce, built with Expo and AWS Amplify.
2. **Farmer Portal** - Mobile and web dashboard for farmers to manage inventory and orders.
3. **Driver App** - Mobile app for delivery drivers.
4. **Admin Portal** - Web dashboard for Pluk administrators.

## Tech Stack

### Frontend
- React Native with Expo
- Tamagui for cross-platform styling
- Zustand for state management
- MMKV for high-performance local storage
- React Navigation

### Backend
- AWS Amplify (AppSync, DynamoDB, Cognito, S3, Lambda)
- GraphQL API with domain-driven schema design

## Project Structure

The project has been transitioned from a monorepo to a polyrepo structure. Each application is now a standalone repository with its own dependencies and shared components.

```
/
├── fresh-pluk/        # Consumer mobile app (new implementation)
│   ├── src/            # App-specific code
│   │   ├── config/     # Amplify and other configuration
│   │   ├── graphql/    # GraphQL operations
│   │   ├── screens/    # App screens
│   │   └── utils/      # Utility functions
│   ├── App.tsx         # Root component
│   └── package.json    # App-specific dependencies
│
├── farmer-dashboard/   # Farmer portal (mobile & web)
│   ├── shared/         # Local copies of shared components
│   ├── src/            # App-specific code
│   └── package.json    # App-specific dependencies
│
├── driver-dashboard/   # Driver mobile app
│   ├── shared/         # Local copies of shared components
│   ├── src/            # App-specific code
│   └── package.json    # App-specific dependencies
│
└── pluk-ecosystem/     # Shared infrastructure and backend
    ├── packages/       # Original shared packages
    └── amplify/        # AWS Amplify configuration
```

### Polyrepo Structure Benefits

- **Independent Development**: Each app can be developed, versioned, and deployed independently
- **Simplified Dependencies**: Each app manages its own dependencies
- **Clearer Ownership**: Clear boundaries between different applications
- **Faster Builds**: Build only what you need for a specific app
- **Technology Flexibility**: Freedom to use different technologies in each app as needed

## Key Features

- **Pre-harvest Listings**: Farms can post items that haven't been harvested yet
- **Inventory Batch Tracking**: Track inventory with detailed planting and harvest information
- **Freshness Indicators**: Products show days since harvest and freshness scores
- **Smart Cart Generation**: Automatically populate cart based on user preferences
- **Farm Social Features**: Posts, comments, and follows to connect consumers with farms
- **Real-time Delivery Tracking**: Track order status and delivery in real-time

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or Yarn
- Expo CLI
- AWS Account
- Amplify CLI

### Running Individual Apps

Each app is now a standalone application with its own dependencies and configuration.

#### Consumer App

1. Navigate to the consumer app directory
   ```
   cd consumer-app
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

#### Farmer Dashboard

1. Navigate to the farmer dashboard directory
   ```
   cd farmer-dashboard
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

#### Driver Dashboard

1. Navigate to the driver dashboard directory
   ```
   cd driver-dashboard
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

### Quick Start Script

You can also use the provided script to run any app:

```
./run-app.sh consumer|farmer|driver
```

## Documentation

### General Documentation
- [Project Structure and Rules](./project-structure-and-rules.md)
- [Implementation Plan](./implementation-plan.md)
- [Data Management Strategy](./data-management-strategy.md)

### App-Specific Documentation
- [Consumer App](./consumer-app/README.md)
- [Farmer Dashboard](./farmer-dashboard/README.md)
- [Driver Dashboard](./driver-dashboard/README.md)

### Backend Documentation
- [GraphQL Schema Documentation](./pluk-ecosystem/amplify/backend/api/plukapi/README.md)

### Polyrepo Transition
- [Scripts for Polyrepo Management](./scripts/README.md)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
