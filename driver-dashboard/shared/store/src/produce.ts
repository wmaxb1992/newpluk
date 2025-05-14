import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { zustandStorage, isDataStale, TTL } from './mmkv';
import { 
  ProduceCategory, 
  ProduceSubcategory, 
  ProduceType, 
  ProduceVariety,
  ApiError,
  DataCategory
} from '@pluk/types';

/**
 * Produce store state interface
 * Manages the produce hierarchy (categories, subcategories, types, varieties)
 * This is STATIC data that changes infrequently
 */
interface ProduceState {
  // Data
  categories: ProduceCategory[];
  subcategories: ProduceSubcategory[];
  types: ProduceType[];
  varieties: ProduceVariety[];
  
  // Metadata
  dataCategory: DataCategory.STATIC;
  lastUpdated?: number;
  isLoading: boolean;
  error?: ApiError;
  
  // Actions
  fetchCategories: () => Promise<void>;
  fetchSubcategories: (categoryId?: string) => Promise<void>;
  fetchTypes: (subcategoryId?: string) => Promise<void>;
  fetchVarieties: (typeId?: string) => Promise<void>;
  
  // Selectors
  getCategoryById: (id: string) => ProduceCategory | undefined;
  getSubcategoryById: (id: string) => ProduceSubcategory | undefined;
  getTypeById: (id: string) => ProduceType | undefined;
  getVarietyById: (id: string) => ProduceVariety | undefined;
  
  // Reset
  reset: () => void;
}

/**
 * Produce store implementation
 * Uses persist middleware with MMKV storage for offline access
 */
export const useProduceStore = create<ProduceState>()(
  persist(
    (set, get) => ({
      // Initial state
      categories: [],
      subcategories: [],
      types: [],
      varieties: [],
      dataCategory: DataCategory.STATIC,
      isLoading: false,
      
      // Actions
      fetchCategories: async () => {
        try {
          // Check if data is stale before fetching
          if (!isDataStale(get().lastUpdated, TTL.STATIC)) {
            return;
          }
          
          set({ isLoading: true, error: undefined });
          
          // This will be replaced with actual API call
          // const data = await API.graphql(graphqlOperation(listCategories));
          
          // Mock data for now
          const mockData = {
            data: {
              listCategories: {
                items: [
                  {
                    id: 'cat-1',
                    name: 'Vegetables',
                    description: 'Fresh vegetables from local farms',
                    image: 'https://example.com/vegetables.jpg',
                  },
                  {
                    id: 'cat-2',
                    name: 'Fruits',
                    description: 'Sweet and juicy fruits',
                    image: 'https://example.com/fruits.jpg',
                  },
                ],
              },
            },
          };
          
          set({ 
            categories: mockData.data.listCategories.items,
            lastUpdated: Date.now(),
            isLoading: false 
          });
        } catch (error) {
          set({ 
            error: { 
              message: 'Failed to fetch categories',
              code: 'FETCH_ERROR',
            },
            isLoading: false 
          });
        }
      },
      
      fetchSubcategories: async (categoryId) => {
        try {
          set({ isLoading: true, error: undefined });
          
          // Mock data for now
          const mockData = {
            data: {
              listSubcategories: {
                items: [
                  {
                    id: 'subcat-1',
                    categoryID: 'cat-1',
                    name: 'Leafy Greens',
                    description: 'Nutritious leafy vegetables',
                    image: 'https://example.com/leafy-greens.jpg',
                  },
                  {
                    id: 'subcat-2',
                    categoryID: 'cat-1',
                    name: 'Root Vegetables',
                    description: 'Hearty root vegetables',
                    image: 'https://example.com/root-vegetables.jpg',
                  },
                ],
              },
            },
          };
          
          // Filter by categoryId if provided
          const items = categoryId
            ? mockData.data.listSubcategories.items.filter(item => item.categoryID === categoryId)
            : mockData.data.listSubcategories.items;
          
          set({ 
            subcategories: items,
            lastUpdated: Date.now(),
            isLoading: false 
          });
        } catch (error) {
          set({ 
            error: { 
              message: 'Failed to fetch subcategories',
              code: 'FETCH_ERROR',
            },
            isLoading: false 
          });
        }
      },
      
      fetchTypes: async (subcategoryId) => {
        // Implementation similar to fetchSubcategories
        set({ isLoading: true });
        // Mock implementation
        setTimeout(() => {
          set({ isLoading: false });
        }, 500);
      },
      
      fetchVarieties: async (typeId) => {
        // Implementation similar to fetchSubcategories
        set({ isLoading: true });
        // Mock implementation
        setTimeout(() => {
          set({ isLoading: false });
        }, 500);
      },
      
      // Selectors
      getCategoryById: (id) => get().categories.find(cat => cat.id === id),
      getSubcategoryById: (id) => get().subcategories.find(subcat => subcat.id === id),
      getTypeById: (id) => get().types.find(type => type.id === id),
      getVarietyById: (id) => get().varieties.find(variety => variety.id === id),
      
      // Reset
      reset: () => set({ 
        categories: [],
        subcategories: [],
        types: [],
        varieties: [],
        lastUpdated: undefined,
        isLoading: false,
        error: undefined,
      }),
    }),
    {
      name: 'produce-storage',
      getStorage: () => zustandStorage,
      partialize: (state) => ({
        categories: state.categories,
        subcategories: state.subcategories,
        types: state.types,
        varieties: state.varieties,
        lastUpdated: state.lastUpdated,
      }),
    }
  )
);
