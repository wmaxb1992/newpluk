import { create } from 'zustand';
import { generateClient } from '@aws-amplify/api';
import { LIST_PRODUCE_TYPES } from '../graphql/queries';
import { useCategoryDataStore } from '../store/categoryDataStore';

const client = generateClient();

interface ProduceSubcategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  image: string;
  iconUrl: string;
  categoryId: string;
}

interface ProduceType {
  id: string;
  name: string;
  description?: string;
  iconUrl?: string;
  icon?: string;
  image?: string;
  slug?: string;
  subcategoryId: string;
  tasteProfile?: string[];
  commonUses?: string[];
  tags?: string[];
  farmCountInApp?: number;
  farmCountInZone?: number;
  farmCountNearby?: number;
  seasonalMonths?: string[];
  createdAt?: string;
  updatedAt?: string;
}

interface ProduceStore {
  produceTypes: ProduceType[];
  loading: boolean;
  error: string | null;
  fetchProduceTypes: () => Promise<void>;
  getFilteredProduceTypes: (categoryId: string | null, subcategoryId: string | null) => ProduceType[];
}

export const useProduceStore = create<ProduceStore>((set, get): ProduceStore => ({
  produceTypes: [],
  loading: false,
  error: null,
  fetchProduceTypes: async () => {
    set({ loading: true, error: null });
    try {
      console.log('Fetching produce types...');
      const response = await client.graphql({
        query: LIST_PRODUCE_TYPES,
        variables: {
          limit: 1000
        },
        authMode: 'apiKey'
      });
      const result = response as { data?: { listProduceTypes?: { items: ProduceType[] } } };
      
      // Map the produce types to include iconUrl from icon field
      const produceTypes = (result.data?.listProduceTypes?.items || []).map(type => ({
        ...type,
        // Use icon field for iconUrl if iconUrl is missing but icon exists
        iconUrl: type.iconUrl || type.icon || undefined
      }));
      
      console.log('Produce types found:', produceTypes.length);
      // Log first few types to verify data
      produceTypes.slice(0, 5).forEach(pt => {
        console.log(`Produce Type: ${pt.name}, subcategoryId: ${pt.subcategoryId}, icon: ${pt.icon}, iconUrl: ${pt.iconUrl}`);
      });
      set({ produceTypes, loading: false });
    } catch (error: any) {
      console.error('Error fetching produce types:', error);
      set({ error: error.message, loading: false });
    }
  },
  getFilteredProduceTypes: (categoryId: string | null, subcategoryId: string | null) => {
    const { produceTypes } = get();
    console.log('Filtering produce types - category:', categoryId, 'subcategory:', subcategoryId);
    console.log('Total produceTypes available for filtering:', produceTypes.length);
    
    // If no category is selected, return no produce types
    if (!categoryId) {
      console.log('No category selected, returning empty array');
      return [];
    }
    
    // Get subcategories for the selected category
    const subcategories = useCategoryDataStore.getState().getSubcategoriesForCategory(categoryId);
    const subcategoryIds = subcategories.map(sub => sub.id);
    console.log('Available subcategory IDs for this category:', subcategoryIds);
    
    // Log produce types to see their subcategory IDs
    console.log('Sample of available produce types:');
    produceTypes.slice(0, 10).forEach(pt => {
      console.log(`Produce Type: ${pt.name}, subcategoryId: ${pt.subcategoryId}`);
    });
    
    // Filter and deduplicate produce types
    const filtered = produceTypes
      .filter(type => {
        // If a subcategory is selected, only show produce types from that subcategory
        if (subcategoryId) {
          const match = type.subcategoryId === subcategoryId;
          if (match) {
            console.log(`Match for subcategory ${subcategoryId}: ${type.name}`);
          }
          return match;
        }
        // If no subcategory is selected, show all produce types from any subcategory in the current category
        const match = subcategoryIds.includes(type.subcategoryId);
        if (match) {
          console.log(`Match for category ${categoryId} via subcategory ${type.subcategoryId}: ${type.name}`);
        }
        return match;
      })
      // Deduplicate by name (case-insensitive)
      .reduce((unique: ProduceType[], current) => {
        const exists = unique.some(
          item => item.name.toLowerCase() === current.name.toLowerCase()
        );
        if (!exists) {
          unique.push(current);
        }
        return unique;
      }, [])
      .sort((a, b) => a.name.localeCompare(b.name));
    
    console.log('Filtered and deduplicated produce types:', filtered.length);
    if (filtered.length === 0) {
      console.log('WARNING: No produce types matched the filter criteria!');
    }
    return filtered;
  },
}));
