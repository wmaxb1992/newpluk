# Pluk App - Farm to Consumer Marketplace
## Comprehensive App Flow and Screens Documentation

This document outlines the comprehensive user flows and screen architecture for the Pluk farm-to-consumer marketplace app, built with React Native, Expo, and AWS Amplify. The app connects consumers directly with local farms, with features for inventory tracking, pre-harvest listings, social engagement, and smart shopping.

---

## Technical Stack Overview

### Frontend
- **Framework**: React Native with Expo
- **UI Library**: React Native Paper + custom components
- **Navigation**: React Navigation 6
- **State Management**: Zustand with persistence middleware
- **Local Storage**: MMKV
- **Forms**: Formik with Yup validation
- **Maps & Location**: React Native Maps + Geolocation
- **Image Handling**: Expo Image Manipulator + Cloudinary
- **Video Playback**: Expo AV
- **Animations**: React Native Reanimated

### Backend
- **API Layer**: AWS AppSync (GraphQL)
- **Database**: Amazon DynamoDB
- **Authentication**: Amazon Cognito
- **Storage**: Amazon S3
- **Functions**: AWS Lambda
- **Push Notifications**: Amazon SNS + Expo Notifications
- **Analytics**: Amazon Pinpoint
- **Content Delivery**: Amazon CloudFront

### Data Sync Strategy
- **Static Data**: Local-first with background sync (produce hierarchy)
- **Dynamic Data**: Server-first with local caching (listings, availability)
- **Real-time Data**: GraphQL subscriptions (orders, cart, delivery status, social interactions)
- **Media Content**: Progressive loading with caching

---

## Key Features

### 1. Multi-Farm Marketplace
- Zone-based organization for efficient delivery
- Multi-farm ordering with single checkout
- Farm profiles with ratings, reviews, and social content

### 2. Produce Taxonomy and Discovery
- Hierarchical organization (categories → subcategories → types → varieties)
- Detailed variety information including nutrition, origin, and usage
- Advanced search and filtering

### 3. Inventory and Freshness Tracking
- Real-time inventory management for farms
- Harvest date tracking and freshness indicators
- Batch-level traceability from planting to delivery

### 4. Pre-Harvest Listings
- Upcoming harvest announcements with estimated dates
- Pre-order and reservation system
- Growing journey documentation with photos and updates

### 5. Instant Availability
- Special indicators for instantly available products (⚡)
- Expedited delivery for farmers market items
- Real-time inventory updates

### 6. Social Engagement
- Farm posts and updates
- Consumer comments and likes
- Farm following with notification preferences
- Educational content and behind-the-scenes glimpses

### 7. Smart Shopping
- Saved shopping lists of favorite varieties
- Smart cart generation based on preferences
- Automated best-match algorithm considering price, freshness, and reviews

### 8. Delivery Logistics
- Zone-based delivery optimization
- Real-time tracking
- Driver app with route optimization
- Delivery confirmation with photos

---

## User Roles and Flows

### Consumer Flow

#### 1. Onboarding & Authentication
- **Splash & Welcome**: App introduction with key value propositions
- **Registration/Login**: Email, social auth options, or guest browsing
- **Location Permission**: Critical for zone-based functionality
- **Zone Selection**: Choose delivery zone or auto-detect
- **Preference Setup**: Select favorite produce categories, dietary preferences
- **Notification Opt-in**: Order updates, farm posts, harvest alerts

#### 2. Home & Discovery
- **Personalized Home Feed**: Combines multiple content types:
  - Instantly available items (⚡)
  - New listings from followed farms
  - Seasonal recommendations
  - Upcoming harvests with countdown timers
  - Farm posts and updates
- **Explore Tab**: Browse by:
  - Categories → Subcategories → Types → Varieties
  - Zones and proximity
  - Seasonal collections
  - Special filters (organic, instant availability)
- **Search**: Unified search across:
  - Produce varieties
  - Farms
  - Current listings
  - Pre-harvest listings
  - Farm posts

