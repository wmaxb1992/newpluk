# Pluk API Schema Documentation

## Overview

The Pluk API is organized using a domain-driven design approach, where schemas are separated into logical domains. This organization makes it easier to maintain and extend the schema as the application grows.

## Schema Structure

The schema is organized into the following domains:

- **Core**: Contains core directives, enums, and shared types used across domains
- **Produce**: Models related to produce taxonomy (categories, subcategories, types, varieties, nutrients)
- **User**: User-related models including preferences, addresses, shopping lists
- **Farm**: Farm profiles, zones, market schedules, and metrics
- **Inventory**: Inventory batches, pre-harvest listings, and reservations
- **Social**: Social features like farm posts, comments, likes, and follows
- **Commerce**: Listings, reviews, carts, orders, and payments
- **Delivery**: Drivers, deliveries, routes, and ratings

## Main Schema File

The main schema file (`schema.graphql`) imports all domain-specific schemas using the import directive. This is the entry point for the GraphQL API.

## Authorization Rules

The schema uses field-level authorization rules to ensure data security:

- Public read access for product catalog data
- Owner-based access for user-specific data
- Group-based access for admin and driver operations

## Working with the Schema

### Adding New Types

1. Identify the appropriate domain for your new type
2. Create or modify the relevant file in the domain directory
3. Define the type with appropriate fields, directives, and auth rules
4. Ensure relationships are properly defined with @belongsTo and @hasMany directives

### Adding New Fields

1. Locate the type in its domain directory
2. Add the new field with appropriate type and directives
3. Update related types if necessary

### Adding New Queries or Mutations

Custom queries and mutations can be added to the main schema.graphql file.

## Data Relationships

The schema uses the following relationship patterns:

- One-to-one: @hasOne and @belongsTo
- One-to-many: @hasMany and @belongsTo
- Many-to-many: Implemented using join tables

## Search and Filtering

The @searchable directive is applied to key types like ProduceListing to enable advanced search capabilities.

## Real-time Data

GraphQL subscriptions are available for real-time data updates, particularly useful for:

- Order status changes
- Delivery tracking
- Inventory updates
- Social interactions

## Best Practices

1. Always add appropriate auth rules to protect sensitive data
2. Use GSIs (@key directive) for efficient querying patterns
3. Keep related fields together in the same domain
4. Document complex types and relationships
5. Use consistent naming conventions
