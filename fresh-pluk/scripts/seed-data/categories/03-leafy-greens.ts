import { Category, Subcategory, ProduceType, Variety } from '../types';

const category: Category = {
  id: 'leafy-greens',
  name: 'Leafy Greens',
  description: 'Fresh leafy greens from local farms',
  image: '/images/categories/leafy-greens.jpg',
  icon: '/icons/categories/leafy-greens.svg',
  iconUrl: '/icons/categories/leafy-greens.svg'
};

const subcategories: Subcategory[] = [
  {
    id: 'leafy-greens-lettuce',
    name: 'Lettuce',
    description: 'Various types of lettuce for salads and sandwiches',
    icon: '/icons/subcategories/lettuce.svg',
    image: '/icons/subcategories/lettuce.svg',
    iconUrl: '/icons/subcategories/lettuce.svg',
    categoryId: 'leafy-greens'
  },
  {
    id: 'leafy-greens-cooking',
    name: 'Cooking Greens',
    description: 'Leafy greens ideal for cooking and sautéing',
    icon: '/icons/subcategories/cooking-greens.svg',
    image: '/icons/subcategories/cooking-greens.svg',
    iconUrl: '/icons/subcategories/cooking-greens.svg',
    categoryId: 'leafy-greens'
  },
  {
    id: 'leafy-greens-asian',
    name: 'Asian Greens',
    description: 'Traditional Asian leafy vegetables',
    icon: '/icons/subcategories/asian-greens.svg',
    image: '/icons/subcategories/asian-greens.svg',
    iconUrl: '/icons/subcategories/asian-greens.svg',
    categoryId: 'leafy-greens'
  }
];

const types: ProduceType[] = [
  {
    id: 'romaine-lettuce',
    name: 'Romaine Lettuce',
    slug: 'romaine-lettuce',
    description: 'Crisp, elongated heads with sturdy leaves',
    iconUrl: '/icons/types/romaine-lettuce.svg',
    tasteProfile: 'Crisp, mild, slightly sweet',
    commonUses: ['Salads', 'Caesar Salad', 'Sandwiches'],
    subcategoryID: 'leafy-greens-lettuce',
    tags: ['lettuce', 'salad-greens', 'crisp'],
    farmCountInApp: 0,
    farmCountInZone: 0,
    farmCountNearby: 0,
    seasonalMonths: [3, 4, 5, 9, 10, 11]
  }
];

const varieties: Variety[] = [
  {
    id: 'parris-island-cos',
    name: 'Parris Island Cos',
    description: 'A heat-tolerant, disease-resistant romaine lettuce variety',
    averageShelfLife: 14,
    typeId: 'romaine-lettuce'
  }
];

export const leafyGreensData = {
  category,
  subcategories,
  types,
  varieties
};