#### 3. Farm Experience
- **Farm Profile**: Comprehensive view of a farm:
  - About section with story, practices, certifications
  - Current listings with freshness indicators
  - Pre-harvest listings with countdown timers
  - Social feed with farm posts and updates
  - Photo/video gallery
  - Reviews and ratings
  - Follow button with notification preferences
- **Farm Post View**: Detailed view of a farm update:
  - Full content with images/video
  - Comments section
  - Like and share options
  - Related produce links
  - Pre-order options for pre-harvest posts

#### 4. Product Experience
- **Listing Detail**: Rich product information:
  - Image gallery
  - Pricing and availability
  - Freshness indicator (days since harvest)
  - Farm source with quick link
  - Variety details (origin, taste profile, nutrition)
  - Add to cart button
  - Add to shopping list option
- **Pre-Harvest Listing**: Future availability view:
  - Expected harvest date with countdown
  - Growing journey photos
  - Reservation button
  - Notification opt-in
  - Farm information
- **Variety Information**: Educational content:
  - Detailed description
  - Origin and history
  - Nutritional breakdown
  - Seasonal availability chart
  - Cooking suggestions
  - Related varieties

#### 5. Shopping Tools
- **Shopping Lists**: Manage saved lists:
  - Create and name lists
  - Add items with preferences
  - Set preferred farms, organic preference
  - Specify maximum price and freshness requirements
  - One-tap add to cart
- **Smart Cart Generation**: Automated shopping:
  - Select shopping list to use
  - Configure priorities (price vs. freshness)
  - Set farm preferences
  - Review generated cart
  - Edit before checkout
- **Cart**: Multi-farm cart management:
  - Items grouped by farm and zone
  - Freshness indicators
  - Quantity adjusters
  - Delivery method selection
  - Apply promotions
  - Checkout button

#### 6. Checkout & Order
- **Checkout**: Streamlined process:
  - Delivery address selection
  - Delivery time options
  - Payment method
  - Order review by farm groups
  - Special instructions
  - Place order button
- **Order Confirmation**: Success view:
  - Order summary
  - Estimated delivery times
  - Tracking information
  - Share order option
- **Order Tracking**: Real-time updates:
  - Order status timeline
  - Map view with driver location
  - ETA countdown
  - Farm preparation status
  - Driver contact option

#### 7. User Profile & Settings
- **Profile**: Personal information hub:
  - Account details
  - Order history
  - Saved addresses
  - Payment methods
  - Followed farms
  - Shopping lists
  - Reservations
- **Notifications**: Message center:
  - Order updates
  - Delivery notifications
  - Farm posts
  - Harvest alerts for reservations
  - Promotions and announcements
- **Settings**: App configuration:
  - Notification preferences
  - Privacy settings
  - Data usage options
  - Language selection
  - Help and support

### Farmer Flow

#### 1. Farm Management
- **Dashboard**: Business overview:
  - Daily sales summary
  - Pending orders
  - Inventory alerts
  - Upcoming harvests
  - Recent reviews
  - Quick actions
- **Farm Profile Management**: Public presence:
  - Edit farm details and story
  - Update photos and gallery
  - Manage certifications
  - Set delivery zones
  - Market schedule management

#### 2. Inventory Management
- **Inventory Overview**: Stock tracking:
  - Current inventory by variety
  - Batch tracking
  - Harvest date monitoring
  - Low stock alerts
  - Expiration warnings
- **Batch Management**: Detailed tracking:
  - Create new batches
  - Record planting dates
  - Update harvest dates
  - Track quantities
  - Monitor storage conditions
  - Link to listings
- **Pre-Harvest Planning**: Future inventory:
  - Record plantings
  - Estimate harvest dates
  - Set expected quantities
  - Create pre-harvest listings
  - Manage reservations

#### 3. Listing Management
- **Active Listings**: Current offerings:
  - Create new listings
  - Link to inventory batches
  - Set pricing and availability
  - Upload photos
  - Manage instant availability status
