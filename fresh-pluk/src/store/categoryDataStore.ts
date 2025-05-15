import { create } from 'zustand';
import { GraphQLResult } from '@aws-amplify/api-graphql';
import { LIST_PRODUCE_CATEGORIES, LIST_PRODUCE_SUBCATEGORIES } from '../graphql/queries';
import { getClient } from '../config/amplify';

type ListCategoriesResponse = {
  listProduceCategories: {
    items: Array<{
      id: string;
      name: string;
    }>;
  };
};

type ListSubcategoriesResponse = {
  listProduceSubcategories: {
    items: Array<{
      id: string;
      name: string;
      categoryID: string;
    }>;
  };
};

export interface Category {
  id: string;
  name: string;
}

export interface Subcategory {
  id: string;
  name: string;
  categoryId: string;
}

interface CategoryDataState {
  categories: Category[];
  subcategories: Subcategory[];
  categoriesLoading: boolean;
  subcategoriesLoading: boolean;
  error: string | null;
  fetchCategories: () => Promise<void>;
  fetchAllSubcategories: () => Promise<void>;
  getSubcategoriesForCategory: (categoryId: string) => Subcategory[];
}

export const useCategoryDataStore = create<CategoryDataState>((set, get) => ({
  categories: [],
  subcategories: [],
  categoriesLoading: false,
  subcategoriesLoading: false,
  error: null,
  
  fetchCategories: async () => {
    set(state => ({ ...state, categoriesLoading: true, error: null }));
    try {
      console.log('Fetching categories...');
      const client = getClient();
      
      const result = await client.graphql({
        query: LIST_PRODUCE_CATEGORIES,
        authMode: 'apiKey'
      }) as GraphQLResult<ListCategoriesResponse>;
      
      if (!result.data?.listProduceCategories?.items) {
        throw new Error('No categories data returned');
      }

      // Deduplicate categories by name (case-insensitive)
      const uniqueCategories = result.data.listProduceCategories.items.reduce((unique: Category[], current) => {
        const exists = unique.some(
          item => item.name.toLowerCase() === current.name.toLowerCase()
        );
        if (!exists) {
          unique.push(current);
        } else {
          console.log('Found duplicate category:', current.name);
        }
        return unique;
      }, []);
      
      // Sort categories alphabetically
      uniqueCategories.sort((a, b) => a.name.localeCompare(b.name));
      
      console.log('Unique categories found:', uniqueCategories.length);
      
      set(state => ({ 
        ...state,
        categories: uniqueCategories,
        categoriesLoading: false 
      }));

      // After fetching categories, fetch all subcategories
      await get().fetchAllSubcategories();
    } catch (err) {
      console.error('Error fetching categories:', err);
      set(state => ({ 
        ...state, 
        error: 'Failed to fetch categories', 
        categoriesLoading: false 
      }));
    }
  },

  fetchAllSubcategories: async () => {
    set(state => ({ ...state, subcategoriesLoading: true }));
    try {
      const client = getClient();
      const response = await client.graphql({
        query: LIST_PRODUCE_SUBCATEGORIES,
        variables: {
          limit: 1000 // Get all subcategories at once
        },
        authMode: 'apiKey'
      });
      
      const result = response as { data?: { listProduceSubcategories?: { items: Subcategory[] } } };
      const subcategories = result.data?.listProduceSubcategories?.items || [];
      
      // Sort subcategories alphabetically
      subcategories.sort((a, b) => a.name.localeCompare(b.name));
      
      set(state => ({ 
        ...state,
        subcategories,
        subcategoriesLoading: false 
      }));
    } catch (error) {
      console.error('Error fetching subcategories:', error);
      set(state => ({ 
        ...state,
        subcategoriesLoading: false,
        error: 'Failed to fetch subcategories'
      }));
    }
  },

  getSubcategoriesForCategory: (categoryId: string): Subcategory[] => {
    // Filter from stored subcategories instead of making an API call
    return get().subcategories.filter(sub => sub.categoryId === categoryId);
  }
}));
