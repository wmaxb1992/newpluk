import { Category, Subcategory, ProduceType, Variety } from '../types';

interface HerbsAromaticsData {
  category: Category;
  subcategories: Subcategory[];
  types: ProduceType[];
  varieties: Variety[];
}

export const herbsAromaticsData: HerbsAromaticsData = {
  category: {
    id: 'herbs-aromatics',
    name: 'Herbs & Aromatics',
    description: 'Fresh herbs and aromatic plants',
    image: '/images/categories/herbs-aromatics.jpg',
    icon: '/icons/categories/herbs-aromatics.svg',
    iconUrl: '/icons/categories/herbs-aromatics.svg'
  } as Category,

  subcategories: [
    {
      id: 'herbs-culinary',
      name: 'Culinary Herbs',
      description: 'Herbs commonly used in cooking',
      icon: '/icons/subcategories/culinary-herbs.svg',
      image: '/icons/subcategories/culinary-herbs.svg',
      iconUrl: '/icons/subcategories/culinary-herbs.svg',
      categoryId: 'herbs-aromatics'
    },
    {
      id: 'herbs-medicinal',
      name: 'Medicinal Herbs',
      description: 'Herbs with traditional medicinal properties',
      icon: '/icons/subcategories/medicinal-herbs.svg',
      image: '/icons/subcategories/medicinal-herbs.svg',
      iconUrl: '/icons/subcategories/medicinal-herbs.svg',
      categoryId: 'herbs-aromatics'
    },
    {
      id: 'herbs-aromatics',
      name: 'Aromatics',
      description: 'Herbs valued for their aromatic properties',
      icon: '/icons/subcategories/aromatics.svg',
      image: '/icons/subcategories/aromatics.svg',
      iconUrl: '/icons/subcategories/aromatics.svg',
      categoryId: 'herbs-aromatics'
    },
    {
      id: 'herbs-tea',
      name: 'Tea Herbs',
      description: 'Herbs commonly used for making tea',
      icon: '/icons/subcategories/tea-herbs.svg',
      image: '/icons/subcategories/tea-herbs.svg',
      iconUrl: '/icons/subcategories/tea-herbs.svg',
      categoryId: 'herbs-aromatics'
    },
    {
      id: 'herbs-mediterranean',
      name: 'Mediterranean Herbs',
      description: 'Traditional herbs from the Mediterranean region',
      icon: '/icons/subcategories/mediterranean-herbs.svg',
      image: '/icons/subcategories/mediterranean-herbs.svg',
      iconUrl: '/icons/subcategories/mediterranean-herbs.svg',
      categoryId: 'herbs-aromatics'
    }
  ] satisfies Subcategory[],


  types: [
    {
      id: 'basil',
      name: 'Basil',
      slug: 'basil',
      description: 'Sweet and aromatic herb',
      iconUrl: '/icons/types/basil.svg',
      tasteProfile: 'Sweet, peppery, aromatic',
      commonUses: ['Pesto', 'Italian Cuisine', 'Garnish'],
      subcategoryID: 'herbs-culinary',
      tags: ['herb', 'italian', 'aromatic'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [5, 6, 7, 8, 9]
    },
    {
      id: 'lavender',
      name: 'Lavender',
      slug: 'lavender',
      description: 'Fragrant herb used in culinary and aromatic applications',
      iconUrl: '/icons/types/lavender.svg',
      tasteProfile: 'Floral, sweet, herbaceous',
      commonUses: ['Tea', 'Baking', 'Aromatherapy'],
      subcategoryID: 'herbs-aromatics',
      tags: ['herb', 'aromatic', 'floral'],
      farmCountInApp: 0,
      farmCountInZone: 0,
      farmCountNearby: 0,
      seasonalMonths: [6, 7, 8]
    }
  ] satisfies ProduceType[],


  varieties: [
    {
      id: 'genovese-basil',
      name: 'Genovese Basil',
      description: 'Classic Italian sweet basil variety perfect for pesto',
      averageShelfLife: 7,
      typeId: 'basil'
    },
    {
      id: 'english-lavender',
      name: 'English Lavender',
      description: 'Traditional English lavender variety with strong fragrance',
      averageShelfLife: 14,
      typeId: 'lavender'
    }
  ] satisfies Variety[]
};
