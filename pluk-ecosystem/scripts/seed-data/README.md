# Pluk App Seed Data Generator

This directory contains scripts to generate realistic seed data for the Pluk app. The seed data covers all core domains of the application:

- Users (consumers, farmers, drivers, admins)
- Produce taxonomy (categories, subcategories, types, varieties, nutrients)
- Farms (farm profiles, zones, market schedules)
- Inventory (inventory batches, pre-harvest listings, reservations)
- Social features (farm posts, comments, likes, follows)
- Commerce (produce listings, reviews, carts, orders, payments)

## Prerequisites

Before running the seed data generator, make sure you have:

1. Set up and deployed the Amplify GraphQL API
2. Configured your AWS credentials
3. Node.js and npm/yarn installed

## Setup

1. Create a `.env` file in the `scripts` directory with the following content:

```
AWS_REGION=us-east-1
GRAPHQL_ENDPOINT=https://3tvmaj3hgzgsfh3vx5y7rsj5ta.appsync-api.us-east-1.amazonaws.com/graphql
GRAPHQL_API_KEY=da2-qkh755tkrfdrbmrnzscejowsfy
```

2. Install dependencies:

```bash
cd pluk-ecosystem/scripts
npm install
```

## Running the Seed Data Generator

To generate seed data, run:

```bash
cd pluk-ecosystem/scripts
npm run seed
```

This will:

1. Generate users with different roles
2. Create the complete produce taxonomy hierarchy
3. Generate farm profiles with zones and market schedules
4. Create inventory batches and pre-harvest listings
5. Generate social content (posts, comments, likes, follows)
6. Create commerce data (listings, reviews, carts, orders)

## Customizing the Seed Data

You can customize the amount and characteristics of the generated data by modifying the `seedConfig` object in `config.ts`. This allows you to adjust:

- Number of records for each entity type
- Probabilities for various relationships
- Image URLs for placeholder content

## Troubleshooting

If you encounter errors during seed data generation:

1. Check your AWS credentials and API key
2. Verify that your GraphQL schema matches the operations in `graphql.ts`
3. Look for specific error messages in the console output
4. Try running with fewer records if you hit API rate limits

## Data Cleanup

To remove all seed data, you can use the AWS AppSync console to run delete mutations or reset your development environment using the Amplify CLI.
