# Pluk Ecosystem

A comprehensive farm-to-consumer marketplace platform built with React Native, Expo, and AWS Amplify.

## Project Overview

The Pluk ecosystem consists of four interconnected applications:

1. **Consumer App** - Mobile app for end users to browse and purchase produce.
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

The project follows a monorepo structure with shared packages:

```
pluk-ecosystem/
├── apps/
│   ├── consumer/       # Consumer mobile app
│   ├── farmer/         # Farmer portal (mobile & web)
│   ├── driver/         # Driver mobile app
│   └── admin/          # Admin web dashboard
├── packages/
│   ├── api/            # GraphQL operations
│   ├── ui/             # Shared UI components
│   ├── styles/         # Tamagui theme and styles
│   ├── animations/     # Shared animations
│   ├── hooks/          # React hooks
│   ├── services/       # Shared services
│   ├── store/          # Zustand stores
│   ├── types/          # TypeScript types
│   └── utils/          # Utility functions
└── amplify/            # AWS Amplify configuration
```

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
- Yarn
- Expo CLI
- AWS Account
- Amplify CLI

### Installation

1. Clone the repository
   ```
   git clone https://github.com/your-username/pluk-ecosystem.git
   cd pluk-ecosystem
   ```

2. Install dependencies
   ```
   yarn install
   ```

3. Initialize Amplify
   ```
   amplify init
   ```

4. Push the backend resources
   ```
   amplify push
   ```

5. Start the development server
   ```
   yarn start
   ```

   **Important Note:** For the consumer app specifically, always use:
   ```
   npm start
   ```

## Documentation

- [Project Structure and Rules](./project-structure-and-rules.md)
- [Implementation Plan](./implementation-plan.md)
- [Data Management Strategy](./data-management-strategy.md)
- [GraphQL Schema Documentation](./pluk-ecosystem/amplify/backend/api/plukapi/README.md)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
