import { Category, Subcategory, ProduceType, Variety } from '../types';

const category: Category = {
  id: 'fruits',
  name: 'Fruits',
  description: 'Fresh fruits from local orchards and farms',
  image: '/images/categories/fruits.jpg',
  icon: '/icons/categories/fruits.svg',
  iconUrl: '/icons/categories/fruits.svg'
};

const subcategories: Subcategory[] = [
  {
    id: 'fruits-citrus',
    name: 'Citrus Fruits',
    description: 'Citrus fruits like oranges, lemons, and limes',
    icon: '/icons/subcategories/citrus.svg',
    image: '/icons/subcategories/citrus.svg',
    iconUrl: '/icons/subcategories/citrus.svg',
    categoryId: 'fruits'
  },
  {
    id: 'fruits-pome',
    name: 'Pome Fruits',
    description: 'Fruits with a core of seeds like apples and pears',
    icon: '/icons/subcategories/pome.svg',
    image: '/icons/subcategories/pome.svg',
    iconUrl: '/icons/subcategories/pome.svg',
    categoryId: 'fruits'
  },
  {
    id: 'fruits-stone',
    name: 'Stone Fruits',
    description: 'Fruits with pits like peaches and plums',
    icon: '/icons/subcategories/stone.svg',
    image: '/icons/subcategories/stone.svg',
    iconUrl: '/icons/subcategories/stone.svg',
    categoryId: 'fruits'
  },
  {
    id: 'fruits-berries',
    name: 'Berries',
    description: 'Small, sweet fruits like strawberries and blueberries',
    icon: '/icons/subcategories/berries.svg',
    image: '/icons/subcategories/berries.svg',
    iconUrl: '/icons/subcategories/berries.svg',
    categoryId: 'fruits'
  },
  {
    id: 'fruits-tropical',
    name: 'Tropical Fruits',
    description: 'Exotic fruits from tropical climates',
    icon: '/icons/subcategories/tropical.svg',
    image: '/icons/subcategories/tropical.svg',
    iconUrl: '/icons/subcategories/tropical.svg',
    categoryId: 'fruits'
  },
  {
    id: 'fruits-tree',
    name: 'Tree Fruits',
    description: 'Fruits that grow on trees',
    icon: '/icons/subcategories/tree-fruits.svg',
    image: '/icons/subcategories/tree-fruits.svg',
    iconUrl: '/icons/subcategories/tree-fruits.svg',
    categoryId: 'fruits'
  }
];

const types: ProduceType[] = [
  {
    id: 'type_orange',
    name: 'Orange',
    slug: 'orange',
    description: 'Sweet and juicy citrus fruit',
    iconUrl: '/icons/types/orange.svg',
    tasteProfile: 'Sweet, tangy, juicy',
    commonUses: ['Juicing', 'Eating fresh', 'Zesting'],
    subcategoryID: 'fruits-citrus',
    tags: ['citrus', 'juicy', 'vitamin-c'],
    farmCountInApp: 0,
    farmCountInZone: 0,
    farmCountNearby: 0,
    seasonalMonths: [1, 2, 3, 11, 12]
  },
  {
    id: 'type_apple',
    name: 'Apple',
    slug: 'apple',
    description: 'Crisp and sweet pome fruit',
    iconUrl: '/icons/types/apple.svg',
    tasteProfile: 'Sweet, crisp, tart',
    commonUses: ['Eating fresh', 'Baking', 'Cooking'],
    subcategoryID: 'fruits-pome',
    tags: ['pome', 'crisp', 'versatile'],
    farmCountInApp: 0,
    farmCountInZone: 0,
    farmCountNearby: 0,
    seasonalMonths: [8, 9, 10, 11]
  },
  {
    id: 'type_peach',
    name: 'Peach',
    slug: 'peach',
    description: 'Sweet and juicy stone fruit',
    iconUrl: '/icons/types/peach.svg',
    tasteProfile: 'Sweet, floral, juicy',
    commonUses: ['Eating fresh', 'Baking', 'Preserves'],
    subcategoryID: 'fruits-stone',
    tags: ['stone-fruit', 'juicy', 'summer'],
    farmCountInApp: 0,
    farmCountInZone: 0,
    farmCountNearby: 0,
    seasonalMonths: [6, 7, 8]
  },
  {
    id: 'type_strawberry',
    name: 'Strawberry',
    slug: 'strawberry',
    description: 'Sweet and fragrant berry',
    iconUrl: '/icons/types/strawberry.svg',
    tasteProfile: 'Sweet, fragrant, bright',
    commonUses: ['Eating fresh', 'Desserts', 'Jams'],
    subcategoryID: 'fruits-berries',
    tags: ['berry', 'sweet', 'summer'],
    farmCountInApp: 0,
    farmCountInZone: 0,
    farmCountNearby: 0,
    seasonalMonths: [5, 6, 7]
  },
  {
    id: 'type_mango',
    name: 'Mango',
    slug: 'mango',
    description: 'Sweet tropical fruit',
    iconUrl: '/icons/types/mango.svg',
    tasteProfile: 'Sweet, tropical, floral',
    commonUses: ['Eating fresh', 'Smoothies', 'Salsas'],
    subcategoryID: 'fruits-tropical',
    tags: ['tropical', 'sweet', 'exotic'],
    farmCountInApp: 0,
    farmCountInZone: 0,
    farmCountNearby: 0,
    seasonalMonths: [5, 6, 7, 8, 9]
  }
];

const varieties: Variety[] = [
  {
    id: 'valencia-orange',
    name: 'Valencia Orange',
    description: 'Sweet and juicy Valencia orange, perfect for juicing',
    averageShelfLife: 14,
    typeId: 'orange'
  }
];

export const fruitsData = {
  category,
  subcategories,
  types,
  varieties
};
