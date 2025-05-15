import { Category, Subcategory, ProduceType, Variety } from '../types';

export const edibleFlowersData = {
  category: {
    id: 'cat_edible_flowers',
    name: 'Edible Flowers',
    description: 'Culinary flowers for garnishing and flavoring',
    image: '/images/categories/edible-flowers.jpg',
    icon: '/icons/categories/edible-flowers.svg',
    iconUrl: '/icons/categories/edible-flowers.svg'
  } as Category,

  subcategories: [
    {
      id: 'sub_culinary_flowers',
      name: 'Culinary Flowers',
      description: 'Flowers specifically grown for culinary use',
      icon: '/icons/subcategories/culinary-flowers.svg',
      image: '/icons/subcategories/culinary-flowers.svg',
      iconUrl: '/icons/subcategories/culinary-flowers.svg',
      categoryId: 'cat_edible_flowers'
    },
    {
      id: 'sub_garnish_flowers',
      name: 'Garnish Flowers',
      description: 'Decorative flowers for plating and presentation',
      icon: '/icons/subcategories/garnish-flowers.svg',
      image: '/icons/subcategories/garnish-flowers.svg',
      iconUrl: '/icons/subcategories/garnish-flowers.svg',
      categoryId: 'cat_edible_flowers'
    },
    {
      id: 'sub_crystallized',
      name: 'Crystallized Flowers',
      description: 'Sugar-preserved flowers for confectionery',
      icon: '/icons/subcategories/crystallized-flowers.svg',
      image: '/icons/subcategories/crystallized-flowers.svg',
      iconUrl: '/icons/subcategories/crystallized-flowers.svg',
      categoryId: 'cat_edible_flowers'
    },
    {
      id: 'sub_tea_flowers',
      name: 'Tea Flowers',
      description: 'Flowers used for herbal teas and infusions',
      icon: '/icons/subcategories/tea-flowers.svg',
      image: '/icons/subcategories/tea-flowers.svg',
      iconUrl: '/icons/subcategories/tea-flowers.svg',
      categoryId: 'cat_edible_flowers'
    },
    {
      id: 'sub_medicinal_flowers',
      name: 'Medicinal Flowers',
      description: 'Flowers with traditional healing properties',
      icon: '/icons/subcategories/medicinal-flowers.svg',
      image: '/icons/subcategories/medicinal-flowers.svg',
      iconUrl: '/icons/subcategories/medicinal-flowers.svg',
      categoryId: 'cat_edible_flowers'
    }
  ] satisfies Subcategory[],


  types: [
    {
      id: 'type_nasturtium',
      name: 'Nasturtium',
      slug: 'nasturtium',
      description: 'Colorful, peppery flowers with edible leaves and seeds',
      iconUrl: '/icons/types/nasturtium.svg',
      tasteProfile: 'Peppery, spicy, watercress-like',
      commonUses: ['Salads', 'Garnish', 'Pickling'],
      subcategoryID: 'sub_culinary_flowers',
      tags: ['edible-flower', 'spicy', 'decorative'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [5, 6, 7, 8, 9]
    },
    {
      id: 'type_pansy',
      name: 'Pansy',
      slug: 'pansy',
      description: 'Delicate flowers with mild wintergreen flavor',
      iconUrl: '/icons/types/pansy.svg',
      tasteProfile: 'Mild, wintergreen, grassy',
      commonUses: ['Garnish', 'Desserts', 'Crystallizing'],
      subcategoryID: 'sub_garnish_flowers',
      tags: ['edible-flower', 'decorative', 'delicate'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [3, 4, 5, 9, 10]
    }
  ] satisfies ProduceType[],


  varieties: [
    {
      id: 'var_jewel_nasturtium',
      name: 'Jewel Mix Nasturtium',
      description: 'A colorful mix of edible nasturtium flowers',
      averageShelfLife: 3,
      typeId: 'type_nasturtium'
    },
    {
      id: 'var_swiss_pansy',
      name: 'Swiss Giant Pansy',
      description: 'Large, colorful pansies perfect for garnishing',
      averageShelfLife: 2,
      typeId: 'type_pansy'
    }
  ] satisfies Variety[]
};
