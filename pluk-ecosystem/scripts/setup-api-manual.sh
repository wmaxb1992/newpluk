#!/bin/bash

# Script to set up the GraphQL API for the Pluk app manually

cd /Users/maxwoldenberg/Desktop/Pluk-App/pluk-ecosystem

# Create schema directory structure
echo "Creating schema directory structure..."
mkdir -p amplify/backend/api/plukapi/schema/{core,user,farm,produce,inventory,social,commerce,delivery}

# Create core schema files
echo "Creating core schema files..."
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

# Create a simple schema file for testing
cat > amplify/backend/api/plukapi/schema.graphql << EOF
# This is an auto generated file. DO NOT EDIT

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

enum UserRole {
  CONSUMER
  FARMER
  DRIVER
  ADMIN
}

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

echo "Schema files created. Now run the following commands manually:"
echo "1. amplify add api (select GraphQL, API key, etc.)"
echo "2. amplify push --yes"
echo "3. After API is created, run the migrate-schema.js script to update directives"
