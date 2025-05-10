# Pluk App - Project Structure and Development Rules

## Multi-Platform Architecture

The Pluk ecosystem consists of four distinct but interconnected applications:

1. **Consumer App** - Mobile app for end users to browse and purchase produce
2. **Farmer Portal** - Mobile and web dashboard for farmers to manage inventory and orders
3. **Driver App** - Mobile app for delivery drivers
4. **Admin Portal** - Web dashboard for Pluk administrators

## Folder Structure

```
/pluk-ecosystem
├── amplify/                  # Shared AWS Amplify configuration
│   └── backend/
│       └── api/
│           └── plukapi/
│               └── schema/   # GraphQL schemas organized by domain
│
├── packages/                 # Shared packages and libraries
│   ├── api/                  # Shared API layer
│   │   ├── graphql/          # Generated GraphQL types and hooks
│   │   ├── mutations/        # Custom mutation hooks
│   │   ├── queries/          # Custom query hooks
│   │   └── subscriptions/    # Custom subscription hooks
│   │
│   ├── ui/                   # Shared UI components
│   │   ├── common/           # Generic UI components
│   │   ├── produce/          # Produce-specific components
│   │   ├── farm/             # Farm-specific components
│   │   ├── cart/             # Cart-related components
│   │   └── forms/            # Form components
│   │
│   ├── styles/               # Shared styling system
│   │   ├── theme.ts          # Global theme configuration
│   │   ├── tokens.ts         # Design tokens (spacing, colors, etc.)
│   │   └── typography.ts     # Typography styles
│   │
│   ├── animations/           # Shared animation utilities
│   │   ├── transitions.ts    # Common transitions
│   │   ├── gestures.ts       # Gesture animations
│   │   └── lottie/           # Lottie animation files
│   │
│   ├── hooks/                # Shared custom hooks
│   │   ├── useLocation.ts
│   │   ├── useAuth.ts
│   │   └── useFreshness.ts
│   │
│   ├── services/             # Shared business logic
│   │   ├── auth.ts
│   │   ├── analytics.ts
│   │   └── notifications.ts
│   │
│   ├── store/                # Shared state management
│   │   ├── produceStore.ts
│   │   └── authStore.ts
│   │
│   ├── types/                # Shared TypeScript definitions
│   │   ├── api.ts
│   │   └── models.ts
│   │
│   └── utils/                # Shared utility functions
│       ├── date.ts
│       ├── format.ts
│       ├── validation.ts
│       └── sync.ts
│
├── apps/                     # Application-specific code
│   ├── consumer/             # Consumer mobile app
│   │   ├── .expo/            # Expo configuration
│   │   ├── assets/           # App-specific assets
│   │   │   ├── fonts/
│   │   │   ├── images/
│   │   │   └── animations/
│   │   │
│   │   ├── src/
│   │   │   ├── components/   # App-specific components
│   │   │   ├── navigation/   # Navigation structure
│   │   │   │   └── AppNavigator.tsx
│   │   │   ├── screens/      # App screens
│   │   │   │   ├── auth/
│   │   │   │   ├── home/
│   │   │   │   ├── explore/
│   │   │   │   ├── farm/
│   │   │   │   ├── product/
│   │   │   │   ├── cart/
│   │   │   │   ├── orders/
│   │   │   │   └── profile/
│   │   │   ├── services/     # App-specific services
│   │   │   │   ├── smartCart.ts
│   │   │   │   └── userPreferences.ts
│   │   │   └── store/        # App-specific state
│   │   │       ├── cartStore.ts
│   │   │       └── userStore.ts
│   │   │
│   │   ├── App.tsx           # Entry point
│   │   ├── app.json          # Expo configuration
│   │   └── package.json      # Dependencies
│   │
│   ├── farmer-portal/        # Farmer portal (mobile and web)
│   │   ├── mobile/           # Mobile version
│   │   │   ├── .expo/
│   │   │   ├── assets/
│   │   │   ├── src/
│   │   │   │   ├── components/
│   │   │   │   ├── navigation/
│   │   │   │   ├── screens/
│   │   │   │   │   ├── auth/
│   │   │   │   │   ├── dashboard/
│   │   │   │   │   ├── inventory/
│   │   │   │   │   ├── listings/
│   │   │   │   │   ├── social/
│   │   │   │   │   └── orders/
│   │   │   │   ├── services/
│   │   │   │   └── store/
│   │   │   ├── App.tsx
│   │   │   └── package.json
│   │   │
│   │   └── web/              # Web version
│   │       ├── public/
│   │       ├── src/
│   │       │   ├── components/
│   │       │   ├── pages/
│   │       │   ├── services/
│   │       │   └── store/
│   │       ├── index.html
│   │       └── package.json
│   │
│   ├── driver/               # Driver mobile app
│   │   ├── .expo/
│   │   ├── assets/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── navigation/
│   │   │   ├── screens/
│   │   │   │   ├── auth/
│   │   │   │   ├── dashboard/
│   │   │   │   ├── delivery/
│   │   │   │   └── earnings/
│   │   │   ├── services/
│   │   │   └── store/
│   │   ├── App.tsx
│   │   └── package.json
│   │
│   └── admin-portal/         # Admin web dashboard
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   │   ├── dashboard/
│       │   │   ├── users/
│       │   │   ├── farms/
│       │   │   ├── drivers/
│       │   │   ├── orders/
│       │   │   └── analytics/
│       │   ├── services/
│       │   └── store/
│       ├── index.html
│       └── package.json
│
├── tools/                    # Development and build tools
│   ├── scripts/              # Build and deployment scripts
│   ├── generators/           # Code generators
│   └── mock-data/            # Mock data for development
│
├── docs/                     # Documentation
│   ├── architecture/
│   ├── api/
│   └── user-guides/
│
├── tsconfig.base.json        # Base TypeScript configuration
├── package.json              # Root dependencies and scripts
└── README.md                 # Project documentation
```

