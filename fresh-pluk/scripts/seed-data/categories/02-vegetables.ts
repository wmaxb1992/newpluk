import { Category, Subcategory, ProduceType, Variety } from '../types';

const category: Category = {
  id: 'vegetables',
  name: 'Vegetables',
  description: 'Fresh vegetables from local farms',
  image: '/images/categories/vegetables.jpg',
  icon: '/icons/categories/vegetables.svg',
  iconUrl: '/icons/categories/vegetables.svg'
};

const subcategories: Subcategory[] = [
  {
    id: 'vegetables-nightshades',
    name: 'Nightshade Vegetables',
    description: 'Vegetables from the nightshade family like tomatoes and peppers',
    icon: '/icons/subcategories/nightshades.svg',
    image: '/icons/subcategories/nightshades.svg',
    iconUrl: '/icons/subcategories/nightshades.svg',
    categoryId: 'vegetables'
  },
  {
    id: 'vegetables-allium',
    name: 'Allium Vegetables',
    description: 'Vegetables from the allium family like onions and garlic',
    icon: '/icons/subcategories/allium.svg',
    image: '/icons/subcategories/allium.svg',
    iconUrl: '/icons/subcategories/allium.svg',
    categoryId: 'vegetables'
  },
  {
    id: 'vegetables-stalks',
    name: 'Stalks & Stems',
    description: 'Vegetables with edible stalks and stems',
    icon: '/icons/subcategories/stalks.svg',
    image: '/icons/subcategories/stalks.svg',
    iconUrl: '/icons/subcategories/stalks.svg',
    categoryId: 'vegetables'
  }
];

const types: ProduceType[] = [
  {
    id: 'tomato',
    name: 'Tomato',
    slug: 'tomato',
    description: 'Versatile fruit commonly used as a vegetable',
    iconUrl: '/icons/types/tomato.svg',
    tasteProfile: 'Sweet, umami, tangy',
    commonUses: ['Salads', 'Cooking', 'Sauces'],
    subcategoryID: 'vegetables-nightshades',
    tags: ['nightshade', 'versatile', 'essential'],
    farmCountInApp: 0,
    farmCountInZone: 0,
    farmCountNearby: 0,
    seasonalMonths: [6, 7, 8, 9]
  }
];

const varieties: Variety[] = [
  {
    id: 'brandywine-tomato',
    name: 'Brandywine Tomato',
    description: 'A large, pink heirloom tomato known for its rich flavor',
    averageShelfLife: 5,
    typeId: 'tomato'
  }
];

export const vegetablesData = {
  category,
  subcategories,
  types,
  varieties
};