- **Pre-Harvest Listings**: Future offerings:
  - Create from planned harvests
  - Set expected dates
  - Upload growing progress photos
  - Enable/disable reservations
  - Set deposit requirements

#### 4. Social Engagement
- **Post Creation**: Farm storytelling:
  - Create different post types
  - Upload photos and videos
  - Link to specific produce
  - Tag with relevant topics
  - Schedule posts
- **Growing Journey**: Document progress:
  - Create series of updates for specific crops
  - Show growth stages with photos
  - Educate about farming practices
  - Build anticipation for harvest
- **Community Management**: Engagement:
  - Respond to comments
  - View and manage followers
  - Send announcements
  - Share recipes and tips

#### 5. Order Management
- **Order Processing**: Fulfillment workflow:
  - View incoming orders
  - Accept/reject orders
  - Prepare items from inventory
  - Mark as ready for pickup/delivery
  - Communicate with customers
- **Delivery Coordination**: Logistics:
  - Schedule deliveries
  - Group by zone
  - Coordinate with drivers
  - Track delivery status
  - Resolve delivery issues

#### 6. Analytics & Insights
- **Sales Analytics**: Performance metrics:
  - Sales by product, category, time
  - Customer retention
  - Average order value
  - Inventory turnover
  - Seasonal trends
- **Customer Insights**: Audience understanding:
  - Customer demographics
  - Popular products
  - Review analysis
  - Engagement metrics
  - Repeat purchase patterns

### Driver Flow

#### 1. Delivery Management
- **Driver Dashboard**: Work overview:
  - Available deliveries in zone
  - Earnings summary
  - Performance metrics
  - Online/offline toggle
  - Schedule view
- **Delivery Queue**: Assignment list:
  - Pending pickups
  - Assigned deliveries
  - Optimized route suggestions
  - Estimated completion times
  - Earnings per delivery

#### 2. Pickup Process
- **Farm Pickup**: Collection workflow:
  - Navigation to farm
  - Order details and items
  - Pickup confirmation
  - Quality verification
  - Photo documentation
  - Temperature logging for sensitive items

#### 3. Delivery Process
- **Customer Delivery**: Dropoff workflow:
  - Navigation to customer
  - Delivery instructions
  - Customer contact options
  - Delivery confirmation
  - Photo documentation
  - Signature capture (when required)

#### 4. Schedule & Earnings
- **Schedule Management**: Availability settings:
  - Set working hours
  - Select zones
  - Block time off
  - View upcoming schedule
- **Earnings**: Financial tracking:
  - Daily, weekly, monthly summaries
  - Delivery breakdown
  - Tips and bonuses
  - Payment history
  - Performance incentives

---

## Detailed Screen Descriptions

### Consumer App Screens

#### Authentication & Onboarding

1. **Splash Screen**
   - App logo animation with farm imagery
   - Loading progress indicator
   - Background loading of static data
   - Version information

2. **Welcome Screen**
   - App value proposition
   - Key feature highlights with visual indicators
   - Login/Register buttons
   - Guest browsing option

3. **Registration Screen**
   - Email/password fields
   - Social login options
   - Terms and privacy policy links
   - Progressive form with minimal initial fields

4. **Onboarding Flow**
   - Location permission request with benefit explanation
   - Zone selection map with available areas
   - Dietary preference selection (vegetarian, vegan, etc.)
   - Favorite produce categories selection
   - Notification opt-in with customization options

#### Home & Discovery

1. **Home Screen**
   - **Header**:
     - Current zone indicator with change option
     - Search bar with voice input
     - Notification bell with counter
     - Profile quick access
   - **Featured Content**:
     - Personalized recommendations carousel
     - "Available Now" section with lightning bolt indicators
     - Countdown timers for upcoming harvests
     - New farm posts from followed farms
   - **Seasonal Section**:
     - Current season banner
     - In-season produce highlights
     - Special seasonal promotions
   - **Quick Access**:
     - Shopping list shortcuts
     - Recently viewed items
     - Favorite farms
   - **Bottom Navigation**:
     - Home, Explore, Lists, Cart, Profile

