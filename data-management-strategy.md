# Pluk Ecosystem Data Management Strategy

## Core Principles

1. **Data Categorization**: Categorize data based on update frequency and criticality
2. **Local-First Architecture**: Prioritize local data access where appropriate
3. **Intelligent Sync**: Sync data based on usage patterns and connectivity
4. **Minimal Network Usage**: Reduce network calls through strategic caching
5. **Real-Time Where Needed**: Use real-time updates only for critical data
6. **Offline Support**: Ensure core functionality works offline

## Data Categories

### 1. Static Reference Data
- Produce hierarchy (categories, subcategories, types, varieties)
- Nutritional information
- Geographic zones
- App configuration

### 2. Semi-Static Data
- Farm profiles
- Product information
- User preferences
- Historical orders

### 3. Dynamic Data
- Inventory levels
- Prices
- Ratings and reviews
- Pre-harvest listings

### 4. Real-Time Data
- Order status
- Cart contents
- Driver location
- Notifications

## Zustand Store Structure

```typescript
// Root store types
interface RootStore {
  auth: AuthStore;
  produce: ProduceStore;
  farms: FarmStore;
  cart: CartStore;
  orders: OrderStore;
  ui: UIStore;
}

// Example store implementation
import create from 'zustand';
import { persist } from 'zustand/middleware';
import { MMKV } from 'react-native-mmkv';

const storage = new MMKV();

// Storage adapter for MMKV
const zustandStorage = {
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ? JSON.parse(value) : null;
  },
  setItem: (name: string, value: any) => {
    storage.set(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    storage.delete(name);
  },
};

// Example produce store with persistence
export const useProduceStore = create(
  persist(
    (set, get) => ({
      categories: [],
      subcategories: [],
      types: [],
      varieties: [],
      isLoading: false,
      error: null,
      
      fetchCategories: async () => {
        try {
          set({ isLoading: true });
          // Check if data is stale before fetching
          if (shouldRefetchCategories(get().lastUpdated)) {
            const data = await API.graphql(graphqlOperation(listCategories));
            set({ 
              categories: data.data.listCategories.items,
              lastUpdated: Date.now(),
              isLoading: false 
            });
          } else {
            set({ isLoading: false });
          }
        } catch (error) {
          set({ error, isLoading: false });
        }
      },
      
      // Other actions...
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
```

## Data Fetching Rules

### 1. Fetch Strategy by Data Category

#### Static Reference Data
- **Fetch Once**: Load on app initialization and store locally
- **Update Frequency**: Check for updates daily or on app restart
- **Storage**: MMKV with no expiration
- **Example**: Produce categories, nutritional information

```typescript
// Static data fetching with version check
const fetchStaticData = async () => {
  const localVersion = await MMKV.getNumber('staticDataVersion');
  const serverVersion = await API.graphql(
    graphqlOperation(getDataVersion, { type: 'STATIC' })
  );
  
  if (!localVersion || localVersion < serverVersion) {
    const data = await API.graphql(graphqlOperation(getStaticData));
    await MMKV.setString('staticData', JSON.stringify(data));
    await MMKV.setNumber('staticDataVersion', serverVersion);
  }
  
  return JSON.parse(MMKV.getString('staticData') || '{}');
};
```

#### Semi-Static Data
- **Fetch Strategy**: Load from local storage first, then update from server
- **Update Frequency**: Check for updates hourly or when relevant screen opens
- **Storage**: MMKV with 24-hour expiration
- **Example**: Farm profiles, product details

```typescript
// Semi-static data with TTL
const fetchFarmProfile = async (farmId) => {
  const cachedData = MMKV.getString(`farm-${farmId}`);
  const cachedTimestamp = MMKV.getNumber(`farm-${farmId}-timestamp`);
  const now = Date.now();
  
  // If cache is valid (less than 24 hours old)
  if (cachedData && cachedTimestamp && (now - cachedTimestamp < 24 * 60 * 60 * 1000)) {
    // Return cached data immediately
    return JSON.parse(cachedData);
  }
  
  // Fetch fresh data
  const data = await API.graphql(
    graphqlOperation(getFarm, { id: farmId })
  );
  
  // Update cache
  MMKV.setString(`farm-${farmId}`, JSON.stringify(data));
  MMKV.setNumber(`farm-${farmId}-timestamp`, now);
  
  return data;
};
```

