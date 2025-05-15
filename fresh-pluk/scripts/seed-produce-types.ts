import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';

const awsConfig = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint: 'https://7pmhulha6vfsxhc6iqghyux52e.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-tnt5itq4gvb5ddu3ynaw6t42mi',
};

Amplify.configure(awsConfig);
const client = generateClient();

const produceTypes = [
  {
    id: 'pt1',
    subcategoryID: 'sc1',
    name: 'Heirloom Tomatoes',
    slug: 'heirloom-tomatoes',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2153/2153788.png',
    description: 'Sweet and juicy heirloom tomatoes',
    tasteProfile: ['Sweet', 'Rich', 'Complex'],
    commonUses: ['Fresh eating', 'Salads', 'Sandwiches'],
    tags: ['Heirloom', 'Summer', 'Fresh eating'],
    farmCountInApp: 3,
    farmCountInZone: 2,
    farmCountNearby: 1
  },
  {
    id: 'pt2',
    subcategoryID: 'sc1',
    name: 'Cherry Tomatoes',
    slug: 'cherry-tomatoes',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2153/2153788.png',
    description: 'Sweet and bite-sized cherry tomatoes',
    tasteProfile: ['Sweet', 'Tangy'],
    commonUses: ['Snacking', 'Salads', 'Roasting'],
    tags: ['Small', 'Sweet', 'Snacking'],
    farmCountInApp: 2,
    farmCountInZone: 1,
    farmCountNearby: 1
  },
  {
    id: 'pt3',
    subcategoryID: 'sc2',
    name: 'Butter Lettuce',
    slug: 'butter-lettuce',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2153/2153788.png',
    description: 'Tender and sweet butter lettuce',
    tasteProfile: ['Mild', 'Sweet', 'Buttery'],
    commonUses: ['Salads', 'Sandwiches', 'Wraps'],
    tags: ['Tender', 'Delicate', 'Salad greens'],
    farmCountInApp: 4,
    farmCountInZone: 3,
    farmCountNearby: 2
  },
  {
    id: 'pt4',
    subcategoryID: 'sc2',
    name: 'Romaine Lettuce',
    slug: 'romaine-lettuce',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2153/2153788.png',
    description: 'Crisp and fresh romaine lettuce',
    tasteProfile: ['Crisp', 'Fresh', 'Mild'],
    commonUses: ['Caesar salads', 'Sandwiches', 'Wraps'],
    tags: ['Crisp', 'Hearty', 'Salad greens'],
    farmCountInApp: 1,
    farmCountInZone: 1,
    farmCountNearby: 0
  },
  {
    id: 'pt5',
    subcategoryID: 'sc3',
    name: 'Red Bell Peppers',
    slug: 'red-bell-peppers',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2153/2153788.png',
    description: 'Sweet and crunchy red bell peppers',
    tasteProfile: ['Sweet', 'Crisp'],
    commonUses: ['Raw', 'Roasting', 'Stir-frying'],
    tags: ['Sweet peppers', 'Red', 'Versatile'],
    farmCountInApp: 2,
    farmCountInZone: 2,
    farmCountNearby: 1
  },
  {
    id: 'pt6',
    subcategoryID: 'sc3',
    name: 'Green Bell Peppers',
    slug: 'green-bell-peppers',
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/2153/2153788.png',
    description: 'Fresh and crisp green bell peppers',
    tasteProfile: ['Crisp', 'Slightly bitter'],
    commonUses: ['Raw', 'Stuffing', 'Stir-frying'],
    tags: ['Sweet peppers', 'Green', 'Versatile'],
    farmCountInApp: 3,
    farmCountInZone: 2,
    farmCountNearby: 1
  }
];

const createProduceType = /* GraphQL */ `
  mutation CreateProduceType(
    $input: CreateProduceTypeInput!
  ) {
    createProduceType(input: $input) {
      id
      name
    }
  }
`;

async function seedProduceTypes() {
  console.log('Seeding produce types...');

  for (const produceType of produceTypes) {
    try {
      const result = await client.graphql({
        query: createProduceType,
        variables: { input: produceType },
        authMode: 'apiKey'
      });

      console.log(`Added produce type: ${produceType.name}`);
    } catch (error) {
      console.error(`Error adding produce type ${produceType.name}:`, error);
    }
  }

  console.log('Seeding complete!');
}

seedProduceTypes();