## Schema Organization

```
/schemas
├── core/
│   ├── schema.graphql        # Main schema that imports all others
│   ├── directives.graphql    # Custom directives and scalars
│   └── enums.graphql         # Common enums used across domains
│
├── produce/
│   ├── category.graphql      # ProduceCategory model
│   ├── subcategory.graphql   # ProduceSubcategory model
│   ├── type.graphql          # ProduceType model
│   ├── variety.graphql       # ProduceVariety model
│   └── nutrient.graphql      # ProduceNutrient model
│
├── user/
│   ├── user.graphql          # User model
│   ├── preferences.graphql   # UserPreferences model
│   ├── notification.graphql  # Notification model
│   └── address.graphql       # Address type
│
├── farm/
│   ├── farm.graphql          # Farm model
│   ├── zone.graphql          # Zone model
│   ├── schedule.graphql      # MarketSchedule model
│   └── metrics.graphql       # FarmMetrics model
│
├── inventory/
│   ├── batch.graphql         # InventoryBatch model
│   ├── transaction.graphql   # InventoryTransaction model
│   └── pre-harvest.graphql   # PreHarvestListing model
│
├── listing/
│   ├── listing.graphql       # ProduceListing model
│   └── review.graphql        # ListingReview model
│
├── social/
│   ├── post.graphql          # FarmPost model
│   ├── comment.graphql       # PostComment model
│   ├── like.graphql          # PostLike and CommentLike models
│   └── follow.graphql        # FarmFollow model
│
├── commerce/
│   ├── cart.graphql          # Cart and CartItem models
│   ├── order.graphql         # Order and OrderItem models
│   ├── payment.graphql       # Payment model
│   └── promotion.graphql     # Promotion model
│
├── shopping/
│   ├── list.graphql          # ShoppingList model
│   └── smart-cart.graphql    # SmartCartConfig model
│
└── delivery/
    ├── driver.graphql        # Driver model
    ├── delivery.graphql      # Delivery model
    ├── route.graphql         # DeliveryRoute model
    └── location.graphql      # Location model
```

## Development Rules

### 1. Technology Stack Rules

#### Frontend
- **React Native with Expo**: All UI development must use React Native with Expo SDK
- **TypeScript**: All code must be written in TypeScript with proper type definitions
- **Zustand**: Use Zustand for state management (no Redux)
- **MMKV**: Use MMKV for local storage (no AsyncStorage)
- **React Navigation 6+**: Use React Navigation for all navigation needs
- **React Native Paper + Custom Components**: Use React Native Paper for UI components, extended with custom components
- **Expo AV**: Use for audio/video playback
- **React Native Reanimated**: Use for animations
- **React Native Maps**: Use for map functionality
- **Expo Image**: Use for optimized image loading and caching

#### Backend
- **AWS Amplify**: Use AWS Amplify for all backend services
  - AppSync for GraphQL API
  - DynamoDB for database
  - Cognito for authentication
  - S3 for file storage
  - Lambda for serverless functions

### 2. Data Management Rules

- **Static Data Strategy**: Produce hierarchy and other static data should use a local-first approach with background sync
- **Dynamic Data Strategy**: Listings, inventory, and other dynamic data should use a server-first approach with local caching
- **Real-time Data Strategy**: Orders, cart, and delivery should use GraphQL subscriptions for real-time updates
- **Offline Support**: All critical app functions must work offline with proper sync when connectivity is restored
- **Caching Strategy**: Use appropriate TTL (Time To Live) settings for different data types:
  - Static data: 24 hours
  - Dynamic data: 1 hour
  - Real-time data: No cache, always fetch fresh

