# Pluk App GraphQL API Setup Steps

## Step 1: Run the amplify add api command
```bash
amplify add api
```

## Step 2: Follow these exact prompts:
1. Select service: Choose **GraphQL**
2. API name: Enter **plukapi**
3. Authorization type: Choose **API key**
4. Default authorization type: Select **API key**
5. Configure additional auth types? Select **No**
6. Conflict detection? Select **No**
7. API key expiration: Enter **365** (days)
8. Configure models with schema? Select **Yes**
9. Choose a schema template: Select **Single object with fields**
10. Edit the schema now? Select **No**

## Step 3: Push the changes to AWS
```bash
amplify push --yes
```

## Step 4: After API creation, update the schema
The API will be created with a basic schema. You can then update it with the full Pluk app schema.

## Step 5: Test the API connection
After the API is created, run the test script to verify the connection:
```bash
npx ts-node scripts/test-pluk-api-connection.ts
```

## Step 6: Update the seed data configuration
Update the config.ts file with the new GraphQL endpoint and API key.

## Important Notes:
- The API key will expire in 365 days
- Make sure to save the GraphQL endpoint and API key for future reference
- The schema can be expanded incrementally after the initial deployment
