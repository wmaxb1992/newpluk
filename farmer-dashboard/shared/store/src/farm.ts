import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { zustandStorage, isDataStale, TTL } from './mmkv';
import { 
  Farm,
  FarmFilter,
  ApiError,
  DataCategory,
  PaginatedResult
} from '@pluk/types';

/**
 * Farm store state interface
 * Manages farm data and related entities
 * This is SEMI-STATIC data that changes occasionally
 */
interface FarmState {
  // Data
  farms: Record<string, Farm>; // Map of farmId -> Farm
  featuredFarms: string[]; // Array of farm IDs
  followedFarms: string[]; // Array of farm IDs the user follows
  
  // Pagination
  nextToken?: string;
  
  // Metadata
  dataCategory: DataCategory.SEMI_STATIC;
  lastUpdated?: number;
  isLoading: boolean;
  error?: ApiError;
  
  // Actions
  fetchFarms: (filter?: FarmFilter, limit?: number) => Promise<void>;
  fetchFarmById: (id: string) => Promise<Farm | undefined>;
  fetchFeaturedFarms: () => Promise<void>;
  fetchFollowedFarms: () => Promise<void>;
  followFarm: (farmId: string) => Promise<void>;
  unfollowFarm: (farmId: string) => Promise<void>;
  
  // Selectors
  getFarmById: (id: string) => Farm | undefined;
  getFollowedFarms: () => Farm[];
  getFeaturedFarms: () => Farm[];
  
  // Reset
  reset: () => void;
}

/**
 * Farm store implementation
 * Uses persist middleware with MMKV storage for offline access
 */
