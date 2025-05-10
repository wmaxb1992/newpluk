# Pluk Ecosystem

A comprehensive farm-to-consumer marketplace ecosystem consisting of four interconnected applications:

1. **Consumer App** - Mobile app for end users to browse and purchase produce
2. **Farmer Portal** - Mobile and web dashboard for farmers to manage inventory and orders
3. **Driver App** - Mobile app for delivery drivers
4. **Admin Portal** - Web dashboard for Pluk administrators

## Project Structure

The Pluk ecosystem is organized as a monorepo with shared packages:

```
/pluk-ecosystem
├── packages/               # Shared packages
│   ├── api/                # GraphQL API layer
│   ├── ui/                 # Shared UI components with Tamagui
│   ├── styles/             # Theming and styling
│   ├── animations/         # Animation utilities
│   ├── hooks/              # Custom React hooks
│   ├── services/           # Business logic
│   ├── store/              # Zustand stores
│   ├── types/              # TypeScript types
│   └── utils/              # Utility functions
│
├── apps/                   # Application-specific code
│   ├── consumer/           # Consumer mobile app
│   ├── farmer-portal/      # Farmer portal (mobile and web)
│   │   ├── mobile/         # Mobile version
│   │   └── web/            # Web version
│   ├── driver/             # Driver mobile app
│   └── admin-portal/       # Admin web dashboard
│
├── tools/                  # Development tools
│   ├── scripts/            # Build and deployment scripts
│   ├── generators/         # Code generators
│   └── mock-data/          # Mock data for development
│
└── docs/                   # Documentation
    ├── architecture/       # Architecture documentation
    ├── api/                # API documentation
    └── user-guides/        # User guides
```

## Data Management Strategy

The Pluk ecosystem uses a sophisticated data management strategy to ensure optimal performance:

### Data Categories

1. **Static Data** (TTL: 24 hours)
   - Produce hierarchy (categories, subcategories, types, varieties)
   - Nutritional information
   - Geographic zones

2. **Semi-Static Data** (TTL: 1 hour)
   - Farm profiles
   - Product information
   - User preferences

3. **Dynamic Data** (TTL: 5 minutes)
   - Inventory levels
   - Prices
   - Ratings and reviews

4. **Real-Time Data** (No caching)
   - Order status
   - Cart contents
   - Driver location

### Technologies

- **Zustand**: State management with persistence
- **MMKV**: High-performance local storage
- **GraphQL**: API communication with AWS AppSync
- **Tamagui**: Cross-platform styling and components

## Getting Started

### Prerequisites

- Node.js 16+
- Yarn 1.22+
- Expo CLI
- AWS Account with Amplify CLI configured

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-org/pluk-ecosystem.git
   cd pluk-ecosystem
   ```

2. Install dependencies
   ```bash
   yarn install
   ```

3. Build shared packages
   ```bash
   yarn workspaces run build
   ```

4. Start the consumer app
   ```bash
   yarn start:consumer
   ```

## Development Workflow

1. **Shared Packages**: Develop and test shared functionality first
2. **Consumer App**: Implement consumer-facing features
3. **Farmer Portal**: Implement farmer management features
4. **Driver App**: Implement delivery management features
5. **Admin Portal**: Implement administrative features

## Key Features

### Consumer App
- Browse and purchase fresh produce
- View farm profiles and follow favorite farms
- Create shopping lists and use smart cart generation
- Reserve pre-harvest produce
- Track orders and deliveries

### Farmer Portal
- Manage inventory and track batches
- Create pre-harvest listings
- Process orders
- Post updates and engage with customers
- View sales analytics

### Driver App
- Manage delivery queue
- Optimize delivery routes
- Track earnings
- Communicate with customers

### Admin Portal
- Manage users, farms, and drivers
- Monitor system performance
- Generate reports
- Manage content and promotions

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
