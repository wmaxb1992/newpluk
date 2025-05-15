import { Category, Subcategory, ProduceType, Variety } from '../types';

export const nutsSeedsData = {
  category: {
    id: 'cat_nuts_seeds',
    name: 'Nuts & Seeds',
    description: 'Fresh and dried nuts, seeds, and kernels',
    image: '/images/categories/nuts-seeds.jpg',
    icon: '/icons/categories/nuts-seeds.svg',
    iconUrl: '/icons/categories/nuts-seeds.svg'
  } as Category,

  subcategories: [
    {
      id: 'sub_tree_nuts',
      name: 'Tree Nuts',
      description: 'Nuts grown on trees like almonds and walnuts',
      icon: '/icons/subcategories/tree-nuts.svg',
      image: '/icons/subcategories/tree-nuts.svg',
      iconUrl: '/icons/subcategories/tree-nuts.svg',
      categoryId: 'cat_nuts_seeds'
    },
    {
      id: 'sub_ground_nuts',
      name: 'Ground Nuts',
      description: 'Nuts that grow underground like peanuts',
      icon: '/icons/subcategories/ground-nuts.svg',
      image: '/icons/subcategories/ground-nuts.svg',
      iconUrl: '/icons/subcategories/ground-nuts.svg',
      categoryId: 'cat_nuts_seeds'
    },
    {
      id: 'sub_edible_seeds',
      name: 'Edible Seeds',
      description: 'Seeds for direct consumption',
      icon: '/icons/subcategories/edible-seeds.svg',
      image: '/icons/subcategories/edible-seeds.svg',
      iconUrl: '/icons/subcategories/edible-seeds.svg',
      categoryId: 'cat_nuts_seeds'
    },
    {
      id: 'sub_oil_seeds',
      name: 'Oil Seeds',
      description: 'Seeds primarily used for oil production',
      icon: '/icons/subcategories/oil-seeds.svg',
      image: '/icons/subcategories/oil-seeds.svg',
      iconUrl: '/icons/subcategories/oil-seeds.svg',
      categoryId: 'cat_nuts_seeds'
    },
    {
      id: 'sub_sprouting_seeds',
      name: 'Sprouting Seeds',
      description: 'Seeds ideal for sprouting',
      icon: '/icons/subcategories/sprouting-seeds.svg',
      image: '/icons/subcategories/sprouting-seeds.svg',
      iconUrl: '/icons/subcategories/sprouting-seeds.svg',
      categoryId: 'cat_nuts_seeds'
    }
  ] satisfies Subcategory[],


  types: [
    {
      id: 'type_almond',
      name: 'Almond',
      slug: 'almond',
      description: 'Sweet tree nut high in protein and healthy fats',
      iconUrl: '/icons/types/almond.svg',
      tasteProfile: 'Sweet, nutty, buttery',
      commonUses: ['Snacking', 'Baking', 'Milk alternative'],
      subcategoryID: 'sub_tree_nuts',
      tags: ['tree-nut', 'protein-rich', 'versatile'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [8, 9, 10]
    },
    {
      id: 'type_pumpkin_seed',
      name: 'Pumpkin Seed',
      slug: 'pumpkin-seed',
      description: 'Nutrient-rich seeds from pumpkins and winter squash',
      iconUrl: '/icons/types/pumpkin-seed.svg',
      tasteProfile: 'Nutty, earthy, savory',
      commonUses: ['Snacking', 'Salad topping', 'Oil production'],
      subcategoryID: 'sub_edible_seeds',
      tags: ['seed', 'nutrient-rich', 'oil-seed'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [9, 10, 11]
    }
  ] satisfies ProduceType[],


  varieties: [
    {
      id: 'var_nonpareil_almond',
      name: 'Nonpareil Almond',
      description: 'Premium California almond variety',
      averageShelfLife: 365,
      typeId: 'type_almond'
    },
    {
      id: 'var_austrian_pumpkin',
      name: 'Austrian Pumpkin Seed',
      description: 'Traditional Styrian oil pumpkin seed variety',
      averageShelfLife: 180,
      typeId: 'type_pumpkin_seed'
    }
  ] satisfies Variety[]
};
