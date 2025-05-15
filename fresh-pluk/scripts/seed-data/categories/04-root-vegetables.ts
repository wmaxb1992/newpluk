import { Category, Subcategory, ProduceType, Variety } from '../types';

interface RootVegetablesData {
  category: Category;
  subcategories: Subcategory[];
  types: ProduceType[];
  varieties: Variety[];
}

const category: Category = {
  id: 'root-vegetables',
  name: 'Root Vegetables',
  description: 'Vegetables that grow underground',
  image: '/images/categories/root-vegetables.jpg',
  icon: '/icons/categories/root-vegetables.svg',
  iconUrl: '/icons/categories/root-vegetables.svg'
};

const subcategories: Subcategory[] = [
  {
    id: 'root-vegetables-tuberous',
    name: 'Tuberous Root Vegetables',
    description: 'Vegetables that form edible tubers underground',
    icon: '/icons/subcategories/tuberous-roots.svg',
    image: '/icons/subcategories/tuberous-roots.svg',
    iconUrl: '/icons/subcategories/tuberous-roots.svg',
    categoryId: 'root-vegetables'
  },
  {
    id: 'root-vegetables-taproot',
    name: 'Taproot Vegetables',
    description: 'Vegetables with a large, edible main root',
    icon: '/icons/subcategories/taproots.svg',
    image: '/icons/subcategories/taproots.svg',
    iconUrl: '/icons/subcategories/taproots.svg',
    categoryId: 'root-vegetables'
  }
];

const types: ProduceType[] = [
  {
    id: 'potato',
    name: 'Potato',
    slug: 'potato',
    description: 'A starchy tuberous crop from the perennial nightshade Solanum tuberosum',
    iconUrl: '/icons/types/potato.svg',
    tasteProfile: 'Starchy, earthy, mild',
    commonUses: ['Baking', 'Frying', 'Mashing'],
    subcategoryID: 'root-vegetables-tuberous',
    tags: ['tuber', 'starchy', 'versatile'],
    farmCountInApp: 0,
    farmCountInZone: 0,
    farmCountNearby: 0,
    seasonalMonths: [7, 8, 9, 10]
  }
];

const varieties: Variety[] = [
  {
    id: 'russet-potato',
    name: 'Russet Potato',
    description: 'A large, brown-skinned potato ideal for baking',
    averageShelfLife: 90,
    typeId: 'potato'
  }
];

export const rootVegetablesData: RootVegetablesData = {
  category,
  subcategories,
  types,
  varieties
};