2. **Explore Screen**
   - **Browse Options**:
     - Categories with visual icons
     - Farms near me map view
     - Seasonal collections
     - Special filters (organic, instant, pre-harvest)
   - **Discovery Feeds**:
     - New arrivals
     - Most popular items
     - Farm stories and updates
     - Educational content

3. **Category Browsing**
   - Hierarchical navigation:
     - Categories → Subcategories → Types → Varieties
   - Rich visual representation at each level
   - Quick filters persistent across levels
   - Information cards with key details
   - Add to cart/list functionality at all levels

4. **Search Screen**
   - Unified search across all content types
   - Voice search capability
   - Search history and suggestions
   - Filter panel with multiple criteria:
     - Price range
     - Freshness (days since harvest)
     - Organic certification
     - Availability (instant, pre-order)
     - Farm ratings
   - Results grouping by type (produce, farms, posts)

#### Farm Experience

1. **Farm Profile Screen**
   - **Header**:
     - Cover photo with parallax effect
     - Farm logo and name
     - Rating and review count
     - Follow button with notification options
     - Distance from user
   - **About Section**:
     - Farm story and history
     - Farming practices
     - Certification badges with explanations
     - Photo/video gallery
   - **Content Tabs**:
     - Available Now: Current listings
     - Coming Soon: Pre-harvest listings with dates
     - Updates: Farm posts and social content
     - Info: Location, hours, contact information
     - Reviews: Customer feedback and ratings

2. **Farm Post Detail Screen**
   - Full post content with rich media
   - Image gallery with zoom
   - Video player for video content
   - Like and comment functionality
   - Related produce links
   - Share options
   - For growing updates:
     - Growth stage indicators
     - Days until harvest countdown
     - Pre-order/reserve button

3. **Farm Search & Filter Screen**
   - Map view of farms in zone
   - List view with key information
   - Filter options:
     - Distance
     - Rating
     - Organic certification
     - Product availability
     - Delivery options

#### Product Experience

1. **Product Listing Screen**
   - **Header**:
     - Image carousel with zoom
     - Farm name and logo
     - Instant availability indicator when applicable
     - Freshness badge (days since harvest)
   - **Product Details**:
     - Title and variety name
     - Price and unit information
     - Quantity selector
     - Add to cart button
     - Add to list dropdown
   - **Information Tabs**:
     - Details: Description, origin, harvest date
     - Nutrition: Nutritional facts and benefits
     - Farm: Quick info about the source farm
     - Reviews: Product-specific reviews
   - **Related Items**:
     - Similar varieties
     - Frequently bought together
     - Farm's other products

2. **Pre-Harvest Listing Screen**
   - Similar to product listing but with:
     - Expected harvest date with countdown
     - Growing journey photo timeline
     - Reservation button instead of add to cart
     - Deposit amount if applicable
     - Notification opt-in for harvest alerts
     - Link to related farm posts showing growth

3. **Variety Information Screen**
   - Comprehensive information about the variety:
     - Origin and history
     - Taste profile and characteristics
     - Growing conditions
     - Seasonal availability chart
     - Nutritional breakdown
     - Cooking and storage tips
     - Related varieties comparison

#### Shopping Tools

1. **Shopping Lists Screen**
   - List of saved shopping lists
   - Create new list button
   - Quick actions for each list:
     - Edit
     - Share
     - Generate smart cart
     - Delete
   - List preview with item count and thumbnail

2. **Shopping List Detail Screen**
   - List name and description
   - Add item button
   - Item entries with:
     - Variety name and image
     - Quantity
     - Preference indicators (organic, farm)
     - Edit/remove options
   - Smart cart generation button
   - Share list functionality

