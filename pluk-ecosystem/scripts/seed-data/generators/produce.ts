import { faker } from '@faker-js/faker';
import { executeGraphQL, generateProduceData, randomProduceImage } from '../utils';
import { 
  createProduceCategory, 
  createProduceSubcategory, 
  createProduceType, 
  createProduceVariety,
  createProduceNutrient
} from '../graphql';
import { seedConfig } from '../config';
import {
  CreateProduceCategoryResponse,
  CreateProduceSubcategoryResponse,
  CreateProduceTypeResponse,
  CreateProduceVarietyResponse,
  CreateProduceNutrientResponse
} from '../types';

// Sample produce categories for more realistic data
const produceCategories = [
  { name: 'Vegetables', description: 'Fresh vegetables from local farms' },
  { name: 'Fruits', description: 'Sweet and juicy fruits in season' },
  { name: 'Herbs', description: 'Aromatic herbs for cooking and garnishing' },
  { name: 'Roots & Tubers', description: 'Nutritious root vegetables' },
  { name: 'Leafy Greens', description: 'Nutrient-rich leafy vegetables' },
  { name: 'Berries', description: 'Sweet and tart berries' },
  { name: 'Melons', description: 'Juicy and refreshing melons' },
  { name: 'Citrus', description: 'Tangy citrus fruits' }
];

// Generate produce categories
export const generateProduceCategories = async (count: number = seedConfig.produceCategoryCount) => {
  console.log(`Generating ${count} produce categories...`);
  
  const categories = [];
  const categoriesToUse = produceCategories.slice(0, count);
  
  for (let i = 0; i < categoriesToUse.length; i++) {
    const categoryData = {
      name: categoriesToUse[i].name,
      description: categoriesToUse[i].description,
      image: randomProduceImage()
    };
    
    try {
      const response = await executeGraphQL<CreateProduceCategoryResponse>(createProduceCategory, {
        input: categoryData
      });
      
      const category = response.data.createProduceCategory;
      categories.push(category);
      console.log(`Created produce category: ${category.name} (${category.id})`);
    } catch (error) {
      console.error(`Failed to create produce category ${i + 1}:`, error);
    }
  }
  
  console.log(`Successfully created ${categories.length} produce categories`);
  return categories;
};

// Generate produce subcategories
export const generateProduceSubcategories = async (
  categories: any[],
  countPerCategory: number = seedConfig.produceSubcategoryCount
) => {
  console.log(`Generating ${countPerCategory} subcategories for each of ${categories.length} categories...`);
  
  const subcategories = [];
  
  for (const category of categories) {
    for (let i = 0; i < countPerCategory; i++) {
      const subcategoryData = {
        categoryId: category.id,
        ...generateProduceData(),
        icon: 'icon-' + faker.word.noun().toLowerCase()
      };
      
      try {
        const response = await executeGraphQL<CreateProduceSubcategoryResponse>(createProduceSubcategory, {
          input: subcategoryData
        });
        
        const subcategory = response.data.createProduceSubcategory;
        subcategories.push(subcategory);
        console.log(`Created subcategory: ${subcategory.name} (${subcategory.id}) for category ${category.name}`);
      } catch (error) {
        console.error(`Failed to create subcategory for category ${category.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${subcategories.length} produce subcategories`);
  return subcategories;
};

// Generate produce types
export const generateProduceTypes = async (
  subcategories: any[],
  countPerSubcategory: number = seedConfig.produceTypeCount
) => {
  console.log(`Generating ${countPerSubcategory} types for each of ${subcategories.length} subcategories...`);
  
  const types = [];
  
  for (const subcategory of subcategories) {
    for (let i = 0; i < countPerSubcategory; i++) {
      const typeData = {
        subcategoryId: subcategory.id,
        ...generateProduceData(),
        icon: 'icon-' + faker.word.noun().toLowerCase()
      };
      
      try {
        const response = await executeGraphQL<CreateProduceTypeResponse>(createProduceType, {
          input: typeData
        });
        
        const produceType = response.data.createProduceType;
        types.push(produceType);
        console.log(`Created type: ${produceType.name} (${produceType.id}) for subcategory ${subcategory.name}`);
      } catch (error) {
        console.error(`Failed to create type for subcategory ${subcategory.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${types.length} produce types`);
  return types;
};

// Generate produce varieties
export const generateProduceVarieties = async (
  types: any[],
  countPerType: number = seedConfig.produceVarietyCount
) => {
  console.log(`Generating ${countPerType} varieties for each of ${types.length} types...`);
  
  const varieties = [];
  
  for (const type of types) {
    for (let i = 0; i < countPerType; i++) {
      const varietyData = {
        typeId: type.id,
        ...generateProduceData(),
        icon: 'icon-' + faker.word.noun().toLowerCase()
      };
      
      try {
        const response = await executeGraphQL<CreateProduceVarietyResponse>(createProduceVariety, {
          input: varietyData
        });
        
        const variety = response.data.createProduceVariety;
        varieties.push(variety);
        console.log(`Created variety: ${variety.name} (${variety.id}) for type ${type.name}`);
      } catch (error) {
        console.error(`Failed to create variety for type ${type.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${varieties.length} produce varieties`);
  return varieties;
};

// Generate produce nutrients
export const generateProduceNutrients = async (varieties: any[]) => {
  console.log(`Generating nutrients for ${varieties.length} varieties...`);
  
  const nutrients = [];
  const commonNutrients = [
    { name: 'Vitamin C', unit: 'mg' },
    { name: 'Vitamin A', unit: 'IU' },
    { name: 'Calcium', unit: 'mg' },
    { name: 'Iron', unit: 'mg' },
    { name: 'Fiber', unit: 'g' },
    { name: 'Protein', unit: 'g' }
  ];
  
  for (const variety of varieties) {
    // Add 2-4 random nutrients per variety
    const nutrientCount = faker.number.int({ min: 2, max: 4 });
    const selectedNutrients = faker.helpers.arrayElements(commonNutrients, nutrientCount);
    
    for (const nutrient of selectedNutrients) {
      const nutrientData = {
        varietyId: variety.id,
        name: nutrient.name,
        amount: faker.number.float({ min: 0.1, max: 100, precision: 0.1 }),
        unit: nutrient.unit
      };
      
      try {
        const response = await executeGraphQL<CreateProduceNutrientResponse>(createProduceNutrient, {
          input: nutrientData
        });
        
        const createdNutrient = response.data.createProduceNutrient;
        nutrients.push(createdNutrient);
        console.log(`Created nutrient: ${createdNutrient.name} (${createdNutrient.id}) for variety ${variety.name}`);
      } catch (error) {
        console.error(`Failed to create nutrient for variety ${variety.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${nutrients.length} produce nutrients`);
  return nutrients;
};
