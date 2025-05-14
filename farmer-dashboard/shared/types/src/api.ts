/**
 * API types for GraphQL operations
 * These types will be used for our API calls and responses
 */

// Generic API response types
export interface ApiResponse<T> {
  data?: T;
  error?: ApiError;
  loading: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  statusCode?: number;
}

// Pagination types
export interface PaginationInput {
  limit?: number;
  nextToken?: string;
}

export interface PaginatedResult<T> {
  items: T[];
  nextToken?: string;
}

// Filter types
export interface DateRangeFilter {
  from?: string; // ISO date string
  to?: string; // ISO date string
}

export interface NumberRangeFilter {
  min?: number;
  max?: number;
}

// Produce filters
export interface ProduceListingFilter {
  categoryID?: string;
  subcategoryID?: string;
  typeID?: string;
  varietyID?: string;
  farmID?: string;
  organic?: boolean;
  isInstantlyAvailable?: boolean;
  priceRange?: NumberRangeFilter;
  freshnessRange?: NumberRangeFilter;
  harvestDateRange?: DateRangeFilter;
  search?: string;
}

// Farm filters
export interface FarmFilter {
  organic?: boolean;
  hasInstantDelivery?: boolean;
  location?: LocationFilter;
  search?: string;
}

export interface LocationFilter {
  latitude: number;
  longitude: number;
  radiusInKm: number;
}

// Social filters
export interface PostFilter {
  farmID?: string;
  type?: string;
  dateRange?: DateRangeFilter;
  search?: string;
}

// Order filters
export interface OrderFilter {
  status?: string;
  dateRange?: DateRangeFilter;
}

// Mutation input types
export interface CreateProduceListingInput {
  farmID: string;
  varietyID: string;
  inventoryBatchID?: string;
  preHarvestListingID?: string;
  title: string;
  description?: string;
  pricePerUnit: number;
  unitLabel: string;
  quantityAvailable: number;
  datePicked: string;
  organic: boolean;
  isPreparedDish: boolean;
  images?: string[];
  isInstantlyAvailable?: boolean;
  instantDeliveryFee?: number;
  estimatedDeliveryMinutes?: number;
}

export interface UpdateProduceListingInput {
  id: string;
  title?: string;
  description?: string;
  pricePerUnit?: number;
  quantityAvailable?: number;
  isInstantlyAvailable?: boolean;
  instantDeliveryFee?: number;
  estimatedDeliveryMinutes?: number;
}

export interface CreatePreHarvestListingInput {
  farmID: string;
  varietyID: string;
  inventoryBatchID?: string;
  title: string;
  description?: string;
  estimatedHarvestDate: string;
  estimatedQuantity: number;
  unit: string;
  pricePerUnit: number;
  organic: boolean;
  images?: string[];
}

export interface CreateFarmPostInput {
  farmID: string;
  type: string;
  title: string;
  content: string;
  images?: string[];
  preHarvestListingID?: string;
}

export interface CreatePreHarvestReservationInput {
  preHarvestListingID: string;
  quantity: number;
  depositAmount?: number;
}

// Subscription types
export interface SubscriptionFilter {
  id?: string;
  farmID?: string;
  userID?: string;
}

// Data sync types
export interface DeltaSyncInput {
  lastSync: number; // Timestamp
}

export interface DeltaSyncResult<T> {
  added: T[];
  modified: T[];
  deleted: string[]; // IDs of deleted items
  lastSync: number; // New timestamp
}
