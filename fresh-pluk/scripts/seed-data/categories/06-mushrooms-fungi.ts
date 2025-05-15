import { Category, Subcategory, ProduceType, Variety } from '../types';

export const mushroomsFungiData = {
  category: {
    id: 'cat_mushrooms_fungi',
    name: 'Mushrooms & Fungi',
    description: 'Cultivated and wild-harvested mushrooms and fungi',
    image: '/images/categories/mushrooms-fungi.jpg',
    icon: '/icons/categories/mushrooms-fungi.svg',
    iconUrl: '/icons/categories/mushrooms-fungi.svg'
  } as Category,

  subcategories: [
    {
      id: 'sub_gourmet',
      name: 'Gourmet Mushrooms',
      description: 'High-end culinary mushrooms prized by chefs',
      icon: '/icons/subcategories/gourmet-mushrooms.svg',
      image: '/icons/subcategories/gourmet-mushrooms.svg',
      iconUrl: '/icons/subcategories/gourmet-mushrooms.svg',
      categoryId: 'cat_mushrooms_fungi'
    },
    {
      id: 'sub_medicinal',
      name: 'Medicinal Mushrooms',
      description: 'Mushrooms known for their health benefits',
      icon: '/icons/subcategories/medicinal-mushrooms.svg',
      image: '/icons/subcategories/medicinal-mushrooms.svg',
      iconUrl: '/icons/subcategories/medicinal-mushrooms.svg',
      categoryId: 'cat_mushrooms_fungi'
    },
    {
      id: 'sub_wild_foraged',
      name: 'Wild & Foraged',
      description: 'Sustainably harvested wild mushrooms',
      icon: '/icons/subcategories/wild-mushrooms.svg',
      image: '/icons/subcategories/wild-mushrooms.svg',
      iconUrl: '/icons/subcategories/wild-mushrooms.svg',
      categoryId: 'cat_mushrooms_fungi'
    },
    {
      id: 'sub_cultivated',
      name: 'Cultivated',
      description: 'Mushrooms grown in controlled environments',
      icon: '/icons/subcategories/cultivated-mushrooms.svg',
      image: '/icons/subcategories/cultivated-mushrooms.svg',
      iconUrl: '/icons/subcategories/cultivated-mushrooms.svg',
      categoryId: 'cat_mushrooms_fungi'
    },
    {
      id: 'sub_specialty',
      name: 'Specialty',
      description: 'Rare and unique mushroom varieties',
      icon: '/icons/subcategories/specialty-mushrooms.svg',
      image: '/icons/subcategories/specialty-mushrooms.svg',
      iconUrl: '/icons/subcategories/specialty-mushrooms.svg',
      categoryId: 'cat_mushrooms_fungi'
    }
  ] satisfies Subcategory[],


  types: [
    {
      id: 'type_oyster',
      name: 'Oyster Mushroom',
      slug: 'oyster-mushroom',
      description: 'Fan-shaped mushrooms with delicate texture and mild flavor',
      iconUrl: '/icons/types/oyster-mushroom.svg',
      tasteProfile: 'Mild, delicate, seafood-like',
      commonUses: ['Stir-frying', 'Soups', 'Meat substitute'],
      subcategoryID: 'sub_gourmet',
      tags: ['gourmet', 'versatile', 'meat-alternative'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [1, 2, 3, 4, 5, 9, 10, 11, 12]
    },
    {
      id: 'type_lions_mane',
      name: 'Lion\'s Mane',
      slug: 'lions-mane',
      description: 'White, shaggy mushroom known for cognitive benefits',
      iconUrl: '/icons/types/lions-mane.svg',
      tasteProfile: 'Sweet, seafood-like, umami',
      commonUses: ['Supplements', 'Cooking', 'Tea'],
      subcategoryID: 'sub_medicinal',
      tags: ['medicinal', 'nootropic', 'gourmet'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [1, 2, 3, 4, 9, 10, 11, 12]
    }
  ] satisfies ProduceType[],


  varieties: [
    {
      id: 'var_blue_oyster',
      name: 'Blue Oyster',
      description: 'Fast-growing blue-grey oyster mushroom variety',
      averageShelfLife: 7,
      typeId: 'type_oyster'
    },
    {
      id: 'var_lions_mane_white',
      name: 'White Lion\'s Mane',
      description: 'Traditional white variety with strong medicinal properties',
      averageShelfLife: 5,
      typeId: 'type_lions_mane'
    }
  ] satisfies Variety[]
};