### 3. Code Organization Rules

- **Domain-Driven Design**: Organize code by business domain rather than technical function
- **Component Structure**: Each component should have:
  - A clear, single responsibility
  - Proper TypeScript interfaces
  - Styled components defined in the same file or in a separate styles.ts file
  - Unit tests in a parallel __tests__ directory
- **Screen Structure**: Each screen should:
  - Be focused on a single view/purpose
  - Use components from the components directory
  - Handle navigation and state management
  - Not contain business logic (move to services or hooks)
- **Naming Conventions**:
  - Components: PascalCase (e.g., ProduceCard.tsx)
  - Hooks: camelCase with 'use' prefix (e.g., useCart.ts)
  - Utilities: camelCase (e.g., formatCurrency.ts)
  - Constants: UPPER_SNAKE_CASE for values, PascalCase for objects
  - Types/Interfaces: PascalCase with 'I' prefix for interfaces (e.g., IUser)
- **File Organization**:
  - Group related files in feature folders
  - Keep files small and focused (max 300 lines)
  - Use index.ts files for clean exports
  - Co-locate tests with implementation files

### 4. Performance Rules

- **Lazy Loading**: Use lazy loading for screens and heavy components
- **Memoization**: Use React.memo, useMemo, and useCallback appropriately to prevent unnecessary re-renders
- **Image Optimization**: Optimize all images before loading, use proper caching
- **List Virtualization**: Use FlatList or SectionList for all lists, never map directly to ScrollView
- **Bundle Size**: Monitor and optimize bundle size, use code splitting where possible
- **Animation Performance**: Use native driver for animations whenever possible
- **Render Optimization**: Implement shouldComponentUpdate or React.memo for complex components
- **Asset Preloading**: Preload critical assets during app startup
- **Memory Management**: Properly clean up resources, listeners, and subscriptions

### 5. Security Rules

- **Authentication**: All API calls must be authenticated through Cognito
- **Authorization**: Use field-level authorization in GraphQL schema
- **Sensitive Data**: Never store sensitive data in local storage without encryption
- **API Keys**: Never hardcode API keys or secrets in the codebase
- **Input Validation**: Validate all user inputs on both client and server side
- **Deep Linking**: Validate all deep links to prevent security vulnerabilities

### 6. Testing Rules

- **Unit Tests**: Write unit tests for all business logic using Jest
- **Component Tests**: Test components with React Native Testing Library
- **E2E Tests**: Use Detox for end-to-end testing of critical flows
- **Test Coverage**: Maintain at least 70% test coverage for core functionality
- **Mocking**: Properly mock external dependencies in tests

### 7. Documentation Rules

- **Code Comments**: Use JSDoc style comments for functions and components
- **README**: Maintain up-to-date README with setup instructions
- **API Documentation**: Document all API endpoints and models
- **Storybook**: Use Storybook for component documentation and visual testing

### 8. Feature-Specific Rules

#### Social Features
- All farm posts must support image and video content
- Comments must support text only (no rich media)
- Pre-harvest listings must be linkable from social posts

#### Inventory Management
- All inventory batches must track planting date, harvest date, and expiration date
- Freshness indicators must be calculated based on harvest date and storage conditions
- Pre-harvest listings must include estimated harvest date with +/- range

#### Shopping Experience
- Shopping lists must support both manual creation and smart generation
- Smart cart must consider user preferences, farm ratings, and produce freshness
- Instant availability must be clearly indicated with visual indicators

#### Notifications
- All notifications must be categorizable and filterable
- Users must be able to set notification preferences by category
- Critical notifications (order status, delivery) must use push notifications

### 9. Deployment Rules

- **Environment Management**: Maintain separate dev, staging, and production environments
- **CI/CD**: Use GitHub Actions for continuous integration and deployment
- **Version Control**: Follow Git Flow branching strategy
- **Code Reviews**: Require code reviews for all PRs before merging
- **Release Process**: Use semantic versioning and maintain a changelog

### 10. Code Quality and Linting Rules

- **ESLint Configuration**: Use a strict ESLint configuration with the following plugins:
  - typescript-eslint for TypeScript-specific rules
  - react-hooks for enforcing React hooks rules
  - import for controlling import/export syntax
  - prettier for code formatting
- **Pre-commit Hooks**: Use Husky to run linting and tests before commits
- **TypeScript Strict Mode**: Enable strict mode in tsconfig.json
- **Code Reviews**: Require at least one approval before merging PRs
- **Pull Request Templates**: Use templates to ensure proper documentation
- **VSCode Configuration**: Share consistent editor settings via .vscode/settings.json

