# Pluk App GraphQL API Setup Guide

This guide will help you set up the GraphQL API for the Pluk app using AWS Amplify.

## Prerequisites

- AWS CLI configured with appropriate credentials
- Amplify CLI installed and initialized in the project

## Step 1: Add the GraphQL API

Run the following command and follow the prompts:

```bash
amplify add api
```

When prompted, select the following options:

1. Select service: **GraphQL**
2. API name: **plukapi**
3. Authorization type: **API key**
4. Default authorization type: **API key**
5. Configure additional auth types? **No**
6. Conflict detection? **No**
7. API key expiration: **365 days**
8. Configure models with schema? **Yes**
9. Schema template: **Single object with fields**
10. Edit schema now? **No**

## Step 2: Push the API to AWS

After adding the API, push the changes to AWS:

```bash
amplify push --yes
```

This will create the necessary AWS resources for your GraphQL API.

## Step 3: Verify the API Connection

After the API is deployed, verify the connection using the test script:

```bash
cd /Users/maxwoldenberg/Desktop/Pluk-App/pluk-ecosystem
npx ts-node scripts/test-pluk-api-connection.ts
```

## Step 4: Migrate Schema Files (if needed)

If you need to update directives in your schema files:

```bash
node scripts/migrate-schema.js
```

## Step 5: Add Domain-Specific Schema Files

After the basic API is working, you can gradually add the domain-specific schema files from the `/Users/maxwoldenberg/Desktop/Pluk-App/pluk-ecosystem/amplify/backend/api/plukapi/schema` directory.

## API Configuration Details

- GraphQL Endpoint: Check the output of `amplify status` or in the AWS AppSync console
- API Key: Available in the AWS AppSync console under API Keys

## Troubleshooting

- If you encounter errors during schema validation, check for syntax errors in your GraphQL schema files
- Make sure all relationships between models are correctly defined with proper directives
- Verify that all required fields have the correct types and non-nullable constraints
