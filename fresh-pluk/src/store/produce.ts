import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';
import { client } from '../config/amplify';
import { LIST_PRODUCE_LISTINGS, GET_PRODUCE_LISTING, LIST_PRODUCE_TYPES } from '../graphql/queries';
import {
  ProduceCategory,
  ProduceSubcategory,
  ProduceType,
  ProduceVariety,
  ProduceListing
} from './types/models';

interface ProduceState {
  // Data
  categories: ProduceCategory[];
  subcategories: ProduceSubcategory[];
  types: ProduceType[];
  varieties: ProduceVariety[];
  listings: ProduceListing[];
  
  // Metadata
  lastUpdated?: number;
  isLoading: boolean;
  error?: string;
  
  // Actions
  fetchCategories: () => Promise<void>;
  fetchSubcategories: (categoryId?: string) => Promise<void>;
  fetchTypes: (subcategoryId?: string) => Promise<void>;
  fetchVarieties: (typeId?: string) => Promise<void>;
  fetchListings: () => Promise<void>;
  
  // Selectors
  getCategoryById: (id: string) => ProduceCategory | undefined;
  getSubcategoryById: (id: string) => ProduceSubcategory | undefined;
  getTypeById: (id: string) => ProduceType | undefined;
  getVarietyById: (id: string) => ProduceVariety | undefined;
  getListingById: (id: string) => ProduceListing | undefined;
  
  // Reset
  reset: () => void;
}

export const useProduceStore = create<ProduceState>()(
  persist(
    (set, get) => ({
      // Initial state
      categories: [],
      subcategories: [],
      types: [],
      varieties: [],
      listings: [],
      isLoading: false,
      
      // Real API calls
      fetchCategories: async () => {
        set({ isLoading: true, error: undefined });
        try {
          // TODO: Implement when categories API is ready
          set({ lastUpdated: Date.now() });
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'An error occurred' });
        } finally {
          set({ isLoading: false });
        }
      },
      
      fetchSubcategories: async (categoryId) => {
        set({ isLoading: true, error: undefined });
        try {
          // TODO: Implement when subcategories API is ready
          set({ lastUpdated: Date.now() });
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'An error occurred' });
        } finally {
          set({ isLoading: false });
        }
      },
      
      fetchTypes: async (subcategoryId) => {
        set({ isLoading: true, error: undefined });
        try {
          const { data } = await client.graphql({
            query: LIST_PRODUCE_TYPES,
            variables: {
              filter: subcategoryId ? { subcategoryID: { eq: subcategoryId } } : undefined,
              limit: 50
            }
          }) as { data: { listProduceTypes: { items: ProduceType[] } } };
          
          const types = data.listProduceTypes.items;
          set({
            types,
            lastUpdated: Date.now(),
          });
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'An error occurred' });
        } finally {
          set({ isLoading: false });
        }
      },
      
      fetchVarieties: async (typeId) => {
        set({ isLoading: true, error: undefined });
        try {
          // TODO: Implement when varieties API is ready
          set({ lastUpdated: Date.now() });
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'An error occurred' });
        } finally {
          set({ isLoading: false });
        }
      },
      
      fetchListings: async () => {
        set({ isLoading: true, error: undefined });
        try {
          const { data } = await client.graphql({
            query: LIST_PRODUCE_LISTINGS,
            variables: {
              filter: { active: { eq: true } },
              limit: 20
            }
          }) as { data: { listProduceListings: { items: ProduceListing[] } } };
          
          const listings = data.listProduceListings.items;
          set({
            listings,
            lastUpdated: Date.now(),
          });
        } catch (error) {
          set({ error: error instanceof Error ? error.message : 'An error occurred' });
        } finally {
          set({ isLoading: false });
        }
      },
      
      // Selectors
      getCategoryById: (id) => get().categories.find(c => c.id === id),
      getSubcategoryById: (id) => get().subcategories.find(s => s.id === id),
      getTypeById: (id) => get().types.find(t => t.id === id),
      getVarietyById: (id) => get().varieties.find(v => v.id === id),
      getListingById: (id) => get().listings.find(l => l.id === id),
      
      // Reset
      reset: () => {
        set({
          categories: [],
          subcategories: [],
          types: [],
          varieties: [],
          listings: [],
          lastUpdated: undefined,
          isLoading: false,
          error: undefined,
        });
      },
    }),
    {
      name: 'produce-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
