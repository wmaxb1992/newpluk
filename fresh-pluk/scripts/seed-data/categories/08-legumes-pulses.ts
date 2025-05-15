import { Category, Subcategory, ProduceType, Variety } from '../types';

export const legumesPulsesData = {
  category: {
    id: 'cat_legumes_pulses',
    name: 'Legumes & Pulses',
    description: 'Fresh and dried beans, peas, and other legumes',
    image: '/images/categories/legumes-pulses.jpg',
    icon: '/icons/categories/legumes-pulses.svg',
    iconUrl: '/icons/categories/legumes-pulses.svg'
  } as Category,

  subcategories: [
    {
      id: 'sub_fresh_beans',
      name: 'Fresh Beans',
      description: 'Fresh, tender beans and pods',
      icon: '/icons/subcategories/fresh-beans.svg',
      image: '/icons/subcategories/fresh-beans.svg',
      iconUrl: '/icons/subcategories/fresh-beans.svg',
      categoryId: 'cat_legumes_pulses'
    },
    {
      id: 'sub_dried_beans',
      name: 'Dried Beans',
      description: 'Dried mature beans for storage',
      icon: '/icons/subcategories/dried-beans.svg',
      image: '/icons/subcategories/dried-beans.svg',
      iconUrl: '/icons/subcategories/dried-beans.svg',
      categoryId: 'cat_legumes_pulses'
    },
    {
      id: 'sub_peas',
      name: 'Peas',
      description: 'Fresh and dried peas',
      icon: '/icons/subcategories/peas.svg',
      image: '/icons/subcategories/peas.svg',
      iconUrl: '/icons/subcategories/peas.svg',
      categoryId: 'cat_legumes_pulses'
    },
    {
      id: 'sub_lentils',
      name: 'Lentils',
      description: 'Various types of lentils',
      icon: '/icons/subcategories/lentils.svg',
      image: '/icons/subcategories/lentils.svg',
      iconUrl: '/icons/subcategories/lentils.svg',
      categoryId: 'cat_legumes_pulses'
    },
    {
      id: 'sub_specialty_legumes',
      name: 'Specialty Legumes',
      description: 'Unique and rare legume varieties',
      icon: '/icons/subcategories/specialty-legumes.svg',
      image: '/icons/subcategories/specialty-legumes.svg',
      iconUrl: '/icons/subcategories/specialty-legumes.svg',
      categoryId: 'cat_legumes_pulses'
    }
  ] satisfies Subcategory[],


  types: [
    {
      id: 'type_green_bean',
      name: 'Green Bean',
      slug: 'green-bean',
      description: 'Fresh, crisp pods harvested before beans mature',
      iconUrl: '/icons/types/green-bean.svg',
      tasteProfile: 'Fresh, green, slightly sweet',
      commonUses: ['Steaming', 'Stir-frying', 'Casseroles'],
      subcategoryID: 'sub_fresh_beans',
      tags: ['fresh', 'snap-bean', 'versatile'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [6, 7, 8, 9]
    },
    {
      id: 'type_black_bean',
      name: 'Black Bean',
      slug: 'black-bean',
      description: 'Versatile dried bean with rich, earthy flavor',
      iconUrl: '/icons/types/black-bean.svg',
      tasteProfile: 'Rich, earthy, meaty',
      commonUses: ['Soups', 'Mexican cuisine', 'Rice dishes'],
      subcategoryID: 'sub_dried_beans',
      tags: ['dried-bean', 'protein-rich', 'staple'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [8, 9, 10]
    }
  ] satisfies ProduceType[],


  varieties: [
    {
      id: 'var_blue_lake',
      name: 'Blue Lake Bush Bean',
      description: 'Classic bush bean variety known for flavor',
      averageShelfLife: 7,
      typeId: 'type_green_bean'
    },
    {
      id: 'var_black_turtle',
      name: 'Black Turtle Bean',
      description: 'Traditional Mexican black bean variety',
      averageShelfLife: 730,
      typeId: 'type_black_bean'
    }
  ] satisfies Variety[]
};