3. **Smart Cart Configuration Screen**
   - Shopping list selection
   - Priority sliders:
     - Price vs. Freshness
     - Organic preference strength
     - Local farm preference
   - Maximum price multiplier setting
   - Maximum days since harvest setting
   - Preferred/excluded farms selection
   - Generate cart button

4. **Cart Screen**
   - **Organization**:
     - Items grouped by farm and zone
     - Visual separation of instant vs. regular delivery
     - Farm headers with quick info
   - **Item Cards**:
     - Product image and name
     - Farm source
     - Price and quantity
     - Freshness indicator
     - Quantity adjuster
     - Remove button
   - **Summary**:
     - Subtotals by farm
     - Delivery fee calculation
     - Promotions and discounts
     - Total amount
   - **Actions**:
     - Checkout button
     - Save for later option
     - Continue shopping link

#### Checkout & Orders

1. **Checkout Screen**
   - **Delivery Information**:
     - Address selection/input
     - Delivery date/time options
     - Special instructions field
   - **Payment**:
     - Saved payment methods
     - Add new payment option
     - Promo code input
   - **Order Review**:
     - Items summary by farm
     - Pricing breakdown
     - Estimated delivery times
   - **Confirmation**:
     - Terms acceptance
     - Place order button

2. **Order Confirmation Screen**
   - Success animation
   - Order number and summary
   - Estimated delivery information
   - Tracking link
   - Thank you message
   - Continue shopping button
   - Share order option

3. **Orders List Screen**
   - Tab navigation:
     - Active orders
     - Past orders
     - Pre-orders/Reservations
   - Order cards with:
     - Order number and date
     - Status with color coding
     - Farm names
     - Total amount
     - Thumbnail of items
     - Tracking button when applicable

4. **Order Detail Screen**
   - **Order Information**:
     - Order number and date
     - Current status with timeline
     - Delivery address and time
   - **Items**:
     - Detailed list with images
     - Quantities and prices
     - Farm source for each item
   - **Tracking**:
     - Status updates
     - ETA information
     - Map view button when in delivery
   - **Actions**:
     - Contact options (farm, driver, support)
     - Cancel/modify options if applicable
     - Reorder button

5. **Delivery Tracking Screen**
   - Live map with driver location
   - Route visualization
   - ETA countdown
   - Driver information and photo
   - Order summary
   - Contact driver button
   - Delivery instructions reminder

#### User Profile & Settings

1. **Profile Screen**
   - Profile photo and name
   - Account information
   - Navigation to:
     - Edit profile
     - Addresses
     - Payment methods
     - Order history
     - Shopping lists
     - Followed farms
     - Reservations
     - Notifications
     - Settings
     - Help & Support
   - Logout option

2. **Notifications Center**
   - All notifications in chronological order
   - Filtering options by type:
     - Order updates
     - Delivery notifications
     - Farm posts
     - Harvest alerts
     - Promotions
   - Mark as read functionality
   - Deep linking to relevant screens

3. **Settings Screen**
   - **Preferences**:
     - Notification settings by type
     - Dark/light mode toggle
     - Language selection
   - **Data & Privacy**:
     - Data usage options
     - Sync frequency settings
     - Privacy controls
   - **Account**:
     - Change password
     - Connected accounts
     - Delete account option
   - **Support**:
     - Help center
     - Contact support
     - FAQs
     - About the app

### Farmer App Screens

#### Dashboard & Management

1. **Farmer Dashboard**
   - **Overview Metrics**:
     - Today's sales
     - Pending orders count
     - Inventory status summary
     - Recent reviews
   - **Quick Actions**:
     - Add new listing
     - Create farm post
     - View pending orders
     - Update inventory
   - **Timeline**:
     - Upcoming harvests
     - Scheduled deliveries
     - Expiring inventory alerts

2. **Farm Profile Management**
   - Edit farm details form
   - Photo/video gallery management
   - Certification upload and management
   - Delivery zone configuration
   - Market schedule calendar
   - Business hours setting

