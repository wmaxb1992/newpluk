# Amplify Setup Guide for Pluk App

## Prerequisites
- AWS credentials are configured (which you've already done)
- Node.js and npm installed

## Step 1: Initialize Amplify Gen 2

Open a terminal and run the following commands:

```bash
cd /Users/maxwoldenberg/Desktop/Pluk-App/pluk-ecosystem
npx @aws-amplify/cli@latest init
```

When prompted:
- Choose to use Amplify Gen 2
- Enter a name for your project (e.g., "plukapp")
- Select your preferred authentication method (AWS profile)
- Choose your default region (us-east-1)

## Step 2: Add API with Existing Schema

After initialization is complete, add a GraphQL API:

```bash
cd /Users/maxwoldenberg/Desktop/Pluk-App/pluk-ecosystem
amplify add api
```

When prompted:
- Select "GraphQL" as the API type
- Enter a name for your API (e.g., "plukapi")
- Choose "Amazon Cognito User Pool" for authorization
- Select "Yes" when asked if you have an annotated GraphQL schema
- Select "Use existing schema" when asked about schema template
- Enter the path to your schema file: `amplify/backend/api/plukapi/schema.graphql`

## Step 3: Push Your Backend to AWS

Deploy your backend resources to AWS:

```bash
amplify push
```

When prompted:
- Confirm that you want to continue
- Choose "Yes" to generate code for your GraphQL API
- Select your preferred language (TypeScript)
- Enter the file name pattern for queries, mutations, and subscriptions
- Choose "Yes" to generate all possible GraphQL operations
- Choose maximum statement depth (e.g., 2)

## Step 4: Integrate with Your Frontend

After the backend is deployed, update your frontend code to use the Amplify libraries:

```bash
cd /Users/maxwoldenberg/Desktop/Pluk-App/pluk-ecosystem
npm install aws-amplify
```

Then, in your application code, import and configure Amplify:

```typescript
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

Amplify.configure(config);
```

## Step 5: Use Your GraphQL API

Now you can use the generated GraphQL operations in your application:

```typescript
import { generateClient } from 'aws-amplify/api';
import * as queries from './graphql/queries';

const client = generateClient();

async function fetchProduceCategories() {
  try {
    const result = await client.graphql({
      query: queries.listProduceCategories
    });
    console.log('Categories:', result.data.listProduceCategories.items);
  } catch (error) {
    console.error('Error fetching categories:', error);
  }
}
```

## Troubleshooting

If you encounter any issues:

1. Check your AWS credentials with:
   ```bash
   aws sts get-caller-identity
   ```

2. Verify Amplify configuration:
   ```bash
   amplify status
   ```

3. For schema validation errors:
   ```bash
   amplify api gql-compile
   ```

4. For more detailed logs:
   ```bash
   amplify console api
   ```

Remember that our GraphQL schema is organized in a domain-driven design pattern, with separate files for each domain. The main schema.graphql file imports all these domain-specific schemas.