#### Dynamic Data
- **Fetch Strategy**: Always fetch from server but with intelligent caching
- **Update Frequency**: On demand with 5-15 minute cache
- **Storage**: MMKV with short expiration
- **Example**: Inventory levels, prices

```typescript
// Dynamic data with short TTL and background refresh
const fetchInventory = async (productId) => {
  const cachedData = MMKV.getString(`inventory-${productId}`);
  const cachedTimestamp = MMKV.getNumber(`inventory-${productId}-timestamp`);
  const now = Date.now();
  
  // Return cached data immediately if available (even if stale)
  if (cachedData) {
    const parsedData = JSON.parse(cachedData);
    
    // If cache is older than 5 minutes, trigger background refresh
    if (!cachedTimestamp || (now - cachedTimestamp > 5 * 60 * 1000)) {
      refreshInventoryInBackground(productId);
    }
    
    return parsedData;
  }
  
  // No cache available, fetch synchronously
  return fetchInventoryFromServer(productId);
};

const refreshInventoryInBackground = async (productId) => {
  try {
    const data = await API.graphql(
      graphqlOperation(getInventory, { id: productId })
    );
    
    MMKV.setString(`inventory-${productId}`, JSON.stringify(data));
    MMKV.setNumber(`inventory-${productId}-timestamp`, Date.now());
    
    // Notify store of update
    useInventoryStore.getState().updateInventory(productId, data);
  } catch (error) {
    console.error('Background refresh failed:', error);
  }
};
```

#### Real-Time Data
- **Fetch Strategy**: GraphQL subscriptions with local state updates
- **Update Frequency**: Immediate
- **Storage**: In-memory only
- **Example**: Order status, cart contents

```typescript
// Real-time data with GraphQL subscriptions
const setupOrderSubscription = (orderId) => {
  const subscription = API.graphql(
    graphqlOperation(onOrderStatusChanged, { orderId })
  ).subscribe({
    next: (data) => {
      const orderStatus = data.value.data.onOrderStatusChanged;
      useOrderStore.getState().updateOrderStatus(orderId, orderStatus);
      
      // Trigger notification if needed
      if (orderStatus === 'DELIVERED') {
        showDeliveredNotification(orderId);
      }
    },
    error: (error) => console.error('Subscription error:', error),
  });
  
  // Return unsubscribe function
  return () => subscription.unsubscribe();
};
```

### 2. Request Batching and Deduplication

```typescript
// Request batching for multiple items
const batchedFetch = async (ids, fetchFunction) => {
  // Deduplicate IDs
  const uniqueIds = [...new Set(ids)];
  
  // Check which IDs need fetching
  const idsToFetch = uniqueIds.filter(id => !isCached(id));
  
  if (idsToFetch.length === 0) {
    return getCachedItems(uniqueIds);
  }
  
  // Batch fetch from server
  const results = await fetchFunction(idsToFetch);
  
  // Cache results
  results.forEach(item => cacheItem(item.id, item));
  
  // Return all items (from cache and freshly fetched)
  return getCachedItems(uniqueIds);
};
```

### 3. Pagination and Infinite Scrolling

```typescript
// Cursor-based pagination with local caching
const fetchProduceListings = async (filters, cursor = null, limit = 20) => {
  const cacheKey = `listings-${JSON.stringify(filters)}-${cursor}`;
  const cachedData = MMKV.getString(cacheKey);
  
  if (cachedData) {
    return JSON.parse(cachedData);
  }
  
  const variables = {
    filter: filters,
    limit,
    nextToken: cursor,
  };
  
  const response = await API.graphql(
    graphqlOperation(listProduceListings, variables)
  );
  
  const result = response.data.listProduceListings;
  
  // Cache this page
  MMKV.setString(cacheKey, JSON.stringify(result));
  
  return result;
};
```

## Offline Support Strategy

### 1. Offline Detection and Handling

```typescript
import NetInfo from '@react-native-community/netinfo';

// Set up network listener
const setupNetworkListener = () => {
  const unsubscribe = NetInfo.addEventListener(state => {
    const isConnected = state.isConnected && state.isInternetReachable;
    useNetworkStore.getState().setIsConnected(isConnected);
    
    if (isConnected) {
      // Process offline queue when connection is restored
      processOfflineQueue();
    }
  });
  
  return unsubscribe;
};
```

