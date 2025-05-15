import { Category, Subcategory, ProduceType, Variety } from '../types';

export const microgreensData = {
  category: {
    id: 'cat_microgreens_sprouts',
    name: 'Microgreens & Sprouts',
    description: 'Fresh microgreens and sprouted seeds',
    image: '/images/categories/microgreens-sprouts.jpg',
    icon: '/icons/categories/microgreens-sprouts.svg',
    iconUrl: '/icons/categories/microgreens-sprouts.svg'
  } as Category,

  subcategories: [
    {
      id: 'sub_leafy_micros',
      name: 'Leafy Microgreens',
      description: 'Young, tender leafy microgreens',
      icon: '/icons/subcategories/leafy-microgreens.svg',
      image: '/icons/subcategories/leafy-microgreens.svg',
      iconUrl: '/icons/subcategories/leafy-microgreens.svg',
      categoryId: 'cat_microgreens_sprouts'
    },
    {
      id: 'sub_herb_micros',
      name: 'Herb Microgreens',
      description: 'Flavorful herb microgreens',
      icon: '/icons/subcategories/herb-microgreens.svg',
      image: '/icons/subcategories/herb-microgreens.svg',
      iconUrl: '/icons/subcategories/herb-microgreens.svg',
      categoryId: 'cat_microgreens_sprouts'
    },
    {
      id: 'sub_sprouts',
      name: 'Sprouts',
      description: 'Fresh sprouted seeds and legumes',
      icon: '/icons/subcategories/sprouts.svg',
      image: '/icons/subcategories/sprouts.svg',
      iconUrl: '/icons/subcategories/sprouts.svg',
      categoryId: 'cat_microgreens_sprouts'
    },
    {
      id: 'sub_shoots',
      name: 'Shoots',
      description: 'Young plant shoots and tendrils',
      icon: '/icons/subcategories/shoots.svg',
      image: '/icons/subcategories/shoots.svg',
      iconUrl: '/icons/subcategories/shoots.svg',
      categoryId: 'cat_microgreens_sprouts'
    },
    {
      id: 'sub_specialty_micros',
      name: 'Specialty Microgreens',
      description: 'Unique and rare microgreen varieties',
      icon: '/icons/subcategories/specialty-microgreens.svg',
      image: '/icons/subcategories/specialty-microgreens.svg',
      iconUrl: '/icons/subcategories/specialty-microgreens.svg',
      categoryId: 'cat_microgreens_sprouts'
    }
  ] satisfies Subcategory[],


  types: [
    {
      id: 'type_pea_shoots',
      name: 'Pea Shoots',
      slug: 'pea-shoots',
      description: 'Tender shoots of young pea plants',
      iconUrl: '/icons/types/pea-shoots.svg',
      tasteProfile: 'Sweet, fresh, pea-like',
      commonUses: ['Salads', 'Garnish', 'Stir-frying'],
      subcategoryID: 'sub_shoots',
      tags: ['microgreen', 'tender', 'sweet'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [1, 2, 3, 4, 5, 9, 10, 11, 12]
    },
    {
      id: 'type_radish_micro',
      name: 'Radish Microgreens',
      slug: 'radish-microgreens',
      description: 'Spicy microgreens with vibrant color',
      iconUrl: '/icons/types/radish-microgreens.svg',
      tasteProfile: 'Spicy, peppery, crisp',
      commonUses: ['Garnish', 'Salads', 'Sandwiches'],
      subcategoryID: 'sub_leafy_micros',
      tags: ['microgreen', 'spicy', 'colorful'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [1, 2, 3, 4, 5, 9, 10, 11, 12]
    }
  ] satisfies ProduceType[],


  varieties: [
    {
      id: 'var_speckled_pea',
      name: 'Speckled Pea Shoots',
      description: 'Sweet and tender pea shoot variety',
      averageShelfLife: 7,
      typeId: 'type_pea_shoots'
    },
    {
      id: 'var_red_rambo_radish',
      name: 'Red Rambo Radish Microgreens',
      description: 'Vibrant purple radish microgreens with spicy flavor',
      averageShelfLife: 5,
      typeId: 'type_radish_micro'
    }
  ] satisfies Variety[]
};