### 11. Styling and Theming Rules

- **Tamagui**: Use Tamagui for cross-platform styling and component system
- **Theme Provider**: Wrap the app with Tamagui's Provider for consistent styling
- **Design Tokens**: Define all design values using Tamagui's tokens system
- **Responsive Design**: Use Tamagui's responsive utilities for adaptive layouts
- **Dark Mode Support**: Implement themes with Tamagui's theme system
- **Accessibility**: Ensure proper contrast ratios and touch target sizes using Tamagui's accessibility features
- **Animation Integration**: Leverage Tamagui's built-in animation system that works with Reanimated

### 12. Animation Rules

- **Performance First**: Use native driver whenever possible
- **Gesture Handling**: Use React Native Gesture Handler for all gestures
- **Animation Library Hierarchy**:
  - Use Moti for simple animations
  - Use Reanimated directly for complex animations
  - Use Lottie for pre-built animations
  - Use Skia for custom graphics and effects
- **Animation Composition**: Break complex animations into reusable parts
- **Accessibility**: Ensure animations can be disabled for users who prefer reduced motion

## Required Packages

```json
{
  "dependencies": {
    "@aws-amplify/ui-react-native": "^1.0.0",
    "@expo/vector-icons": "^13.0.0",
    "@react-native-async-storage/async-storage": "^1.17.0",
    "@react-native-community/netinfo": "^9.0.0",
    "@react-native-masked-view/masked-view": "^0.2.0",
    "@react-navigation/bottom-tabs": "^6.5.0",
    "@react-navigation/material-top-tabs": "^6.5.0",
    "@react-navigation/native": "^6.1.0",
    "@react-navigation/stack": "^6.3.0",
    "@tamagui/animations-react-native": "^1.0.0",
    "@tamagui/babel-plugin": "^1.0.0",
    "@tamagui/config": "^1.0.0",
    "@tamagui/core": "^1.0.0",
    "@tamagui/font-inter": "^1.0.0",
    "@tamagui/lucide-icons": "^1.0.0",
    "@tamagui/shorthands": "^1.0.0",
    "@tamagui/theme-base": "^1.0.0",
    "aws-amplify": "^5.0.0",
    "date-fns": "^2.29.0",
    "expo": "~47.0.0",
    "expo-av": "~13.0.0",
    "expo-camera": "~13.1.0",
    "expo-file-system": "~15.1.0",
    "expo-image": "~1.0.0",
    "expo-image-picker": "~14.0.0",
    "expo-location": "~15.0.0",
    "expo-notifications": "~0.17.0",
    "expo-status-bar": "~1.4.0",
    "expo-updates": "~0.15.0",
    "formik": "^2.2.0",
    "lottie-react-native": "^5.1.0",
    "moti": "^0.25.0",
    "react": "18.1.0",
    "react-native": "0.70.5",
    "react-native-gesture-handler": "~2.8.0",
    "react-native-maps": "1.3.2",
    "react-native-mmkv": "^2.5.0",
    "react-native-reanimated": "~2.12.0",
    "react-native-safe-area-context": "4.4.1",
    "react-native-screens": "~3.18.0",
    "react-native-skia": "^0.1.0",
    "react-native-svg": "13.4.0",
    "tamagui": "^1.0.0",
    "yup": "^0.32.0",
    "zustand": "^4.1.0"
  },

  "devDependencies": {
    "@babel/core": "^7.19.0",
    "@testing-library/react-native": "^11.5.0",
    "@types/jest": "^29.2.0",
    "@types/react": "~18.0.0",
    "@types/react-native": "~0.70.0",
    "@types/styled-components": "^5.1.0",
    "@types/styled-components-react-native": "^5.2.0",
    "@typescript-eslint/eslint-plugin": "^5.0.0",
    "@typescript-eslint/parser": "^5.0.0",
    "detox": "^20.0.0",
    "eslint": "^8.0.0",
    "eslint-config-prettier": "^8.0.0",
    "eslint-plugin-import": "^2.0.0",
    "eslint-plugin-prettier": "^4.0.0",
    "eslint-plugin-react": "^7.0.0",
    "eslint-plugin-react-hooks": "^4.0.0",
    "husky": "^8.0.0",
    "jest": "^29.2.0",
    "jest-expo": "^47.0.0",
    "lint-staged": "^13.0.0",
    "prettier": "^2.0.0",
    "react-test-renderer": "18.1.0",
    "typescript": "^4.9.0"
  }
}
```

This document serves as the definitive guide for the Pluk app development. All code, features, and architectural decisions must adhere to these rules to ensure consistency, maintainability, and alignment with the project's goals.