### 2. Offline Queue for Mutations

```typescript
// Offline mutation queue
const queueMutation = (mutation, variables) => {
  const offlineQueue = JSON.parse(MMKV.getString('offlineQueue') || '[]');
  
  offlineQueue.push({
    mutation,
    variables,
    timestamp: Date.now(),
  });
  
  MMKV.setString('offlineQueue', JSON.stringify(offlineQueue));
};

const processOfflineQueue = async () => {
  const offlineQueue = JSON.parse(MMKV.getString('offlineQueue') || '[]');
  
  if (offlineQueue.length === 0) return;
  
  // Process queue in order
  for (let i = 0; i < offlineQueue.length; i++) {
    const { mutation, variables } = offlineQueue[i];
    
    try {
      await API.graphql(graphqlOperation(mutation, variables));
      
      // Remove processed item
      offlineQueue.splice(i, 1);
      i--;
      
      // Update queue in storage
      MMKV.setString('offlineQueue', JSON.stringify(offlineQueue));
    } catch (error) {
      console.error('Failed to process offline mutation:', error);
      
      // Stop processing if we hit an error
      // (might be still offline or other issue)
      break;
    }
  }
};
```

### 3. Optimistic UI Updates

```typescript
// Optimistic update example for adding to cart
const addToCart = async (productId, quantity) => {
  // Generate temporary ID for optimistic update
  const tempId = `temp-${Date.now()}`;
  
  // Optimistically update UI
  useCartStore.getState().addItem({
    id: tempId,
    productId,
    quantity,
    status: 'pending',
  });
  
  try {
    // Check network status
    const isConnected = useNetworkStore.getState().isConnected;
    
    if (!isConnected) {
      // Queue for later if offline
      queueMutation(addToCartMutation, { productId, quantity });
      return;
    }
    
    // Perform actual mutation
    const result = await API.graphql(
      graphqlOperation(addToCartMutation, { productId, quantity })
    );
    
    // Update with real data
    useCartStore.getState().updateItem(tempId, {
      id: result.data.addToCart.id,
      status: 'synced',
    });
  } catch (error) {
    // Handle error
    useCartStore.getState().updateItem(tempId, { status: 'error' });
    console.error('Failed to add to cart:', error);
  }
};
```

## Data Synchronization Strategy

### 1. Delta Sync for Large Datasets

```typescript
// Delta sync for produce catalog
const syncProduceCatalog = async () => {
  const lastSyncTimestamp = MMKV.getNumber('lastProduceSyncTimestamp') || 0;
  
  const response = await API.graphql(
    graphqlOperation(deltaProduceCatalog, { lastSync: lastSyncTimestamp })
  );
  
  const { added, modified, deleted } = response.data.deltaProduceCatalog;
  
  // Apply changes to local database
  added.forEach(item => addItemToLocalDb(item));
  modified.forEach(item => updateItemInLocalDb(item));
  deleted.forEach(id => removeItemFromLocalDb(id));
  
  // Update sync timestamp
  MMKV.setNumber('lastProduceSyncTimestamp', Date.now());
};
```

### 2. Background Sync for Semi-Static Data

```typescript
// Background sync service
const startBackgroundSync = () => {
  // Sync static data once per day
  const dailySyncInterval = setInterval(() => {
    if (useNetworkStore.getState().isConnected) {
      syncStaticData();
    }
  }, 24 * 60 * 60 * 1000);
  
  // Sync semi-static data every hour when app is open
  const hourlySyncInterval = setInterval(() => {
    if (useNetworkStore.getState().isConnected && useAppStore.getState().isActive) {
      syncSemiStaticData();
    }
  }, 60 * 60 * 1000);
  
  return () => {
    clearInterval(dailySyncInterval);
    clearInterval(hourlySyncInterval);
  };
};
```

### 3. Conflict Resolution

```typescript
// Last-write-wins conflict resolution
const resolveConflict = (clientData, serverData) => {
  if (clientData.updatedAt > serverData.updatedAt) {
    return clientData;
  }
  return serverData;
};

// Custom conflict resolution for specific data types
const resolveCartConflict = (clientCart, serverCart) => {
  // Merge cart items, keeping highest quantity for each item
  const mergedItems = {};
  
  [...clientCart.items, ...serverCart.items].forEach(item => {
    if (!mergedItems[item.productId] || mergedItems[item.productId].quantity < item.quantity) {
      mergedItems[item.productId] = item;
    }
  });
  
  return {
    ...serverCart,
    items: Object.values(mergedItems),
  };
};
```