#### Inventory Management

1. **Inventory Dashboard**
   - Summary by produce type
   - Batch tracking table
   - Alerts for low stock and expiring items
   - Quick filters and search
   - Add new batch button

2. **Batch Detail Screen**
   - Complete batch information:
     - Variety and quantity
     - Planting and harvest dates
     - Storage location and conditions
     - Linked listings
   - Edit batch details
   - Create listing from batch
   - Transaction history
   - Batch status updates

3. **Pre-Harvest Planning**
   - Calendar view of plantings and harvests
   - Add new planting form
   - Harvest date prediction tools
   - Create pre-harvest listing button
   - Reservation management

#### Listing Management

1. **Listings Overview**
   - Tabs for active, scheduled, and sold-out listings
   - List/grid view toggle
   - Bulk edit options
   - Filter and search functionality
   - Add new listing button

2. **Listing Editor**
   - **Basic Info**:
     - Title and description
     - Variety selection
     - Price and unit setting
     - Quantity available
     - Organic certification toggle
   - **Details**:
     - Harvest date picker
     - Shelf life estimation
     - Storage instructions
     - Link to inventory batch
   - **Media**:
     - Photo upload and arrangement
     - Image editor with cropping
   - **Availability**:
     - Instant availability toggle
     - Delivery options
     - Listing expiration

3. **Pre-Harvest Listing Editor**
   - Similar to regular listing editor plus:
     - Expected harvest date
     - Growing stage selection
     - Reservation settings
     - Deposit amount if applicable
     - Growing update schedule

#### Social Engagement

1. **Post Creation Screen**
   - Post type selection
   - Rich text editor
   - Photo/video upload
   - Link to produce varieties
   - Tag system
   - Preview functionality
   - Schedule post option

2. **Growing Journey Creator**
   - Select crop/variety
   - Add growth stage updates
   - Photo timeline arrangement
   - Educational content addition
   - Link to pre-harvest listing
   - Publishing options

3. **Community Management**
   - Follower list and insights
   - Comment management
   - Message center for customer inquiries
   - Analytics on engagement
   - Content calendar planning

#### Order Management

1. **Orders Dashboard**
   - Tabs for new, processing, and completed orders
   - Order cards with key information
   - Batch actions for similar orders
   - Filter by date, status, and zone
   - Search by order number or customer

2. **Order Processing Screen**
   - Complete order details
   - Customer information
   - Item list with inventory source
   - Status update buttons
   - Preparation checklist
   - Communication with customer
   - Delivery scheduling

3. **Delivery Coordination**
   - Map view of deliveries by zone
   - Driver assignment interface
   - Delivery time scheduling
   - Batch delivery grouping
   - Status tracking
   - Issue resolution tools

### Driver App Screens

#### Delivery Management

1. **Driver Dashboard**
   - Online/offline toggle
   - Current earnings display
   - Performance metrics
   - Available deliveries in zone
   - Schedule overview
   - Quick access to current delivery

2. **Delivery Queue**
   - List of assigned deliveries
   - Optimized route suggestion
   - Time estimates and distances
   - Pickup/delivery grouping
   - Earnings breakdown
   - Accept/decline options

3. **Active Delivery Screen**
   - Step-by-step navigation
   - Current task instructions
   - Order details access
   - Customer/farm contact options
   - Photo documentation tools
   - Completion confirmation

4. **Delivery History**
   - Completed deliveries log
   - Performance statistics
   - Customer feedback
   - Earnings breakdown
   - Issue resolution records

---

---

## Farmer Flow

### Dashboard & Management

#### Farmer Dashboard
- Daily sales summary
- Pending orders count with alerts
- Inventory status overview
- Quick access to listings management
- Recent reviews
- Performance metrics

#### Inventory Management
- Add new product form
- Edit existing products
- Bulk operations (pricing, availability)
- Inventory levels tracking
- Set instant availability status
- Upload product images
- Seasonal planning tools

