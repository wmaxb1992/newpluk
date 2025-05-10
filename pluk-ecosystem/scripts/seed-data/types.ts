// Type definitions for GraphQL responses

// Generic GraphQL response type
export interface GraphQLResponse<T> {
  data: T;
}

// User types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'CONSUMER' | 'FARMER' | 'DRIVER' | 'ADMIN';
  createdAt?: string;
  updatedAt?: string;
  phoneNumber?: string;
  avatar?: string;
  bio?: string;
}

export interface CreateUserResponse {
  createUser: User;
}

// Produce taxonomy types
export interface ProduceCategory {
  id: string;
  name: string;
  description?: string;
  image?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProduceCategoryResponse {
  createProduceCategory: ProduceCategory;
}

export interface ProduceSubcategory {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  image?: string;
  icon?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProduceSubcategoryResponse {
  createProduceSubcategory: ProduceSubcategory;
}

export interface ProduceType {
  id: string;
  subcategoryId: string;
  name: string;
  description?: string;
  image?: string;
  icon?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProduceTypeResponse {
  createProduceType: ProduceType;
}

export interface ProduceVariety {
  id: string;
  typeId: string;
  name: string;
  description?: string;
  image?: string;
  icon?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProduceVarietyResponse {
  createProduceVariety: ProduceVariety;
}

export interface ProduceNutrient {
  id: string;
  varietyId: string;
  name: string;
  amount: number;
  unit: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProduceNutrientResponse {
  createProduceNutrient: ProduceNutrient;
}

// Farm types
export interface Location {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

export interface Farm {
  id: string;
  ownerId: string;
  name: string;
  description?: string;
  location: string;
  website?: string;
  phone?: string;
  email?: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  profileImage?: string;
  coverImage?: string;
  active: boolean;
  certified: boolean;
  certifications?: string[];
  yearEstablished?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateFarmResponse {
  createFarm: Farm;
}

export interface Zone {
  id: string;
  farmId: string;
  farmOwnerId: string;
  name: string;
  description?: string;
  location?: string;
  size?: number;
  sizeUnit?: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateZoneResponse {
  createZone: Zone;
}

export interface MarketSchedule {
  id: string;
  farmId: string;
  farmOwnerId: string;
  marketName: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  active: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateMarketScheduleResponse {
  createMarketSchedule: MarketSchedule;
}

// Inventory types
export interface InventoryBatch {
  id: string;
  farmID: string;
  varietyID: string;
  plantingDate?: string;
  estimatedHarvestDate?: string;
  actualHarvestDate?: string;
  expirationDate?: string;
  quantity: number;
  unit: string;
  status: string;
  storageConditions?: string;
  notes?: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateInventoryBatchResponse {
  createInventoryBatch: InventoryBatch;
}

export interface PreHarvestListing {
  id: string;
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
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePreHarvestListingResponse {
  createPreHarvestListing: PreHarvestListing;
}

export interface PreHarvestReservation {
  id: string;
  preHarvestListingID: string;
  userID: string;
  quantity: number;
  unit: string;
  status: string;
  notes?: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePreHarvestReservationResponse {
  createPreHarvestReservation: PreHarvestReservation;
}

// Social types
export interface FarmPost {
  id: string;
  farmID: string;
  type: string;
  title: string;
  content: string;
  images?: string[];
  videos?: string[];
  preHarvestListingID?: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateFarmPostResponse {
  createFarmPost: FarmPost;
}

export interface PostComment {
  id: string;
  postID: string;
  userID: string;
  content: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostCommentResponse {
  createPostComment: PostComment;
}

export interface PostLike {
  id: string;
  postID: string;
  userID: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePostLikeResponse {
  createPostLike: PostLike;
}

export interface FarmFollow {
  id: string;
  farmID: string;
  userID: string;
  notificationPreferences?: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateFarmFollowResponse {
  createFarmFollow: FarmFollow;
}

// Commerce types
export interface ProduceListing {
  id: string;
  farmID: string;
  varietyID: string;
  inventoryBatchID?: string;
  title: string;
  description?: string;
  pricePerUnit: number;
  unit: string;
  quantityAvailable: number;
  organic: boolean;
  isInstantlyAvailable: boolean;
  instantDeliveryFee?: number;
  estimatedDeliveryMinutes?: number;
  harvestDate?: string;
  expirationDate?: string;
  images?: string[];
  freshness?: number;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProduceListingResponse {
  createProduceListing: ProduceListing;
}

export interface ListingReview {
  id: string;
  listingID: string;
  userID: string;
  rating: number;
  comment?: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateListingReviewResponse {
  createListingReview: ListingReview;
}

export interface Cart {
  id: string;
  userID: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCartResponse {
  createCart: Cart;
}

export interface CartItem {
  id: string;
  cartID: string;
  listingID: string;
  quantity: number;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateCartItemResponse {
  createCartItem: CartItem;
}

export interface Order {
  id: string;
  userID: string;
  status: string;
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  deliveryAddress?: Location;
  deliveryNotes?: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderResponse {
  createOrder: Order;
}

export interface OrderItem {
  id: string;
  orderID: string;
  listingID: string;
  farmID: string;
  quantity: number;
  pricePerUnit: number;
  subtotal: number;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreateOrderItemResponse {
  createOrderItem: OrderItem;
}

export interface Payment {
  id: string;
  orderID: string;
  amount: number;
  status: string;
  method: string;
  transactionId?: string;
  owner: string;
  createdAt: string;
  updatedAt: string;
}

export interface CreatePaymentResponse {
  createPayment: Payment;
}
