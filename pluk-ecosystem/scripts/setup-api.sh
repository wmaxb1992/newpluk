#!/bin/bash

# Script to set up a new GraphQL API for the Pluk app

cd /Users/maxwoldenberg/Desktop/Pluk-App/pluk-ecosystem

# Remove existing API if it exists
echo "Removing existing API..."
echo "Y" | amplify remove api

# Add a new GraphQL API
echo "Adding new GraphQL API..."
cat > amplify-api-config.json << EOF
{
  "version": 1,
  "serviceConfiguration": {
    "apiName": "plukapi",
    "serviceName": "AppSync",
    "defaultAuthType": {
      "mode": "API_KEY",
      "expirationTime": 365,
      "apiKeyExpirationDate": "2026-05-09T19:00:00.000Z",
      "keyDescription": "Pluk API Key"
    },
    "conflictResolution": {},
    "additionalAuthTypes": [
      {
        "mode": "AMAZON_COGNITO_USER_POOLS",
        "cognitoUserPoolId": "auth/plukecosystem8896845f"
      }
    ]
  }
}
EOF

amplify add api --headless --config amplify-api-config.json

# Create schema directory structure
echo "Creating schema directory structure..."
mkdir -p amplify/backend/api/plukapi/schema/{core,user,farm,produce,inventory,social,commerce,delivery}

# Create initial schema files
echo "Creating initial schema files..."

# Core schema
cat > amplify/backend/api/plukapi/schema/core/schema.graphql << EOF
# This is an auto generated file. DO NOT EDIT
input AMPLIFY { globalAuthRule: AuthRule = { allow: public } }
EOF

cat > amplify/backend/api/plukapi/schema/core/directives.graphql << EOF
# Custom scalars
scalar AWSDate
scalar AWSTime
scalar AWSDateTime
scalar AWSTimestamp
scalar AWSEmail
scalar AWSPhone
scalar AWSURL
scalar AWSJSON
EOF

cat > amplify/backend/api/plukapi/schema/core/enums.graphql << EOF
# Enums for the Pluk app

enum UserRole {
  CONSUMER
  FARMER
  DRIVER
  ADMIN
}

enum InventoryStatus {
  PLANNED
  PLANTED
  GROWING
  HARVESTED
  SOLD_OUT
  EXPIRED
}

enum PostType {
  GENERAL
  GROWING_UPDATE
  HARVEST_ANNOUNCEMENT
  EDUCATIONAL
}

enum ReservationStatus {
  PENDING
  CONFIRMED
  READY_FOR_PICKUP
  COMPLETED
  CANCELLED
}

enum OrderStatus {
  PENDING
  PROCESSING
  READY_FOR_PICKUP
  OUT_FOR_DELIVERY
  DELIVERED
  CANCELLED
  REFUNDED
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}

enum PaymentMethod {
  CREDIT_CARD
  DEBIT_CARD
  PAYPAL
  APPLE_PAY
  GOOGLE_PAY
  CASH
}

enum DeliveryStatus {
  ASSIGNED
  PICKING_UP
  IN_TRANSIT
  DELIVERED
  FAILED
  CANCELLED
}
EOF

# User schema
cat > amplify/backend/api/plukapi/schema/user/user.graphql << EOF
type User @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "id" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  email: AWSEmail!
  name: String
  phoneNumber: AWSPhone
  avatar: String
  role: UserRole!
  bio: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# User Address schema
cat > amplify/backend/api/plukapi/schema/user/address.graphql << EOF
type Address @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  userId: ID! @index(name: "byUser")
  street: String!
  city: String!
  state: String!
  postalCode: String!
  country: String!
  isDefault: Boolean!
  label: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# User Preferences schema
cat > amplify/backend/api/plukapi/schema/user/preferences.graphql << EOF
type UserPreferences @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  userId: ID! @index(name: "byUser")
  preferredPaymentMethod: PaymentMethod
  pushNotificationsEnabled: Boolean!
  emailNotificationsEnabled: Boolean!
  smsNotificationsEnabled: Boolean!
  orderUpdates: Boolean!
  farmUpdates: Boolean!
  marketingCommunications: Boolean!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Shopping List schema