export const useFarmStore = create<FarmState>()(
  persist(
    (set, get) => ({
      // Initial state
      farms: {},
      featuredFarms: [],
      followedFarms: [],
      dataCategory: DataCategory.SEMI_STATIC,
      isLoading: false,
      
      // Actions
      fetchFarms: async (filter, limit = 20) => {
        try {
          // Check if data is stale before fetching
          if (!isDataStale(get().lastUpdated, TTL.SEMI_STATIC) && Object.keys(get().farms).length > 0) {
            return;
          }
          
          set({ isLoading: true, error: undefined });
          
          // This will be replaced with actual API call
          // const data = await API.graphql(graphqlOperation(listFarms, { filter, limit, nextToken: get().nextToken }));
          
          // Mock data for now
          const mockData = {
            data: {
              listFarms: {
                items: [
                  {
                    id: 'farm-1',
                    name: 'Green Valley Farm',
                    description: 'Organic family farm since 1982',
                    images: ['https://example.com/farm1.jpg'],
                    location: {
                      latitude: 37.7749,
                      longitude: -122.4194,
                      address: '123 Farm Lane',
                      city: 'Farmville',
                      state: 'CA',
                      zipCode: '94111',
                      country: 'USA'
                    },
                    contactEmail: 'info@greenvalleyfarm.com',
                    contactPhone: '555-123-4567',
                    website: 'https://greenvalleyfarm.com',
                    organic: true,
                    yearEstablished: 1982
                  },
                  {
                    id: 'farm-2',
                    name: 'Sunshine Orchards',
                    description: 'Specializing in heirloom fruit varieties',
                    images: ['https://example.com/farm2.jpg'],
                    location: {
                      latitude: 37.8044,
                      longitude: -122.2712,
                      address: '456 Orchard Road',
                      city: 'Fruitland',
                      state: 'CA',
                      zipCode: '94612',
                      country: 'USA'
                    },
                    contactEmail: 'hello@sunshineorchards.com',
                    contactPhone: '555-987-6543',
                    website: 'https://sunshineorchards.com',
                    organic: false,
                    yearEstablished: 1995
                  }
                ],
                nextToken: null
              }
            }
          };
          
          const result = mockData.data.listFarms as PaginatedResult<Farm>;
          
          // Convert array to record for faster lookups
          const farmMap: Record<string, Farm> = {};
          result.items.forEach(farm => {
            farmMap[farm.id] = farm;
          });
          
          set({ 
            farms: { ...get().farms, ...farmMap },
            nextToken: result.nextToken,
            lastUpdated: Date.now(),
            isLoading: false 
          });
        } catch (error) {
          set({ 
            error: { 
              message: 'Failed to fetch farms',
              code: 'FETCH_ERROR',
            },
            isLoading: false 
          });
        }
      },
      
      fetchFarmById: async (id) => {
        try {
          // Check if we already have this farm and it's not stale
          const existingFarm = get().farms[id];
          if (existingFarm && !isDataStale(get().lastUpdated, TTL.SEMI_STATIC)) {
            return existingFarm;
          }
          
          set({ isLoading: true, error: undefined });
          
          // This will be replaced with actual API call
          // const data = await API.graphql(graphqlOperation(getFarm, { id }));
          
          // Mock data for now
          const mockData = {
            data: {
              getFarm: {
                id,
                name: id === 'farm-1' ? 'Green Valley Farm' : 'Sunshine Orchards',
                description: id === 'farm-1' 
                  ? 'Organic family farm since 1982' 
                  : 'Specializing in heirloom fruit varieties',
                images: [id === 'farm-1' ? 'https://example.com/farm1.jpg' : 'https://example.com/farm2.jpg'],
                location: {
                  latitude: id === 'farm-1' ? 37.7749 : 37.8044,
                  longitude: id === 'farm-1' ? -122.4194 : -122.2712,
                  address: id === 'farm-1' ? '123 Farm Lane' : '456 Orchard Road',
                  city: id === 'farm-1' ? 'Farmville' : 'Fruitland',
                  state: 'CA',
                  zipCode: id === 'farm-1' ? '94111' : '94612',
                  country: 'USA'
                },
                contactEmail: id === 'farm-1' ? 'info@greenvalleyfarm.com' : 'hello@sunshineorchards.com',
                contactPhone: id === 'farm-1' ? '555-123-4567' : '555-987-6543',
                website: id === 'farm-1' ? 'https://greenvalleyfarm.com' : 'https://sunshineorchards.com',
                organic: id === 'farm-1',
                yearEstablished: id === 'farm-1' ? 1982 : 1995
              }
            }
          };
          
          const farm = mockData.data.getFarm as Farm;
          
          // Update the farms record
          set({ 
            farms: { 
              ...get().farms, 
              [id]: farm 
            },
            lastUpdated: Date.now(),
            isLoading: false 
          });
          
          return farm;
        } catch (error) {
          set({ 
            error: { 
              message: `Failed to fetch farm with ID ${id}`,
              code: 'FETCH_ERROR',
            },
            isLoading: false 
          });
          return undefined;
        }
      },
      
      fetchFeaturedFarms: async () => {
        try {
          set({ isLoading: true, error: undefined });
          
          // Mock data for now
          const mockFeaturedFarmIds = ['farm-1', 'farm-2'];
          
          // Fetch any farms we don't already have
          for (const farmId of mockFeaturedFarmIds) {
            if (!get().farms[farmId]) {
              await get().fetchFarmById(farmId);
            }
          }
          
          set({ 
            featuredFarms: mockFeaturedFarmIds,
            isLoading: false 
          });
        } catch (error) {
          set({ 
            error: { 
              message: 'Failed to fetch featured farms',
              code: 'FETCH_ERROR',
            },
            isLoading: false 
          });
        }
      },
      
      fetchFollowedFarms: async () => {
        try {
          set({ isLoading: true, error: undefined });
          
          // Mock data for now - in reality, this would come from the user's profile
          const mockFollowedFarmIds = ['farm-2'];
          
          // Fetch any farms we don't already have
          for (const farmId of mockFollowedFarmIds) {
            if (!get().farms[farmId]) {
              await get().fetchFarmById(farmId);
            }
          }
          
          set({ 
            followedFarms: mockFollowedFarmIds,
            isLoading: false 
          });
        } catch (error) {
          set({ 
            error: { 
              message: 'Failed to fetch followed farms',
              code: 'FETCH_ERROR',
            },
            isLoading: false 
          });
        }
      },
      
      followFarm: async (farmId) => {
        try {
          set({ isLoading: true, error: undefined });
          
          // This will be replaced with actual API call
          // await API.graphql(graphqlOperation(followFarm, { farmId }));
          
          // Optimistically update the UI
          set({ 
            followedFarms: [...get().followedFarms, farmId],
            isLoading: false 
          });
        } catch (error) {
          set({ 
            error: { 
              message: `Failed to follow farm with ID ${farmId}`,
              code: 'MUTATION_ERROR',
            },
            isLoading: false 
          });
        }
      },
      
      unfollowFarm: async (farmId) => {
        try {
          set({ isLoading: true, error: undefined });
          
          // This will be replaced with actual API call
          // await API.graphql(graphqlOperation(unfollowFarm, { farmId }));
          
          // Optimistically update the UI
          set({ 
            followedFarms: get().followedFarms.filter(id => id !== farmId),
            isLoading: false 
          });
        } catch (error) {
          set({ 
            error: { 
              message: `Failed to unfollow farm with ID ${farmId}`,
              code: 'MUTATION_ERROR',
            },
            isLoading: false 
          });
        }
      },
      
      // Selectors
      getFarmById: (id) => get().farms[id],
      
      getFollowedFarms: () => {
        return get().followedFarms
          .map(id => get().farms[id])
          .filter(Boolean) as Farm[];
      },
      
      getFeaturedFarms: () => {
        return get().featuredFarms
          .map(id => get().farms[id])
          .filter(Boolean) as Farm[];
      },
      
      // Reset
      reset: () => set({ 
        farms: {},
        featuredFarms: [],
        followedFarms: [],
        nextToken: undefined,
        lastUpdated: undefined,
        isLoading: false,
        error: undefined,
      }),
    }),
    {
      name: 'farm-storage',
      getStorage: () => zustandStorage,
      partialize: (state) => ({
        farms: state.farms,
        featuredFarms: state.featuredFarms,
        followedFarms: state.followedFarms,
        lastUpdated: state.lastUpdated,
      }),
    }
  )
);