#### Order Management
- New orders list with alerts
- Processing orders queue
- Ready for pickup/delivery section
- Order history with filtering
- Order details view
- Status update controls
- Customer communication tools

#### Market Schedule
- Calendar view of markets
- Set market attendance
- Manage instant availability settings
- Inventory planning by market
- Historical performance by market

---

## Driver Flow

### Delivery Management

#### Driver Dashboard
- Availability toggle (online/offline)
- Earnings summary (today, week, month)
- Available deliveries in zone
- Performance metrics
- Quick access to active deliveries

#### Delivery Queue
- List of pending deliveries
- Delivery details preview
- Accept/decline options
- Estimated earnings per delivery
- Optimized routing suggestions

#### Active Delivery Screen
- Step-by-step navigation
- Pickup instructions
- Delivery instructions
- Customer contact options
- Photo/signature capture
- Delivery confirmation flow

#### Schedule Management
- Weekly calendar view
- Set availability hours
- Zone preferences
- Time off requests
- Earnings projections

---

## Navigation Structure

```
App
├── AuthStack
│   ├── Splash
│   ├── Login
│   ├── Register
│   └── Onboarding
│
├── ConsumerTabs
│   ├── HomeStack
│   │   ├── Home
│   │   ├── CategoryList
│   │   ├── SubcategoryList
│   │   ├── TypeList
│   │   ├── ProductDetails
│   │   └── FarmProfile
│   │
│   ├── SearchStack
│   │   ├── Search
│   │   └── SearchResults
│   │
│   ├── CartStack
│   │   ├── Cart
│   │   ├── Checkout
│   │   └── OrderConfirmation
│   │
│   ├── OrdersStack
│   │   ├── OrdersList
│   │   ├── OrderDetails
│   │   └── DeliveryTracking
│   │
│   └── ProfileStack
│       ├── Profile
│       ├── Addresses
│       ├── PaymentMethods
│       └── Settings
│
├── FarmerTabs
│   ├── DashboardStack
│   ├── InventoryStack
│   ├── OrdersStack
│   └── SettingsStack
│
└── DriverTabs
    ├── DeliveryStack
    ├── HistoryStack
    └── ProfileStack
```

---

## Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Client (React Native)                     │
│                                                                 │
│  ┌───────────────┐   ┌───────────────┐   ┌───────────────────┐  │
│  │ Zustand Stores│   │ Local Storage │   │ Apollo Client     │  │
│  │ - UI State    │◄─►│ - Static Data │◄─►│ - Dynamic Data    │  │
│  │ - App State   │   │ - Cached Data │   │ - Real-time Data  │  │
│  └───────┬───────┘   └───────────────┘   └─────────┬─────────┘  │
│          │                                         │            │
└──────────┼─────────────────────────────────────────┼────────────┘
           │                                         │
           │                                         │
┌──────────▼─────────────────────────────────────────▼────────────┐
│                        AWS Amplify                               │
│                                                                 │
│  ┌───────────────┐   ┌───────────────┐   ┌───────────────────┐  │
│  │ AppSync       │   │ DataStore     │   │ Cognito           │  │
│  │ - GraphQL API │◄─►│ - Sync Engine │◄─►│ - Authentication  │  │
│  │ - Resolvers   │   │ - Offline     │   │ - Authorization   │  │
│  └───────┬───────┘   └───────────────┘   └───────────────────┘  │
│          │                                                      │
└──────────┼──────────────────────────────────────────────────────┘
           │
           │
┌──────────▼──────────────────────────────────────────────────────┐
│                        AWS Backend                               │
│                                                                 │
│  ┌───────────────┐   ┌───────────────┐   ┌───────────────────┐  │
│  │ DynamoDB      │   │ Lambda        │   │ S3                │  │
│  │ - Data Tables │◄─►│ - Functions   │◄─►│ - Image Storage   │  │
│  │ - Indexes     │   │ - Processing  │   │ - File Storage    │  │
│  └───────────────┘   └───────────────┘   └───────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Data Sync Implementation

