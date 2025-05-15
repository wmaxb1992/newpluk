const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Configure AWS
AWS.config.update({
  region: 'us-east-1'
});

const docClient = new AWS.DynamoDB.DocumentClient();
const produceTypesData = JSON.parse(fs.readFileSync(
  path.join(__dirname, '../amplify/backend/api/plukapi/seed/produce-types.json')
));

async function seedProduceTypes() {
  console.log('Seeding produce types...');

  for (const produceType of produceTypesData.produceTypes) {
    const params = {
      TableName: 'ProduceType-dev',
      Item: {
        ...produceType,
        __typename: 'ProduceType',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
    };

    try {
      await docClient.put(params).promise();
      console.log(`Added produce type: ${produceType.name}`);
    } catch (error) {
      console.error(`Error adding produce type ${produceType.name}:`, error);
    }
  }

  console.log('Seeding complete!');
}

seedProduceTypes();
