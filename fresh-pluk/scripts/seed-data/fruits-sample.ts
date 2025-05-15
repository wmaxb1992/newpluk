// Sample seed data structure for Fruits category
export const fruitsSample = {
  // Category
  category: {
    id: 'cat_fruits',
    name: 'Fruits',
    description: 'Fresh fruits from local farms',
    slug: 'fruits',
    iconUrl: 'https://example.com/icons/fruits.png',
    colorHex: '#FF6B6B',
    displayOrder: 1,
    farmCountInApp: 150,
    farmCountInZone: 45,
    farmCountNearby: 12
  },

  // Subcategories (filters)
  subcategories: [
    {
      id: 'sub_citrus',
      name: 'Citrus',
      slug: 'citrus',
      iconUrl: 'https://example.com/icons/citrus.png',
      categoryID: 'cat_fruits',
      farmCountInApp: 45,
      farmCountInZone: 15,
      farmCountNearby: 5
    },
    {
      id: 'sub_stone',
      name: 'Stone Fruits',
      slug: 'stone-fruits',
      iconUrl: 'https://example.com/icons/stone-fruits.png',
      categoryID: 'cat_fruits',
      farmCountInApp: 35,
      farmCountInZone: 12,
      farmCountNearby: 4
    },
    {
      id: 'sub_berries',
      name: 'Berries',
      slug: 'berries',
      iconUrl: 'https://example.com/icons/berries.png',
      categoryID: 'cat_fruits',
      farmCountInApp: 40,
      farmCountInZone: 14,
      farmCountNearby: 6
    },
    {
      id: 'sub_tropical',
      name: 'Tropical',
      slug: 'tropical',
      iconUrl: 'https://example.com/icons/tropical.png',
      categoryID: 'cat_fruits',
      farmCountInApp: 20,
      farmCountInZone: 8,
      farmCountNearby: 2
    },
    {
      id: 'sub_tree',
      name: 'Tree Fruits',
      slug: 'tree-fruits',
      iconUrl: 'https://example.com/icons/tree-fruits.png',
      categoryID: 'cat_fruits',
      farmCountInApp: 30,
      farmCountInZone: 10,
      farmCountNearby: 3
    }
  ],

  // Types (showing 3 examples out of 100+)
  types: [
    {
      id: 'type_orange',
      name: 'Orange',
      slug: 'orange',
      iconUrl: 'https://example.com/icons/orange.png',
      description: 'Sweet and juicy citrus fruit rich in Vitamin C',
      tasteProfile: ['Sweet', 'Citrusy', 'Refreshing'],
      commonUses: ['Fresh eating', 'Juicing', 'Cooking', 'Zesting'],
      subcategoryID: 'sub_citrus',  // This links to Citrus subcategory
      tags: ['Citrus', 'Winter Fruit', 'Vitamin C'],
      farmCountInApp: 25,
      farmCountInZone: 8,
      farmCountNearby: 3,
      seasonalMonths: ['November', 'December', 'January', 'February', 'March']
    },
    {
      id: 'type_peach',
      name: 'Peach',
      slug: 'peach',
      iconUrl: 'https://example.com/icons/peach.png',
      description: 'Sweet, juicy stone fruit with fuzzy skin',
      tasteProfile: ['Sweet', 'Floral', 'Juicy'],
      commonUses: ['Fresh eating', 'Baking', 'Preserves', 'Grilling'],
      subcategoryID: 'sub_stone',  // This links to Stone Fruits subcategory
      tags: ['Stone Fruit', 'Summer Fruit', 'Pie Fruit'],
      farmCountInApp: 20,
      farmCountInZone: 7,
      farmCountNearby: 2,
      seasonalMonths: ['June', 'July', 'August', 'September']
    },
    {
      id: 'type_strawberry',
      name: 'Strawberry',
      slug: 'strawberry',
      iconUrl: 'https://example.com/icons/strawberry.png',
      description: 'Sweet, bright red berries with seeds on the surface',
      tasteProfile: ['Sweet', 'Tart', 'Fragrant'],
      commonUses: ['Fresh eating', 'Desserts', 'Preserves', 'Smoothies'],
      subcategoryID: 'sub_berries',  // This links to Berries subcategory
      tags: ['Berry', 'Spring Fruit', 'U-Pick'],
      farmCountInApp: 30,
      farmCountInZone: 10,
      farmCountNearby: 4,
      seasonalMonths: ['April', 'May', 'June', 'July']
    }
  ],

  // Varieties (showing a few examples for Orange type)
  varieties: [
    {
      id: 'var_valencia',
      name: 'Valencia',
      iconUrl: 'https://example.com/icons/valencia-orange.png',
      alternateNames: ['Summer Orange', 'Valencia Late'],
      originCountry: 'United States',
      yearBred: 1865,
      tasteProfile: ['Sweet', 'Slightly Tart', 'Juicy'],
      skinColor: 'Bright Orange',
      fleshColor: 'Orange',
      shelfLifeDays: 14,
      storageTips: 'Store at room temperature for 1 week or refrigerate for up to 2 weeks',
      seasonalMonths: ['March', 'April', 'May', 'June', 'July'],
      flavorNotes: 'Perfectly balanced sweetness and acidity, excellent for juicing',
      nutritionFacts: JSON.stringify({
        servingSize: '100g',
        calories: 47,
        protein: 0.9,
        carbohydrates: 12,
        fiber: 2.4,
        vitaminC: 53.2,
        potassium: 181
      }),
      climateZones: ['9a', '9b', '10a', '10b', '11'],
      aiTags: ['Juicing Orange', 'Commercial Variety', 'Heat Tolerant'],
      rarityScore: 1,
      isGeneric: false,
      typeID: 'type_orange',
      farmCountInApp: 15,
      farmCountInZone: 5,
      farmCountNearby: 2
    },
    {
      id: 'var_navel',
      name: 'Washington Navel',
      iconUrl: 'https://example.com/icons/navel-orange.png',
      alternateNames: ['Bahia Navel', 'California Navel'],
      originCountry: 'Brazil',
      yearBred: 1820,
      tasteProfile: ['Sweet', 'Rich', 'Low Acid'],
      skinColor: 'Deep Orange',
      fleshColor: 'Orange',
      shelfLifeDays: 21,
      storageTips: 'Best stored in refrigerator crisper drawer',
      seasonalMonths: ['November', 'December', 'January', 'February'],
      flavorNotes: 'Sweet and rich flavor with minimal acidity, perfect for eating fresh',
      nutritionFacts: JSON.stringify({
        servingSize: '100g',
        calories: 45,
        protein: 0.9,
        carbohydrates: 11.8,
        fiber: 2.2,
        vitaminC: 59.1,
        potassium: 166
      }),
      climateZones: ['8b', '9a', '9b', '10a', '10b'],
      aiTags: ['Table Orange', 'Seedless', 'Winter Fruit'],
      rarityScore: 1,
      isGeneric: false,
      typeID: 'type_orange',
      farmCountInApp: 12,
      farmCountInZone: 4,
      farmCountNearby: 2
    }
  ]
};
