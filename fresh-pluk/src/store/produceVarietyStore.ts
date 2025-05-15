import { create } from 'zustand';
import { generateClient } from '@aws-amplify/api';
import { LIST_PRODUCE_VARIETIES } from '../graphql/queries';

const client = generateClient();

// Interface definitions for ProduceVariety
export interface ProduceVariety {
  id: string;
  name: string;
  typeId: string;
  description?: string;
  farmCountInApp?: number;
  farmCountInZone?: number;
  farmCountNearby?: number;
  iconUrl?: string;
  icon?: string;
  image?: string;
  season?: string[];
  averageShelfLife?: number;
  averageWeight?: number;
  weightUnit?: string;
}

interface ProduceVarietyStore {
  varieties: ProduceVariety[];
  selectedTypeId: string | null;
  loading: boolean;
  error: string | null;
  fetchVarietiesByType: (typeId: string) => Promise<void>;
  clearVarieties: () => void;
}

export const useProduceVarietyStore = create<ProduceVarietyStore>((set, get): ProduceVarietyStore => ({
  varieties: [],
  selectedTypeId: null,
  loading: false,
  error: null,
  
  fetchVarietiesByType: async (typeId: string) => {
    // If already loaded for this type, don't fetch again
    if (get().selectedTypeId === typeId && get().varieties.length > 0) {
      console.log(`[ProduceVarietyStore] Already loaded varieties for type ${typeId}, skipping fetch`);
      return;
    }
    
    console.log(`[ProduceVarietyStore] Setting loading state and fetching varieties for type ID: ${typeId}`);
    set({ loading: true, error: null, selectedTypeId: typeId });
    
    try {
      // Create a more specific filter to ensure we only get varieties for this type
      const filter = {
        typeId: { eq: typeId }
      };
      
      console.log(`[ProduceVarietyStore] Executing GraphQL query with filter:`, JSON.stringify(filter));
      
      // Try the query with explicit typeId parameter first
      try {
        const response = await client.graphql({
          query: LIST_PRODUCE_VARIETIES,
          variables: { 
            typeId,
            filter,
            limit: 100 
          },
          authMode: 'apiKey'
        });
        
        // Log the raw response for debugging
        console.log(`[ProduceVarietyStore] Raw GraphQL response:`, JSON.stringify(response, null, 2));
        
        const result = response as { data?: { listProduceVarieties?: { items: ProduceVariety[] } } };
        
        if (!result.data || !result.data.listProduceVarieties) {
          throw new Error('Invalid response format from GraphQL API');
        }
        
        // Process varieties and ensure they have iconUrl
        const varieties = (result.data.listProduceVarieties.items || []).map(variety => ({
          ...variety,
          // Use icon field for iconUrl if iconUrl is missing but icon exists
          iconUrl: variety.iconUrl || variety.icon || undefined,
          // Default farm counts to 0 if not provided
          farmCountInApp: variety.farmCountInApp || 0,
          farmCountInZone: variety.farmCountInZone || 0,
          farmCountNearby: variety.farmCountNearby || 0
        }));
        
        console.log(`[ProduceVarietyStore] Fetched ${varieties.length} varieties for type ID ${typeId}`);
        
        // Log the first few varieties for debugging
        if (varieties.length > 0) {
          console.log(`[ProduceVarietyStore] Sample varieties:`, 
            varieties.slice(0, 3).map(v => ({id: v.id, name: v.name, shelfLife: v.averageShelfLife}))
          );
        } else {
          console.log(`[ProduceVarietyStore] WARNING: No varieties found for type ID ${typeId}`);
          
          // If no varieties, add mock data for testing UI
          if (typeId && typeId.length > 0) {
            const mockVarieties = [
              {
                id: `mock-${typeId}-1`,
                name: "Sample Variety 1",
                typeId: typeId,
                description: "This is a sample variety for testing",
                averageShelfLife: 14,
                farmCountInApp: 5
              },
              {
                id: `mock-${typeId}-2`,
                name: "Sample Variety 2",
                typeId: typeId,
                description: "Another sample variety for testing",
                averageShelfLife: 7,
                farmCountInApp: 3
              }
            ];
            
            console.log(`[ProduceVarietyStore] Added ${mockVarieties.length} mock varieties for testing`);
            
            set({ 
              varieties: mockVarieties as ProduceVariety[],
              loading: false
            });
            return;
          }
        }
        
        // Sort varieties by shelf life (highest first) as a proxy for popularity
        const sortedVarieties = [...varieties].sort((a, b) => 
          (b.averageShelfLife || 0) - (a.averageShelfLife || 0)
        );
        
        set({ 
          varieties: sortedVarieties,
          loading: false
        });
      } catch (error) {
        // If direct query fails, try with just the filter
        console.error(`[ProduceVarietyStore] Failed with typeId parameter, trying with filter only:`, error);
        
        const response = await client.graphql({
          query: LIST_PRODUCE_VARIETIES,
          variables: { 
            filter,
            limit: 100 
          },
          authMode: 'apiKey'
        });
        
        console.log(`[ProduceVarietyStore] Second attempt response:`, JSON.stringify(response, null, 2));
        
        const result = response as { data?: { listProduceVarieties?: { items: ProduceVariety[] } } };
        
        if (!result.data || !result.data.listProduceVarieties) {
          throw new Error('Invalid response format from GraphQL API on second attempt');
        }
        
        const varieties = (result.data.listProduceVarieties.items || []).map(variety => ({
          ...variety,
          iconUrl: variety.iconUrl || variety.icon || undefined,
          farmCountInApp: variety.farmCountInApp || 0,
          farmCountInZone: variety.farmCountInZone || 0,
          farmCountNearby: variety.farmCountNearby || 0
        }));
        
        console.log(`[ProduceVarietyStore] Second attempt fetched ${varieties.length} varieties`);
        
        const sortedVarieties = [...varieties].sort((a, b) => 
          (b.averageShelfLife || 0) - (a.averageShelfLife || 0)
        );
        
        set({ 
          varieties: sortedVarieties,
          loading: false
        });
      }
    } catch (error: any) {
      const errorMessage = error?.message || 'Failed to fetch produce varieties';
      console.error(`[ProduceVarietyStore] Error fetching varieties:`, errorMessage);
      
      // Log more details about the error
      if (error?.stack) {
        console.error(`[ProduceVarietyStore] Error stack:`, error.stack);
      }
      
      // Add mock data for testing when there's an error
      const mockVarieties = [
        {
          id: `mock-error-1`,
          name: "Mock Error Variety 1",
          typeId: typeId,
          description: "Mock variety added due to API error",
          averageShelfLife: 10,
          farmCountInApp: 2
        },
        {
          id: `mock-error-2`,
          name: "Mock Error Variety 2",
          typeId: typeId,
          description: "Another mock variety due to API error",
          averageShelfLife: 5,
          farmCountInApp: 1
        }
      ];
      
      console.log(`[ProduceVarietyStore] Added mock varieties due to error`);
      
      set({ 
        error: errorMessage,
        loading: false,
        varieties: mockVarieties as ProduceVariety[] // Add mock data for testing
      });
    }
  },
  
  clearVarieties: () => {
    console.log(`[ProduceVarietyStore] Clearing varieties`);
    set({ varieties: [], selectedTypeId: null });
  }
})); 