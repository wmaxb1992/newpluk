#!/bin/bash

# Script to incrementally expand the GraphQL schema for the Pluk app
# This script adds domain-specific schema files one by one

cd /Users/maxwoldenberg/Desktop/Pluk-App/pluk-ecosystem

# Function to add a schema file and push changes
add_schema_file() {
  local domain=$1
  local file=$2
  local description=$3
  
  echo "Adding $description schema..."
  
  # Create the directory if it doesn't exist
  mkdir -p amplify/backend/api/plukapi/schema/$domain
  
  # Copy the schema file from the template directory
  cp amplify/backend/api/plukapi/schema-templates/$domain/$file amplify/backend/api/plukapi/schema/$domain/
  
  # Update the main schema.graphql file to include the new schema
  echo "# Import $description schema" >> amplify/backend/api/plukapi/schema.graphql
  cat amplify/backend/api/plukapi/schema/$domain/$file >> amplify/backend/api/plukapi/schema.graphql
  echo "" >> amplify/backend/api/plukapi/schema.graphql
  
  # Push the changes to AWS
  echo "Pushing changes to AWS..."
  amplify push --yes
  
  echo "$description schema added successfully!"
  echo ""
}

# Create schema templates directory
mkdir -p amplify/backend/api/plukapi/schema-templates/{core,user,farm,produce,inventory,social,commerce,delivery}

# Create core schema templates
echo "Creating schema templates..."

# Core schema templates
cat > amplify/backend/api/plukapi/schema-templates/core/enums.graphql << EOF
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

# User schema templates
cat > amplify/backend/api/plukapi/schema-templates/user/address.graphql << EOF
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

# Farm schema templates
cat > amplify/backend/api/plukapi/schema-templates/farm/farm.graphql << EOF
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

# Produce schema templates
cat > amplify/backend/api/plukapi/schema-templates/produce/category.graphql << EOF
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

echo "Schema templates created successfully!"
echo ""
echo "To add a schema file, run this script with the domain and file name:"
echo "./expand-schema.sh core enums"
echo "./expand-schema.sh user address"
echo "./expand-schema.sh farm farm"
echo "./expand-schema.sh produce category"
echo ""
echo "Available domains: core, user, farm, produce, inventory, social, commerce, delivery"

# If arguments are provided, add the specified schema file
if [ $# -eq 2 ]; then
  domain=$1
  file=$2
  
  # Map file names to descriptions
  case "$domain/$file" in
    "core/enums")
      description="core enums"
      ;;
    "user/address")
      description="user address"
      ;;
    "farm/farm")
      description="farm"
      ;;
    "produce/category")
      description="produce category"
      ;;
    *)
      description="$domain $file"
      ;;
  esac
  
  add_schema_file "$domain" "$file.graphql" "$description"
fi