### Static Data (Produce Hierarchy)
- Categories, subcategories, types, and varieties are stored locally
- Initial load from local storage for instant app startup
- Background sync once per day or on demand
- Minimal network usage for taxonomy data

### Dynamic Data (Listings, Availability)
- Product listings sync every 5 minutes
- Instant availability listings sync every minute
- Cached with network priority for freshness
- Pagination for efficient loading

### Real-time Data (Orders, Cart, Delivery)
- GraphQL subscriptions for immediate updates
- Order status changes push in real-time
- Cart syncs across devices
- Driver location updates in real-time during delivery

---

## Key Features

### Instant Availability
- Lightning bolt (⚡) indicator on instantly available products
- Products from farms currently at farmers markets
- Prioritized in search and browsing
- Special checkout flow for immediate delivery

### Multi-Farm Ordering
- Cart supports items from multiple farms
- Orders automatically grouped by zone
- Single checkout process
- Optimized delivery routing

### Zone-Based System
- Geographical organization for efficient delivery
- Farms and customers associated with zones
- Delivery drivers assigned to zones
- Optimized logistics within each zone

---

## UI/UX Principles

- Clean, modern interface with emphasis on product imagery
- Farm-inspired color palette (greens, earthy tones)
- Clear visual hierarchy and intuitive navigation
- Consistent iconography and visual language
- Accessibility compliance
- Responsive design for various device sizes
- Performance optimization for smooth interactions

---

## Navigation Structure

```
App
├── AuthStack
│   ├── Splash
│   ├── Login
│   ├── Register
│   └── Onboarding
│
├── ConsumerTabs
│   ├── HomeStack
│   │   ├── Home
│   │   ├── CategoryList
│   │   ├── SubcategoryList
│   │   ├── TypeList
│   │   ├── ProductDetails
│   │   └── FarmProfile
│   │
│   ├── SearchStack
│   │   ├── Search
│   │   └── SearchResults
│   │
│   ├── CartStack
│   │   ├── Cart
│   │   ├── Checkout
│   │   └── OrderConfirmation
│   │
│   ├── OrdersStack
│   │   ├── OrdersList
│   │   ├── OrderDetails
│   │   └── DeliveryTracking
│   │
│   └── ProfileStack
│       ├── Profile
│       ├── Addresses
│       ├── PaymentMethods
│       └── Settings
│
├── FarmerTabs
│   ├── DashboardStack
│   ├── InventoryStack
│   ├── OrdersStack
│   └── SettingsStack
│
└── DriverTabs
    ├── DeliveryStack
    ├── HistoryStack
    └── ProfileStack
```

---

## Data Sync Implementation

### Static Data (Produce Hierarchy)
- Categories, subcategories, types, and varieties are stored locally
- Initial load from local storage for instant app startup
- Background sync once per day or on demand
- Minimal network usage for taxonomy data
### Real-time Data (Orders, Cart, Delivery)
- GraphQL subscriptions for immediate updates
- Order status changes push in real-time
- Cart syncs across devices
- Driver location updates in real-time during delivery

---

## Key Features

### Instant Availability
- Lightning bolt (⚡) indicator on instantly available products
- Products from farms currently at farmers markets
- Prioritized in search and browsing
- Special checkout flow for immediate delivery

### Multi-Farm Ordering
- Cart supports items from multiple farms
- Orders automatically grouped by zone
- Single checkout process
- Optimized delivery routing

### Zone-Based System
- Geographical organization for efficient delivery
- Farms and customers associated with zones
- Delivery drivers assigned to zones
- Optimized logistics within each zone

---

## UI/UX Principles

- Clean, modern interface with emphasis on product imagery
- Farm-inspired color palette (greens, earthy tones)
- Clear visual hierarchy and intuitive navigation
- Consistent iconography and visual language
- Accessibility compliance
- Responsive design for various device sizes
- Performance optimization for smooth interactions
