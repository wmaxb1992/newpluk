/**
 * Core model types for the Pluk ecosystem
 * These types reflect the GraphQL schema structure
 */

// Produce Hierarchy Types
export interface ProduceCategory {
  id: string;
  name: string;
  description?: string;
  image?: string;
  subcategories?: ProduceSubcategory[];
}

export interface ProduceSubcategory {
  id: string;
  categoryID: string;
  name: string;
  description?: string;
  image?: string;
  types?: ProduceType[];
}

export interface ProduceType {
  id: string;
  subcategoryID: string;
  name: string;
  description?: string;
  image?: string;
  varieties?: ProduceVariety[];
}

export interface ProduceVariety {
  id: string;
  typeID: string;
  name: string;
  description?: string;
  image?: string;
  nutrients?: ProduceNutrient[];
  listings?: ProduceListing[];
}

export interface ProduceNutrient {
  id: string;
  varietyID: string;
  name: string;
  amount: number;
  unit: string;
}

// Farm Types
export interface Farm {
  id: string;
  name: string;
  description?: string;
  images?: string[];
  location?: Location;
  contactEmail?: string;
  contactPhone?: string;
  website?: string;
  organic: boolean;
  yearEstablished?: number;
  zones?: Zone[];
  marketSchedule?: MarketSchedule[];
  inventoryBatches?: InventoryBatch[];
  listings?: ProduceListing[];
  posts?: FarmPost[];
}

export interface Zone {
  id: string;
  farmID: string;
  name: string;
  description?: string;
  location?: Location;
}

export interface MarketSchedule {
  id: string;
  farmID: string;
  dayOfWeek: number; // 0 = Sunday, 6 = Saturday
  startTime: string; // Format: "HH:MM"
  endTime: string; // Format: "HH:MM"
  location?: Location;
  notes?: string;
}

// Inventory Types
export interface InventoryBatch {
  id: string;
  farmID: string;
  varietyID: string;
  plantingDate?: string; // Format: "YYYY-MM-DD"
  estimatedHarvestDate?: string; // Format: "YYYY-MM-DD"
  actualHarvestDate?: string; // Format: "YYYY-MM-DD"
  expirationDate?: string; // Format: "YYYY-MM-DD"
  quantity: number;
  unit: string;
  status: InventoryStatus;
  storageConditions?: string;
  notes?: string;
  listings?: ProduceListing[];
}

export enum InventoryStatus {
  PLANNED = 'PLANNED',
  PLANTED = 'PLANTED',
  GROWING = 'GROWING',
  HARVESTED = 'HARVESTED',
  SOLD_OUT = 'SOLD_OUT',
  EXPIRED = 'EXPIRED',
}

export interface PreHarvestListing {
  id: string;
  farmID: string;
  varietyID: string;
  inventoryBatchID?: string;
  title: string;
  description?: string;
  estimatedHarvestDate: string; // Format: "YYYY-MM-DD"
  estimatedQuantity: number;
  unit: string;
  pricePerUnit: number;
  organic: boolean;
  images?: string[];
  reservations?: PreHarvestReservation[];
}

// Listing Types
export interface ProduceListing {
  id: string;
  farmID: string;
  varietyID: string;
  inventoryBatchID?: string;
  preHarvestListingID?: string;
  title: string;
  description?: string;
  pricePerUnit: number;
  unitLabel: string;
  quantityAvailable: number;
  datePicked: string; // Format: "YYYY-MM-DD"
  daysSinceHarvested?: number;
  freshness?: number; // 0-100 scale
  organic: boolean;
  isPreparedDish: boolean;
  images?: string[];
  isInstantlyAvailable?: boolean;
  instantDeliveryFee?: number;
  estimatedDeliveryMinutes?: number;
}

export interface ListingReview {
  id: string;
  listingID: string;
  userID: string;
  rating: number; // 1-5 scale
  comment?: string;
  createdAt: string; // ISO date string
}

// Social Types
export interface FarmPost {
  id: string;
  farmID: string;
  type: PostType;
  title: string;
  content: string;
  images?: string[];
  preHarvestListingID?: string;
  createdAt: string; // ISO date string
  comments?: PostComment[];
  likes?: PostLike[];
}

export enum PostType {
  GENERAL = 'GENERAL',
  GROWING_UPDATE = 'GROWING_UPDATE',
  HARVEST_ANNOUNCEMENT = 'HARVEST_ANNOUNCEMENT',
  EDUCATIONAL = 'EDUCATIONAL',
}

export interface PostComment {
  id: string;
  postID: string;
  userID: string;
  content: string;
  createdAt: string; // ISO date string
  likes?: CommentLike[];
}

export interface PostLike {
  id: string;
  postID: string;
  userID: string;
  createdAt: string; // ISO date string
}

export interface CommentLike {
  id: string;
  commentID: string;
  userID: string;
  createdAt: string; // ISO date string
}

export interface FarmFollow {
  id: string;
  farmID: string;
  userID: string;
  createdAt: string; // ISO date string
  notificationPreferences?: NotificationPreference[];
}

export interface PreHarvestReservation {
  id: string;
  preHarvestListingID: string;
  userID: string;
  quantity: number;
  depositAmount?: number;
  status: ReservationStatus;
  createdAt: string; // ISO date string
}

export enum ReservationStatus {
  PENDING = 'PENDING',
  CONFIRMED = 'CONFIRMED',
  READY_FOR_PICKUP = 'READY_FOR_PICKUP',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

// Shopping Types
export interface ShoppingList {
  id: string;
  userID: string;
  name: string;
  items?: ShoppingListItem[];
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface ShoppingListItem {
  id: string;
  shoppingListID: string;
  varietyID: string;
  quantity: number;
  unit: string;
  notes?: string;
}

export interface SmartCartConfig {
  id: string;
  userID: string;
  name: string;
  preferredFarms?: string[]; // Farm IDs
  maxPricePerUnit?: number;
  organicOnly: boolean;
  freshnessPriority: number; // 1-10 scale
  pricePriority: number; // 1-10 scale
  farmRatingPriority: number; // 1-10 scale
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

// Common Types
export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  country?: string;
}

export interface NotificationPreference {
  type: NotificationType;
  enabled: boolean;
}

export enum NotificationType {
  NEW_POST = 'NEW_POST',
  HARVEST_ANNOUNCEMENT = 'HARVEST_ANNOUNCEMENT',
  PRICE_DROP = 'PRICE_DROP',
  RESERVATION_READY = 'RESERVATION_READY',
}

// Data categorization types for our data management strategy
export enum DataCategory {
  STATIC = 'STATIC',
  SEMI_STATIC = 'SEMI_STATIC',
  DYNAMIC = 'DYNAMIC',
  REAL_TIME = 'REAL_TIME',
}