cat > amplify/backend/api/plukapi/schema/user/shopping-list.graphql << EOF
type ShoppingList @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  userId: ID! @index(name: "byUser")
  name: String!
  description: String
  isDefault: Boolean!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Shopping List Item schema
cat > amplify/backend/api/plukapi/schema/user/shopping-list-item.graphql << EOF
type ShoppingListItem @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  shoppingListId: ID! @index(name: "byShoppingList")
  userId: ID! @index(name: "byUser")
  produceVarietyId: ID @index(name: "byProduceVariety")
  quantity: Int!
  unit: String
  notes: String
  completed: Boolean!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Notification schema
cat > amplify/backend/api/plukapi/schema/user/notification.graphql << EOF
type Notification @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  userId: ID! @index(name: "byUser")
  title: String!
  message: String!
  read: Boolean!
  actionLink: String
  imageLink: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Farm schema
cat > amplify/backend/api/plukapi/schema/farm/farm.graphql << EOF
type Farm @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "ownerId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  ownerId: ID! @index(name: "byOwner")
  name: String!
  description: String
  location: String!
  website: AWSURL
  phone: AWSPhone
  email: AWSEmail
  address: String!
  city: String!
  state: String!
  zipCode: String!
  profileImage: String
  coverImage: String
  active: Boolean!
  certified: Boolean!
  certifications: [String]
  yearEstablished: Int
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Farm Zone schema
cat > amplify/backend/api/plukapi/schema/farm/zone.graphql << EOF
type Zone @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "farmOwnerId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  farmId: ID! @index(name: "byFarm")
  farmOwnerId: ID!
  name: String!
  description: String
  location: String
  size: Float
  sizeUnit: String
  active: Boolean!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Market Schedule schema
cat > amplify/backend/api/plukapi/schema/farm/market-schedule.graphql << EOF
type MarketSchedule @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "farmOwnerId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  farmId: ID! @index(name: "byFarm")
  farmOwnerId: ID!
  marketName: String!
  address: String!
  city: String!
  state: String!
  zipCode: String!
  dayOfWeek: Int!
  startTime: AWSTime!
  endTime: AWSTime!
  active: Boolean!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Farm Metrics schema
cat > amplify/backend/api/plukapi/schema/farm/metrics.graphql << EOF
type FarmMetrics @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "farmOwnerId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  farmId: ID! @index(name: "byFarm")
  farmOwnerId: ID!
  totalOrders: Int!
  totalSales: Float!
  totalCustomers: Int!
  averageOrderValue: Float!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Produce Category schema