## Performance Optimization Rules

### 1. Memory Management

```typescript
// Limit in-memory cache size
const MAX_CACHE_ITEMS = 100;

const limitedCache = {
  items: new Map(),
  
  set(key, value) {
    // If cache is full, remove oldest item
    if (this.items.size >= MAX_CACHE_ITEMS) {
      const oldestKey = this.items.keys().next().value;
      this.items.delete(oldestKey);
    }
    
    this.items.set(key, {
      value,
      timestamp: Date.now(),
    });
  },
  
  get(key) {
    const item = this.items.get(key);
    return item ? item.value : null;
  },
  
  // Other methods...
};
```

### 2. Image Optimization

```typescript
// Progressive image loading with Tamagui integration
import { Image as TamaguiImage } from 'tamagui';
import { Image as ExpoImage } from 'expo-image';

// For simple images, use Tamagui's Image component
const SimpleOptimizedImage = ({ uri, width, height }) => {
  return (
    <TamaguiImage
      source={{ uri }}
      width={width}
      height={height}
      resizeMode="cover"
    />
  );
};

// For advanced image loading features, combine Expo Image with Tamagui
const AdvancedOptimizedImage = ({ uri, width, height }) => {
  return (
    <ExpoImage
      source={{ uri }}
      style={{ width, height }}
      recyclingKey={uri}
      cachePolicy="memory-disk"
      contentFit="cover"
      transition={200}
      placeholder={{ uri: getLowResPlaceholder(uri) }}
    />
  );
};
```

### 3. List Virtualization

```typescript
// Optimized list with Tamagui and FlashList integration
import { FlashList } from '@shopify/flash-list';
import { View, YStack } from 'tamagui';

const OptimizedProductList = ({ products }) => {
  return (
    <View flex={1}>
      <FlashList
        data={products}
        renderItem={({ item }) => (
          <YStack padding="$md">
            <ProductCard product={item} />
          </YStack>
        )}
        estimatedItemSize={200}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={loadMoreProducts}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        windowSize={5}
      />
    </View>
  );
};
```

## Data Monitoring and Debugging

### 1. Performance Tracking

```typescript
// Track data loading performance
const trackDataFetch = async (operation, callback) => {
  const startTime = performance.now();
  
  try {
    const result = await callback();
    
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    // Log performance metrics
    logPerformanceMetric({
      operation,
      duration,
      timestamp: Date.now(),
      success: true,
    });
    
    return result;
  } catch (error) {
    const endTime = performance.now();
    const duration = endTime - startTime;
    
    // Log error metrics
    logPerformanceMetric({
      operation,
      duration,
      timestamp: Date.now(),
      success: false,
      error: error.message,
    });
    
    throw error;
  }
};
```

### 2. Network Request Logging

```typescript
// Log network requests in development
const setupNetworkLogging = () => {
  if (__DEV__) {
    const originalFetch = global.fetch;
    
    global.fetch = async (...args) => {
      console.log('Fetch Request:', args[0]);
      const startTime = performance.now();
      
      try {
        const response = await originalFetch(...args);
        const endTime = performance.now();
        
        console.log('Fetch Response:', {
          url: args[0],
          status: response.status,
          duration: endTime - startTime,
        });
        
        return response;
      } catch (error) {
        console.error('Fetch Error:', error);
        throw error;
      }
    };
  }
};
```

## Implementation Checklist

- [ ] Set up Zustand stores with MMKV persistence
- [ ] Implement data categorization logic
- [ ] Create fetch strategies for each data category
- [ ] Set up offline detection and queue system
- [ ] Implement delta sync for large datasets
- [ ] Add background sync for semi-static data
- [ ] Create conflict resolution strategies
- [ ] Implement optimistic UI updates
- [ ] Set up performance monitoring
- [ ] Create memory management utilities
- [ ] Configure Tamagui for optimized UI rendering
- [ ] Optimize image loading with Tamagui and Expo Image
- [ ] Implement virtualized lists with Tamagui styling
- [ ] Add network request logging for development