cat > amplify/backend/api/plukapi/schema/produce/category.graphql << EOF
type ProduceCategory @model @auth(rules: [
  { allow: public },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  name: String!
  description: String
  image: String
  icon: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Produce Subcategory schema
cat > amplify/backend/api/plukapi/schema/produce/subcategory.graphql << EOF
type ProduceSubcategory @model @auth(rules: [
  { allow: public },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  categoryId: ID! @index(name: "byCategory")
  name: String!
  description: String
  image: String
  icon: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Produce Type schema
cat > amplify/backend/api/plukapi/schema/produce/type.graphql << EOF
type ProduceType @model @auth(rules: [
  { allow: public },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  subcategoryId: ID! @index(name: "bySubcategory")
  name: String!
  description: String
  image: String
  icon: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Produce Variety schema
cat > amplify/backend/api/plukapi/schema/produce/variety.graphql << EOF
type ProduceVariety @model @auth(rules: [
  { allow: public },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  typeId: ID! @index(name: "byType")
  name: String!
  description: String
  image: String
  icon: String
  season: [String]
  harvestInstructions: String
  storageInstructions: String
  averageShelfLife: Int
  averageWeight: Float
  weightUnit: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Produce Nutrient schema
cat > amplify/backend/api/plukapi/schema/produce/nutrient.graphql << EOF
type ProduceNutrient @model @auth(rules: [
  { allow: public },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  varietyId: ID! @index(name: "byVariety")
  name: String!
  amount: Float!
  unit: String!
  dailyValue: Float
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Inventory Batch schema
cat > amplify/backend/api/plukapi/schema/inventory/batch.graphql << EOF
type InventoryBatch @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "farmOwnerId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  farmId: ID! @index(name: "byFarm")
  farmOwnerId: ID!
  zoneId: ID @index(name: "byZone")
  produceVarietyId: ID! @index(name: "byProduceVariety")
  status: InventoryStatus!
  plantingDate: AWSDate
  harvestDate: AWSDate
  estimatedHarvestDate: AWSDate
  estimatedQuantity: Float
  actualQuantity: Float
  quantityUnit: String
  remainingQuantity: Float
  isOrganic: Boolean!
  price: Float
  priceUnit: String
  storageLocation: String
  storageConditions: String
  notes: String
  expirationDate: AWSDate
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Pre-Harvest Listing schema
cat > amplify/backend/api/plukapi/schema/inventory/pre-harvest-listing.graphql << EOF
type PreHarvestListing @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "farmOwnerId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  farmId: ID! @index(name: "byFarm")
  farmOwnerId: ID!
  inventoryBatchId: ID! @index(name: "byInventoryBatch")
  produceVarietyId: ID! @index(name: "byProduceVariety")
  title: String!
  description: String
  image: String
  estimatedHarvestDate: AWSDate!
  estimatedQuantity: Float!
  quantityUnit: String!
  isOrganic: Boolean!
  price: Float!
  priceUnit: String!
  availableForReservation: Boolean!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Pre-Harvest Reservation schema
cat > amplify/backend/api/plukapi/schema/inventory/reservation.graphql << EOF
type PreHarvestReservation @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  userId: ID! @index(name: "byUser")
  preHarvestListingId: ID! @index(name: "byPreHarvestListing")
  farmId: ID! @index(name: "byFarm")
  quantity: Float!
  quantityUnit: String!
  status: ReservationStatus!
  requestedPickupDate: AWSDate
  notes: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Farm Post schema
cat > amplify/backend/api/plukapi/schema/social/farm-post.graphql << EOF
type FarmPost @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "farmOwnerId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  farmId: ID! @index(name: "byFarm")
  farmOwnerId: ID!
  type: PostType!
  title: String!
  content: String!
  images: [String]
  videos: [String]
  preHarvestListingId: ID @index(name: "byPreHarvestListing")
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Post Comment schema
cat > amplify/backend/api/plukapi/schema/social/post-comment.graphql << EOF
type PostComment @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  farmPostId: ID! @index(name: "byFarmPost")
  userId: ID! @index(name: "byUser")
  content: String!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Post Like schema
cat > amplify/backend/api/plukapi/schema/social/post-like.graphql << EOF
type PostLike @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  farmPostId: ID! @index(name: "byFarmPost")
  userId: ID! @index(name: "byUser")
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Farm Follow schema
cat > amplify/backend/api/plukapi/schema/social/farm-follow.graphql << EOF
type FarmFollow @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  farmId: ID! @index(name: "byFarm")
  userId: ID! @index(name: "byUser")
  receiveNotifications: Boolean!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Produce Listing schema
cat > amplify/backend/api/plukapi/schema/commerce/listing.graphql << EOF
type ProduceListing @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "farmOwnerId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  farmId: ID! @index(name: "byFarm")
  farmOwnerId: ID!
  inventoryBatchId: ID! @index(name: "byInventoryBatch")
  produceVarietyId: ID! @index(name: "byProduceVariety")
  title: String!
  description: String
  images: [String]
  price: Float!
  priceUnit: String!
  quantity: Float!
  quantityUnit: String!
  availableQuantity: Float!
  isOrganic: Boolean!
  harvestDate: AWSDate
  expirationDate: AWSDate
  daysToExpiration: Int
  freshness: Int
  active: Boolean!
  isInstantlyAvailable: Boolean!
  instantDeliveryFee: Float
  estimatedDeliveryMinutes: Int
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Listing Review schema
cat > amplify/backend/api/plukapi/schema/commerce/review.graphql << EOF
type ListingReview @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  produceListingId: ID! @index(name: "byProduceListing")
  userId: ID! @index(name: "byUser")
  rating: Int!
  comment: String
  images: [String]
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Cart schema
cat > amplify/backend/api/plukapi/schema/commerce/cart.graphql << EOF
type Cart @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  userId: ID! @index(name: "byUser")
  active: Boolean!
  subtotal: Float!
  tax: Float!
  total: Float!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Cart Item schema
cat > amplify/backend/api/plukapi/schema/commerce/cart-item.graphql << EOF
type CartItem @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  cartId: ID! @index(name: "byCart")
  userId: ID! @index(name: "byUser")
  produceListingId: ID! @index(name: "byProduceListing")
  quantity: Float!
  price: Float!
  subtotal: Float!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Order schema
cat > amplify/backend/api/plukapi/schema/commerce/order.graphql << EOF
type Order @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  userId: ID! @index(name: "byUser")
  status: OrderStatus! @index(name: "byStatus")
  subtotal: Float!
  tax: Float!
  total: Float!
  deliveryFee: Float!
  deliveryAddressId: ID
  deliveryNotes: String
  requestedDeliveryDate: AWSDate
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Order Item schema
cat > amplify/backend/api/plukapi/schema/commerce/order-item.graphql << EOF
type OrderItem @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  orderId: ID! @index(name: "byOrder")
  userId: ID! @index(name: "byUser")
  farmId: ID! @index(name: "byFarm")
  produceListingId: ID! @index(name: "byProduceListing")
  quantity: Float!
  price: Float!
  subtotal: Float!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Payment schema
cat > amplify/backend/api/plukapi/schema/commerce/payment.graphql << EOF
type Payment @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  orderId: ID! @index(name: "byOrder")
  userId: ID! @index(name: "byUser")
  amount: Float!
  status: PaymentStatus! @index(name: "byStatus")
  method: PaymentMethod!
  transactionId: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Driver schema
cat > amplify/backend/api/plukapi/schema/delivery/driver.graphql << EOF
type Driver @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  userId: ID! @index(name: "byUser")
  firstName: String!
  lastName: String!
  phoneNumber: AWSPhone!
  email: AWSEmail!
  avatar: String
  licenseNumber: String!
  licenseExpiry: AWSDate!
  vehicleMake: String!
  vehicleModel: String!
  vehicleYear: Int!
  vehicleColor: String!
  vehicleLicensePlate: String!
  active: Boolean!
  currentLocationLat: Float
  currentLocationLng: Float
  lastLocationUpdateTime: AWSDateTime
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Delivery schema
cat > amplify/backend/api/plukapi/schema/delivery/delivery.graphql << EOF
type Delivery @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  orderId: ID! @index(name: "byOrder")
  userId: ID! @index(name: "byUser")
  driverId: ID @index(name: "byDriver")
  status: DeliveryStatus! @index(name: "byStatus")
  pickupLocationLat: Float!
  pickupLocationLng: Float!
  pickupAddress: String!
  dropoffLocationLat: Float!
  dropoffLocationLng: Float!
  dropoffAddress: String!
  pickupTime: AWSDateTime
  deliveryTime: AWSDateTime
  estimatedDeliveryTime: AWSDateTime
  actualDeliveryTime: AWSDateTime
  deliveryRouteId: ID @index(name: "byDeliveryRoute")
  notes: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Delivery Route schema
cat > amplify/backend/api/plukapi/schema/delivery/route.graphql << EOF
type DeliveryRoute @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "driverId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  driverId: ID! @index(name: "byDriver")
  startTime: AWSDateTime!
  endTime: AWSDateTime
  estimatedDuration: Int!
  actualDuration: Int
  estimatedDistance: Float!
  actualDistance: Float
  startLocationLat: Float!
  startLocationLng: Float!
  endLocationLat: Float!
  endLocationLng: Float!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Delivery Rating schema
cat > amplify/backend/api/plukapi/schema/delivery/rating.graphql << EOF
type DeliveryRating @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "userId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  deliveryId: ID! @index(name: "byDelivery")
  userId: ID! @index(name: "byUser")
  driverId: ID! @index(name: "byDriver")
  rating: Int!
  comment: String
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Driver Location schema
cat > amplify/backend/api/plukapi/schema/delivery/location.graphql << EOF
type DriverLocation @model @auth(rules: [
  { allow: public, operations: [read] },
  { allow: owner, ownerField: "driverId" },
  { allow: groups, groups: ["Admins"] }
]) {
  id: ID!
  driverId: ID! @index(name: "byDriver")
  lat: Float!
  lng: Float!
  heading: Float
  timestamp: AWSDateTime!
  createdAt: AWSDateTime
  updatedAt: AWSDateTime
}
EOF

# Create the main schema file that imports all domain schemas
cat > amplify/backend/api/plukapi/schema.graphql << EOF
# This is an auto generated file. DO NOT EDIT

# Import core schemas
$(cat amplify/backend/api/plukapi/schema/core/schema.graphql)
$(cat amplify/backend/api/plukapi/schema/core/directives.graphql)
$(cat amplify/backend/api/plukapi/schema/core/enums.graphql)

# Import user schemas
$(cat amplify/backend/api/plukapi/schema/user/user.graphql)
$(cat amplify/backend/api/plukapi/schema/user/address.graphql)
$(cat amplify/backend/api/plukapi/schema/user/preferences.graphql)
$(cat amplify/backend/api/plukapi/schema/user/shopping-list.graphql)
$(cat amplify/backend/api/plukapi/schema/user/shopping-list-item.graphql)
$(cat amplify/backend/api/plukapi/schema/user/notification.graphql)

# Import farm schemas
$(cat amplify/backend/api/plukapi/schema/farm/farm.graphql)
$(cat amplify/backend/api/plukapi/schema/farm/zone.graphql)
$(cat amplify/backend/api/plukapi/schema/farm/market-schedule.graphql)
$(cat amplify/backend/api/plukapi/schema/farm/metrics.graphql)

# Import produce schemas
$(cat amplify/backend/api/plukapi/schema/produce/category.graphql)
$(cat amplify/backend/api/plukapi/schema/produce/subcategory.graphql)
$(cat amplify/backend/api/plukapi/schema/produce/type.graphql)
$(cat amplify/backend/api/plukapi/schema/produce/variety.graphql)
$(cat amplify/backend/api/plukapi/schema/produce/nutrient.graphql)

# Import inventory schemas
$(cat amplify/backend/api/plukapi/schema/inventory/batch.graphql)
$(cat amplify/backend/api/plukapi/schema/inventory/pre-harvest-listing.graphql)
$(cat amplify/backend/api/plukapi/schema/inventory/reservation.graphql)

# Import social schemas
$(cat amplify/backend/api/plukapi/schema/social/farm-post.graphql)
$(cat amplify/backend/api/plukapi/schema/social/post-comment.graphql)
$(cat amplify/backend/api/plukapi/schema/social/post-like.graphql)
$(cat amplify/backend/api/plukapi/schema/social/farm-follow.graphql)

# Import commerce schemas
$(cat amplify/backend/api/plukapi/schema/commerce/listing.graphql)
$(cat amplify/backend/api/plukapi/schema/commerce/review.graphql)
$(cat amplify/backend/api/plukapi/schema/commerce/cart.graphql)
$(cat amplify/backend/api/plukapi/schema/commerce/cart-item.graphql)
$(cat amplify/backend/api/plukapi/schema/commerce/order.graphql)
$(cat amplify/backend/api/plukapi/schema/commerce/order-item.graphql)
$(cat amplify/backend/api/plukapi/schema/commerce/payment.graphql)

# Import delivery schemas
$(cat amplify/backend/api/plukapi/schema/delivery/driver.graphql)
$(cat amplify/backend/api/plukapi/schema/delivery/delivery.graphql)
$(cat amplify/backend/api/plukapi/schema/delivery/route.graphql)
$(cat amplify/backend/api/plukapi/schema/delivery/rating.graphql)
$(cat amplify/backend/api/plukapi/schema/delivery/location.graphql)
EOF

# Push the changes to deploy the API
echo "Deploying the API..."
amplify push --yes

# Clean up
rm amplify-api-config.json

echo "API setup complete!"
