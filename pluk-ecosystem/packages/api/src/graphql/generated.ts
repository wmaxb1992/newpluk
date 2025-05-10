import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  AWSDate: { input: any; output: any; }
  AWSDateTime: { input: any; output: any; }
  AWSEmail: { input: any; output: any; }
  AWSPhone: { input: any; output: any; }
  AWSTime: { input: any; output: any; }
  AWSURL: { input: any; output: any; }
};

export type Address = {
  __typename?: 'Address';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  label?: Maybe<Scalars['String']['output']>;
  postalCode: Scalars['String']['output'];
  state: Scalars['String']['output'];
  street: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type Cart = {
  __typename?: 'Cart';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  id: Scalars['ID']['output'];
  subtotal: Scalars['Float']['output'];
  tax: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type CartItem = {
  __typename?: 'CartItem';
  cartId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  id: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  produceListingId: Scalars['ID']['output'];
  quantity: Scalars['Float']['output'];
  subtotal: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type CreateAddressInput = {
  city: Scalars['String']['input'];
  country: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isDefault: Scalars['Boolean']['input'];
  label?: InputMaybe<Scalars['String']['input']>;
  postalCode: Scalars['String']['input'];
  state: Scalars['String']['input'];
  street: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateCartInput = {
  active: Scalars['Boolean']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  subtotal: Scalars['Float']['input'];
  tax: Scalars['Float']['input'];
  total: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateCartItemInput = {
  cartId: Scalars['ID']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  price: Scalars['Float']['input'];
  produceListingId: Scalars['ID']['input'];
  quantity: Scalars['Float']['input'];
  subtotal: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateDeliveryInput = {
  actualDeliveryTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  deliveryRouteId?: InputMaybe<Scalars['ID']['input']>;
  deliveryTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  driverId?: InputMaybe<Scalars['ID']['input']>;
  dropoffAddress: Scalars['String']['input'];
  dropoffLocationLat: Scalars['Float']['input'];
  dropoffLocationLng: Scalars['Float']['input'];
  estimatedDeliveryTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  pickupAddress: Scalars['String']['input'];
  pickupLocationLat: Scalars['Float']['input'];
  pickupLocationLng: Scalars['Float']['input'];
  pickupTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  status: DeliveryStatus;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateDeliveryRatingInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  deliveryId: Scalars['ID']['input'];
  driverId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateDeliveryRouteInput = {
  actualDistance?: InputMaybe<Scalars['Float']['input']>;
  actualDuration?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  driverId: Scalars['ID']['input'];
  endLocationLat: Scalars['Float']['input'];
  endLocationLng: Scalars['Float']['input'];
  endTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  estimatedDistance: Scalars['Float']['input'];
  estimatedDuration: Scalars['Int']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  startLocationLat: Scalars['Float']['input'];
  startLocationLng: Scalars['Float']['input'];
  startTime: Scalars['AWSDateTime']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type CreateDriverInput = {
  active: Scalars['Boolean']['input'];
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  currentLocationLat?: InputMaybe<Scalars['Float']['input']>;
  currentLocationLng?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['AWSEmail']['input'];
  firstName: Scalars['String']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  lastLocationUpdateTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  lastName: Scalars['String']['input'];
  licenseExpiry: Scalars['AWSDate']['input'];
  licenseNumber: Scalars['String']['input'];
  phoneNumber: Scalars['AWSPhone']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
  vehicleColor: Scalars['String']['input'];
  vehicleLicensePlate: Scalars['String']['input'];
  vehicleMake: Scalars['String']['input'];
  vehicleModel: Scalars['String']['input'];
  vehicleYear: Scalars['Int']['input'];
};

export type CreateDriverLocationInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  driverId: Scalars['ID']['input'];
  heading?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  lat: Scalars['Float']['input'];
  lng: Scalars['Float']['input'];
  timestamp: Scalars['AWSDateTime']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type CreateFarmFollowInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  receiveNotifications: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateFarmInput = {
  active: Scalars['Boolean']['input'];
  address: Scalars['String']['input'];
  certifications?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  certified: Scalars['Boolean']['input'];
  city: Scalars['String']['input'];
  coverImage?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['AWSEmail']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  location: Scalars['String']['input'];
  name: Scalars['String']['input'];
  ownerId: Scalars['ID']['input'];
  phone?: InputMaybe<Scalars['AWSPhone']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  website?: InputMaybe<Scalars['AWSURL']['input']>;
  yearEstablished?: InputMaybe<Scalars['Int']['input']>;
  zipCode: Scalars['String']['input'];
};

export type CreateFarmMetricsInput = {
  averageOrderValue: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmId: Scalars['ID']['input'];
  farmOwnerId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  totalCustomers: Scalars['Int']['input'];
  totalOrders: Scalars['Int']['input'];
  totalSales: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type CreateFarmPostInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmId: Scalars['ID']['input'];
  farmOwnerId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preHarvestListingId?: InputMaybe<Scalars['ID']['input']>;
  title: Scalars['String']['input'];
  type: PostType;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CreateInventoryBatchInput = {
  actualQuantity?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  estimatedHarvestDate?: InputMaybe<Scalars['AWSDate']['input']>;
  estimatedQuantity?: InputMaybe<Scalars['Float']['input']>;
  expirationDate?: InputMaybe<Scalars['AWSDate']['input']>;
  farmId: Scalars['ID']['input'];
  farmOwnerId: Scalars['ID']['input'];
  harvestDate?: InputMaybe<Scalars['AWSDate']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isOrganic: Scalars['Boolean']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  plantingDate?: InputMaybe<Scalars['AWSDate']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  priceUnit?: InputMaybe<Scalars['String']['input']>;
  produceVarietyId: Scalars['ID']['input'];
  quantityUnit?: InputMaybe<Scalars['String']['input']>;
  remainingQuantity?: InputMaybe<Scalars['Float']['input']>;
  status: InventoryStatus;
  storageConditions?: InputMaybe<Scalars['String']['input']>;
  storageLocation?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  zoneId?: InputMaybe<Scalars['ID']['input']>;
};

export type CreateListingReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  produceListingId: Scalars['ID']['input'];
  rating: Scalars['Int']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateMarketScheduleInput = {
  active: Scalars['Boolean']['input'];
  address: Scalars['String']['input'];
  city: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  dayOfWeek: Scalars['Int']['input'];
  endTime: Scalars['AWSTime']['input'];
  farmId: Scalars['ID']['input'];
  farmOwnerId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  marketName: Scalars['String']['input'];
  startTime: Scalars['AWSTime']['input'];
  state: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  zipCode: Scalars['String']['input'];
};

export type CreateNotificationInput = {
  actionLink?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imageLink?: InputMaybe<Scalars['String']['input']>;
  message: Scalars['String']['input'];
  read: Scalars['Boolean']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateOrderInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  deliveryAddressId?: InputMaybe<Scalars['ID']['input']>;
  deliveryFee: Scalars['Float']['input'];
  deliveryNotes?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  requestedDeliveryDate?: InputMaybe<Scalars['AWSDate']['input']>;
  status: OrderStatus;
  subtotal: Scalars['Float']['input'];
  tax: Scalars['Float']['input'];
  total: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateOrderItemInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  orderId: Scalars['ID']['input'];
  price: Scalars['Float']['input'];
  produceListingId: Scalars['ID']['input'];
  quantity: Scalars['Float']['input'];
  subtotal: Scalars['Float']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreatePaymentInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  method: PaymentMethod;
  orderId: Scalars['ID']['input'];
  status: PaymentStatus;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreatePostCommentInput = {
  content: Scalars['String']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmPostId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreatePostLikeInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmPostId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreatePreHarvestListingInput = {
  availableForReservation: Scalars['Boolean']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  estimatedHarvestDate: Scalars['AWSDate']['input'];
  estimatedQuantity: Scalars['Float']['input'];
  farmId: Scalars['ID']['input'];
  farmOwnerId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  inventoryBatchId: Scalars['ID']['input'];
  isOrganic: Scalars['Boolean']['input'];
  price: Scalars['Float']['input'];
  priceUnit: Scalars['String']['input'];
  produceVarietyId: Scalars['ID']['input'];
  quantityUnit: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type CreatePreHarvestReservationInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  preHarvestListingId: Scalars['ID']['input'];
  quantity: Scalars['Float']['input'];
  quantityUnit: Scalars['String']['input'];
  requestedPickupDate?: InputMaybe<Scalars['AWSDate']['input']>;
  status: ReservationStatus;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateProduceCategoryInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type CreateProduceListingInput = {
  active: Scalars['Boolean']['input'];
  availableQuantity: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  daysToExpiration?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  estimatedDeliveryMinutes?: InputMaybe<Scalars['Int']['input']>;
  expirationDate?: InputMaybe<Scalars['AWSDate']['input']>;
  farmId: Scalars['ID']['input'];
  farmOwnerId: Scalars['ID']['input'];
  freshness?: InputMaybe<Scalars['Int']['input']>;
  harvestDate?: InputMaybe<Scalars['AWSDate']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instantDeliveryFee?: InputMaybe<Scalars['Float']['input']>;
  inventoryBatchId: Scalars['ID']['input'];
  isInstantlyAvailable: Scalars['Boolean']['input'];
  isOrganic: Scalars['Boolean']['input'];
  price: Scalars['Float']['input'];
  priceUnit: Scalars['String']['input'];
  produceVarietyId: Scalars['ID']['input'];
  quantity: Scalars['Float']['input'];
  quantityUnit: Scalars['String']['input'];
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type CreateProduceNutrientInput = {
  amount: Scalars['Float']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  dailyValue?: InputMaybe<Scalars['Float']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
  unit: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  varietyId: Scalars['ID']['input'];
};

export type CreateProduceSubcategoryInput = {
  categoryId: Scalars['ID']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type CreateProduceTypeInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  subcategoryId: Scalars['ID']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type CreateProduceVarietyInput = {
  averageShelfLife?: InputMaybe<Scalars['Int']['input']>;
  averageWeight?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  harvestInstructions?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  season?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageInstructions?: InputMaybe<Scalars['String']['input']>;
  typeId: Scalars['ID']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  weightUnit?: InputMaybe<Scalars['String']['input']>;
};

export type CreateShoppingListInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  isDefault: Scalars['Boolean']['input'];
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateShoppingListItemInput = {
  completed: Scalars['Boolean']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  produceVarietyId?: InputMaybe<Scalars['ID']['input']>;
  quantity: Scalars['Int']['input'];
  shoppingListId: Scalars['ID']['input'];
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  email: Scalars['AWSEmail']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['AWSPhone']['input']>;
  role: UserRole;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type CreateUserPreferencesInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  emailNotificationsEnabled: Scalars['Boolean']['input'];
  farmUpdates: Scalars['Boolean']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  marketingCommunications: Scalars['Boolean']['input'];
  orderUpdates: Scalars['Boolean']['input'];
  preferredPaymentMethod?: InputMaybe<PaymentMethod>;
  pushNotificationsEnabled: Scalars['Boolean']['input'];
  smsNotificationsEnabled: Scalars['Boolean']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId: Scalars['ID']['input'];
};

export type CreateZoneInput = {
  active: Scalars['Boolean']['input'];
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  farmId: Scalars['ID']['input'];
  farmOwnerId: Scalars['ID']['input'];
  id?: InputMaybe<Scalars['ID']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  size?: InputMaybe<Scalars['Float']['input']>;
  sizeUnit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type DeleteAddressInput = {
  id: Scalars['ID']['input'];
};

export type DeleteCartInput = {
  id: Scalars['ID']['input'];
};

export type DeleteCartItemInput = {
  id: Scalars['ID']['input'];
};

export type DeleteDeliveryInput = {
  id: Scalars['ID']['input'];
};

export type DeleteDeliveryRatingInput = {
  id: Scalars['ID']['input'];
};

export type DeleteDeliveryRouteInput = {
  id: Scalars['ID']['input'];
};

export type DeleteDriverInput = {
  id: Scalars['ID']['input'];
};

export type DeleteDriverLocationInput = {
  id: Scalars['ID']['input'];
};

export type DeleteFarmFollowInput = {
  id: Scalars['ID']['input'];
};

export type DeleteFarmInput = {
  id: Scalars['ID']['input'];
};

export type DeleteFarmMetricsInput = {
  id: Scalars['ID']['input'];
};

export type DeleteFarmPostInput = {
  id: Scalars['ID']['input'];
};

export type DeleteInventoryBatchInput = {
  id: Scalars['ID']['input'];
};

export type DeleteListingReviewInput = {
  id: Scalars['ID']['input'];
};

export type DeleteMarketScheduleInput = {
  id: Scalars['ID']['input'];
};

export type DeleteNotificationInput = {
  id: Scalars['ID']['input'];
};

export type DeleteOrderInput = {
  id: Scalars['ID']['input'];
};

export type DeleteOrderItemInput = {
  id: Scalars['ID']['input'];
};

export type DeletePaymentInput = {
  id: Scalars['ID']['input'];
};

export type DeletePostCommentInput = {
  id: Scalars['ID']['input'];
};

export type DeletePostLikeInput = {
  id: Scalars['ID']['input'];
};

export type DeletePreHarvestListingInput = {
  id: Scalars['ID']['input'];
};

export type DeletePreHarvestReservationInput = {
  id: Scalars['ID']['input'];
};

export type DeleteProduceCategoryInput = {
  id: Scalars['ID']['input'];
};

export type DeleteProduceListingInput = {
  id: Scalars['ID']['input'];
};

export type DeleteProduceNutrientInput = {
  id: Scalars['ID']['input'];
};

export type DeleteProduceSubcategoryInput = {
  id: Scalars['ID']['input'];
};

export type DeleteProduceTypeInput = {
  id: Scalars['ID']['input'];
};

export type DeleteProduceVarietyInput = {
  id: Scalars['ID']['input'];
};

export type DeleteShoppingListInput = {
  id: Scalars['ID']['input'];
};

export type DeleteShoppingListItemInput = {
  id: Scalars['ID']['input'];
};

export type DeleteUserInput = {
  id: Scalars['ID']['input'];
};

export type DeleteUserPreferencesInput = {
  id: Scalars['ID']['input'];
};

export type DeleteZoneInput = {
  id: Scalars['ID']['input'];
};

export type Delivery = {
  __typename?: 'Delivery';
  actualDeliveryTime?: Maybe<Scalars['AWSDateTime']['output']>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  deliveryRouteId?: Maybe<Scalars['ID']['output']>;
  deliveryTime?: Maybe<Scalars['AWSDateTime']['output']>;
  driverId?: Maybe<Scalars['ID']['output']>;
  dropoffAddress: Scalars['String']['output'];
  dropoffLocationLat: Scalars['Float']['output'];
  dropoffLocationLng: Scalars['Float']['output'];
  estimatedDeliveryTime?: Maybe<Scalars['AWSDateTime']['output']>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  orderId: Scalars['ID']['output'];
  pickupAddress: Scalars['String']['output'];
  pickupLocationLat: Scalars['Float']['output'];
  pickupLocationLng: Scalars['Float']['output'];
  pickupTime?: Maybe<Scalars['AWSDateTime']['output']>;
  status: DeliveryStatus;
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type DeliveryRating = {
  __typename?: 'DeliveryRating';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  deliveryId: Scalars['ID']['output'];
  driverId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type DeliveryRoute = {
  __typename?: 'DeliveryRoute';
  actualDistance?: Maybe<Scalars['Float']['output']>;
  actualDuration?: Maybe<Scalars['Int']['output']>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  driverId: Scalars['ID']['output'];
  endLocationLat: Scalars['Float']['output'];
  endLocationLng: Scalars['Float']['output'];
  endTime?: Maybe<Scalars['AWSDateTime']['output']>;
  estimatedDistance: Scalars['Float']['output'];
  estimatedDuration: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  startLocationLat: Scalars['Float']['output'];
  startLocationLng: Scalars['Float']['output'];
  startTime: Scalars['AWSDateTime']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export enum DeliveryStatus {
  Assigned = 'ASSIGNED',
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  Failed = 'FAILED',
  InTransit = 'IN_TRANSIT',
  PickingUp = 'PICKING_UP'
}

export type Driver = {
  __typename?: 'Driver';
  active: Scalars['Boolean']['output'];
  avatar?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  currentLocationLat?: Maybe<Scalars['Float']['output']>;
  currentLocationLng?: Maybe<Scalars['Float']['output']>;
  email: Scalars['AWSEmail']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastLocationUpdateTime?: Maybe<Scalars['AWSDateTime']['output']>;
  lastName: Scalars['String']['output'];
  licenseExpiry: Scalars['AWSDate']['output'];
  licenseNumber: Scalars['String']['output'];
  phoneNumber: Scalars['AWSPhone']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
  vehicleColor: Scalars['String']['output'];
  vehicleLicensePlate: Scalars['String']['output'];
  vehicleMake: Scalars['String']['output'];
  vehicleModel: Scalars['String']['output'];
  vehicleYear: Scalars['Int']['output'];
};

export type DriverLocation = {
  __typename?: 'DriverLocation';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  driverId: Scalars['ID']['output'];
  heading?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  lat: Scalars['Float']['output'];
  lng: Scalars['Float']['output'];
  timestamp: Scalars['AWSDateTime']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type Farm = {
  __typename?: 'Farm';
  active: Scalars['Boolean']['output'];
  address: Scalars['String']['output'];
  certifications?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  certified: Scalars['Boolean']['output'];
  city: Scalars['String']['output'];
  coverImage?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['AWSEmail']['output']>;
  id: Scalars['ID']['output'];
  location: Scalars['String']['output'];
  name: Scalars['String']['output'];
  ownerId: Scalars['ID']['output'];
  phone?: Maybe<Scalars['AWSPhone']['output']>;
  profileImage?: Maybe<Scalars['String']['output']>;
  state: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  website?: Maybe<Scalars['AWSURL']['output']>;
  yearEstablished?: Maybe<Scalars['Int']['output']>;
  zipCode: Scalars['String']['output'];
};

export type FarmFollow = {
  __typename?: 'FarmFollow';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  farmId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  receiveNotifications: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type FarmMetrics = {
  __typename?: 'FarmMetrics';
  averageOrderValue: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  farmId: Scalars['ID']['output'];
  farmOwnerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  totalCustomers: Scalars['Int']['output'];
  totalOrders: Scalars['Int']['output'];
  totalSales: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type FarmPost = {
  __typename?: 'FarmPost';
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  farmId: Scalars['ID']['output'];
  farmOwnerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  preHarvestListingId?: Maybe<Scalars['ID']['output']>;
  title: Scalars['String']['output'];
  type: PostType;
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  videos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type InventoryBatch = {
  __typename?: 'InventoryBatch';
  actualQuantity?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  estimatedHarvestDate?: Maybe<Scalars['AWSDate']['output']>;
  estimatedQuantity?: Maybe<Scalars['Float']['output']>;
  expirationDate?: Maybe<Scalars['AWSDate']['output']>;
  farmId: Scalars['ID']['output'];
  farmOwnerId: Scalars['ID']['output'];
  harvestDate?: Maybe<Scalars['AWSDate']['output']>;
  id: Scalars['ID']['output'];
  isOrganic: Scalars['Boolean']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  plantingDate?: Maybe<Scalars['AWSDate']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  priceUnit?: Maybe<Scalars['String']['output']>;
  produceVarietyId: Scalars['ID']['output'];
  quantityUnit?: Maybe<Scalars['String']['output']>;
  remainingQuantity?: Maybe<Scalars['Float']['output']>;
  status: InventoryStatus;
  storageConditions?: Maybe<Scalars['String']['output']>;
  storageLocation?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  zoneId?: Maybe<Scalars['ID']['output']>;
};

export enum InventoryStatus {
  Expired = 'EXPIRED',
  Growing = 'GROWING',
  Harvested = 'HARVESTED',
  Planned = 'PLANNED',
  Planted = 'PLANTED',
  SoldOut = 'SOLD_OUT'
}

export type ListingReview = {
  __typename?: 'ListingReview';
  comment?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  produceListingId: Scalars['ID']['output'];
  rating: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type MarketSchedule = {
  __typename?: 'MarketSchedule';
  active: Scalars['Boolean']['output'];
  address: Scalars['String']['output'];
  city: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  dayOfWeek: Scalars['Int']['output'];
  endTime: Scalars['AWSTime']['output'];
  farmId: Scalars['ID']['output'];
  farmOwnerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  marketName: Scalars['String']['output'];
  startTime: Scalars['AWSTime']['output'];
  state: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  zipCode: Scalars['String']['output'];
};

export type ModelAddressConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelAddressConditionInput>>>;
  city?: InputMaybe<ModelStringInput>;
  country?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  isDefault?: InputMaybe<ModelBooleanInput>;
  label?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelAddressConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAddressConditionInput>>>;
  postalCode?: InputMaybe<ModelStringInput>;
  state?: InputMaybe<ModelStringInput>;
  street?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelAddressConnection = {
  __typename?: 'ModelAddressConnection';
  items: Array<Maybe<Address>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelAddressFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelAddressFilterInput>>>;
  city?: InputMaybe<ModelStringInput>;
  country?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isDefault?: InputMaybe<ModelBooleanInput>;
  label?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelAddressFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelAddressFilterInput>>>;
  postalCode?: InputMaybe<ModelStringInput>;
  state?: InputMaybe<ModelStringInput>;
  street?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export enum ModelAttributeTypes {
  Null = '_null',
  Binary = 'binary',
  BinarySet = 'binarySet',
  Bool = 'bool',
  List = 'list',
  Map = 'map',
  Number = 'number',
  NumberSet = 'numberSet',
  String = 'string',
  StringSet = 'stringSet'
}

export type ModelBooleanInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModelCartConditionInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelCartConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCartConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCartConditionInput>>>;
  subtotal?: InputMaybe<ModelFloatInput>;
  tax?: InputMaybe<ModelFloatInput>;
  total?: InputMaybe<ModelFloatInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelCartConnection = {
  __typename?: 'ModelCartConnection';
  items: Array<Maybe<Cart>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelCartFilterInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelCartFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelCartFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCartFilterInput>>>;
  subtotal?: InputMaybe<ModelFloatInput>;
  tax?: InputMaybe<ModelFloatInput>;
  total?: InputMaybe<ModelFloatInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelCartItemConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCartItemConditionInput>>>;
  cartId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelCartItemConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCartItemConditionInput>>>;
  price?: InputMaybe<ModelFloatInput>;
  produceListingId?: InputMaybe<ModelIdInput>;
  quantity?: InputMaybe<ModelFloatInput>;
  subtotal?: InputMaybe<ModelFloatInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelCartItemConnection = {
  __typename?: 'ModelCartItemConnection';
  items: Array<Maybe<CartItem>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelCartItemFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelCartItemFilterInput>>>;
  cartId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelCartItemFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelCartItemFilterInput>>>;
  price?: InputMaybe<ModelFloatInput>;
  produceListingId?: InputMaybe<ModelIdInput>;
  quantity?: InputMaybe<ModelFloatInput>;
  subtotal?: InputMaybe<ModelFloatInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelDeliveryConditionInput = {
  actualDeliveryTime?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelDeliveryConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  deliveryRouteId?: InputMaybe<ModelIdInput>;
  deliveryTime?: InputMaybe<ModelStringInput>;
  driverId?: InputMaybe<ModelIdInput>;
  dropoffAddress?: InputMaybe<ModelStringInput>;
  dropoffLocationLat?: InputMaybe<ModelFloatInput>;
  dropoffLocationLng?: InputMaybe<ModelFloatInput>;
  estimatedDeliveryTime?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelDeliveryConditionInput>;
  notes?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDeliveryConditionInput>>>;
  orderId?: InputMaybe<ModelIdInput>;
  pickupAddress?: InputMaybe<ModelStringInput>;
  pickupLocationLat?: InputMaybe<ModelFloatInput>;
  pickupLocationLng?: InputMaybe<ModelFloatInput>;
  pickupTime?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelDeliveryStatusInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelDeliveryConnection = {
  __typename?: 'ModelDeliveryConnection';
  items: Array<Maybe<Delivery>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelDeliveryFilterInput = {
  actualDeliveryTime?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelDeliveryFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  deliveryRouteId?: InputMaybe<ModelIdInput>;
  deliveryTime?: InputMaybe<ModelStringInput>;
  driverId?: InputMaybe<ModelIdInput>;
  dropoffAddress?: InputMaybe<ModelStringInput>;
  dropoffLocationLat?: InputMaybe<ModelFloatInput>;
  dropoffLocationLng?: InputMaybe<ModelFloatInput>;
  estimatedDeliveryTime?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelDeliveryFilterInput>;
  notes?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDeliveryFilterInput>>>;
  orderId?: InputMaybe<ModelIdInput>;
  pickupAddress?: InputMaybe<ModelStringInput>;
  pickupLocationLat?: InputMaybe<ModelFloatInput>;
  pickupLocationLng?: InputMaybe<ModelFloatInput>;
  pickupTime?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelDeliveryStatusInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelDeliveryRatingConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelDeliveryRatingConditionInput>>>;
  comment?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  deliveryId?: InputMaybe<ModelIdInput>;
  driverId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelDeliveryRatingConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDeliveryRatingConditionInput>>>;
  rating?: InputMaybe<ModelIntInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelDeliveryRatingConnection = {
  __typename?: 'ModelDeliveryRatingConnection';
  items: Array<Maybe<DeliveryRating>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelDeliveryRatingFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelDeliveryRatingFilterInput>>>;
  comment?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  deliveryId?: InputMaybe<ModelIdInput>;
  driverId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelDeliveryRatingFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDeliveryRatingFilterInput>>>;
  rating?: InputMaybe<ModelIntInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelDeliveryRouteConditionInput = {
  actualDistance?: InputMaybe<ModelFloatInput>;
  actualDuration?: InputMaybe<ModelIntInput>;
  and?: InputMaybe<Array<InputMaybe<ModelDeliveryRouteConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  driverId?: InputMaybe<ModelIdInput>;
  endLocationLat?: InputMaybe<ModelFloatInput>;
  endLocationLng?: InputMaybe<ModelFloatInput>;
  endTime?: InputMaybe<ModelStringInput>;
  estimatedDistance?: InputMaybe<ModelFloatInput>;
  estimatedDuration?: InputMaybe<ModelIntInput>;
  not?: InputMaybe<ModelDeliveryRouteConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDeliveryRouteConditionInput>>>;
  startLocationLat?: InputMaybe<ModelFloatInput>;
  startLocationLng?: InputMaybe<ModelFloatInput>;
  startTime?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelDeliveryRouteConnection = {
  __typename?: 'ModelDeliveryRouteConnection';
  items: Array<Maybe<DeliveryRoute>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelDeliveryRouteFilterInput = {
  actualDistance?: InputMaybe<ModelFloatInput>;
  actualDuration?: InputMaybe<ModelIntInput>;
  and?: InputMaybe<Array<InputMaybe<ModelDeliveryRouteFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  driverId?: InputMaybe<ModelIdInput>;
  endLocationLat?: InputMaybe<ModelFloatInput>;
  endLocationLng?: InputMaybe<ModelFloatInput>;
  endTime?: InputMaybe<ModelStringInput>;
  estimatedDistance?: InputMaybe<ModelFloatInput>;
  estimatedDuration?: InputMaybe<ModelIntInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelDeliveryRouteFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDeliveryRouteFilterInput>>>;
  startLocationLat?: InputMaybe<ModelFloatInput>;
  startLocationLng?: InputMaybe<ModelFloatInput>;
  startTime?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelDeliveryStatusInput = {
  eq?: InputMaybe<DeliveryStatus>;
  ne?: InputMaybe<DeliveryStatus>;
};

export type ModelDriverConditionInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelDriverConditionInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  currentLocationLat?: InputMaybe<ModelFloatInput>;
  currentLocationLng?: InputMaybe<ModelFloatInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  lastLocationUpdateTime?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  licenseExpiry?: InputMaybe<ModelStringInput>;
  licenseNumber?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelDriverConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDriverConditionInput>>>;
  phoneNumber?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
  vehicleColor?: InputMaybe<ModelStringInput>;
  vehicleLicensePlate?: InputMaybe<ModelStringInput>;
  vehicleMake?: InputMaybe<ModelStringInput>;
  vehicleModel?: InputMaybe<ModelStringInput>;
  vehicleYear?: InputMaybe<ModelIntInput>;
};

export type ModelDriverConnection = {
  __typename?: 'ModelDriverConnection';
  items: Array<Maybe<Driver>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelDriverFilterInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelDriverFilterInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  currentLocationLat?: InputMaybe<ModelFloatInput>;
  currentLocationLng?: InputMaybe<ModelFloatInput>;
  email?: InputMaybe<ModelStringInput>;
  firstName?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  lastLocationUpdateTime?: InputMaybe<ModelStringInput>;
  lastName?: InputMaybe<ModelStringInput>;
  licenseExpiry?: InputMaybe<ModelStringInput>;
  licenseNumber?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelDriverFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDriverFilterInput>>>;
  phoneNumber?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
  vehicleColor?: InputMaybe<ModelStringInput>;
  vehicleLicensePlate?: InputMaybe<ModelStringInput>;
  vehicleMake?: InputMaybe<ModelStringInput>;
  vehicleModel?: InputMaybe<ModelStringInput>;
  vehicleYear?: InputMaybe<ModelIntInput>;
};

export type ModelDriverLocationConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelDriverLocationConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  driverId?: InputMaybe<ModelIdInput>;
  heading?: InputMaybe<ModelFloatInput>;
  lat?: InputMaybe<ModelFloatInput>;
  lng?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelDriverLocationConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDriverLocationConditionInput>>>;
  timestamp?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelDriverLocationConnection = {
  __typename?: 'ModelDriverLocationConnection';
  items: Array<Maybe<DriverLocation>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelDriverLocationFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelDriverLocationFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  driverId?: InputMaybe<ModelIdInput>;
  heading?: InputMaybe<ModelFloatInput>;
  id?: InputMaybe<ModelIdInput>;
  lat?: InputMaybe<ModelFloatInput>;
  lng?: InputMaybe<ModelFloatInput>;
  not?: InputMaybe<ModelDriverLocationFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelDriverLocationFilterInput>>>;
  timestamp?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelFarmConditionInput = {
  active?: InputMaybe<ModelBooleanInput>;
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelFarmConditionInput>>>;
  certifications?: InputMaybe<ModelStringInput>;
  certified?: InputMaybe<ModelBooleanInput>;
  city?: InputMaybe<ModelStringInput>;
  coverImage?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  location?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelFarmConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelFarmConditionInput>>>;
  ownerId?: InputMaybe<ModelIdInput>;
  phone?: InputMaybe<ModelStringInput>;
  profileImage?: InputMaybe<ModelStringInput>;
  state?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  website?: InputMaybe<ModelStringInput>;
  yearEstablished?: InputMaybe<ModelIntInput>;
  zipCode?: InputMaybe<ModelStringInput>;
};

export type ModelFarmConnection = {
  __typename?: 'ModelFarmConnection';
  items: Array<Maybe<Farm>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelFarmFilterInput = {
  active?: InputMaybe<ModelBooleanInput>;
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelFarmFilterInput>>>;
  certifications?: InputMaybe<ModelStringInput>;
  certified?: InputMaybe<ModelBooleanInput>;
  city?: InputMaybe<ModelStringInput>;
  coverImage?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  location?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelFarmFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelFarmFilterInput>>>;
  ownerId?: InputMaybe<ModelIdInput>;
  phone?: InputMaybe<ModelStringInput>;
  profileImage?: InputMaybe<ModelStringInput>;
  state?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  website?: InputMaybe<ModelStringInput>;
  yearEstablished?: InputMaybe<ModelIntInput>;
  zipCode?: InputMaybe<ModelStringInput>;
};

export type ModelFarmFollowConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelFarmFollowConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelFarmFollowConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelFarmFollowConditionInput>>>;
  receiveNotifications?: InputMaybe<ModelBooleanInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelFarmFollowConnection = {
  __typename?: 'ModelFarmFollowConnection';
  items: Array<Maybe<FarmFollow>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelFarmFollowFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelFarmFollowFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelFarmFollowFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelFarmFollowFilterInput>>>;
  receiveNotifications?: InputMaybe<ModelBooleanInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelFarmMetricsConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelFarmMetricsConditionInput>>>;
  averageOrderValue?: InputMaybe<ModelFloatInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelFarmMetricsConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelFarmMetricsConditionInput>>>;
  totalCustomers?: InputMaybe<ModelIntInput>;
  totalOrders?: InputMaybe<ModelIntInput>;
  totalSales?: InputMaybe<ModelFloatInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelFarmMetricsConnection = {
  __typename?: 'ModelFarmMetricsConnection';
  items: Array<Maybe<FarmMetrics>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelFarmMetricsFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelFarmMetricsFilterInput>>>;
  averageOrderValue?: InputMaybe<ModelFloatInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelFarmMetricsFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelFarmMetricsFilterInput>>>;
  totalCustomers?: InputMaybe<ModelIntInput>;
  totalOrders?: InputMaybe<ModelIntInput>;
  totalSales?: InputMaybe<ModelFloatInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelFarmPostConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelFarmPostConditionInput>>>;
  content?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  images?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelFarmPostConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelFarmPostConditionInput>>>;
  preHarvestListingId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
  type?: InputMaybe<ModelPostTypeInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  videos?: InputMaybe<ModelStringInput>;
};

export type ModelFarmPostConnection = {
  __typename?: 'ModelFarmPostConnection';
  items: Array<Maybe<FarmPost>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelFarmPostFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelFarmPostFilterInput>>>;
  content?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  images?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelFarmPostFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelFarmPostFilterInput>>>;
  preHarvestListingId?: InputMaybe<ModelIdInput>;
  title?: InputMaybe<ModelStringInput>;
  type?: InputMaybe<ModelPostTypeInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  videos?: InputMaybe<ModelStringInput>;
};

export type ModelFloatInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
};

export type ModelIdInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelIntInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export type ModelInventoryBatchConditionInput = {
  actualQuantity?: InputMaybe<ModelFloatInput>;
  and?: InputMaybe<Array<InputMaybe<ModelInventoryBatchConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  estimatedHarvestDate?: InputMaybe<ModelStringInput>;
  estimatedQuantity?: InputMaybe<ModelFloatInput>;
  expirationDate?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  harvestDate?: InputMaybe<ModelStringInput>;
  isOrganic?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelInventoryBatchConditionInput>;
  notes?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelInventoryBatchConditionInput>>>;
  plantingDate?: InputMaybe<ModelStringInput>;
  price?: InputMaybe<ModelFloatInput>;
  priceUnit?: InputMaybe<ModelStringInput>;
  produceVarietyId?: InputMaybe<ModelIdInput>;
  quantityUnit?: InputMaybe<ModelStringInput>;
  remainingQuantity?: InputMaybe<ModelFloatInput>;
  status?: InputMaybe<ModelInventoryStatusInput>;
  storageConditions?: InputMaybe<ModelStringInput>;
  storageLocation?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  zoneId?: InputMaybe<ModelIdInput>;
};

export type ModelInventoryBatchConnection = {
  __typename?: 'ModelInventoryBatchConnection';
  items: Array<Maybe<InventoryBatch>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelInventoryBatchFilterInput = {
  actualQuantity?: InputMaybe<ModelFloatInput>;
  and?: InputMaybe<Array<InputMaybe<ModelInventoryBatchFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  estimatedHarvestDate?: InputMaybe<ModelStringInput>;
  estimatedQuantity?: InputMaybe<ModelFloatInput>;
  expirationDate?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  harvestDate?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isOrganic?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelInventoryBatchFilterInput>;
  notes?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelInventoryBatchFilterInput>>>;
  plantingDate?: InputMaybe<ModelStringInput>;
  price?: InputMaybe<ModelFloatInput>;
  priceUnit?: InputMaybe<ModelStringInput>;
  produceVarietyId?: InputMaybe<ModelIdInput>;
  quantityUnit?: InputMaybe<ModelStringInput>;
  remainingQuantity?: InputMaybe<ModelFloatInput>;
  status?: InputMaybe<ModelInventoryStatusInput>;
  storageConditions?: InputMaybe<ModelStringInput>;
  storageLocation?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  zoneId?: InputMaybe<ModelIdInput>;
};

export type ModelInventoryStatusInput = {
  eq?: InputMaybe<InventoryStatus>;
  ne?: InputMaybe<InventoryStatus>;
};

export type ModelListingReviewConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelListingReviewConditionInput>>>;
  comment?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  images?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelListingReviewConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelListingReviewConditionInput>>>;
  produceListingId?: InputMaybe<ModelIdInput>;
  rating?: InputMaybe<ModelIntInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelListingReviewConnection = {
  __typename?: 'ModelListingReviewConnection';
  items: Array<Maybe<ListingReview>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelListingReviewFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelListingReviewFilterInput>>>;
  comment?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  images?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelListingReviewFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelListingReviewFilterInput>>>;
  produceListingId?: InputMaybe<ModelIdInput>;
  rating?: InputMaybe<ModelIntInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelMarketScheduleConditionInput = {
  active?: InputMaybe<ModelBooleanInput>;
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelMarketScheduleConditionInput>>>;
  city?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  dayOfWeek?: InputMaybe<ModelIntInput>;
  endTime?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  marketName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelMarketScheduleConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelMarketScheduleConditionInput>>>;
  startTime?: InputMaybe<ModelStringInput>;
  state?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  zipCode?: InputMaybe<ModelStringInput>;
};

export type ModelMarketScheduleConnection = {
  __typename?: 'ModelMarketScheduleConnection';
  items: Array<Maybe<MarketSchedule>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelMarketScheduleFilterInput = {
  active?: InputMaybe<ModelBooleanInput>;
  address?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelMarketScheduleFilterInput>>>;
  city?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  dayOfWeek?: InputMaybe<ModelIntInput>;
  endTime?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  marketName?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelMarketScheduleFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelMarketScheduleFilterInput>>>;
  startTime?: InputMaybe<ModelStringInput>;
  state?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  zipCode?: InputMaybe<ModelStringInput>;
};

export type ModelNotificationConditionInput = {
  actionLink?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelNotificationConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  imageLink?: InputMaybe<ModelStringInput>;
  message?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelNotificationConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelNotificationConditionInput>>>;
  read?: InputMaybe<ModelBooleanInput>;
  title?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelNotificationConnection = {
  __typename?: 'ModelNotificationConnection';
  items: Array<Maybe<Notification>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelNotificationFilterInput = {
  actionLink?: InputMaybe<ModelStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelNotificationFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  imageLink?: InputMaybe<ModelStringInput>;
  message?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelNotificationFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelNotificationFilterInput>>>;
  read?: InputMaybe<ModelBooleanInput>;
  title?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelOrderConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelOrderConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  deliveryAddressId?: InputMaybe<ModelIdInput>;
  deliveryFee?: InputMaybe<ModelFloatInput>;
  deliveryNotes?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelOrderConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrderConditionInput>>>;
  requestedDeliveryDate?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelOrderStatusInput>;
  subtotal?: InputMaybe<ModelFloatInput>;
  tax?: InputMaybe<ModelFloatInput>;
  total?: InputMaybe<ModelFloatInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelOrderConnection = {
  __typename?: 'ModelOrderConnection';
  items: Array<Maybe<Order>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelOrderFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelOrderFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  deliveryAddressId?: InputMaybe<ModelIdInput>;
  deliveryFee?: InputMaybe<ModelFloatInput>;
  deliveryNotes?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelOrderFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrderFilterInput>>>;
  requestedDeliveryDate?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelOrderStatusInput>;
  subtotal?: InputMaybe<ModelFloatInput>;
  tax?: InputMaybe<ModelFloatInput>;
  total?: InputMaybe<ModelFloatInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelOrderItemConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelOrderItemConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelOrderItemConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrderItemConditionInput>>>;
  orderId?: InputMaybe<ModelIdInput>;
  price?: InputMaybe<ModelFloatInput>;
  produceListingId?: InputMaybe<ModelIdInput>;
  quantity?: InputMaybe<ModelFloatInput>;
  subtotal?: InputMaybe<ModelFloatInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelOrderItemConnection = {
  __typename?: 'ModelOrderItemConnection';
  items: Array<Maybe<OrderItem>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelOrderItemFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelOrderItemFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelOrderItemFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelOrderItemFilterInput>>>;
  orderId?: InputMaybe<ModelIdInput>;
  price?: InputMaybe<ModelFloatInput>;
  produceListingId?: InputMaybe<ModelIdInput>;
  quantity?: InputMaybe<ModelFloatInput>;
  subtotal?: InputMaybe<ModelFloatInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelOrderStatusInput = {
  eq?: InputMaybe<OrderStatus>;
  ne?: InputMaybe<OrderStatus>;
};

export type ModelPaymentConditionInput = {
  amount?: InputMaybe<ModelFloatInput>;
  and?: InputMaybe<Array<InputMaybe<ModelPaymentConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  method?: InputMaybe<ModelPaymentMethodInput>;
  not?: InputMaybe<ModelPaymentConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPaymentConditionInput>>>;
  orderId?: InputMaybe<ModelIdInput>;
  status?: InputMaybe<ModelPaymentStatusInput>;
  transactionId?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelPaymentConnection = {
  __typename?: 'ModelPaymentConnection';
  items: Array<Maybe<Payment>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelPaymentFilterInput = {
  amount?: InputMaybe<ModelFloatInput>;
  and?: InputMaybe<Array<InputMaybe<ModelPaymentFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  method?: InputMaybe<ModelPaymentMethodInput>;
  not?: InputMaybe<ModelPaymentFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPaymentFilterInput>>>;
  orderId?: InputMaybe<ModelIdInput>;
  status?: InputMaybe<ModelPaymentStatusInput>;
  transactionId?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelPaymentMethodInput = {
  eq?: InputMaybe<PaymentMethod>;
  ne?: InputMaybe<PaymentMethod>;
};

export type ModelPaymentStatusInput = {
  eq?: InputMaybe<PaymentStatus>;
  ne?: InputMaybe<PaymentStatus>;
};

export type ModelPostCommentConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPostCommentConditionInput>>>;
  content?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmPostId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelPostCommentConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPostCommentConditionInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelPostCommentConnection = {
  __typename?: 'ModelPostCommentConnection';
  items: Array<Maybe<PostComment>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelPostCommentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPostCommentFilterInput>>>;
  content?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmPostId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelPostCommentFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPostCommentFilterInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelPostLikeConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPostLikeConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmPostId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelPostLikeConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPostLikeConditionInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelPostLikeConnection = {
  __typename?: 'ModelPostLikeConnection';
  items: Array<Maybe<PostLike>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelPostLikeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPostLikeFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmPostId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelPostLikeFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPostLikeFilterInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelPostTypeInput = {
  eq?: InputMaybe<PostType>;
  ne?: InputMaybe<PostType>;
};

export type ModelPreHarvestListingConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPreHarvestListingConditionInput>>>;
  availableForReservation?: InputMaybe<ModelBooleanInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  estimatedHarvestDate?: InputMaybe<ModelStringInput>;
  estimatedQuantity?: InputMaybe<ModelFloatInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  inventoryBatchId?: InputMaybe<ModelIdInput>;
  isOrganic?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelPreHarvestListingConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPreHarvestListingConditionInput>>>;
  price?: InputMaybe<ModelFloatInput>;
  priceUnit?: InputMaybe<ModelStringInput>;
  produceVarietyId?: InputMaybe<ModelIdInput>;
  quantityUnit?: InputMaybe<ModelStringInput>;
  title?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelPreHarvestListingConnection = {
  __typename?: 'ModelPreHarvestListingConnection';
  items: Array<Maybe<PreHarvestListing>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelPreHarvestListingFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPreHarvestListingFilterInput>>>;
  availableForReservation?: InputMaybe<ModelBooleanInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  estimatedHarvestDate?: InputMaybe<ModelStringInput>;
  estimatedQuantity?: InputMaybe<ModelFloatInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  inventoryBatchId?: InputMaybe<ModelIdInput>;
  isOrganic?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelPreHarvestListingFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPreHarvestListingFilterInput>>>;
  price?: InputMaybe<ModelFloatInput>;
  priceUnit?: InputMaybe<ModelStringInput>;
  produceVarietyId?: InputMaybe<ModelIdInput>;
  quantityUnit?: InputMaybe<ModelStringInput>;
  title?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelPreHarvestReservationConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPreHarvestReservationConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelPreHarvestReservationConditionInput>;
  notes?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPreHarvestReservationConditionInput>>>;
  preHarvestListingId?: InputMaybe<ModelIdInput>;
  quantity?: InputMaybe<ModelFloatInput>;
  quantityUnit?: InputMaybe<ModelStringInput>;
  requestedPickupDate?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelReservationStatusInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelPreHarvestReservationConnection = {
  __typename?: 'ModelPreHarvestReservationConnection';
  items: Array<Maybe<PreHarvestReservation>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelPreHarvestReservationFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelPreHarvestReservationFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelPreHarvestReservationFilterInput>;
  notes?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelPreHarvestReservationFilterInput>>>;
  preHarvestListingId?: InputMaybe<ModelIdInput>;
  quantity?: InputMaybe<ModelFloatInput>;
  quantityUnit?: InputMaybe<ModelStringInput>;
  requestedPickupDate?: InputMaybe<ModelStringInput>;
  status?: InputMaybe<ModelReservationStatusInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelProduceCategoryConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProduceCategoryConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  icon?: InputMaybe<ModelStringInput>;
  image?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProduceCategoryConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceCategoryConditionInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelProduceCategoryConnection = {
  __typename?: 'ModelProduceCategoryConnection';
  items: Array<Maybe<ProduceCategory>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelProduceCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProduceCategoryFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  icon?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProduceCategoryFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceCategoryFilterInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelProduceListingConditionInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelProduceListingConditionInput>>>;
  availableQuantity?: InputMaybe<ModelFloatInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  daysToExpiration?: InputMaybe<ModelIntInput>;
  description?: InputMaybe<ModelStringInput>;
  estimatedDeliveryMinutes?: InputMaybe<ModelIntInput>;
  expirationDate?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  freshness?: InputMaybe<ModelIntInput>;
  harvestDate?: InputMaybe<ModelStringInput>;
  images?: InputMaybe<ModelStringInput>;
  instantDeliveryFee?: InputMaybe<ModelFloatInput>;
  inventoryBatchId?: InputMaybe<ModelIdInput>;
  isInstantlyAvailable?: InputMaybe<ModelBooleanInput>;
  isOrganic?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelProduceListingConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceListingConditionInput>>>;
  price?: InputMaybe<ModelFloatInput>;
  priceUnit?: InputMaybe<ModelStringInput>;
  produceVarietyId?: InputMaybe<ModelIdInput>;
  quantity?: InputMaybe<ModelFloatInput>;
  quantityUnit?: InputMaybe<ModelStringInput>;
  title?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelProduceListingConnection = {
  __typename?: 'ModelProduceListingConnection';
  items: Array<Maybe<ProduceListing>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelProduceListingFilterInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelProduceListingFilterInput>>>;
  availableQuantity?: InputMaybe<ModelFloatInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  daysToExpiration?: InputMaybe<ModelIntInput>;
  description?: InputMaybe<ModelStringInput>;
  estimatedDeliveryMinutes?: InputMaybe<ModelIntInput>;
  expirationDate?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  freshness?: InputMaybe<ModelIntInput>;
  harvestDate?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  images?: InputMaybe<ModelStringInput>;
  instantDeliveryFee?: InputMaybe<ModelFloatInput>;
  inventoryBatchId?: InputMaybe<ModelIdInput>;
  isInstantlyAvailable?: InputMaybe<ModelBooleanInput>;
  isOrganic?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelProduceListingFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceListingFilterInput>>>;
  price?: InputMaybe<ModelFloatInput>;
  priceUnit?: InputMaybe<ModelStringInput>;
  produceVarietyId?: InputMaybe<ModelIdInput>;
  quantity?: InputMaybe<ModelFloatInput>;
  quantityUnit?: InputMaybe<ModelStringInput>;
  title?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelProduceNutrientConditionInput = {
  amount?: InputMaybe<ModelFloatInput>;
  and?: InputMaybe<Array<InputMaybe<ModelProduceNutrientConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  dailyValue?: InputMaybe<ModelFloatInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProduceNutrientConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceNutrientConditionInput>>>;
  unit?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  varietyId?: InputMaybe<ModelIdInput>;
};

export type ModelProduceNutrientConnection = {
  __typename?: 'ModelProduceNutrientConnection';
  items: Array<Maybe<ProduceNutrient>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelProduceNutrientFilterInput = {
  amount?: InputMaybe<ModelFloatInput>;
  and?: InputMaybe<Array<InputMaybe<ModelProduceNutrientFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  dailyValue?: InputMaybe<ModelFloatInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProduceNutrientFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceNutrientFilterInput>>>;
  unit?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  varietyId?: InputMaybe<ModelIdInput>;
};

export type ModelProduceSubcategoryConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProduceSubcategoryConditionInput>>>;
  categoryId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  icon?: InputMaybe<ModelStringInput>;
  image?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProduceSubcategoryConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceSubcategoryConditionInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelProduceSubcategoryConnection = {
  __typename?: 'ModelProduceSubcategoryConnection';
  items: Array<Maybe<ProduceSubcategory>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelProduceSubcategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProduceSubcategoryFilterInput>>>;
  categoryId?: InputMaybe<ModelIdInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  icon?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProduceSubcategoryFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceSubcategoryFilterInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelProduceTypeConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProduceTypeConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  icon?: InputMaybe<ModelStringInput>;
  image?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProduceTypeConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceTypeConditionInput>>>;
  subcategoryId?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelProduceTypeConnection = {
  __typename?: 'ModelProduceTypeConnection';
  items: Array<Maybe<ProduceType>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelProduceTypeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProduceTypeFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  icon?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProduceTypeFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceTypeFilterInput>>>;
  subcategoryId?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelProduceVarietyConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProduceVarietyConditionInput>>>;
  averageShelfLife?: InputMaybe<ModelIntInput>;
  averageWeight?: InputMaybe<ModelFloatInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  harvestInstructions?: InputMaybe<ModelStringInput>;
  icon?: InputMaybe<ModelStringInput>;
  image?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProduceVarietyConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceVarietyConditionInput>>>;
  season?: InputMaybe<ModelStringInput>;
  storageInstructions?: InputMaybe<ModelStringInput>;
  typeId?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  weightUnit?: InputMaybe<ModelStringInput>;
};

export type ModelProduceVarietyConnection = {
  __typename?: 'ModelProduceVarietyConnection';
  items: Array<Maybe<ProduceVariety>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelProduceVarietyFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelProduceVarietyFilterInput>>>;
  averageShelfLife?: InputMaybe<ModelIntInput>;
  averageWeight?: InputMaybe<ModelFloatInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  harvestInstructions?: InputMaybe<ModelStringInput>;
  icon?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  image?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelProduceVarietyFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelProduceVarietyFilterInput>>>;
  season?: InputMaybe<ModelStringInput>;
  storageInstructions?: InputMaybe<ModelStringInput>;
  typeId?: InputMaybe<ModelIdInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  weightUnit?: InputMaybe<ModelStringInput>;
};

export type ModelReservationStatusInput = {
  eq?: InputMaybe<ReservationStatus>;
  ne?: InputMaybe<ReservationStatus>;
};

export type ModelShoppingListConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShoppingListConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  isDefault?: InputMaybe<ModelBooleanInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelShoppingListConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShoppingListConditionInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelShoppingListConnection = {
  __typename?: 'ModelShoppingListConnection';
  items: Array<Maybe<ShoppingList>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelShoppingListFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShoppingListFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  isDefault?: InputMaybe<ModelBooleanInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelShoppingListFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShoppingListFilterInput>>>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelShoppingListItemConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShoppingListItemConditionInput>>>;
  completed?: InputMaybe<ModelBooleanInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelShoppingListItemConditionInput>;
  notes?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShoppingListItemConditionInput>>>;
  produceVarietyId?: InputMaybe<ModelIdInput>;
  quantity?: InputMaybe<ModelIntInput>;
  shoppingListId?: InputMaybe<ModelIdInput>;
  unit?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelShoppingListItemConnection = {
  __typename?: 'ModelShoppingListItemConnection';
  items: Array<Maybe<ShoppingListItem>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelShoppingListItemFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelShoppingListItemFilterInput>>>;
  completed?: InputMaybe<ModelBooleanInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  not?: InputMaybe<ModelShoppingListItemFilterInput>;
  notes?: InputMaybe<ModelStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelShoppingListItemFilterInput>>>;
  produceVarietyId?: InputMaybe<ModelIdInput>;
  quantity?: InputMaybe<ModelIntInput>;
  shoppingListId?: InputMaybe<ModelIdInput>;
  unit?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelSizeInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
};

export enum ModelSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type ModelStringInput = {
  attributeExists?: InputMaybe<Scalars['Boolean']['input']>;
  attributeType?: InputMaybe<ModelAttributeTypes>;
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<ModelSizeInput>;
};

export type ModelSubscriptionAddressFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionAddressFilterInput>>>;
  city?: InputMaybe<ModelSubscriptionStringInput>;
  country?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isDefault?: InputMaybe<ModelSubscriptionBooleanInput>;
  label?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionAddressFilterInput>>>;
  postalCode?: InputMaybe<ModelSubscriptionStringInput>;
  state?: InputMaybe<ModelSubscriptionStringInput>;
  street?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionBooleanInput = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ModelSubscriptionCartFilterInput = {
  active?: InputMaybe<ModelSubscriptionBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionCartFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionCartFilterInput>>>;
  subtotal?: InputMaybe<ModelSubscriptionFloatInput>;
  tax?: InputMaybe<ModelSubscriptionFloatInput>;
  total?: InputMaybe<ModelSubscriptionFloatInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionCartItemFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionCartItemFilterInput>>>;
  cartId?: InputMaybe<ModelSubscriptionIdInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionCartItemFilterInput>>>;
  price?: InputMaybe<ModelSubscriptionFloatInput>;
  produceListingId?: InputMaybe<ModelSubscriptionIdInput>;
  quantity?: InputMaybe<ModelSubscriptionFloatInput>;
  subtotal?: InputMaybe<ModelSubscriptionFloatInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionDeliveryFilterInput = {
  actualDeliveryTime?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionDeliveryFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  deliveryRouteId?: InputMaybe<ModelSubscriptionIdInput>;
  deliveryTime?: InputMaybe<ModelSubscriptionStringInput>;
  driverId?: InputMaybe<ModelSubscriptionIdInput>;
  dropoffAddress?: InputMaybe<ModelSubscriptionStringInput>;
  dropoffLocationLat?: InputMaybe<ModelSubscriptionFloatInput>;
  dropoffLocationLng?: InputMaybe<ModelSubscriptionFloatInput>;
  estimatedDeliveryTime?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  notes?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionDeliveryFilterInput>>>;
  orderId?: InputMaybe<ModelSubscriptionIdInput>;
  pickupAddress?: InputMaybe<ModelSubscriptionStringInput>;
  pickupLocationLat?: InputMaybe<ModelSubscriptionFloatInput>;
  pickupLocationLng?: InputMaybe<ModelSubscriptionFloatInput>;
  pickupTime?: InputMaybe<ModelSubscriptionStringInput>;
  status?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionDeliveryRatingFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionDeliveryRatingFilterInput>>>;
  comment?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  deliveryId?: InputMaybe<ModelSubscriptionIdInput>;
  driverId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionDeliveryRatingFilterInput>>>;
  rating?: InputMaybe<ModelSubscriptionIntInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionDeliveryRouteFilterInput = {
  actualDistance?: InputMaybe<ModelSubscriptionFloatInput>;
  actualDuration?: InputMaybe<ModelSubscriptionIntInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionDeliveryRouteFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  driverId?: InputMaybe<ModelStringInput>;
  endLocationLat?: InputMaybe<ModelSubscriptionFloatInput>;
  endLocationLng?: InputMaybe<ModelSubscriptionFloatInput>;
  endTime?: InputMaybe<ModelSubscriptionStringInput>;
  estimatedDistance?: InputMaybe<ModelSubscriptionFloatInput>;
  estimatedDuration?: InputMaybe<ModelSubscriptionIntInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionDeliveryRouteFilterInput>>>;
  startLocationLat?: InputMaybe<ModelSubscriptionFloatInput>;
  startLocationLng?: InputMaybe<ModelSubscriptionFloatInput>;
  startTime?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionDriverFilterInput = {
  active?: InputMaybe<ModelSubscriptionBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionDriverFilterInput>>>;
  avatar?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  currentLocationLat?: InputMaybe<ModelSubscriptionFloatInput>;
  currentLocationLng?: InputMaybe<ModelSubscriptionFloatInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  firstName?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  lastLocationUpdateTime?: InputMaybe<ModelSubscriptionStringInput>;
  lastName?: InputMaybe<ModelSubscriptionStringInput>;
  licenseExpiry?: InputMaybe<ModelSubscriptionStringInput>;
  licenseNumber?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionDriverFilterInput>>>;
  phoneNumber?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
  vehicleColor?: InputMaybe<ModelSubscriptionStringInput>;
  vehicleLicensePlate?: InputMaybe<ModelSubscriptionStringInput>;
  vehicleMake?: InputMaybe<ModelSubscriptionStringInput>;
  vehicleModel?: InputMaybe<ModelSubscriptionStringInput>;
  vehicleYear?: InputMaybe<ModelSubscriptionIntInput>;
};

export type ModelSubscriptionDriverLocationFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionDriverLocationFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  driverId?: InputMaybe<ModelStringInput>;
  heading?: InputMaybe<ModelSubscriptionFloatInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  lat?: InputMaybe<ModelSubscriptionFloatInput>;
  lng?: InputMaybe<ModelSubscriptionFloatInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionDriverLocationFilterInput>>>;
  timestamp?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionFarmFilterInput = {
  active?: InputMaybe<ModelSubscriptionBooleanInput>;
  address?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionFarmFilterInput>>>;
  certifications?: InputMaybe<ModelSubscriptionStringInput>;
  certified?: InputMaybe<ModelSubscriptionBooleanInput>;
  city?: InputMaybe<ModelSubscriptionStringInput>;
  coverImage?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionFarmFilterInput>>>;
  ownerId?: InputMaybe<ModelStringInput>;
  phone?: InputMaybe<ModelSubscriptionStringInput>;
  profileImage?: InputMaybe<ModelSubscriptionStringInput>;
  state?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  website?: InputMaybe<ModelSubscriptionStringInput>;
  yearEstablished?: InputMaybe<ModelSubscriptionIntInput>;
  zipCode?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionFarmFollowFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionFarmFollowFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  farmId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionFarmFollowFilterInput>>>;
  receiveNotifications?: InputMaybe<ModelSubscriptionBooleanInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionFarmMetricsFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionFarmMetricsFilterInput>>>;
  averageOrderValue?: InputMaybe<ModelSubscriptionFloatInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  farmId?: InputMaybe<ModelSubscriptionIdInput>;
  farmOwnerId?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionFarmMetricsFilterInput>>>;
  totalCustomers?: InputMaybe<ModelSubscriptionIntInput>;
  totalOrders?: InputMaybe<ModelSubscriptionIntInput>;
  totalSales?: InputMaybe<ModelSubscriptionFloatInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionFarmPostFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionFarmPostFilterInput>>>;
  content?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  farmId?: InputMaybe<ModelSubscriptionIdInput>;
  farmOwnerId?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  images?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionFarmPostFilterInput>>>;
  preHarvestListingId?: InputMaybe<ModelSubscriptionIdInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
  type?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  videos?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionFloatInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  ge?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  le?: InputMaybe<Scalars['Float']['input']>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
};

export type ModelSubscriptionIdInput = {
  beginsWith?: InputMaybe<Scalars['ID']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  ge?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  le?: InputMaybe<Scalars['ID']['input']>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type ModelSubscriptionIntInput = {
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  ge?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  le?: InputMaybe<Scalars['Int']['input']>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ModelSubscriptionInventoryBatchFilterInput = {
  actualQuantity?: InputMaybe<ModelSubscriptionFloatInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionInventoryBatchFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  estimatedHarvestDate?: InputMaybe<ModelSubscriptionStringInput>;
  estimatedQuantity?: InputMaybe<ModelSubscriptionFloatInput>;
  expirationDate?: InputMaybe<ModelSubscriptionStringInput>;
  farmId?: InputMaybe<ModelSubscriptionIdInput>;
  farmOwnerId?: InputMaybe<ModelStringInput>;
  harvestDate?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isOrganic?: InputMaybe<ModelSubscriptionBooleanInput>;
  notes?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionInventoryBatchFilterInput>>>;
  plantingDate?: InputMaybe<ModelSubscriptionStringInput>;
  price?: InputMaybe<ModelSubscriptionFloatInput>;
  priceUnit?: InputMaybe<ModelSubscriptionStringInput>;
  produceVarietyId?: InputMaybe<ModelSubscriptionIdInput>;
  quantityUnit?: InputMaybe<ModelSubscriptionStringInput>;
  remainingQuantity?: InputMaybe<ModelSubscriptionFloatInput>;
  status?: InputMaybe<ModelSubscriptionStringInput>;
  storageConditions?: InputMaybe<ModelSubscriptionStringInput>;
  storageLocation?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  zoneId?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSubscriptionListingReviewFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionListingReviewFilterInput>>>;
  comment?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  images?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionListingReviewFilterInput>>>;
  produceListingId?: InputMaybe<ModelSubscriptionIdInput>;
  rating?: InputMaybe<ModelSubscriptionIntInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionMarketScheduleFilterInput = {
  active?: InputMaybe<ModelSubscriptionBooleanInput>;
  address?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionMarketScheduleFilterInput>>>;
  city?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  dayOfWeek?: InputMaybe<ModelSubscriptionIntInput>;
  endTime?: InputMaybe<ModelSubscriptionStringInput>;
  farmId?: InputMaybe<ModelSubscriptionIdInput>;
  farmOwnerId?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  marketName?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionMarketScheduleFilterInput>>>;
  startTime?: InputMaybe<ModelSubscriptionStringInput>;
  state?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  zipCode?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionNotificationFilterInput = {
  actionLink?: InputMaybe<ModelSubscriptionStringInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionNotificationFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  imageLink?: InputMaybe<ModelSubscriptionStringInput>;
  message?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionNotificationFilterInput>>>;
  read?: InputMaybe<ModelSubscriptionBooleanInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionOrderFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionOrderFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  deliveryAddressId?: InputMaybe<ModelSubscriptionIdInput>;
  deliveryFee?: InputMaybe<ModelSubscriptionFloatInput>;
  deliveryNotes?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionOrderFilterInput>>>;
  requestedDeliveryDate?: InputMaybe<ModelSubscriptionStringInput>;
  status?: InputMaybe<ModelSubscriptionStringInput>;
  subtotal?: InputMaybe<ModelSubscriptionFloatInput>;
  tax?: InputMaybe<ModelSubscriptionFloatInput>;
  total?: InputMaybe<ModelSubscriptionFloatInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionOrderItemFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionOrderItemFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  farmId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionOrderItemFilterInput>>>;
  orderId?: InputMaybe<ModelSubscriptionIdInput>;
  price?: InputMaybe<ModelSubscriptionFloatInput>;
  produceListingId?: InputMaybe<ModelSubscriptionIdInput>;
  quantity?: InputMaybe<ModelSubscriptionFloatInput>;
  subtotal?: InputMaybe<ModelSubscriptionFloatInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionPaymentFilterInput = {
  amount?: InputMaybe<ModelSubscriptionFloatInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionPaymentFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  method?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionPaymentFilterInput>>>;
  orderId?: InputMaybe<ModelSubscriptionIdInput>;
  status?: InputMaybe<ModelSubscriptionStringInput>;
  transactionId?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionPostCommentFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionPostCommentFilterInput>>>;
  content?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  farmPostId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionPostCommentFilterInput>>>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionPostLikeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionPostLikeFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  farmPostId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionPostLikeFilterInput>>>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionPreHarvestListingFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionPreHarvestListingFilterInput>>>;
  availableForReservation?: InputMaybe<ModelSubscriptionBooleanInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  estimatedHarvestDate?: InputMaybe<ModelSubscriptionStringInput>;
  estimatedQuantity?: InputMaybe<ModelSubscriptionFloatInput>;
  farmId?: InputMaybe<ModelSubscriptionIdInput>;
  farmOwnerId?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  inventoryBatchId?: InputMaybe<ModelSubscriptionIdInput>;
  isOrganic?: InputMaybe<ModelSubscriptionBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionPreHarvestListingFilterInput>>>;
  price?: InputMaybe<ModelSubscriptionFloatInput>;
  priceUnit?: InputMaybe<ModelSubscriptionStringInput>;
  produceVarietyId?: InputMaybe<ModelSubscriptionIdInput>;
  quantityUnit?: InputMaybe<ModelSubscriptionStringInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionPreHarvestReservationFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionPreHarvestReservationFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  farmId?: InputMaybe<ModelSubscriptionIdInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  notes?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionPreHarvestReservationFilterInput>>>;
  preHarvestListingId?: InputMaybe<ModelSubscriptionIdInput>;
  quantity?: InputMaybe<ModelSubscriptionFloatInput>;
  quantityUnit?: InputMaybe<ModelSubscriptionStringInput>;
  requestedPickupDate?: InputMaybe<ModelSubscriptionStringInput>;
  status?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionProduceCategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceCategoryFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  icon?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceCategoryFilterInput>>>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionProduceListingFilterInput = {
  active?: InputMaybe<ModelSubscriptionBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceListingFilterInput>>>;
  availableQuantity?: InputMaybe<ModelSubscriptionFloatInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  daysToExpiration?: InputMaybe<ModelSubscriptionIntInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  estimatedDeliveryMinutes?: InputMaybe<ModelSubscriptionIntInput>;
  expirationDate?: InputMaybe<ModelSubscriptionStringInput>;
  farmId?: InputMaybe<ModelSubscriptionIdInput>;
  farmOwnerId?: InputMaybe<ModelStringInput>;
  freshness?: InputMaybe<ModelSubscriptionIntInput>;
  harvestDate?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  images?: InputMaybe<ModelSubscriptionStringInput>;
  instantDeliveryFee?: InputMaybe<ModelSubscriptionFloatInput>;
  inventoryBatchId?: InputMaybe<ModelSubscriptionIdInput>;
  isInstantlyAvailable?: InputMaybe<ModelSubscriptionBooleanInput>;
  isOrganic?: InputMaybe<ModelSubscriptionBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceListingFilterInput>>>;
  price?: InputMaybe<ModelSubscriptionFloatInput>;
  priceUnit?: InputMaybe<ModelSubscriptionStringInput>;
  produceVarietyId?: InputMaybe<ModelSubscriptionIdInput>;
  quantity?: InputMaybe<ModelSubscriptionFloatInput>;
  quantityUnit?: InputMaybe<ModelSubscriptionStringInput>;
  title?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionProduceNutrientFilterInput = {
  amount?: InputMaybe<ModelSubscriptionFloatInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceNutrientFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  dailyValue?: InputMaybe<ModelSubscriptionFloatInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceNutrientFilterInput>>>;
  unit?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  varietyId?: InputMaybe<ModelSubscriptionIdInput>;
};

export type ModelSubscriptionProduceSubcategoryFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceSubcategoryFilterInput>>>;
  categoryId?: InputMaybe<ModelSubscriptionIdInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  icon?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceSubcategoryFilterInput>>>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionProduceTypeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceTypeFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  icon?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceTypeFilterInput>>>;
  subcategoryId?: InputMaybe<ModelSubscriptionIdInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionProduceVarietyFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceVarietyFilterInput>>>;
  averageShelfLife?: InputMaybe<ModelSubscriptionIntInput>;
  averageWeight?: InputMaybe<ModelSubscriptionFloatInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  harvestInstructions?: InputMaybe<ModelSubscriptionStringInput>;
  icon?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  image?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionProduceVarietyFilterInput>>>;
  season?: InputMaybe<ModelSubscriptionStringInput>;
  storageInstructions?: InputMaybe<ModelSubscriptionStringInput>;
  typeId?: InputMaybe<ModelSubscriptionIdInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  weightUnit?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionShoppingListFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionShoppingListFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  isDefault?: InputMaybe<ModelSubscriptionBooleanInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionShoppingListFilterInput>>>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionShoppingListItemFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionShoppingListItemFilterInput>>>;
  completed?: InputMaybe<ModelSubscriptionBooleanInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  notes?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionShoppingListItemFilterInput>>>;
  produceVarietyId?: InputMaybe<ModelSubscriptionIdInput>;
  quantity?: InputMaybe<ModelSubscriptionIntInput>;
  shoppingListId?: InputMaybe<ModelSubscriptionIdInput>;
  unit?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: InputMaybe<Scalars['String']['input']>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  ge?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  le?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ModelSubscriptionUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserFilterInput>>>;
  avatar?: InputMaybe<ModelSubscriptionStringInput>;
  bio?: InputMaybe<ModelSubscriptionStringInput>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  email?: InputMaybe<ModelSubscriptionStringInput>;
  id?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserFilterInput>>>;
  phoneNumber?: InputMaybe<ModelSubscriptionStringInput>;
  role?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelSubscriptionUserPreferencesFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserPreferencesFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  emailNotificationsEnabled?: InputMaybe<ModelSubscriptionBooleanInput>;
  farmUpdates?: InputMaybe<ModelSubscriptionBooleanInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  marketingCommunications?: InputMaybe<ModelSubscriptionBooleanInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionUserPreferencesFilterInput>>>;
  orderUpdates?: InputMaybe<ModelSubscriptionBooleanInput>;
  preferredPaymentMethod?: InputMaybe<ModelSubscriptionStringInput>;
  pushNotificationsEnabled?: InputMaybe<ModelSubscriptionBooleanInput>;
  smsNotificationsEnabled?: InputMaybe<ModelSubscriptionBooleanInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
  userId?: InputMaybe<ModelStringInput>;
};

export type ModelSubscriptionZoneFilterInput = {
  active?: InputMaybe<ModelSubscriptionBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelSubscriptionZoneFilterInput>>>;
  createdAt?: InputMaybe<ModelSubscriptionStringInput>;
  description?: InputMaybe<ModelSubscriptionStringInput>;
  farmId?: InputMaybe<ModelSubscriptionIdInput>;
  farmOwnerId?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelSubscriptionIdInput>;
  location?: InputMaybe<ModelSubscriptionStringInput>;
  name?: InputMaybe<ModelSubscriptionStringInput>;
  or?: InputMaybe<Array<InputMaybe<ModelSubscriptionZoneFilterInput>>>;
  size?: InputMaybe<ModelSubscriptionFloatInput>;
  sizeUnit?: InputMaybe<ModelSubscriptionStringInput>;
  updatedAt?: InputMaybe<ModelSubscriptionStringInput>;
};

export type ModelUserConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserConditionInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  bio?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelUserConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserConditionInput>>>;
  phoneNumber?: InputMaybe<ModelStringInput>;
  role?: InputMaybe<ModelUserRoleInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelUserConnection = {
  __typename?: 'ModelUserConnection';
  items: Array<Maybe<User>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelUserFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  avatar?: InputMaybe<ModelStringInput>;
  bio?: InputMaybe<ModelStringInput>;
  createdAt?: InputMaybe<ModelStringInput>;
  email?: InputMaybe<ModelStringInput>;
  id?: InputMaybe<ModelIdInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelUserFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserFilterInput>>>;
  phoneNumber?: InputMaybe<ModelStringInput>;
  role?: InputMaybe<ModelUserRoleInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelUserPreferencesConditionInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserPreferencesConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  emailNotificationsEnabled?: InputMaybe<ModelBooleanInput>;
  farmUpdates?: InputMaybe<ModelBooleanInput>;
  marketingCommunications?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelUserPreferencesConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserPreferencesConditionInput>>>;
  orderUpdates?: InputMaybe<ModelBooleanInput>;
  preferredPaymentMethod?: InputMaybe<ModelPaymentMethodInput>;
  pushNotificationsEnabled?: InputMaybe<ModelBooleanInput>;
  smsNotificationsEnabled?: InputMaybe<ModelBooleanInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelUserPreferencesConnection = {
  __typename?: 'ModelUserPreferencesConnection';
  items: Array<Maybe<UserPreferences>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelUserPreferencesFilterInput = {
  and?: InputMaybe<Array<InputMaybe<ModelUserPreferencesFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  emailNotificationsEnabled?: InputMaybe<ModelBooleanInput>;
  farmUpdates?: InputMaybe<ModelBooleanInput>;
  id?: InputMaybe<ModelIdInput>;
  marketingCommunications?: InputMaybe<ModelBooleanInput>;
  not?: InputMaybe<ModelUserPreferencesFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelUserPreferencesFilterInput>>>;
  orderUpdates?: InputMaybe<ModelBooleanInput>;
  preferredPaymentMethod?: InputMaybe<ModelPaymentMethodInput>;
  pushNotificationsEnabled?: InputMaybe<ModelBooleanInput>;
  smsNotificationsEnabled?: InputMaybe<ModelBooleanInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
  userId?: InputMaybe<ModelIdInput>;
};

export type ModelUserRoleInput = {
  eq?: InputMaybe<UserRole>;
  ne?: InputMaybe<UserRole>;
};

export type ModelZoneConditionInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelZoneConditionInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  location?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelZoneConditionInput>;
  or?: InputMaybe<Array<InputMaybe<ModelZoneConditionInput>>>;
  size?: InputMaybe<ModelFloatInput>;
  sizeUnit?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type ModelZoneConnection = {
  __typename?: 'ModelZoneConnection';
  items: Array<Maybe<Zone>>;
  nextToken?: Maybe<Scalars['String']['output']>;
};

export type ModelZoneFilterInput = {
  active?: InputMaybe<ModelBooleanInput>;
  and?: InputMaybe<Array<InputMaybe<ModelZoneFilterInput>>>;
  createdAt?: InputMaybe<ModelStringInput>;
  description?: InputMaybe<ModelStringInput>;
  farmId?: InputMaybe<ModelIdInput>;
  farmOwnerId?: InputMaybe<ModelIdInput>;
  id?: InputMaybe<ModelIdInput>;
  location?: InputMaybe<ModelStringInput>;
  name?: InputMaybe<ModelStringInput>;
  not?: InputMaybe<ModelZoneFilterInput>;
  or?: InputMaybe<Array<InputMaybe<ModelZoneFilterInput>>>;
  size?: InputMaybe<ModelFloatInput>;
  sizeUnit?: InputMaybe<ModelStringInput>;
  updatedAt?: InputMaybe<ModelStringInput>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAddress?: Maybe<Address>;
  createCart?: Maybe<Cart>;
  createCartItem?: Maybe<CartItem>;
  createDelivery?: Maybe<Delivery>;
  createDeliveryRating?: Maybe<DeliveryRating>;
  createDeliveryRoute?: Maybe<DeliveryRoute>;
  createDriver?: Maybe<Driver>;
  createDriverLocation?: Maybe<DriverLocation>;
  createFarm?: Maybe<Farm>;
  createFarmFollow?: Maybe<FarmFollow>;
  createFarmMetrics?: Maybe<FarmMetrics>;
  createFarmPost?: Maybe<FarmPost>;
  createInventoryBatch?: Maybe<InventoryBatch>;
  createListingReview?: Maybe<ListingReview>;
  createMarketSchedule?: Maybe<MarketSchedule>;
  createNotification?: Maybe<Notification>;
  createOrder?: Maybe<Order>;
  createOrderItem?: Maybe<OrderItem>;
  createPayment?: Maybe<Payment>;
  createPostComment?: Maybe<PostComment>;
  createPostLike?: Maybe<PostLike>;
  createPreHarvestListing?: Maybe<PreHarvestListing>;
  createPreHarvestReservation?: Maybe<PreHarvestReservation>;
  createProduceCategory?: Maybe<ProduceCategory>;
  createProduceListing?: Maybe<ProduceListing>;
  createProduceNutrient?: Maybe<ProduceNutrient>;
  createProduceSubcategory?: Maybe<ProduceSubcategory>;
  createProduceType?: Maybe<ProduceType>;
  createProduceVariety?: Maybe<ProduceVariety>;
  createShoppingList?: Maybe<ShoppingList>;
  createShoppingListItem?: Maybe<ShoppingListItem>;
  createUser?: Maybe<User>;
  createUserPreferences?: Maybe<UserPreferences>;
  createZone?: Maybe<Zone>;
  deleteAddress?: Maybe<Address>;
  deleteCart?: Maybe<Cart>;
  deleteCartItem?: Maybe<CartItem>;
  deleteDelivery?: Maybe<Delivery>;
  deleteDeliveryRating?: Maybe<DeliveryRating>;
  deleteDeliveryRoute?: Maybe<DeliveryRoute>;
  deleteDriver?: Maybe<Driver>;
  deleteDriverLocation?: Maybe<DriverLocation>;
  deleteFarm?: Maybe<Farm>;
  deleteFarmFollow?: Maybe<FarmFollow>;
  deleteFarmMetrics?: Maybe<FarmMetrics>;
  deleteFarmPost?: Maybe<FarmPost>;
  deleteInventoryBatch?: Maybe<InventoryBatch>;
  deleteListingReview?: Maybe<ListingReview>;
  deleteMarketSchedule?: Maybe<MarketSchedule>;
  deleteNotification?: Maybe<Notification>;
  deleteOrder?: Maybe<Order>;
  deleteOrderItem?: Maybe<OrderItem>;
  deletePayment?: Maybe<Payment>;
  deletePostComment?: Maybe<PostComment>;
  deletePostLike?: Maybe<PostLike>;
  deletePreHarvestListing?: Maybe<PreHarvestListing>;
  deletePreHarvestReservation?: Maybe<PreHarvestReservation>;
  deleteProduceCategory?: Maybe<ProduceCategory>;
  deleteProduceListing?: Maybe<ProduceListing>;
  deleteProduceNutrient?: Maybe<ProduceNutrient>;
  deleteProduceSubcategory?: Maybe<ProduceSubcategory>;
  deleteProduceType?: Maybe<ProduceType>;
  deleteProduceVariety?: Maybe<ProduceVariety>;
  deleteShoppingList?: Maybe<ShoppingList>;
  deleteShoppingListItem?: Maybe<ShoppingListItem>;
  deleteUser?: Maybe<User>;
  deleteUserPreferences?: Maybe<UserPreferences>;
  deleteZone?: Maybe<Zone>;
  updateAddress?: Maybe<Address>;
  updateCart?: Maybe<Cart>;
  updateCartItem?: Maybe<CartItem>;
  updateDelivery?: Maybe<Delivery>;
  updateDeliveryRating?: Maybe<DeliveryRating>;
  updateDeliveryRoute?: Maybe<DeliveryRoute>;
  updateDriver?: Maybe<Driver>;
  updateDriverLocation?: Maybe<DriverLocation>;
  updateFarm?: Maybe<Farm>;
  updateFarmFollow?: Maybe<FarmFollow>;
  updateFarmMetrics?: Maybe<FarmMetrics>;
  updateFarmPost?: Maybe<FarmPost>;
  updateInventoryBatch?: Maybe<InventoryBatch>;
  updateListingReview?: Maybe<ListingReview>;
  updateMarketSchedule?: Maybe<MarketSchedule>;
  updateNotification?: Maybe<Notification>;
  updateOrder?: Maybe<Order>;
  updateOrderItem?: Maybe<OrderItem>;
  updatePayment?: Maybe<Payment>;
  updatePostComment?: Maybe<PostComment>;
  updatePostLike?: Maybe<PostLike>;
  updatePreHarvestListing?: Maybe<PreHarvestListing>;
  updatePreHarvestReservation?: Maybe<PreHarvestReservation>;
  updateProduceCategory?: Maybe<ProduceCategory>;
  updateProduceListing?: Maybe<ProduceListing>;
  updateProduceNutrient?: Maybe<ProduceNutrient>;
  updateProduceSubcategory?: Maybe<ProduceSubcategory>;
  updateProduceType?: Maybe<ProduceType>;
  updateProduceVariety?: Maybe<ProduceVariety>;
  updateShoppingList?: Maybe<ShoppingList>;
  updateShoppingListItem?: Maybe<ShoppingListItem>;
  updateUser?: Maybe<User>;
  updateUserPreferences?: Maybe<UserPreferences>;
  updateZone?: Maybe<Zone>;
};


export type MutationCreateAddressArgs = {
  condition?: InputMaybe<ModelAddressConditionInput>;
  input: CreateAddressInput;
};


export type MutationCreateCartArgs = {
  condition?: InputMaybe<ModelCartConditionInput>;
  input: CreateCartInput;
};


export type MutationCreateCartItemArgs = {
  condition?: InputMaybe<ModelCartItemConditionInput>;
  input: CreateCartItemInput;
};


export type MutationCreateDeliveryArgs = {
  condition?: InputMaybe<ModelDeliveryConditionInput>;
  input: CreateDeliveryInput;
};


export type MutationCreateDeliveryRatingArgs = {
  condition?: InputMaybe<ModelDeliveryRatingConditionInput>;
  input: CreateDeliveryRatingInput;
};


export type MutationCreateDeliveryRouteArgs = {
  condition?: InputMaybe<ModelDeliveryRouteConditionInput>;
  input: CreateDeliveryRouteInput;
};


export type MutationCreateDriverArgs = {
  condition?: InputMaybe<ModelDriverConditionInput>;
  input: CreateDriverInput;
};


export type MutationCreateDriverLocationArgs = {
  condition?: InputMaybe<ModelDriverLocationConditionInput>;
  input: CreateDriverLocationInput;
};


export type MutationCreateFarmArgs = {
  condition?: InputMaybe<ModelFarmConditionInput>;
  input: CreateFarmInput;
};


export type MutationCreateFarmFollowArgs = {
  condition?: InputMaybe<ModelFarmFollowConditionInput>;
  input: CreateFarmFollowInput;
};


export type MutationCreateFarmMetricsArgs = {
  condition?: InputMaybe<ModelFarmMetricsConditionInput>;
  input: CreateFarmMetricsInput;
};


export type MutationCreateFarmPostArgs = {
  condition?: InputMaybe<ModelFarmPostConditionInput>;
  input: CreateFarmPostInput;
};


export type MutationCreateInventoryBatchArgs = {
  condition?: InputMaybe<ModelInventoryBatchConditionInput>;
  input: CreateInventoryBatchInput;
};


export type MutationCreateListingReviewArgs = {
  condition?: InputMaybe<ModelListingReviewConditionInput>;
  input: CreateListingReviewInput;
};


export type MutationCreateMarketScheduleArgs = {
  condition?: InputMaybe<ModelMarketScheduleConditionInput>;
  input: CreateMarketScheduleInput;
};


export type MutationCreateNotificationArgs = {
  condition?: InputMaybe<ModelNotificationConditionInput>;
  input: CreateNotificationInput;
};


export type MutationCreateOrderArgs = {
  condition?: InputMaybe<ModelOrderConditionInput>;
  input: CreateOrderInput;
};


export type MutationCreateOrderItemArgs = {
  condition?: InputMaybe<ModelOrderItemConditionInput>;
  input: CreateOrderItemInput;
};


export type MutationCreatePaymentArgs = {
  condition?: InputMaybe<ModelPaymentConditionInput>;
  input: CreatePaymentInput;
};


export type MutationCreatePostCommentArgs = {
  condition?: InputMaybe<ModelPostCommentConditionInput>;
  input: CreatePostCommentInput;
};


export type MutationCreatePostLikeArgs = {
  condition?: InputMaybe<ModelPostLikeConditionInput>;
  input: CreatePostLikeInput;
};


export type MutationCreatePreHarvestListingArgs = {
  condition?: InputMaybe<ModelPreHarvestListingConditionInput>;
  input: CreatePreHarvestListingInput;
};


export type MutationCreatePreHarvestReservationArgs = {
  condition?: InputMaybe<ModelPreHarvestReservationConditionInput>;
  input: CreatePreHarvestReservationInput;
};


export type MutationCreateProduceCategoryArgs = {
  condition?: InputMaybe<ModelProduceCategoryConditionInput>;
  input: CreateProduceCategoryInput;
};


export type MutationCreateProduceListingArgs = {
  condition?: InputMaybe<ModelProduceListingConditionInput>;
  input: CreateProduceListingInput;
};


export type MutationCreateProduceNutrientArgs = {
  condition?: InputMaybe<ModelProduceNutrientConditionInput>;
  input: CreateProduceNutrientInput;
};


export type MutationCreateProduceSubcategoryArgs = {
  condition?: InputMaybe<ModelProduceSubcategoryConditionInput>;
  input: CreateProduceSubcategoryInput;
};


export type MutationCreateProduceTypeArgs = {
  condition?: InputMaybe<ModelProduceTypeConditionInput>;
  input: CreateProduceTypeInput;
};


export type MutationCreateProduceVarietyArgs = {
  condition?: InputMaybe<ModelProduceVarietyConditionInput>;
  input: CreateProduceVarietyInput;
};


export type MutationCreateShoppingListArgs = {
  condition?: InputMaybe<ModelShoppingListConditionInput>;
  input: CreateShoppingListInput;
};


export type MutationCreateShoppingListItemArgs = {
  condition?: InputMaybe<ModelShoppingListItemConditionInput>;
  input: CreateShoppingListItemInput;
};


export type MutationCreateUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: CreateUserInput;
};


export type MutationCreateUserPreferencesArgs = {
  condition?: InputMaybe<ModelUserPreferencesConditionInput>;
  input: CreateUserPreferencesInput;
};


export type MutationCreateZoneArgs = {
  condition?: InputMaybe<ModelZoneConditionInput>;
  input: CreateZoneInput;
};


export type MutationDeleteAddressArgs = {
  condition?: InputMaybe<ModelAddressConditionInput>;
  input: DeleteAddressInput;
};


export type MutationDeleteCartArgs = {
  condition?: InputMaybe<ModelCartConditionInput>;
  input: DeleteCartInput;
};


export type MutationDeleteCartItemArgs = {
  condition?: InputMaybe<ModelCartItemConditionInput>;
  input: DeleteCartItemInput;
};


export type MutationDeleteDeliveryArgs = {
  condition?: InputMaybe<ModelDeliveryConditionInput>;
  input: DeleteDeliveryInput;
};


export type MutationDeleteDeliveryRatingArgs = {
  condition?: InputMaybe<ModelDeliveryRatingConditionInput>;
  input: DeleteDeliveryRatingInput;
};


export type MutationDeleteDeliveryRouteArgs = {
  condition?: InputMaybe<ModelDeliveryRouteConditionInput>;
  input: DeleteDeliveryRouteInput;
};


export type MutationDeleteDriverArgs = {
  condition?: InputMaybe<ModelDriverConditionInput>;
  input: DeleteDriverInput;
};


export type MutationDeleteDriverLocationArgs = {
  condition?: InputMaybe<ModelDriverLocationConditionInput>;
  input: DeleteDriverLocationInput;
};


export type MutationDeleteFarmArgs = {
  condition?: InputMaybe<ModelFarmConditionInput>;
  input: DeleteFarmInput;
};


export type MutationDeleteFarmFollowArgs = {
  condition?: InputMaybe<ModelFarmFollowConditionInput>;
  input: DeleteFarmFollowInput;
};


export type MutationDeleteFarmMetricsArgs = {
  condition?: InputMaybe<ModelFarmMetricsConditionInput>;
  input: DeleteFarmMetricsInput;
};


export type MutationDeleteFarmPostArgs = {
  condition?: InputMaybe<ModelFarmPostConditionInput>;
  input: DeleteFarmPostInput;
};


export type MutationDeleteInventoryBatchArgs = {
  condition?: InputMaybe<ModelInventoryBatchConditionInput>;
  input: DeleteInventoryBatchInput;
};


export type MutationDeleteListingReviewArgs = {
  condition?: InputMaybe<ModelListingReviewConditionInput>;
  input: DeleteListingReviewInput;
};


export type MutationDeleteMarketScheduleArgs = {
  condition?: InputMaybe<ModelMarketScheduleConditionInput>;
  input: DeleteMarketScheduleInput;
};


export type MutationDeleteNotificationArgs = {
  condition?: InputMaybe<ModelNotificationConditionInput>;
  input: DeleteNotificationInput;
};


export type MutationDeleteOrderArgs = {
  condition?: InputMaybe<ModelOrderConditionInput>;
  input: DeleteOrderInput;
};


export type MutationDeleteOrderItemArgs = {
  condition?: InputMaybe<ModelOrderItemConditionInput>;
  input: DeleteOrderItemInput;
};


export type MutationDeletePaymentArgs = {
  condition?: InputMaybe<ModelPaymentConditionInput>;
  input: DeletePaymentInput;
};


export type MutationDeletePostCommentArgs = {
  condition?: InputMaybe<ModelPostCommentConditionInput>;
  input: DeletePostCommentInput;
};


export type MutationDeletePostLikeArgs = {
  condition?: InputMaybe<ModelPostLikeConditionInput>;
  input: DeletePostLikeInput;
};


export type MutationDeletePreHarvestListingArgs = {
  condition?: InputMaybe<ModelPreHarvestListingConditionInput>;
  input: DeletePreHarvestListingInput;
};


export type MutationDeletePreHarvestReservationArgs = {
  condition?: InputMaybe<ModelPreHarvestReservationConditionInput>;
  input: DeletePreHarvestReservationInput;
};


export type MutationDeleteProduceCategoryArgs = {
  condition?: InputMaybe<ModelProduceCategoryConditionInput>;
  input: DeleteProduceCategoryInput;
};


export type MutationDeleteProduceListingArgs = {
  condition?: InputMaybe<ModelProduceListingConditionInput>;
  input: DeleteProduceListingInput;
};


export type MutationDeleteProduceNutrientArgs = {
  condition?: InputMaybe<ModelProduceNutrientConditionInput>;
  input: DeleteProduceNutrientInput;
};


export type MutationDeleteProduceSubcategoryArgs = {
  condition?: InputMaybe<ModelProduceSubcategoryConditionInput>;
  input: DeleteProduceSubcategoryInput;
};


export type MutationDeleteProduceTypeArgs = {
  condition?: InputMaybe<ModelProduceTypeConditionInput>;
  input: DeleteProduceTypeInput;
};


export type MutationDeleteProduceVarietyArgs = {
  condition?: InputMaybe<ModelProduceVarietyConditionInput>;
  input: DeleteProduceVarietyInput;
};


export type MutationDeleteShoppingListArgs = {
  condition?: InputMaybe<ModelShoppingListConditionInput>;
  input: DeleteShoppingListInput;
};


export type MutationDeleteShoppingListItemArgs = {
  condition?: InputMaybe<ModelShoppingListItemConditionInput>;
  input: DeleteShoppingListItemInput;
};


export type MutationDeleteUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: DeleteUserInput;
};


export type MutationDeleteUserPreferencesArgs = {
  condition?: InputMaybe<ModelUserPreferencesConditionInput>;
  input: DeleteUserPreferencesInput;
};


export type MutationDeleteZoneArgs = {
  condition?: InputMaybe<ModelZoneConditionInput>;
  input: DeleteZoneInput;
};


export type MutationUpdateAddressArgs = {
  condition?: InputMaybe<ModelAddressConditionInput>;
  input: UpdateAddressInput;
};


export type MutationUpdateCartArgs = {
  condition?: InputMaybe<ModelCartConditionInput>;
  input: UpdateCartInput;
};


export type MutationUpdateCartItemArgs = {
  condition?: InputMaybe<ModelCartItemConditionInput>;
  input: UpdateCartItemInput;
};


export type MutationUpdateDeliveryArgs = {
  condition?: InputMaybe<ModelDeliveryConditionInput>;
  input: UpdateDeliveryInput;
};


export type MutationUpdateDeliveryRatingArgs = {
  condition?: InputMaybe<ModelDeliveryRatingConditionInput>;
  input: UpdateDeliveryRatingInput;
};


export type MutationUpdateDeliveryRouteArgs = {
  condition?: InputMaybe<ModelDeliveryRouteConditionInput>;
  input: UpdateDeliveryRouteInput;
};


export type MutationUpdateDriverArgs = {
  condition?: InputMaybe<ModelDriverConditionInput>;
  input: UpdateDriverInput;
};


export type MutationUpdateDriverLocationArgs = {
  condition?: InputMaybe<ModelDriverLocationConditionInput>;
  input: UpdateDriverLocationInput;
};


export type MutationUpdateFarmArgs = {
  condition?: InputMaybe<ModelFarmConditionInput>;
  input: UpdateFarmInput;
};


export type MutationUpdateFarmFollowArgs = {
  condition?: InputMaybe<ModelFarmFollowConditionInput>;
  input: UpdateFarmFollowInput;
};


export type MutationUpdateFarmMetricsArgs = {
  condition?: InputMaybe<ModelFarmMetricsConditionInput>;
  input: UpdateFarmMetricsInput;
};


export type MutationUpdateFarmPostArgs = {
  condition?: InputMaybe<ModelFarmPostConditionInput>;
  input: UpdateFarmPostInput;
};


export type MutationUpdateInventoryBatchArgs = {
  condition?: InputMaybe<ModelInventoryBatchConditionInput>;
  input: UpdateInventoryBatchInput;
};


export type MutationUpdateListingReviewArgs = {
  condition?: InputMaybe<ModelListingReviewConditionInput>;
  input: UpdateListingReviewInput;
};


export type MutationUpdateMarketScheduleArgs = {
  condition?: InputMaybe<ModelMarketScheduleConditionInput>;
  input: UpdateMarketScheduleInput;
};


export type MutationUpdateNotificationArgs = {
  condition?: InputMaybe<ModelNotificationConditionInput>;
  input: UpdateNotificationInput;
};


export type MutationUpdateOrderArgs = {
  condition?: InputMaybe<ModelOrderConditionInput>;
  input: UpdateOrderInput;
};


export type MutationUpdateOrderItemArgs = {
  condition?: InputMaybe<ModelOrderItemConditionInput>;
  input: UpdateOrderItemInput;
};


export type MutationUpdatePaymentArgs = {
  condition?: InputMaybe<ModelPaymentConditionInput>;
  input: UpdatePaymentInput;
};


export type MutationUpdatePostCommentArgs = {
  condition?: InputMaybe<ModelPostCommentConditionInput>;
  input: UpdatePostCommentInput;
};


export type MutationUpdatePostLikeArgs = {
  condition?: InputMaybe<ModelPostLikeConditionInput>;
  input: UpdatePostLikeInput;
};


export type MutationUpdatePreHarvestListingArgs = {
  condition?: InputMaybe<ModelPreHarvestListingConditionInput>;
  input: UpdatePreHarvestListingInput;
};


export type MutationUpdatePreHarvestReservationArgs = {
  condition?: InputMaybe<ModelPreHarvestReservationConditionInput>;
  input: UpdatePreHarvestReservationInput;
};


export type MutationUpdateProduceCategoryArgs = {
  condition?: InputMaybe<ModelProduceCategoryConditionInput>;
  input: UpdateProduceCategoryInput;
};


export type MutationUpdateProduceListingArgs = {
  condition?: InputMaybe<ModelProduceListingConditionInput>;
  input: UpdateProduceListingInput;
};


export type MutationUpdateProduceNutrientArgs = {
  condition?: InputMaybe<ModelProduceNutrientConditionInput>;
  input: UpdateProduceNutrientInput;
};


export type MutationUpdateProduceSubcategoryArgs = {
  condition?: InputMaybe<ModelProduceSubcategoryConditionInput>;
  input: UpdateProduceSubcategoryInput;
};


export type MutationUpdateProduceTypeArgs = {
  condition?: InputMaybe<ModelProduceTypeConditionInput>;
  input: UpdateProduceTypeInput;
};


export type MutationUpdateProduceVarietyArgs = {
  condition?: InputMaybe<ModelProduceVarietyConditionInput>;
  input: UpdateProduceVarietyInput;
};


export type MutationUpdateShoppingListArgs = {
  condition?: InputMaybe<ModelShoppingListConditionInput>;
  input: UpdateShoppingListInput;
};


export type MutationUpdateShoppingListItemArgs = {
  condition?: InputMaybe<ModelShoppingListItemConditionInput>;
  input: UpdateShoppingListItemInput;
};


export type MutationUpdateUserArgs = {
  condition?: InputMaybe<ModelUserConditionInput>;
  input: UpdateUserInput;
};


export type MutationUpdateUserPreferencesArgs = {
  condition?: InputMaybe<ModelUserPreferencesConditionInput>;
  input: UpdateUserPreferencesInput;
};


export type MutationUpdateZoneArgs = {
  condition?: InputMaybe<ModelZoneConditionInput>;
  input: UpdateZoneInput;
};

export type Notification = {
  __typename?: 'Notification';
  actionLink?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  id: Scalars['ID']['output'];
  imageLink?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  read: Scalars['Boolean']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type Order = {
  __typename?: 'Order';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  deliveryAddressId?: Maybe<Scalars['ID']['output']>;
  deliveryFee: Scalars['Float']['output'];
  deliveryNotes?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  requestedDeliveryDate?: Maybe<Scalars['AWSDate']['output']>;
  status: OrderStatus;
  subtotal: Scalars['Float']['output'];
  tax: Scalars['Float']['output'];
  total: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  farmId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  orderId: Scalars['ID']['output'];
  price: Scalars['Float']['output'];
  produceListingId: Scalars['ID']['output'];
  quantity: Scalars['Float']['output'];
  subtotal: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export enum OrderStatus {
  Cancelled = 'CANCELLED',
  Delivered = 'DELIVERED',
  OutForDelivery = 'OUT_FOR_DELIVERY',
  Pending = 'PENDING',
  Processing = 'PROCESSING',
  ReadyForPickup = 'READY_FOR_PICKUP',
  Refunded = 'REFUNDED'
}

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  id: Scalars['ID']['output'];
  method: PaymentMethod;
  orderId: Scalars['ID']['output'];
  status: PaymentStatus;
  transactionId?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export enum PaymentMethod {
  ApplePay = 'APPLE_PAY',
  Cash = 'CASH',
  CreditCard = 'CREDIT_CARD',
  DebitCard = 'DEBIT_CARD',
  GooglePay = 'GOOGLE_PAY',
  Paypal = 'PAYPAL'
}

export enum PaymentStatus {
  Completed = 'COMPLETED',
  Failed = 'FAILED',
  Pending = 'PENDING',
  Refunded = 'REFUNDED'
}

export type PostComment = {
  __typename?: 'PostComment';
  content: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  farmPostId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type PostLike = {
  __typename?: 'PostLike';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  farmPostId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export enum PostType {
  Educational = 'EDUCATIONAL',
  General = 'GENERAL',
  GrowingUpdate = 'GROWING_UPDATE',
  HarvestAnnouncement = 'HARVEST_ANNOUNCEMENT'
}

export type PreHarvestListing = {
  __typename?: 'PreHarvestListing';
  availableForReservation: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  estimatedHarvestDate: Scalars['AWSDate']['output'];
  estimatedQuantity: Scalars['Float']['output'];
  farmId: Scalars['ID']['output'];
  farmOwnerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  inventoryBatchId: Scalars['ID']['output'];
  isOrganic: Scalars['Boolean']['output'];
  price: Scalars['Float']['output'];
  priceUnit: Scalars['String']['output'];
  produceVarietyId: Scalars['ID']['output'];
  quantityUnit: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type PreHarvestReservation = {
  __typename?: 'PreHarvestReservation';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  farmId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  preHarvestListingId: Scalars['ID']['output'];
  quantity: Scalars['Float']['output'];
  quantityUnit: Scalars['String']['output'];
  requestedPickupDate?: Maybe<Scalars['AWSDate']['output']>;
  status: ReservationStatus;
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type ProduceCategory = {
  __typename?: 'ProduceCategory';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type ProduceListing = {
  __typename?: 'ProduceListing';
  active: Scalars['Boolean']['output'];
  availableQuantity: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  daysToExpiration?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  estimatedDeliveryMinutes?: Maybe<Scalars['Int']['output']>;
  expirationDate?: Maybe<Scalars['AWSDate']['output']>;
  farmId: Scalars['ID']['output'];
  farmOwnerId: Scalars['ID']['output'];
  freshness?: Maybe<Scalars['Int']['output']>;
  harvestDate?: Maybe<Scalars['AWSDate']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  instantDeliveryFee?: Maybe<Scalars['Float']['output']>;
  inventoryBatchId: Scalars['ID']['output'];
  isInstantlyAvailable: Scalars['Boolean']['output'];
  isOrganic: Scalars['Boolean']['output'];
  price: Scalars['Float']['output'];
  priceUnit: Scalars['String']['output'];
  produceVarietyId: Scalars['ID']['output'];
  quantity: Scalars['Float']['output'];
  quantityUnit: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type ProduceNutrient = {
  __typename?: 'ProduceNutrient';
  amount: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  dailyValue?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  unit: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  varietyId: Scalars['ID']['output'];
};

export type ProduceSubcategory = {
  __typename?: 'ProduceSubcategory';
  categoryId: Scalars['ID']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type ProduceType = {
  __typename?: 'ProduceType';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  subcategoryId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type ProduceVariety = {
  __typename?: 'ProduceVariety';
  averageShelfLife?: Maybe<Scalars['Int']['output']>;
  averageWeight?: Maybe<Scalars['Float']['output']>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  harvestInstructions?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  season?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  storageInstructions?: Maybe<Scalars['String']['output']>;
  typeId: Scalars['ID']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  weightUnit?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  addressesByUserId?: Maybe<ModelAddressConnection>;
  cartItemsByCartId?: Maybe<ModelCartItemConnection>;
  cartItemsByProduceListingId?: Maybe<ModelCartItemConnection>;
  cartItemsByUserId?: Maybe<ModelCartItemConnection>;
  cartsByUserId?: Maybe<ModelCartConnection>;
  deliveriesByDeliveryRouteId?: Maybe<ModelDeliveryConnection>;
  deliveriesByDriverId?: Maybe<ModelDeliveryConnection>;
  deliveriesByOrderId?: Maybe<ModelDeliveryConnection>;
  deliveriesByStatus?: Maybe<ModelDeliveryConnection>;
  deliveriesByUserId?: Maybe<ModelDeliveryConnection>;
  deliveryRatingsByDeliveryId?: Maybe<ModelDeliveryRatingConnection>;
  deliveryRatingsByDriverId?: Maybe<ModelDeliveryRatingConnection>;
  deliveryRatingsByUserId?: Maybe<ModelDeliveryRatingConnection>;
  deliveryRoutesByDriverId?: Maybe<ModelDeliveryRouteConnection>;
  driverLocationsByDriverId?: Maybe<ModelDriverLocationConnection>;
  driversByUserId?: Maybe<ModelDriverConnection>;
  farmFollowsByFarmId?: Maybe<ModelFarmFollowConnection>;
  farmFollowsByUserId?: Maybe<ModelFarmFollowConnection>;
  farmMetricsByFarmId?: Maybe<ModelFarmMetricsConnection>;
  farmPostsByFarmId?: Maybe<ModelFarmPostConnection>;
  farmPostsByPreHarvestListingId?: Maybe<ModelFarmPostConnection>;
  farmsByOwnerId?: Maybe<ModelFarmConnection>;
  getAddress?: Maybe<Address>;
  getCart?: Maybe<Cart>;
  getCartItem?: Maybe<CartItem>;
  getDelivery?: Maybe<Delivery>;
  getDeliveryRating?: Maybe<DeliveryRating>;
  getDeliveryRoute?: Maybe<DeliveryRoute>;
  getDriver?: Maybe<Driver>;
  getDriverLocation?: Maybe<DriverLocation>;
  getFarm?: Maybe<Farm>;
  getFarmFollow?: Maybe<FarmFollow>;
  getFarmMetrics?: Maybe<FarmMetrics>;
  getFarmPost?: Maybe<FarmPost>;
  getInventoryBatch?: Maybe<InventoryBatch>;
  getListingReview?: Maybe<ListingReview>;
  getMarketSchedule?: Maybe<MarketSchedule>;
  getNotification?: Maybe<Notification>;
  getOrder?: Maybe<Order>;
  getOrderItem?: Maybe<OrderItem>;
  getPayment?: Maybe<Payment>;
  getPostComment?: Maybe<PostComment>;
  getPostLike?: Maybe<PostLike>;
  getPreHarvestListing?: Maybe<PreHarvestListing>;
  getPreHarvestReservation?: Maybe<PreHarvestReservation>;
  getProduceCategory?: Maybe<ProduceCategory>;
  getProduceListing?: Maybe<ProduceListing>;
  getProduceNutrient?: Maybe<ProduceNutrient>;
  getProduceSubcategory?: Maybe<ProduceSubcategory>;
  getProduceType?: Maybe<ProduceType>;
  getProduceVariety?: Maybe<ProduceVariety>;
  getShoppingList?: Maybe<ShoppingList>;
  getShoppingListItem?: Maybe<ShoppingListItem>;
  getUser?: Maybe<User>;
  getUserPreferences?: Maybe<UserPreferences>;
  getZone?: Maybe<Zone>;
  inventoryBatchesByFarmId?: Maybe<ModelInventoryBatchConnection>;
  inventoryBatchesByProduceVarietyId?: Maybe<ModelInventoryBatchConnection>;
  inventoryBatchesByZoneId?: Maybe<ModelInventoryBatchConnection>;
  listAddresses?: Maybe<ModelAddressConnection>;
  listCartItems?: Maybe<ModelCartItemConnection>;
  listCarts?: Maybe<ModelCartConnection>;
  listDeliveries?: Maybe<ModelDeliveryConnection>;
  listDeliveryRatings?: Maybe<ModelDeliveryRatingConnection>;
  listDeliveryRoutes?: Maybe<ModelDeliveryRouteConnection>;
  listDriverLocations?: Maybe<ModelDriverLocationConnection>;
  listDrivers?: Maybe<ModelDriverConnection>;
  listFarmFollows?: Maybe<ModelFarmFollowConnection>;
  listFarmMetrics?: Maybe<ModelFarmMetricsConnection>;
  listFarmPosts?: Maybe<ModelFarmPostConnection>;
  listFarms?: Maybe<ModelFarmConnection>;
  listInventoryBatches?: Maybe<ModelInventoryBatchConnection>;
  listListingReviews?: Maybe<ModelListingReviewConnection>;
  listMarketSchedules?: Maybe<ModelMarketScheduleConnection>;
  listNotifications?: Maybe<ModelNotificationConnection>;
  listOrderItems?: Maybe<ModelOrderItemConnection>;
  listOrders?: Maybe<ModelOrderConnection>;
  listPayments?: Maybe<ModelPaymentConnection>;
  listPostComments?: Maybe<ModelPostCommentConnection>;
  listPostLikes?: Maybe<ModelPostLikeConnection>;
  listPreHarvestListings?: Maybe<ModelPreHarvestListingConnection>;
  listPreHarvestReservations?: Maybe<ModelPreHarvestReservationConnection>;
  listProduceCategories?: Maybe<ModelProduceCategoryConnection>;
  listProduceListings?: Maybe<ModelProduceListingConnection>;
  listProduceNutrients?: Maybe<ModelProduceNutrientConnection>;
  listProduceSubcategories?: Maybe<ModelProduceSubcategoryConnection>;
  listProduceTypes?: Maybe<ModelProduceTypeConnection>;
  listProduceVarieties?: Maybe<ModelProduceVarietyConnection>;
  listShoppingListItems?: Maybe<ModelShoppingListItemConnection>;
  listShoppingLists?: Maybe<ModelShoppingListConnection>;
  listUserPreferences?: Maybe<ModelUserPreferencesConnection>;
  listUsers?: Maybe<ModelUserConnection>;
  listZones?: Maybe<ModelZoneConnection>;
  listingReviewsByProduceListingId?: Maybe<ModelListingReviewConnection>;
  listingReviewsByUserId?: Maybe<ModelListingReviewConnection>;
  marketSchedulesByFarmId?: Maybe<ModelMarketScheduleConnection>;
  notificationsByUserId?: Maybe<ModelNotificationConnection>;
  orderItemsByFarmId?: Maybe<ModelOrderItemConnection>;
  orderItemsByOrderId?: Maybe<ModelOrderItemConnection>;
  orderItemsByProduceListingId?: Maybe<ModelOrderItemConnection>;
  orderItemsByUserId?: Maybe<ModelOrderItemConnection>;
  ordersByStatus?: Maybe<ModelOrderConnection>;
  ordersByUserId?: Maybe<ModelOrderConnection>;
  paymentsByOrderId?: Maybe<ModelPaymentConnection>;
  paymentsByStatus?: Maybe<ModelPaymentConnection>;
  paymentsByUserId?: Maybe<ModelPaymentConnection>;
  postCommentsByFarmPostId?: Maybe<ModelPostCommentConnection>;
  postCommentsByUserId?: Maybe<ModelPostCommentConnection>;
  postLikesByFarmPostId?: Maybe<ModelPostLikeConnection>;
  postLikesByUserId?: Maybe<ModelPostLikeConnection>;
  preHarvestListingsByFarmId?: Maybe<ModelPreHarvestListingConnection>;
  preHarvestListingsByInventoryBatchId?: Maybe<ModelPreHarvestListingConnection>;
  preHarvestListingsByProduceVarietyId?: Maybe<ModelPreHarvestListingConnection>;
  preHarvestReservationsByFarmId?: Maybe<ModelPreHarvestReservationConnection>;
  preHarvestReservationsByPreHarvestListingId?: Maybe<ModelPreHarvestReservationConnection>;
  preHarvestReservationsByUserId?: Maybe<ModelPreHarvestReservationConnection>;
  produceListingsByFarmId?: Maybe<ModelProduceListingConnection>;
  produceListingsByInventoryBatchId?: Maybe<ModelProduceListingConnection>;
  produceListingsByProduceVarietyId?: Maybe<ModelProduceListingConnection>;
  produceNutrientsByVarietyId?: Maybe<ModelProduceNutrientConnection>;
  produceSubcategoriesByCategoryId?: Maybe<ModelProduceSubcategoryConnection>;
  produceTypesBySubcategoryId?: Maybe<ModelProduceTypeConnection>;
  produceVarietiesByTypeId?: Maybe<ModelProduceVarietyConnection>;
  shoppingListItemsByProduceVarietyId?: Maybe<ModelShoppingListItemConnection>;
  shoppingListItemsByShoppingListId?: Maybe<ModelShoppingListItemConnection>;
  shoppingListItemsByUserId?: Maybe<ModelShoppingListItemConnection>;
  shoppingListsByUserId?: Maybe<ModelShoppingListConnection>;
  userPreferencesByUserId?: Maybe<ModelUserPreferencesConnection>;
  zonesByFarmId?: Maybe<ModelZoneConnection>;
};


export type QueryAddressesByUserIdArgs = {
  filter?: InputMaybe<ModelAddressFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryCartItemsByCartIdArgs = {
  cartId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelCartItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryCartItemsByProduceListingIdArgs = {
  filter?: InputMaybe<ModelCartItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  produceListingId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryCartItemsByUserIdArgs = {
  filter?: InputMaybe<ModelCartItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryCartsByUserIdArgs = {
  filter?: InputMaybe<ModelCartFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryDeliveriesByDeliveryRouteIdArgs = {
  deliveryRouteId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelDeliveryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryDeliveriesByDriverIdArgs = {
  driverId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelDeliveryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryDeliveriesByOrderIdArgs = {
  filter?: InputMaybe<ModelDeliveryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryDeliveriesByStatusArgs = {
  filter?: InputMaybe<ModelDeliveryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  status: DeliveryStatus;
};


export type QueryDeliveriesByUserIdArgs = {
  filter?: InputMaybe<ModelDeliveryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryDeliveryRatingsByDeliveryIdArgs = {
  deliveryId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelDeliveryRatingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryDeliveryRatingsByDriverIdArgs = {
  driverId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelDeliveryRatingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryDeliveryRatingsByUserIdArgs = {
  filter?: InputMaybe<ModelDeliveryRatingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryDeliveryRoutesByDriverIdArgs = {
  driverId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelDeliveryRouteFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryDriverLocationsByDriverIdArgs = {
  driverId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelDriverLocationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryDriversByUserIdArgs = {
  filter?: InputMaybe<ModelDriverFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryFarmFollowsByFarmIdArgs = {
  farmId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelFarmFollowFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryFarmFollowsByUserIdArgs = {
  filter?: InputMaybe<ModelFarmFollowFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryFarmMetricsByFarmIdArgs = {
  farmId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelFarmMetricsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryFarmPostsByFarmIdArgs = {
  farmId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelFarmPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryFarmPostsByPreHarvestListingIdArgs = {
  filter?: InputMaybe<ModelFarmPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  preHarvestListingId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryFarmsByOwnerIdArgs = {
  filter?: InputMaybe<ModelFarmFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  ownerId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryGetAddressArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCartArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetCartItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDeliveryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDeliveryRatingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDeliveryRouteArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDriverArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetDriverLocationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFarmArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFarmFollowArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFarmMetricsArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetFarmPostArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetInventoryBatchArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetListingReviewArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetMarketScheduleArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetNotificationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOrderArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetOrderItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPaymentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPostCommentArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPostLikeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPreHarvestListingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetPreHarvestReservationArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProduceCategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProduceListingArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProduceNutrientArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProduceSubcategoryArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProduceTypeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetProduceVarietyArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetShoppingListArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetShoppingListItemArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetUserPreferencesArgs = {
  id: Scalars['ID']['input'];
};


export type QueryGetZoneArgs = {
  id: Scalars['ID']['input'];
};


export type QueryInventoryBatchesByFarmIdArgs = {
  farmId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelInventoryBatchFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryInventoryBatchesByProduceVarietyIdArgs = {
  filter?: InputMaybe<ModelInventoryBatchFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  produceVarietyId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryInventoryBatchesByZoneIdArgs = {
  filter?: InputMaybe<ModelInventoryBatchFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  zoneId: Scalars['ID']['input'];
};


export type QueryListAddressesArgs = {
  filter?: InputMaybe<ModelAddressFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListCartItemsArgs = {
  filter?: InputMaybe<ModelCartItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListCartsArgs = {
  filter?: InputMaybe<ModelCartFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListDeliveriesArgs = {
  filter?: InputMaybe<ModelDeliveryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListDeliveryRatingsArgs = {
  filter?: InputMaybe<ModelDeliveryRatingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListDeliveryRoutesArgs = {
  filter?: InputMaybe<ModelDeliveryRouteFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListDriverLocationsArgs = {
  filter?: InputMaybe<ModelDriverLocationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListDriversArgs = {
  filter?: InputMaybe<ModelDriverFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListFarmFollowsArgs = {
  filter?: InputMaybe<ModelFarmFollowFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListFarmMetricsArgs = {
  filter?: InputMaybe<ModelFarmMetricsFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListFarmPostsArgs = {
  filter?: InputMaybe<ModelFarmPostFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListFarmsArgs = {
  filter?: InputMaybe<ModelFarmFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListInventoryBatchesArgs = {
  filter?: InputMaybe<ModelInventoryBatchFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListListingReviewsArgs = {
  filter?: InputMaybe<ModelListingReviewFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListMarketSchedulesArgs = {
  filter?: InputMaybe<ModelMarketScheduleFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListNotificationsArgs = {
  filter?: InputMaybe<ModelNotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListOrderItemsArgs = {
  filter?: InputMaybe<ModelOrderItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListOrdersArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListPaymentsArgs = {
  filter?: InputMaybe<ModelPaymentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListPostCommentsArgs = {
  filter?: InputMaybe<ModelPostCommentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListPostLikesArgs = {
  filter?: InputMaybe<ModelPostLikeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListPreHarvestListingsArgs = {
  filter?: InputMaybe<ModelPreHarvestListingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListPreHarvestReservationsArgs = {
  filter?: InputMaybe<ModelPreHarvestReservationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListProduceCategoriesArgs = {
  filter?: InputMaybe<ModelProduceCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListProduceListingsArgs = {
  filter?: InputMaybe<ModelProduceListingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListProduceNutrientsArgs = {
  filter?: InputMaybe<ModelProduceNutrientFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListProduceSubcategoriesArgs = {
  filter?: InputMaybe<ModelProduceSubcategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListProduceTypesArgs = {
  filter?: InputMaybe<ModelProduceTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListProduceVarietiesArgs = {
  filter?: InputMaybe<ModelProduceVarietyFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListShoppingListItemsArgs = {
  filter?: InputMaybe<ModelShoppingListItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListShoppingListsArgs = {
  filter?: InputMaybe<ModelShoppingListFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListUserPreferencesArgs = {
  filter?: InputMaybe<ModelUserPreferencesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListUsersArgs = {
  filter?: InputMaybe<ModelUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListZonesArgs = {
  filter?: InputMaybe<ModelZoneFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
};


export type QueryListingReviewsByProduceListingIdArgs = {
  filter?: InputMaybe<ModelListingReviewFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  produceListingId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryListingReviewsByUserIdArgs = {
  filter?: InputMaybe<ModelListingReviewFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryMarketSchedulesByFarmIdArgs = {
  farmId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelMarketScheduleFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryNotificationsByUserIdArgs = {
  filter?: InputMaybe<ModelNotificationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryOrderItemsByFarmIdArgs = {
  farmId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelOrderItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryOrderItemsByOrderIdArgs = {
  filter?: InputMaybe<ModelOrderItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryOrderItemsByProduceListingIdArgs = {
  filter?: InputMaybe<ModelOrderItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  produceListingId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryOrderItemsByUserIdArgs = {
  filter?: InputMaybe<ModelOrderItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryOrdersByStatusArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  status: OrderStatus;
};


export type QueryOrdersByUserIdArgs = {
  filter?: InputMaybe<ModelOrderFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryPaymentsByOrderIdArgs = {
  filter?: InputMaybe<ModelPaymentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  orderId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryPaymentsByStatusArgs = {
  filter?: InputMaybe<ModelPaymentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  status: PaymentStatus;
};


export type QueryPaymentsByUserIdArgs = {
  filter?: InputMaybe<ModelPaymentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryPostCommentsByFarmPostIdArgs = {
  farmPostId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelPostCommentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryPostCommentsByUserIdArgs = {
  filter?: InputMaybe<ModelPostCommentFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryPostLikesByFarmPostIdArgs = {
  farmPostId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelPostLikeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryPostLikesByUserIdArgs = {
  filter?: InputMaybe<ModelPostLikeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryPreHarvestListingsByFarmIdArgs = {
  farmId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelPreHarvestListingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryPreHarvestListingsByInventoryBatchIdArgs = {
  filter?: InputMaybe<ModelPreHarvestListingFilterInput>;
  inventoryBatchId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryPreHarvestListingsByProduceVarietyIdArgs = {
  filter?: InputMaybe<ModelPreHarvestListingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  produceVarietyId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryPreHarvestReservationsByFarmIdArgs = {
  farmId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelPreHarvestReservationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryPreHarvestReservationsByPreHarvestListingIdArgs = {
  filter?: InputMaybe<ModelPreHarvestReservationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  preHarvestListingId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryPreHarvestReservationsByUserIdArgs = {
  filter?: InputMaybe<ModelPreHarvestReservationFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryProduceListingsByFarmIdArgs = {
  farmId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelProduceListingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryProduceListingsByInventoryBatchIdArgs = {
  filter?: InputMaybe<ModelProduceListingFilterInput>;
  inventoryBatchId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryProduceListingsByProduceVarietyIdArgs = {
  filter?: InputMaybe<ModelProduceListingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  produceVarietyId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryProduceNutrientsByVarietyIdArgs = {
  filter?: InputMaybe<ModelProduceNutrientFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  varietyId: Scalars['ID']['input'];
};


export type QueryProduceSubcategoriesByCategoryIdArgs = {
  categoryId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelProduceSubcategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryProduceTypesBySubcategoryIdArgs = {
  filter?: InputMaybe<ModelProduceTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  subcategoryId: Scalars['ID']['input'];
};


export type QueryProduceVarietiesByTypeIdArgs = {
  filter?: InputMaybe<ModelProduceVarietyFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  typeId: Scalars['ID']['input'];
};


export type QueryShoppingListItemsByProduceVarietyIdArgs = {
  filter?: InputMaybe<ModelShoppingListItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  produceVarietyId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryShoppingListItemsByShoppingListIdArgs = {
  filter?: InputMaybe<ModelShoppingListItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  shoppingListId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
};


export type QueryShoppingListItemsByUserIdArgs = {
  filter?: InputMaybe<ModelShoppingListItemFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryShoppingListsByUserIdArgs = {
  filter?: InputMaybe<ModelShoppingListFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryUserPreferencesByUserIdArgs = {
  filter?: InputMaybe<ModelUserPreferencesFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
  userId: Scalars['ID']['input'];
};


export type QueryZonesByFarmIdArgs = {
  farmId: Scalars['ID']['input'];
  filter?: InputMaybe<ModelZoneFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
  sortDirection?: InputMaybe<ModelSortDirection>;
};

export enum ReservationStatus {
  Cancelled = 'CANCELLED',
  Completed = 'COMPLETED',
  Confirmed = 'CONFIRMED',
  Pending = 'PENDING',
  ReadyForPickup = 'READY_FOR_PICKUP'
}

export type ShoppingList = {
  __typename?: 'ShoppingList';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type ShoppingListItem = {
  __typename?: 'ShoppingListItem';
  completed: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  id: Scalars['ID']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  produceVarietyId?: Maybe<Scalars['ID']['output']>;
  quantity: Scalars['Int']['output'];
  shoppingListId: Scalars['ID']['output'];
  unit?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  onCreateAddress?: Maybe<Address>;
  onCreateCart?: Maybe<Cart>;
  onCreateCartItem?: Maybe<CartItem>;
  onCreateDelivery?: Maybe<Delivery>;
  onCreateDeliveryRating?: Maybe<DeliveryRating>;
  onCreateDeliveryRoute?: Maybe<DeliveryRoute>;
  onCreateDriver?: Maybe<Driver>;
  onCreateDriverLocation?: Maybe<DriverLocation>;
  onCreateFarm?: Maybe<Farm>;
  onCreateFarmFollow?: Maybe<FarmFollow>;
  onCreateFarmMetrics?: Maybe<FarmMetrics>;
  onCreateFarmPost?: Maybe<FarmPost>;
  onCreateInventoryBatch?: Maybe<InventoryBatch>;
  onCreateListingReview?: Maybe<ListingReview>;
  onCreateMarketSchedule?: Maybe<MarketSchedule>;
  onCreateNotification?: Maybe<Notification>;
  onCreateOrder?: Maybe<Order>;
  onCreateOrderItem?: Maybe<OrderItem>;
  onCreatePayment?: Maybe<Payment>;
  onCreatePostComment?: Maybe<PostComment>;
  onCreatePostLike?: Maybe<PostLike>;
  onCreatePreHarvestListing?: Maybe<PreHarvestListing>;
  onCreatePreHarvestReservation?: Maybe<PreHarvestReservation>;
  onCreateProduceCategory?: Maybe<ProduceCategory>;
  onCreateProduceListing?: Maybe<ProduceListing>;
  onCreateProduceNutrient?: Maybe<ProduceNutrient>;
  onCreateProduceSubcategory?: Maybe<ProduceSubcategory>;
  onCreateProduceType?: Maybe<ProduceType>;
  onCreateProduceVariety?: Maybe<ProduceVariety>;
  onCreateShoppingList?: Maybe<ShoppingList>;
  onCreateShoppingListItem?: Maybe<ShoppingListItem>;
  onCreateUser?: Maybe<User>;
  onCreateUserPreferences?: Maybe<UserPreferences>;
  onCreateZone?: Maybe<Zone>;
  onDeleteAddress?: Maybe<Address>;
  onDeleteCart?: Maybe<Cart>;
  onDeleteCartItem?: Maybe<CartItem>;
  onDeleteDelivery?: Maybe<Delivery>;
  onDeleteDeliveryRating?: Maybe<DeliveryRating>;
  onDeleteDeliveryRoute?: Maybe<DeliveryRoute>;
  onDeleteDriver?: Maybe<Driver>;
  onDeleteDriverLocation?: Maybe<DriverLocation>;
  onDeleteFarm?: Maybe<Farm>;
  onDeleteFarmFollow?: Maybe<FarmFollow>;
  onDeleteFarmMetrics?: Maybe<FarmMetrics>;
  onDeleteFarmPost?: Maybe<FarmPost>;
  onDeleteInventoryBatch?: Maybe<InventoryBatch>;
  onDeleteListingReview?: Maybe<ListingReview>;
  onDeleteMarketSchedule?: Maybe<MarketSchedule>;
  onDeleteNotification?: Maybe<Notification>;
  onDeleteOrder?: Maybe<Order>;
  onDeleteOrderItem?: Maybe<OrderItem>;
  onDeletePayment?: Maybe<Payment>;
  onDeletePostComment?: Maybe<PostComment>;
  onDeletePostLike?: Maybe<PostLike>;
  onDeletePreHarvestListing?: Maybe<PreHarvestListing>;
  onDeletePreHarvestReservation?: Maybe<PreHarvestReservation>;
  onDeleteProduceCategory?: Maybe<ProduceCategory>;
  onDeleteProduceListing?: Maybe<ProduceListing>;
  onDeleteProduceNutrient?: Maybe<ProduceNutrient>;
  onDeleteProduceSubcategory?: Maybe<ProduceSubcategory>;
  onDeleteProduceType?: Maybe<ProduceType>;
  onDeleteProduceVariety?: Maybe<ProduceVariety>;
  onDeleteShoppingList?: Maybe<ShoppingList>;
  onDeleteShoppingListItem?: Maybe<ShoppingListItem>;
  onDeleteUser?: Maybe<User>;
  onDeleteUserPreferences?: Maybe<UserPreferences>;
  onDeleteZone?: Maybe<Zone>;
  onUpdateAddress?: Maybe<Address>;
  onUpdateCart?: Maybe<Cart>;
  onUpdateCartItem?: Maybe<CartItem>;
  onUpdateDelivery?: Maybe<Delivery>;
  onUpdateDeliveryRating?: Maybe<DeliveryRating>;
  onUpdateDeliveryRoute?: Maybe<DeliveryRoute>;
  onUpdateDriver?: Maybe<Driver>;
  onUpdateDriverLocation?: Maybe<DriverLocation>;
  onUpdateFarm?: Maybe<Farm>;
  onUpdateFarmFollow?: Maybe<FarmFollow>;
  onUpdateFarmMetrics?: Maybe<FarmMetrics>;
  onUpdateFarmPost?: Maybe<FarmPost>;
  onUpdateInventoryBatch?: Maybe<InventoryBatch>;
  onUpdateListingReview?: Maybe<ListingReview>;
  onUpdateMarketSchedule?: Maybe<MarketSchedule>;
  onUpdateNotification?: Maybe<Notification>;
  onUpdateOrder?: Maybe<Order>;
  onUpdateOrderItem?: Maybe<OrderItem>;
  onUpdatePayment?: Maybe<Payment>;
  onUpdatePostComment?: Maybe<PostComment>;
  onUpdatePostLike?: Maybe<PostLike>;
  onUpdatePreHarvestListing?: Maybe<PreHarvestListing>;
  onUpdatePreHarvestReservation?: Maybe<PreHarvestReservation>;
  onUpdateProduceCategory?: Maybe<ProduceCategory>;
  onUpdateProduceListing?: Maybe<ProduceListing>;
  onUpdateProduceNutrient?: Maybe<ProduceNutrient>;
  onUpdateProduceSubcategory?: Maybe<ProduceSubcategory>;
  onUpdateProduceType?: Maybe<ProduceType>;
  onUpdateProduceVariety?: Maybe<ProduceVariety>;
  onUpdateShoppingList?: Maybe<ShoppingList>;
  onUpdateShoppingListItem?: Maybe<ShoppingListItem>;
  onUpdateUser?: Maybe<User>;
  onUpdateUserPreferences?: Maybe<UserPreferences>;
  onUpdateZone?: Maybe<Zone>;
};


export type SubscriptionOnCreateAddressArgs = {
  filter?: InputMaybe<ModelSubscriptionAddressFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateCartArgs = {
  filter?: InputMaybe<ModelSubscriptionCartFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateCartItemArgs = {
  filter?: InputMaybe<ModelSubscriptionCartItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateDeliveryArgs = {
  filter?: InputMaybe<ModelSubscriptionDeliveryFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateDeliveryRatingArgs = {
  filter?: InputMaybe<ModelSubscriptionDeliveryRatingFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateDeliveryRouteArgs = {
  driverId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionDeliveryRouteFilterInput>;
};


export type SubscriptionOnCreateDriverArgs = {
  filter?: InputMaybe<ModelSubscriptionDriverFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateDriverLocationArgs = {
  driverId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionDriverLocationFilterInput>;
};


export type SubscriptionOnCreateFarmArgs = {
  filter?: InputMaybe<ModelSubscriptionFarmFilterInput>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateFarmFollowArgs = {
  filter?: InputMaybe<ModelSubscriptionFarmFollowFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateFarmMetricsArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionFarmMetricsFilterInput>;
};


export type SubscriptionOnCreateFarmPostArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionFarmPostFilterInput>;
};


export type SubscriptionOnCreateInventoryBatchArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionInventoryBatchFilterInput>;
};


export type SubscriptionOnCreateListingReviewArgs = {
  filter?: InputMaybe<ModelSubscriptionListingReviewFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateMarketScheduleArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionMarketScheduleFilterInput>;
};


export type SubscriptionOnCreateNotificationArgs = {
  filter?: InputMaybe<ModelSubscriptionNotificationFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateOrderItemArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreatePaymentArgs = {
  filter?: InputMaybe<ModelSubscriptionPaymentFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreatePostCommentArgs = {
  filter?: InputMaybe<ModelSubscriptionPostCommentFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreatePostLikeArgs = {
  filter?: InputMaybe<ModelSubscriptionPostLikeFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreatePreHarvestListingArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionPreHarvestListingFilterInput>;
};


export type SubscriptionOnCreatePreHarvestReservationArgs = {
  filter?: InputMaybe<ModelSubscriptionPreHarvestReservationFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateProduceCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceCategoryFilterInput>;
};


export type SubscriptionOnCreateProduceListingArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionProduceListingFilterInput>;
};


export type SubscriptionOnCreateProduceNutrientArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceNutrientFilterInput>;
};


export type SubscriptionOnCreateProduceSubcategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceSubcategoryFilterInput>;
};


export type SubscriptionOnCreateProduceTypeArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceTypeFilterInput>;
};


export type SubscriptionOnCreateProduceVarietyArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceVarietyFilterInput>;
};


export type SubscriptionOnCreateShoppingListArgs = {
  filter?: InputMaybe<ModelSubscriptionShoppingListFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateShoppingListItemArgs = {
  filter?: InputMaybe<ModelSubscriptionShoppingListItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateUserPreferencesArgs = {
  filter?: InputMaybe<ModelSubscriptionUserPreferencesFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnCreateZoneArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionZoneFilterInput>;
};


export type SubscriptionOnDeleteAddressArgs = {
  filter?: InputMaybe<ModelSubscriptionAddressFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteCartArgs = {
  filter?: InputMaybe<ModelSubscriptionCartFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteCartItemArgs = {
  filter?: InputMaybe<ModelSubscriptionCartItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteDeliveryArgs = {
  filter?: InputMaybe<ModelSubscriptionDeliveryFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteDeliveryRatingArgs = {
  filter?: InputMaybe<ModelSubscriptionDeliveryRatingFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteDeliveryRouteArgs = {
  driverId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionDeliveryRouteFilterInput>;
};


export type SubscriptionOnDeleteDriverArgs = {
  filter?: InputMaybe<ModelSubscriptionDriverFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteDriverLocationArgs = {
  driverId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionDriverLocationFilterInput>;
};


export type SubscriptionOnDeleteFarmArgs = {
  filter?: InputMaybe<ModelSubscriptionFarmFilterInput>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteFarmFollowArgs = {
  filter?: InputMaybe<ModelSubscriptionFarmFollowFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteFarmMetricsArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionFarmMetricsFilterInput>;
};


export type SubscriptionOnDeleteFarmPostArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionFarmPostFilterInput>;
};


export type SubscriptionOnDeleteInventoryBatchArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionInventoryBatchFilterInput>;
};


export type SubscriptionOnDeleteListingReviewArgs = {
  filter?: InputMaybe<ModelSubscriptionListingReviewFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteMarketScheduleArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionMarketScheduleFilterInput>;
};


export type SubscriptionOnDeleteNotificationArgs = {
  filter?: InputMaybe<ModelSubscriptionNotificationFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteOrderItemArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeletePaymentArgs = {
  filter?: InputMaybe<ModelSubscriptionPaymentFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeletePostCommentArgs = {
  filter?: InputMaybe<ModelSubscriptionPostCommentFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeletePostLikeArgs = {
  filter?: InputMaybe<ModelSubscriptionPostLikeFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeletePreHarvestListingArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionPreHarvestListingFilterInput>;
};


export type SubscriptionOnDeletePreHarvestReservationArgs = {
  filter?: InputMaybe<ModelSubscriptionPreHarvestReservationFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteProduceCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceCategoryFilterInput>;
};


export type SubscriptionOnDeleteProduceListingArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionProduceListingFilterInput>;
};


export type SubscriptionOnDeleteProduceNutrientArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceNutrientFilterInput>;
};


export type SubscriptionOnDeleteProduceSubcategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceSubcategoryFilterInput>;
};


export type SubscriptionOnDeleteProduceTypeArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceTypeFilterInput>;
};


export type SubscriptionOnDeleteProduceVarietyArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceVarietyFilterInput>;
};


export type SubscriptionOnDeleteShoppingListArgs = {
  filter?: InputMaybe<ModelSubscriptionShoppingListFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteShoppingListItemArgs = {
  filter?: InputMaybe<ModelSubscriptionShoppingListItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteUserPreferencesArgs = {
  filter?: InputMaybe<ModelSubscriptionUserPreferencesFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnDeleteZoneArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionZoneFilterInput>;
};


export type SubscriptionOnUpdateAddressArgs = {
  filter?: InputMaybe<ModelSubscriptionAddressFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateCartArgs = {
  filter?: InputMaybe<ModelSubscriptionCartFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateCartItemArgs = {
  filter?: InputMaybe<ModelSubscriptionCartItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateDeliveryArgs = {
  filter?: InputMaybe<ModelSubscriptionDeliveryFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateDeliveryRatingArgs = {
  filter?: InputMaybe<ModelSubscriptionDeliveryRatingFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateDeliveryRouteArgs = {
  driverId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionDeliveryRouteFilterInput>;
};


export type SubscriptionOnUpdateDriverArgs = {
  filter?: InputMaybe<ModelSubscriptionDriverFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateDriverLocationArgs = {
  driverId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionDriverLocationFilterInput>;
};


export type SubscriptionOnUpdateFarmArgs = {
  filter?: InputMaybe<ModelSubscriptionFarmFilterInput>;
  ownerId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateFarmFollowArgs = {
  filter?: InputMaybe<ModelSubscriptionFarmFollowFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateFarmMetricsArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionFarmMetricsFilterInput>;
};


export type SubscriptionOnUpdateFarmPostArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionFarmPostFilterInput>;
};


export type SubscriptionOnUpdateInventoryBatchArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionInventoryBatchFilterInput>;
};


export type SubscriptionOnUpdateListingReviewArgs = {
  filter?: InputMaybe<ModelSubscriptionListingReviewFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateMarketScheduleArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionMarketScheduleFilterInput>;
};


export type SubscriptionOnUpdateNotificationArgs = {
  filter?: InputMaybe<ModelSubscriptionNotificationFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateOrderArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateOrderItemArgs = {
  filter?: InputMaybe<ModelSubscriptionOrderItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdatePaymentArgs = {
  filter?: InputMaybe<ModelSubscriptionPaymentFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdatePostCommentArgs = {
  filter?: InputMaybe<ModelSubscriptionPostCommentFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdatePostLikeArgs = {
  filter?: InputMaybe<ModelSubscriptionPostLikeFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdatePreHarvestListingArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionPreHarvestListingFilterInput>;
};


export type SubscriptionOnUpdatePreHarvestReservationArgs = {
  filter?: InputMaybe<ModelSubscriptionPreHarvestReservationFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateProduceCategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceCategoryFilterInput>;
};


export type SubscriptionOnUpdateProduceListingArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionProduceListingFilterInput>;
};


export type SubscriptionOnUpdateProduceNutrientArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceNutrientFilterInput>;
};


export type SubscriptionOnUpdateProduceSubcategoryArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceSubcategoryFilterInput>;
};


export type SubscriptionOnUpdateProduceTypeArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceTypeFilterInput>;
};


export type SubscriptionOnUpdateProduceVarietyArgs = {
  filter?: InputMaybe<ModelSubscriptionProduceVarietyFilterInput>;
};


export type SubscriptionOnUpdateShoppingListArgs = {
  filter?: InputMaybe<ModelSubscriptionShoppingListFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateShoppingListItemArgs = {
  filter?: InputMaybe<ModelSubscriptionShoppingListItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateUserArgs = {
  filter?: InputMaybe<ModelSubscriptionUserFilterInput>;
  id?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateUserPreferencesArgs = {
  filter?: InputMaybe<ModelSubscriptionUserPreferencesFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionOnUpdateZoneArgs = {
  farmOwnerId?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<ModelSubscriptionZoneFilterInput>;
};

export type UpdateAddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  label?: InputMaybe<Scalars['String']['input']>;
  postalCode?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCartInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id: Scalars['ID']['input'];
  subtotal?: InputMaybe<Scalars['Float']['input']>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateCartItemInput = {
  cartId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id: Scalars['ID']['input'];
  price?: InputMaybe<Scalars['Float']['input']>;
  produceListingId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  subtotal?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateDeliveryInput = {
  actualDeliveryTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  deliveryRouteId?: InputMaybe<Scalars['ID']['input']>;
  deliveryTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  driverId?: InputMaybe<Scalars['ID']['input']>;
  dropoffAddress?: InputMaybe<Scalars['String']['input']>;
  dropoffLocationLat?: InputMaybe<Scalars['Float']['input']>;
  dropoffLocationLng?: InputMaybe<Scalars['Float']['input']>;
  estimatedDeliveryTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
  pickupAddress?: InputMaybe<Scalars['String']['input']>;
  pickupLocationLat?: InputMaybe<Scalars['Float']['input']>;
  pickupLocationLng?: InputMaybe<Scalars['Float']['input']>;
  pickupTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  status?: InputMaybe<DeliveryStatus>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateDeliveryRatingInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  deliveryId?: InputMaybe<Scalars['ID']['input']>;
  driverId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  rating?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateDeliveryRouteInput = {
  actualDistance?: InputMaybe<Scalars['Float']['input']>;
  actualDuration?: InputMaybe<Scalars['Int']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  driverId?: InputMaybe<Scalars['ID']['input']>;
  endLocationLat?: InputMaybe<Scalars['Float']['input']>;
  endLocationLng?: InputMaybe<Scalars['Float']['input']>;
  endTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  estimatedDistance?: InputMaybe<Scalars['Float']['input']>;
  estimatedDuration?: InputMaybe<Scalars['Int']['input']>;
  id: Scalars['ID']['input'];
  startLocationLat?: InputMaybe<Scalars['Float']['input']>;
  startLocationLng?: InputMaybe<Scalars['Float']['input']>;
  startTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type UpdateDriverInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  avatar?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  currentLocationLat?: InputMaybe<Scalars['Float']['input']>;
  currentLocationLng?: InputMaybe<Scalars['Float']['input']>;
  email?: InputMaybe<Scalars['AWSEmail']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  lastLocationUpdateTime?: InputMaybe<Scalars['AWSDateTime']['input']>;
  lastName?: InputMaybe<Scalars['String']['input']>;
  licenseExpiry?: InputMaybe<Scalars['AWSDate']['input']>;
  licenseNumber?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['AWSPhone']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
  vehicleColor?: InputMaybe<Scalars['String']['input']>;
  vehicleLicensePlate?: InputMaybe<Scalars['String']['input']>;
  vehicleMake?: InputMaybe<Scalars['String']['input']>;
  vehicleModel?: InputMaybe<Scalars['String']['input']>;
  vehicleYear?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateDriverLocationInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  driverId?: InputMaybe<Scalars['ID']['input']>;
  heading?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  lat?: InputMaybe<Scalars['Float']['input']>;
  lng?: InputMaybe<Scalars['Float']['input']>;
  timestamp?: InputMaybe<Scalars['AWSDateTime']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type UpdateFarmFollowInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  receiveNotifications?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateFarmInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  certifications?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  certified?: InputMaybe<Scalars['Boolean']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  coverImage?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['AWSEmail']['input']>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  ownerId?: InputMaybe<Scalars['ID']['input']>;
  phone?: InputMaybe<Scalars['AWSPhone']['input']>;
  profileImage?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  website?: InputMaybe<Scalars['AWSURL']['input']>;
  yearEstablished?: InputMaybe<Scalars['Int']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateFarmMetricsInput = {
  averageOrderValue?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmId?: InputMaybe<Scalars['ID']['input']>;
  farmOwnerId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  totalCustomers?: InputMaybe<Scalars['Int']['input']>;
  totalOrders?: InputMaybe<Scalars['Int']['input']>;
  totalSales?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type UpdateFarmPostInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmId?: InputMaybe<Scalars['ID']['input']>;
  farmOwnerId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  preHarvestListingId?: InputMaybe<Scalars['ID']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<PostType>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  videos?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateInventoryBatchInput = {
  actualQuantity?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  estimatedHarvestDate?: InputMaybe<Scalars['AWSDate']['input']>;
  estimatedQuantity?: InputMaybe<Scalars['Float']['input']>;
  expirationDate?: InputMaybe<Scalars['AWSDate']['input']>;
  farmId?: InputMaybe<Scalars['ID']['input']>;
  farmOwnerId?: InputMaybe<Scalars['ID']['input']>;
  harvestDate?: InputMaybe<Scalars['AWSDate']['input']>;
  id: Scalars['ID']['input'];
  isOrganic?: InputMaybe<Scalars['Boolean']['input']>;
  notes?: InputMaybe<Scalars['String']['input']>;
  plantingDate?: InputMaybe<Scalars['AWSDate']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  priceUnit?: InputMaybe<Scalars['String']['input']>;
  produceVarietyId?: InputMaybe<Scalars['ID']['input']>;
  quantityUnit?: InputMaybe<Scalars['String']['input']>;
  remainingQuantity?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<InventoryStatus>;
  storageConditions?: InputMaybe<Scalars['String']['input']>;
  storageLocation?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  zoneId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateListingReviewInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  produceListingId?: InputMaybe<Scalars['ID']['input']>;
  rating?: InputMaybe<Scalars['Int']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateMarketScheduleInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  address?: InputMaybe<Scalars['String']['input']>;
  city?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  dayOfWeek?: InputMaybe<Scalars['Int']['input']>;
  endTime?: InputMaybe<Scalars['AWSTime']['input']>;
  farmId?: InputMaybe<Scalars['ID']['input']>;
  farmOwnerId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  marketName?: InputMaybe<Scalars['String']['input']>;
  startTime?: InputMaybe<Scalars['AWSTime']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  zipCode?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateNotificationInput = {
  actionLink?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id: Scalars['ID']['input'];
  imageLink?: InputMaybe<Scalars['String']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  read?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateOrderInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  deliveryAddressId?: InputMaybe<Scalars['ID']['input']>;
  deliveryFee?: InputMaybe<Scalars['Float']['input']>;
  deliveryNotes?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  requestedDeliveryDate?: InputMaybe<Scalars['AWSDate']['input']>;
  status?: InputMaybe<OrderStatus>;
  subtotal?: InputMaybe<Scalars['Float']['input']>;
  tax?: InputMaybe<Scalars['Float']['input']>;
  total?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateOrderItemInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  orderId?: InputMaybe<Scalars['ID']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  produceListingId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  subtotal?: InputMaybe<Scalars['Float']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdatePaymentInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id: Scalars['ID']['input'];
  method?: InputMaybe<PaymentMethod>;
  orderId?: InputMaybe<Scalars['ID']['input']>;
  status?: InputMaybe<PaymentStatus>;
  transactionId?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdatePostCommentInput = {
  content?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmPostId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdatePostLikeInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmPostId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdatePreHarvestListingInput = {
  availableForReservation?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  estimatedHarvestDate?: InputMaybe<Scalars['AWSDate']['input']>;
  estimatedQuantity?: InputMaybe<Scalars['Float']['input']>;
  farmId?: InputMaybe<Scalars['ID']['input']>;
  farmOwnerId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  inventoryBatchId?: InputMaybe<Scalars['ID']['input']>;
  isOrganic?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  priceUnit?: InputMaybe<Scalars['String']['input']>;
  produceVarietyId?: InputMaybe<Scalars['ID']['input']>;
  quantityUnit?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type UpdatePreHarvestReservationInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  farmId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  preHarvestListingId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  quantityUnit?: InputMaybe<Scalars['String']['input']>;
  requestedPickupDate?: InputMaybe<Scalars['AWSDate']['input']>;
  status?: InputMaybe<ReservationStatus>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateProduceCategoryInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type UpdateProduceListingInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  availableQuantity?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  daysToExpiration?: InputMaybe<Scalars['Int']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  estimatedDeliveryMinutes?: InputMaybe<Scalars['Int']['input']>;
  expirationDate?: InputMaybe<Scalars['AWSDate']['input']>;
  farmId?: InputMaybe<Scalars['ID']['input']>;
  farmOwnerId?: InputMaybe<Scalars['ID']['input']>;
  freshness?: InputMaybe<Scalars['Int']['input']>;
  harvestDate?: InputMaybe<Scalars['AWSDate']['input']>;
  id: Scalars['ID']['input'];
  images?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  instantDeliveryFee?: InputMaybe<Scalars['Float']['input']>;
  inventoryBatchId?: InputMaybe<Scalars['ID']['input']>;
  isInstantlyAvailable?: InputMaybe<Scalars['Boolean']['input']>;
  isOrganic?: InputMaybe<Scalars['Boolean']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  priceUnit?: InputMaybe<Scalars['String']['input']>;
  produceVarietyId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Float']['input']>;
  quantityUnit?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type UpdateProduceNutrientInput = {
  amount?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  dailyValue?: InputMaybe<Scalars['Float']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  varietyId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateProduceSubcategoryInput = {
  categoryId?: InputMaybe<Scalars['ID']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type UpdateProduceTypeInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  subcategoryId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type UpdateProduceVarietyInput = {
  averageShelfLife?: InputMaybe<Scalars['Int']['input']>;
  averageWeight?: InputMaybe<Scalars['Float']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  harvestInstructions?: InputMaybe<Scalars['String']['input']>;
  icon?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  season?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  storageInstructions?: InputMaybe<Scalars['String']['input']>;
  typeId?: InputMaybe<Scalars['ID']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  weightUnit?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateShoppingListInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateShoppingListItemInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  id: Scalars['ID']['input'];
  notes?: InputMaybe<Scalars['String']['input']>;
  produceVarietyId?: InputMaybe<Scalars['ID']['input']>;
  quantity?: InputMaybe<Scalars['Int']['input']>;
  shoppingListId?: InputMaybe<Scalars['ID']['input']>;
  unit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateUserInput = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  bio?: InputMaybe<Scalars['String']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  email?: InputMaybe<Scalars['AWSEmail']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['AWSPhone']['input']>;
  role?: InputMaybe<UserRole>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type UpdateUserPreferencesInput = {
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  emailNotificationsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  farmUpdates?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['ID']['input'];
  marketingCommunications?: InputMaybe<Scalars['Boolean']['input']>;
  orderUpdates?: InputMaybe<Scalars['Boolean']['input']>;
  preferredPaymentMethod?: InputMaybe<PaymentMethod>;
  pushNotificationsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  smsNotificationsEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  userId?: InputMaybe<Scalars['ID']['input']>;
};

export type UpdateZoneInput = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  createdAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  farmId?: InputMaybe<Scalars['ID']['input']>;
  farmOwnerId?: InputMaybe<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  location?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  sizeUnit?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['AWSDateTime']['input']>;
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  email: Scalars['AWSEmail']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['AWSPhone']['output']>;
  role: UserRole;
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type UserPreferences = {
  __typename?: 'UserPreferences';
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  emailNotificationsEnabled: Scalars['Boolean']['output'];
  farmUpdates: Scalars['Boolean']['output'];
  id: Scalars['ID']['output'];
  marketingCommunications: Scalars['Boolean']['output'];
  orderUpdates: Scalars['Boolean']['output'];
  preferredPaymentMethod?: Maybe<PaymentMethod>;
  pushNotificationsEnabled: Scalars['Boolean']['output'];
  smsNotificationsEnabled: Scalars['Boolean']['output'];
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
  userId: Scalars['ID']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  Consumer = 'CONSUMER',
  Driver = 'DRIVER',
  Farmer = 'FARMER'
}

export type Zone = {
  __typename?: 'Zone';
  active: Scalars['Boolean']['output'];
  createdAt?: Maybe<Scalars['AWSDateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  farmId: Scalars['ID']['output'];
  farmOwnerId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  location?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  size?: Maybe<Scalars['Float']['output']>;
  sizeUnit?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['AWSDateTime']['output']>;
};

export type CreateFarmMutationVariables = Exact<{
  input: CreateFarmInput;
}>;


export type CreateFarmMutation = { __typename?: 'Mutation', createFarm?: { __typename?: 'Farm', id: string, name: string, description?: string | null, ownerId: string, location: string, website?: any | null, phone?: any | null, email?: any | null, address: string, city: string, state: string, zipCode: string, profileImage?: string | null, coverImage?: string | null, active: boolean, certified: boolean, createdAt?: any | null, updatedAt?: any | null } | null };

export type UpdateFarmMutationVariables = Exact<{
  input: UpdateFarmInput;
}>;


export type UpdateFarmMutation = { __typename?: 'Mutation', updateFarm?: { __typename?: 'Farm', id: string, name: string, description?: string | null, ownerId: string, location: string, website?: any | null, phone?: any | null, email?: any | null, address: string, city: string, state: string, zipCode: string, profileImage?: string | null, coverImage?: string | null, active: boolean, certified: boolean, createdAt?: any | null, updatedAt?: any | null } | null };

export type DeleteFarmMutationVariables = Exact<{
  input: DeleteFarmInput;
}>;


export type DeleteFarmMutation = { __typename?: 'Mutation', deleteFarm?: { __typename?: 'Farm', id: string, name: string, description?: string | null, ownerId: string, createdAt?: any | null, updatedAt?: any | null } | null };

export type CreateProduceListingMutationVariables = Exact<{
  input: CreateProduceListingInput;
}>;


export type CreateProduceListingMutation = { __typename?: 'Mutation', createProduceListing?: { __typename?: 'ProduceListing', id: string, title: string, description?: string | null, price: number, priceUnit: string, quantity: number, quantityUnit: string, availableQuantity: number, farmId: string, farmOwnerId: string, produceVarietyId: string, inventoryBatchId: string, isOrganic: boolean, harvestDate?: any | null, expirationDate?: any | null, daysToExpiration?: number | null, freshness?: number | null, active: boolean, isInstantlyAvailable: boolean, instantDeliveryFee?: number | null, estimatedDeliveryMinutes?: number | null, images?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type UpdateProduceListingMutationVariables = Exact<{
  input: UpdateProduceListingInput;
}>;


export type UpdateProduceListingMutation = { __typename?: 'Mutation', updateProduceListing?: { __typename?: 'ProduceListing', id: string, title: string, description?: string | null, price: number, priceUnit: string, quantity: number, quantityUnit: string, availableQuantity: number, farmId: string, farmOwnerId: string, produceVarietyId: string, inventoryBatchId: string, isOrganic: boolean, harvestDate?: any | null, expirationDate?: any | null, daysToExpiration?: number | null, freshness?: number | null, active: boolean, isInstantlyAvailable: boolean, instantDeliveryFee?: number | null, estimatedDeliveryMinutes?: number | null, images?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type DeleteProduceListingMutationVariables = Exact<{
  input: DeleteProduceListingInput;
}>;


export type DeleteProduceListingMutation = { __typename?: 'Mutation', deleteProduceListing?: { __typename?: 'ProduceListing', id: string, title: string, farmId: string, farmOwnerId: string, produceVarietyId: string, createdAt?: any | null, updatedAt?: any | null } | null };

export type CreateOrderMutationVariables = Exact<{
  input: CreateOrderInput;
  condition?: InputMaybe<ModelOrderConditionInput>;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', createOrder?: { __typename?: 'Order', id: string, userId: string, status: OrderStatus, subtotal: number, tax: number, total: number, deliveryFee: number, deliveryAddressId?: string | null, deliveryNotes?: string | null, requestedDeliveryDate?: any | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type UpdateOrderMutationVariables = Exact<{
  input: UpdateOrderInput;
  condition?: InputMaybe<ModelOrderConditionInput>;
}>;


export type UpdateOrderMutation = { __typename?: 'Mutation', updateOrder?: { __typename?: 'Order', id: string, userId: string, status: OrderStatus, subtotal: number, tax: number, total: number, deliveryFee: number, deliveryAddressId?: string | null, deliveryNotes?: string | null, requestedDeliveryDate?: any | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type CreateOrderItemMutationVariables = Exact<{
  input: CreateOrderItemInput;
  condition?: InputMaybe<ModelOrderItemConditionInput>;
}>;


export type CreateOrderItemMutation = { __typename?: 'Mutation', createOrderItem?: { __typename?: 'OrderItem', id: string, orderId: string, userId: string, farmId: string, produceListingId: string, quantity: number, price: number, subtotal: number, createdAt?: any | null, updatedAt?: any | null } | null };

export type UpdateOrderItemMutationVariables = Exact<{
  input: UpdateOrderItemInput;
  condition?: InputMaybe<ModelOrderItemConditionInput>;
}>;


export type UpdateOrderItemMutation = { __typename?: 'Mutation', updateOrderItem?: { __typename?: 'OrderItem', id: string, orderId: string, userId: string, farmId: string, produceListingId: string, quantity: number, price: number, subtotal: number, createdAt?: any | null, updatedAt?: any | null } | null };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser?: { __typename?: 'User', id: string, name?: string | null, email: any, role: UserRole, createdAt?: any | null, updatedAt?: any | null } | null };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInput;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser?: { __typename?: 'User', id: string, name?: string | null, email: any, role: UserRole, createdAt?: any | null, updatedAt?: any | null } | null };

export type DeleteUserMutationVariables = Exact<{
  input: DeleteUserInput;
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser?: { __typename?: 'User', id: string, name?: string | null, email: any, role: UserRole, createdAt?: any | null, updatedAt?: any | null } | null };

export type GetFarmQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetFarmQuery = { __typename?: 'Query', getFarm?: { __typename?: 'Farm', id: string, name: string, description?: string | null, ownerId: string, location: string, website?: any | null, phone?: any | null, email?: any | null, address: string, city: string, state: string, zipCode: string, profileImage?: string | null, coverImage?: string | null, active: boolean, certified: boolean, createdAt?: any | null, updatedAt?: any | null } | null };

export type ListFarmsQueryVariables = Exact<{
  filter?: InputMaybe<ModelFarmFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListFarmsQuery = { __typename?: 'Query', listFarms?: { __typename?: 'ModelFarmConnection', nextToken?: string | null, items: Array<{ __typename?: 'Farm', id: string, name: string, description?: string | null, ownerId: string, location: string, website?: any | null, phone?: any | null, email?: any | null, address: string, city: string, state: string, zipCode: string, profileImage?: string | null, coverImage?: string | null, active: boolean, certified: boolean, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type FarmsByOwnerIdQueryVariables = Exact<{
  ownerId: Scalars['ID']['input'];
  sortDirection?: InputMaybe<ModelSortDirection>;
  filter?: InputMaybe<ModelFarmFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type FarmsByOwnerIdQuery = { __typename?: 'Query', farmsByOwnerId?: { __typename?: 'ModelFarmConnection', nextToken?: string | null, items: Array<{ __typename?: 'Farm', id: string, name: string, description?: string | null, ownerId: string, location: string, website?: any | null, phone?: any | null, email?: any | null, address: string, city: string, state: string, zipCode: string, profileImage?: string | null, coverImage?: string | null, active: boolean, certified: boolean, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type GetProduceListingQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProduceListingQuery = { __typename?: 'Query', getProduceListing?: { __typename?: 'ProduceListing', id: string, title: string, description?: string | null, price: number, priceUnit: string, quantity: number, quantityUnit: string, availableQuantity: number, farmId: string, farmOwnerId: string, produceVarietyId: string, inventoryBatchId: string, isOrganic: boolean, harvestDate?: any | null, expirationDate?: any | null, daysToExpiration?: number | null, freshness?: number | null, active: boolean, isInstantlyAvailable: boolean, instantDeliveryFee?: number | null, estimatedDeliveryMinutes?: number | null, images?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type ListProduceListingsQueryVariables = Exact<{
  filter?: InputMaybe<ModelProduceListingFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListProduceListingsQuery = { __typename?: 'Query', listProduceListings?: { __typename?: 'ModelProduceListingConnection', nextToken?: string | null, items: Array<{ __typename?: 'ProduceListing', id: string, title: string, description?: string | null, price: number, priceUnit: string, quantity: number, quantityUnit: string, availableQuantity: number, farmId: string, farmOwnerId: string, produceVarietyId: string, isOrganic: boolean, harvestDate?: any | null, expirationDate?: any | null, daysToExpiration?: number | null, freshness?: number | null, active: boolean, isInstantlyAvailable: boolean, instantDeliveryFee?: number | null, estimatedDeliveryMinutes?: number | null, images?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type ListProduceListingsByFarmQueryVariables = Exact<{
  farmId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListProduceListingsByFarmQuery = { __typename?: 'Query', produceListingsByFarmId?: { __typename?: 'ModelProduceListingConnection', nextToken?: string | null, items: Array<{ __typename?: 'ProduceListing', id: string, title: string, description?: string | null, price: number, priceUnit: string, quantity: number, quantityUnit: string, availableQuantity: number, farmId: string, farmOwnerId: string, produceVarietyId: string, isOrganic: boolean, harvestDate?: any | null, expirationDate?: any | null, daysToExpiration?: number | null, freshness?: number | null, active: boolean, isInstantlyAvailable: boolean, images?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type ListProduceListingsByVarietyQueryVariables = Exact<{
  produceVarietyId: Scalars['ID']['input'];
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListProduceListingsByVarietyQuery = { __typename?: 'Query', produceListingsByProduceVarietyId?: { __typename?: 'ModelProduceListingConnection', nextToken?: string | null, items: Array<{ __typename?: 'ProduceListing', id: string, title: string, description?: string | null, price: number, priceUnit: string, quantity: number, quantityUnit: string, availableQuantity: number, farmId: string, farmOwnerId: string, produceVarietyId: string, isOrganic: boolean, harvestDate?: any | null, expirationDate?: any | null, daysToExpiration?: number | null, freshness?: number | null, active: boolean, isInstantlyAvailable: boolean, images?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type GetProduceCategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProduceCategoryQuery = { __typename?: 'Query', getProduceCategory?: { __typename?: 'ProduceCategory', id: string, name: string, description?: string | null, image?: string | null, icon?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type ListProduceCategoriesQueryVariables = Exact<{
  filter?: InputMaybe<ModelProduceCategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListProduceCategoriesQuery = { __typename?: 'Query', listProduceCategories?: { __typename?: 'ModelProduceCategoryConnection', nextToken?: string | null, items: Array<{ __typename?: 'ProduceCategory', id: string, name: string, description?: string | null, image?: string | null, icon?: string | null, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type GetProduceSubcategoryQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProduceSubcategoryQuery = { __typename?: 'Query', getProduceSubcategory?: { __typename?: 'ProduceSubcategory', id: string, name: string, description?: string | null, image?: string | null, icon?: string | null, categoryId: string, createdAt?: any | null, updatedAt?: any | null } | null };

export type ListProduceSubcategoriesQueryVariables = Exact<{
  filter?: InputMaybe<ModelProduceSubcategoryFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListProduceSubcategoriesQuery = { __typename?: 'Query', listProduceSubcategories?: { __typename?: 'ModelProduceSubcategoryConnection', nextToken?: string | null, items: Array<{ __typename?: 'ProduceSubcategory', id: string, name: string, description?: string | null, image?: string | null, icon?: string | null, categoryId: string, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type GetProduceTypeQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProduceTypeQuery = { __typename?: 'Query', getProduceType?: { __typename?: 'ProduceType', id: string, name: string, description?: string | null, image?: string | null, icon?: string | null, subcategoryId: string, createdAt?: any | null, updatedAt?: any | null } | null };

export type ListProduceTypesQueryVariables = Exact<{
  filter?: InputMaybe<ModelProduceTypeFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListProduceTypesQuery = { __typename?: 'Query', listProduceTypes?: { __typename?: 'ModelProduceTypeConnection', nextToken?: string | null, items: Array<{ __typename?: 'ProduceType', id: string, name: string, description?: string | null, image?: string | null, icon?: string | null, subcategoryId: string, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type GetProduceVarietyQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetProduceVarietyQuery = { __typename?: 'Query', getProduceVariety?: { __typename?: 'ProduceVariety', id: string, name: string, description?: string | null, image?: string | null, typeId: string, season?: Array<string | null> | null, harvestInstructions?: string | null, storageInstructions?: string | null, averageShelfLife?: number | null, averageWeight?: number | null, weightUnit?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type ListProduceVarietiesQueryVariables = Exact<{
  filter?: InputMaybe<ModelProduceVarietyFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListProduceVarietiesQuery = { __typename?: 'Query', listProduceVarieties?: { __typename?: 'ModelProduceVarietyConnection', nextToken?: string | null, items: Array<{ __typename?: 'ProduceVariety', id: string, name: string, description?: string | null, image?: string | null, typeId: string, season?: Array<string | null> | null, averageShelfLife?: number | null, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type GetUserQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: string, name?: string | null, email: any, role: UserRole, createdAt?: any | null, updatedAt?: any | null } | null };

export type ListUsersQueryVariables = Exact<{
  filter?: InputMaybe<ModelUserFilterInput>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  nextToken?: InputMaybe<Scalars['String']['input']>;
}>;


export type ListUsersQuery = { __typename?: 'Query', listUsers?: { __typename?: 'ModelUserConnection', nextToken?: string | null, items: Array<{ __typename?: 'User', id: string, name?: string | null, email: any, role: UserRole, createdAt?: any | null, updatedAt?: any | null } | null> } | null };

export type OnCreateProduceListingSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnCreateProduceListingSubscription = { __typename?: 'Subscription', onCreateProduceListing?: { __typename?: 'ProduceListing', id: string, title: string, description?: string | null, price: number, priceUnit: string, quantity: number, quantityUnit: string, availableQuantity: number, farmId: string, farmOwnerId: string, produceVarietyId: string, isOrganic: boolean, harvestDate?: any | null, expirationDate?: any | null, daysToExpiration?: number | null, freshness?: number | null, active: boolean, isInstantlyAvailable: boolean, instantDeliveryFee?: number | null, estimatedDeliveryMinutes?: number | null, images?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type OnUpdateProduceListingSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnUpdateProduceListingSubscription = { __typename?: 'Subscription', onUpdateProduceListing?: { __typename?: 'ProduceListing', id: string, title: string, description?: string | null, price: number, priceUnit: string, quantity: number, quantityUnit: string, availableQuantity: number, farmId: string, farmOwnerId: string, produceVarietyId: string, isOrganic: boolean, harvestDate?: any | null, expirationDate?: any | null, daysToExpiration?: number | null, freshness?: number | null, active: boolean, isInstantlyAvailable: boolean, instantDeliveryFee?: number | null, estimatedDeliveryMinutes?: number | null, images?: Array<string | null> | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type OnDeleteProduceListingSubscriptionVariables = Exact<{ [key: string]: never; }>;


export type OnDeleteProduceListingSubscription = { __typename?: 'Subscription', onDeleteProduceListing?: { __typename?: 'ProduceListing', id: string, title: string, farmId: string, farmOwnerId: string, produceVarietyId: string, createdAt?: any | null, updatedAt?: any | null } | null };

export type OnCreateNotificationSubscriptionVariables = Exact<{
  filter?: InputMaybe<ModelSubscriptionNotificationFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type OnCreateNotificationSubscription = { __typename?: 'Subscription', onCreateNotification?: { __typename?: 'Notification', id: string, userId: string, title: string, message: string, read: boolean, actionLink?: string | null, imageLink?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type OnUpdateNotificationSubscriptionVariables = Exact<{
  filter?: InputMaybe<ModelSubscriptionNotificationFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type OnUpdateNotificationSubscription = { __typename?: 'Subscription', onUpdateNotification?: { __typename?: 'Notification', id: string, userId: string, title: string, message: string, read: boolean, actionLink?: string | null, imageLink?: string | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type OnCreateOrderSubscriptionVariables = Exact<{
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type OnCreateOrderSubscription = { __typename?: 'Subscription', onCreateOrder?: { __typename?: 'Order', id: string, userId: string, status: OrderStatus, subtotal: number, tax: number, total: number, deliveryFee: number, deliveryAddressId?: string | null, deliveryNotes?: string | null, requestedDeliveryDate?: any | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type OnUpdateOrderSubscriptionVariables = Exact<{
  filter?: InputMaybe<ModelSubscriptionOrderFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type OnUpdateOrderSubscription = { __typename?: 'Subscription', onUpdateOrder?: { __typename?: 'Order', id: string, userId: string, status: OrderStatus, subtotal: number, tax: number, total: number, deliveryFee: number, deliveryAddressId?: string | null, deliveryNotes?: string | null, requestedDeliveryDate?: any | null, createdAt?: any | null, updatedAt?: any | null } | null };

export type OnCreateOrderItemSubscriptionVariables = Exact<{
  filter?: InputMaybe<ModelSubscriptionOrderItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type OnCreateOrderItemSubscription = { __typename?: 'Subscription', onCreateOrderItem?: { __typename?: 'OrderItem', id: string, orderId: string, userId: string, farmId: string, produceListingId: string, quantity: number, price: number, subtotal: number, createdAt?: any | null, updatedAt?: any | null } | null };

export type OnUpdateOrderItemSubscriptionVariables = Exact<{
  filter?: InputMaybe<ModelSubscriptionOrderItemFilterInput>;
  userId?: InputMaybe<Scalars['String']['input']>;
}>;


export type OnUpdateOrderItemSubscription = { __typename?: 'Subscription', onUpdateOrderItem?: { __typename?: 'OrderItem', id: string, orderId: string, userId: string, farmId: string, produceListingId: string, quantity: number, price: number, subtotal: number, createdAt?: any | null, updatedAt?: any | null } | null };


export const CreateFarmDocument = gql`
    mutation CreateFarm($input: CreateFarmInput!) {
  createFarm(input: $input) {
    id
    name
    description
    ownerId
    location
    website
    phone
    email
    address
    city
    state
    zipCode
    profileImage
    coverImage
    active
    certified
    createdAt
    updatedAt
  }
}
    `;
export type CreateFarmMutationFn = Apollo.MutationFunction<CreateFarmMutation, CreateFarmMutationVariables>;

/**
 * __useCreateFarmMutation__
 *
 * To run a mutation, you first call `useCreateFarmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFarmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFarmMutation, { data, loading, error }] = useCreateFarmMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFarmMutation(baseOptions?: Apollo.MutationHookOptions<CreateFarmMutation, CreateFarmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFarmMutation, CreateFarmMutationVariables>(CreateFarmDocument, options);
      }
export type CreateFarmMutationHookResult = ReturnType<typeof useCreateFarmMutation>;
export type CreateFarmMutationResult = Apollo.MutationResult<CreateFarmMutation>;
export type CreateFarmMutationOptions = Apollo.BaseMutationOptions<CreateFarmMutation, CreateFarmMutationVariables>;
export const UpdateFarmDocument = gql`
    mutation UpdateFarm($input: UpdateFarmInput!) {
  updateFarm(input: $input) {
    id
    name
    description
    ownerId
    location
    website
    phone
    email
    address
    city
    state
    zipCode
    profileImage
    coverImage
    active
    certified
    createdAt
    updatedAt
  }
}
    `;
export type UpdateFarmMutationFn = Apollo.MutationFunction<UpdateFarmMutation, UpdateFarmMutationVariables>;

/**
 * __useUpdateFarmMutation__
 *
 * To run a mutation, you first call `useUpdateFarmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFarmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFarmMutation, { data, loading, error }] = useUpdateFarmMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateFarmMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFarmMutation, UpdateFarmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFarmMutation, UpdateFarmMutationVariables>(UpdateFarmDocument, options);
      }
export type UpdateFarmMutationHookResult = ReturnType<typeof useUpdateFarmMutation>;
export type UpdateFarmMutationResult = Apollo.MutationResult<UpdateFarmMutation>;
export type UpdateFarmMutationOptions = Apollo.BaseMutationOptions<UpdateFarmMutation, UpdateFarmMutationVariables>;
export const DeleteFarmDocument = gql`
    mutation DeleteFarm($input: DeleteFarmInput!) {
  deleteFarm(input: $input) {
    id
    name
    description
    ownerId
    createdAt
    updatedAt
  }
}
    `;
export type DeleteFarmMutationFn = Apollo.MutationFunction<DeleteFarmMutation, DeleteFarmMutationVariables>;

/**
 * __useDeleteFarmMutation__
 *
 * To run a mutation, you first call `useDeleteFarmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFarmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFarmMutation, { data, loading, error }] = useDeleteFarmMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteFarmMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFarmMutation, DeleteFarmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFarmMutation, DeleteFarmMutationVariables>(DeleteFarmDocument, options);
      }
export type DeleteFarmMutationHookResult = ReturnType<typeof useDeleteFarmMutation>;
export type DeleteFarmMutationResult = Apollo.MutationResult<DeleteFarmMutation>;
export type DeleteFarmMutationOptions = Apollo.BaseMutationOptions<DeleteFarmMutation, DeleteFarmMutationVariables>;
export const CreateProduceListingDocument = gql`
    mutation CreateProduceListing($input: CreateProduceListingInput!) {
  createProduceListing(input: $input) {
    id
    title
    description
    price
    priceUnit
    quantity
    quantityUnit
    availableQuantity
    farmId
    farmOwnerId
    produceVarietyId
    inventoryBatchId
    isOrganic
    harvestDate
    expirationDate
    daysToExpiration
    freshness
    active
    isInstantlyAvailable
    instantDeliveryFee
    estimatedDeliveryMinutes
    images
    createdAt
    updatedAt
  }
}
    `;
export type CreateProduceListingMutationFn = Apollo.MutationFunction<CreateProduceListingMutation, CreateProduceListingMutationVariables>;

/**
 * __useCreateProduceListingMutation__
 *
 * To run a mutation, you first call `useCreateProduceListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProduceListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProduceListingMutation, { data, loading, error }] = useCreateProduceListingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProduceListingMutation(baseOptions?: Apollo.MutationHookOptions<CreateProduceListingMutation, CreateProduceListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProduceListingMutation, CreateProduceListingMutationVariables>(CreateProduceListingDocument, options);
      }
export type CreateProduceListingMutationHookResult = ReturnType<typeof useCreateProduceListingMutation>;
export type CreateProduceListingMutationResult = Apollo.MutationResult<CreateProduceListingMutation>;
export type CreateProduceListingMutationOptions = Apollo.BaseMutationOptions<CreateProduceListingMutation, CreateProduceListingMutationVariables>;
export const UpdateProduceListingDocument = gql`
    mutation UpdateProduceListing($input: UpdateProduceListingInput!) {
  updateProduceListing(input: $input) {
    id
    title
    description
    price
    priceUnit
    quantity
    quantityUnit
    availableQuantity
    farmId
    farmOwnerId
    produceVarietyId
    inventoryBatchId
    isOrganic
    harvestDate
    expirationDate
    daysToExpiration
    freshness
    active
    isInstantlyAvailable
    instantDeliveryFee
    estimatedDeliveryMinutes
    images
    createdAt
    updatedAt
  }
}
    `;
export type UpdateProduceListingMutationFn = Apollo.MutationFunction<UpdateProduceListingMutation, UpdateProduceListingMutationVariables>;

/**
 * __useUpdateProduceListingMutation__
 *
 * To run a mutation, you first call `useUpdateProduceListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProduceListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProduceListingMutation, { data, loading, error }] = useUpdateProduceListingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateProduceListingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateProduceListingMutation, UpdateProduceListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateProduceListingMutation, UpdateProduceListingMutationVariables>(UpdateProduceListingDocument, options);
      }
export type UpdateProduceListingMutationHookResult = ReturnType<typeof useUpdateProduceListingMutation>;
export type UpdateProduceListingMutationResult = Apollo.MutationResult<UpdateProduceListingMutation>;
export type UpdateProduceListingMutationOptions = Apollo.BaseMutationOptions<UpdateProduceListingMutation, UpdateProduceListingMutationVariables>;
export const DeleteProduceListingDocument = gql`
    mutation DeleteProduceListing($input: DeleteProduceListingInput!) {
  deleteProduceListing(input: $input) {
    id
    title
    farmId
    farmOwnerId
    produceVarietyId
    createdAt
    updatedAt
  }
}
    `;
export type DeleteProduceListingMutationFn = Apollo.MutationFunction<DeleteProduceListingMutation, DeleteProduceListingMutationVariables>;

/**
 * __useDeleteProduceListingMutation__
 *
 * To run a mutation, you first call `useDeleteProduceListingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteProduceListingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteProduceListingMutation, { data, loading, error }] = useDeleteProduceListingMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteProduceListingMutation(baseOptions?: Apollo.MutationHookOptions<DeleteProduceListingMutation, DeleteProduceListingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteProduceListingMutation, DeleteProduceListingMutationVariables>(DeleteProduceListingDocument, options);
      }
export type DeleteProduceListingMutationHookResult = ReturnType<typeof useDeleteProduceListingMutation>;
export type DeleteProduceListingMutationResult = Apollo.MutationResult<DeleteProduceListingMutation>;
export type DeleteProduceListingMutationOptions = Apollo.BaseMutationOptions<DeleteProduceListingMutation, DeleteProduceListingMutationVariables>;
export const CreateOrderDocument = gql`
    mutation CreateOrder($input: CreateOrderInput!, $condition: ModelOrderConditionInput) {
  createOrder(input: $input, condition: $condition) {
    id
    userId
    status
    subtotal
    tax
    total
    deliveryFee
    deliveryAddressId
    deliveryNotes
    requestedDeliveryDate
    createdAt
    updatedAt
  }
}
    `;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, options);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const UpdateOrderDocument = gql`
    mutation UpdateOrder($input: UpdateOrderInput!, $condition: ModelOrderConditionInput) {
  updateOrder(input: $input, condition: $condition) {
    id
    userId
    status
    subtotal
    tax
    total
    deliveryFee
    deliveryAddressId
    deliveryNotes
    requestedDeliveryDate
    createdAt
    updatedAt
  }
}
    `;
export type UpdateOrderMutationFn = Apollo.MutationFunction<UpdateOrderMutation, UpdateOrderMutationVariables>;

/**
 * __useUpdateOrderMutation__
 *
 * To run a mutation, you first call `useUpdateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderMutation, { data, loading, error }] = useUpdateOrderMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateOrderMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderMutation, UpdateOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderMutation, UpdateOrderMutationVariables>(UpdateOrderDocument, options);
      }
export type UpdateOrderMutationHookResult = ReturnType<typeof useUpdateOrderMutation>;
export type UpdateOrderMutationResult = Apollo.MutationResult<UpdateOrderMutation>;
export type UpdateOrderMutationOptions = Apollo.BaseMutationOptions<UpdateOrderMutation, UpdateOrderMutationVariables>;
export const CreateOrderItemDocument = gql`
    mutation CreateOrderItem($input: CreateOrderItemInput!, $condition: ModelOrderItemConditionInput) {
  createOrderItem(input: $input, condition: $condition) {
    id
    orderId
    userId
    farmId
    produceListingId
    quantity
    price
    subtotal
    createdAt
    updatedAt
  }
}
    `;
export type CreateOrderItemMutationFn = Apollo.MutationFunction<CreateOrderItemMutation, CreateOrderItemMutationVariables>;

/**
 * __useCreateOrderItemMutation__
 *
 * To run a mutation, you first call `useCreateOrderItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderItemMutation, { data, loading, error }] = useCreateOrderItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useCreateOrderItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderItemMutation, CreateOrderItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOrderItemMutation, CreateOrderItemMutationVariables>(CreateOrderItemDocument, options);
      }
export type CreateOrderItemMutationHookResult = ReturnType<typeof useCreateOrderItemMutation>;
export type CreateOrderItemMutationResult = Apollo.MutationResult<CreateOrderItemMutation>;
export type CreateOrderItemMutationOptions = Apollo.BaseMutationOptions<CreateOrderItemMutation, CreateOrderItemMutationVariables>;
export const UpdateOrderItemDocument = gql`
    mutation UpdateOrderItem($input: UpdateOrderItemInput!, $condition: ModelOrderItemConditionInput) {
  updateOrderItem(input: $input, condition: $condition) {
    id
    orderId
    userId
    farmId
    produceListingId
    quantity
    price
    subtotal
    createdAt
    updatedAt
  }
}
    `;
export type UpdateOrderItemMutationFn = Apollo.MutationFunction<UpdateOrderItemMutation, UpdateOrderItemMutationVariables>;

/**
 * __useUpdateOrderItemMutation__
 *
 * To run a mutation, you first call `useUpdateOrderItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOrderItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOrderItemMutation, { data, loading, error }] = useUpdateOrderItemMutation({
 *   variables: {
 *      input: // value for 'input'
 *      condition: // value for 'condition'
 *   },
 * });
 */
export function useUpdateOrderItemMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOrderItemMutation, UpdateOrderItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOrderItemMutation, UpdateOrderItemMutationVariables>(UpdateOrderItemDocument, options);
      }
export type UpdateOrderItemMutationHookResult = ReturnType<typeof useUpdateOrderItemMutation>;
export type UpdateOrderItemMutationResult = Apollo.MutationResult<UpdateOrderItemMutation>;
export type UpdateOrderItemMutationOptions = Apollo.BaseMutationOptions<UpdateOrderItemMutation, UpdateOrderItemMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id
    name
    email
    role
    createdAt
    updatedAt
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
    id
    name
    email
    role
    createdAt
    updatedAt
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
    id
    name
    email
    role
    createdAt
    updatedAt
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const GetFarmDocument = gql`
    query GetFarm($id: ID!) {
  getFarm(id: $id) {
    id
    name
    description
    ownerId
    location
    website
    phone
    email
    address
    city
    state
    zipCode
    profileImage
    coverImage
    active
    certified
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetFarmQuery__
 *
 * To run a query within a React component, call `useGetFarmQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFarmQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFarmQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetFarmQuery(baseOptions: Apollo.QueryHookOptions<GetFarmQuery, GetFarmQueryVariables> & ({ variables: GetFarmQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFarmQuery, GetFarmQueryVariables>(GetFarmDocument, options);
      }
export function useGetFarmLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFarmQuery, GetFarmQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFarmQuery, GetFarmQueryVariables>(GetFarmDocument, options);
        }
export function useGetFarmSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFarmQuery, GetFarmQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFarmQuery, GetFarmQueryVariables>(GetFarmDocument, options);
        }
export type GetFarmQueryHookResult = ReturnType<typeof useGetFarmQuery>;
export type GetFarmLazyQueryHookResult = ReturnType<typeof useGetFarmLazyQuery>;
export type GetFarmSuspenseQueryHookResult = ReturnType<typeof useGetFarmSuspenseQuery>;
export type GetFarmQueryResult = Apollo.QueryResult<GetFarmQuery, GetFarmQueryVariables>;
export const ListFarmsDocument = gql`
    query ListFarms($filter: ModelFarmFilterInput, $limit: Int, $nextToken: String) {
  listFarms(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      ownerId
      location
      website
      phone
      email
      address
      city
      state
      zipCode
      profileImage
      coverImage
      active
      certified
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListFarmsQuery__
 *
 * To run a query within a React component, call `useListFarmsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListFarmsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListFarmsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListFarmsQuery(baseOptions?: Apollo.QueryHookOptions<ListFarmsQuery, ListFarmsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListFarmsQuery, ListFarmsQueryVariables>(ListFarmsDocument, options);
      }
export function useListFarmsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListFarmsQuery, ListFarmsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListFarmsQuery, ListFarmsQueryVariables>(ListFarmsDocument, options);
        }
export function useListFarmsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListFarmsQuery, ListFarmsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListFarmsQuery, ListFarmsQueryVariables>(ListFarmsDocument, options);
        }
export type ListFarmsQueryHookResult = ReturnType<typeof useListFarmsQuery>;
export type ListFarmsLazyQueryHookResult = ReturnType<typeof useListFarmsLazyQuery>;
export type ListFarmsSuspenseQueryHookResult = ReturnType<typeof useListFarmsSuspenseQuery>;
export type ListFarmsQueryResult = Apollo.QueryResult<ListFarmsQuery, ListFarmsQueryVariables>;
export const FarmsByOwnerIdDocument = gql`
    query FarmsByOwnerId($ownerId: ID!, $sortDirection: ModelSortDirection, $filter: ModelFarmFilterInput, $limit: Int, $nextToken: String) {
  farmsByOwnerId(
    ownerId: $ownerId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      description
      ownerId
      location
      website
      phone
      email
      address
      city
      state
      zipCode
      profileImage
      coverImage
      active
      certified
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useFarmsByOwnerIdQuery__
 *
 * To run a query within a React component, call `useFarmsByOwnerIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFarmsByOwnerIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFarmsByOwnerIdQuery({
 *   variables: {
 *      ownerId: // value for 'ownerId'
 *      sortDirection: // value for 'sortDirection'
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useFarmsByOwnerIdQuery(baseOptions: Apollo.QueryHookOptions<FarmsByOwnerIdQuery, FarmsByOwnerIdQueryVariables> & ({ variables: FarmsByOwnerIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FarmsByOwnerIdQuery, FarmsByOwnerIdQueryVariables>(FarmsByOwnerIdDocument, options);
      }
export function useFarmsByOwnerIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FarmsByOwnerIdQuery, FarmsByOwnerIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FarmsByOwnerIdQuery, FarmsByOwnerIdQueryVariables>(FarmsByOwnerIdDocument, options);
        }
export function useFarmsByOwnerIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FarmsByOwnerIdQuery, FarmsByOwnerIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FarmsByOwnerIdQuery, FarmsByOwnerIdQueryVariables>(FarmsByOwnerIdDocument, options);
        }
export type FarmsByOwnerIdQueryHookResult = ReturnType<typeof useFarmsByOwnerIdQuery>;
export type FarmsByOwnerIdLazyQueryHookResult = ReturnType<typeof useFarmsByOwnerIdLazyQuery>;
export type FarmsByOwnerIdSuspenseQueryHookResult = ReturnType<typeof useFarmsByOwnerIdSuspenseQuery>;
export type FarmsByOwnerIdQueryResult = Apollo.QueryResult<FarmsByOwnerIdQuery, FarmsByOwnerIdQueryVariables>;
export const GetProduceListingDocument = gql`
    query GetProduceListing($id: ID!) {
  getProduceListing(id: $id) {
    id
    title
    description
    price
    priceUnit
    quantity
    quantityUnit
    availableQuantity
    farmId
    farmOwnerId
    produceVarietyId
    inventoryBatchId
    isOrganic
    harvestDate
    expirationDate
    daysToExpiration
    freshness
    active
    isInstantlyAvailable
    instantDeliveryFee
    estimatedDeliveryMinutes
    images
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetProduceListingQuery__
 *
 * To run a query within a React component, call `useGetProduceListingQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProduceListingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProduceListingQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProduceListingQuery(baseOptions: Apollo.QueryHookOptions<GetProduceListingQuery, GetProduceListingQueryVariables> & ({ variables: GetProduceListingQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProduceListingQuery, GetProduceListingQueryVariables>(GetProduceListingDocument, options);
      }
export function useGetProduceListingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProduceListingQuery, GetProduceListingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProduceListingQuery, GetProduceListingQueryVariables>(GetProduceListingDocument, options);
        }
export function useGetProduceListingSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProduceListingQuery, GetProduceListingQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProduceListingQuery, GetProduceListingQueryVariables>(GetProduceListingDocument, options);
        }
export type GetProduceListingQueryHookResult = ReturnType<typeof useGetProduceListingQuery>;
export type GetProduceListingLazyQueryHookResult = ReturnType<typeof useGetProduceListingLazyQuery>;
export type GetProduceListingSuspenseQueryHookResult = ReturnType<typeof useGetProduceListingSuspenseQuery>;
export type GetProduceListingQueryResult = Apollo.QueryResult<GetProduceListingQuery, GetProduceListingQueryVariables>;
export const ListProduceListingsDocument = gql`
    query ListProduceListings($filter: ModelProduceListingFilterInput, $limit: Int, $nextToken: String) {
  listProduceListings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      price
      priceUnit
      quantity
      quantityUnit
      availableQuantity
      farmId
      farmOwnerId
      produceVarietyId
      isOrganic
      harvestDate
      expirationDate
      daysToExpiration
      freshness
      active
      isInstantlyAvailable
      instantDeliveryFee
      estimatedDeliveryMinutes
      images
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListProduceListingsQuery__
 *
 * To run a query within a React component, call `useListProduceListingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProduceListingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProduceListingsQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListProduceListingsQuery(baseOptions?: Apollo.QueryHookOptions<ListProduceListingsQuery, ListProduceListingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProduceListingsQuery, ListProduceListingsQueryVariables>(ListProduceListingsDocument, options);
      }
export function useListProduceListingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProduceListingsQuery, ListProduceListingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProduceListingsQuery, ListProduceListingsQueryVariables>(ListProduceListingsDocument, options);
        }
export function useListProduceListingsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListProduceListingsQuery, ListProduceListingsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListProduceListingsQuery, ListProduceListingsQueryVariables>(ListProduceListingsDocument, options);
        }
export type ListProduceListingsQueryHookResult = ReturnType<typeof useListProduceListingsQuery>;
export type ListProduceListingsLazyQueryHookResult = ReturnType<typeof useListProduceListingsLazyQuery>;
export type ListProduceListingsSuspenseQueryHookResult = ReturnType<typeof useListProduceListingsSuspenseQuery>;
export type ListProduceListingsQueryResult = Apollo.QueryResult<ListProduceListingsQuery, ListProduceListingsQueryVariables>;
export const ListProduceListingsByFarmDocument = gql`
    query ListProduceListingsByFarm($farmId: ID!, $limit: Int, $nextToken: String) {
  produceListingsByFarmId(farmId: $farmId, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      price
      priceUnit
      quantity
      quantityUnit
      availableQuantity
      farmId
      farmOwnerId
      produceVarietyId
      isOrganic
      harvestDate
      expirationDate
      daysToExpiration
      freshness
      active
      isInstantlyAvailable
      images
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListProduceListingsByFarmQuery__
 *
 * To run a query within a React component, call `useListProduceListingsByFarmQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProduceListingsByFarmQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProduceListingsByFarmQuery({
 *   variables: {
 *      farmId: // value for 'farmId'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListProduceListingsByFarmQuery(baseOptions: Apollo.QueryHookOptions<ListProduceListingsByFarmQuery, ListProduceListingsByFarmQueryVariables> & ({ variables: ListProduceListingsByFarmQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProduceListingsByFarmQuery, ListProduceListingsByFarmQueryVariables>(ListProduceListingsByFarmDocument, options);
      }
export function useListProduceListingsByFarmLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProduceListingsByFarmQuery, ListProduceListingsByFarmQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProduceListingsByFarmQuery, ListProduceListingsByFarmQueryVariables>(ListProduceListingsByFarmDocument, options);
        }
export function useListProduceListingsByFarmSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListProduceListingsByFarmQuery, ListProduceListingsByFarmQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListProduceListingsByFarmQuery, ListProduceListingsByFarmQueryVariables>(ListProduceListingsByFarmDocument, options);
        }
export type ListProduceListingsByFarmQueryHookResult = ReturnType<typeof useListProduceListingsByFarmQuery>;
export type ListProduceListingsByFarmLazyQueryHookResult = ReturnType<typeof useListProduceListingsByFarmLazyQuery>;
export type ListProduceListingsByFarmSuspenseQueryHookResult = ReturnType<typeof useListProduceListingsByFarmSuspenseQuery>;
export type ListProduceListingsByFarmQueryResult = Apollo.QueryResult<ListProduceListingsByFarmQuery, ListProduceListingsByFarmQueryVariables>;
export const ListProduceListingsByVarietyDocument = gql`
    query ListProduceListingsByVariety($produceVarietyId: ID!, $limit: Int, $nextToken: String) {
  produceListingsByProduceVarietyId(
    produceVarietyId: $produceVarietyId
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      price
      priceUnit
      quantity
      quantityUnit
      availableQuantity
      farmId
      farmOwnerId
      produceVarietyId
      isOrganic
      harvestDate
      expirationDate
      daysToExpiration
      freshness
      active
      isInstantlyAvailable
      images
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListProduceListingsByVarietyQuery__
 *
 * To run a query within a React component, call `useListProduceListingsByVarietyQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProduceListingsByVarietyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProduceListingsByVarietyQuery({
 *   variables: {
 *      produceVarietyId: // value for 'produceVarietyId'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListProduceListingsByVarietyQuery(baseOptions: Apollo.QueryHookOptions<ListProduceListingsByVarietyQuery, ListProduceListingsByVarietyQueryVariables> & ({ variables: ListProduceListingsByVarietyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProduceListingsByVarietyQuery, ListProduceListingsByVarietyQueryVariables>(ListProduceListingsByVarietyDocument, options);
      }
export function useListProduceListingsByVarietyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProduceListingsByVarietyQuery, ListProduceListingsByVarietyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProduceListingsByVarietyQuery, ListProduceListingsByVarietyQueryVariables>(ListProduceListingsByVarietyDocument, options);
        }
export function useListProduceListingsByVarietySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListProduceListingsByVarietyQuery, ListProduceListingsByVarietyQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListProduceListingsByVarietyQuery, ListProduceListingsByVarietyQueryVariables>(ListProduceListingsByVarietyDocument, options);
        }
export type ListProduceListingsByVarietyQueryHookResult = ReturnType<typeof useListProduceListingsByVarietyQuery>;
export type ListProduceListingsByVarietyLazyQueryHookResult = ReturnType<typeof useListProduceListingsByVarietyLazyQuery>;
export type ListProduceListingsByVarietySuspenseQueryHookResult = ReturnType<typeof useListProduceListingsByVarietySuspenseQuery>;
export type ListProduceListingsByVarietyQueryResult = Apollo.QueryResult<ListProduceListingsByVarietyQuery, ListProduceListingsByVarietyQueryVariables>;
export const GetProduceCategoryDocument = gql`
    query GetProduceCategory($id: ID!) {
  getProduceCategory(id: $id) {
    id
    name
    description
    image
    icon
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetProduceCategoryQuery__
 *
 * To run a query within a React component, call `useGetProduceCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProduceCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProduceCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProduceCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetProduceCategoryQuery, GetProduceCategoryQueryVariables> & ({ variables: GetProduceCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProduceCategoryQuery, GetProduceCategoryQueryVariables>(GetProduceCategoryDocument, options);
      }
export function useGetProduceCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProduceCategoryQuery, GetProduceCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProduceCategoryQuery, GetProduceCategoryQueryVariables>(GetProduceCategoryDocument, options);
        }
export function useGetProduceCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProduceCategoryQuery, GetProduceCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProduceCategoryQuery, GetProduceCategoryQueryVariables>(GetProduceCategoryDocument, options);
        }
export type GetProduceCategoryQueryHookResult = ReturnType<typeof useGetProduceCategoryQuery>;
export type GetProduceCategoryLazyQueryHookResult = ReturnType<typeof useGetProduceCategoryLazyQuery>;
export type GetProduceCategorySuspenseQueryHookResult = ReturnType<typeof useGetProduceCategorySuspenseQuery>;
export type GetProduceCategoryQueryResult = Apollo.QueryResult<GetProduceCategoryQuery, GetProduceCategoryQueryVariables>;
export const ListProduceCategoriesDocument = gql`
    query ListProduceCategories($filter: ModelProduceCategoryFilterInput, $limit: Int, $nextToken: String) {
  listProduceCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      image
      icon
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListProduceCategoriesQuery__
 *
 * To run a query within a React component, call `useListProduceCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProduceCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProduceCategoriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListProduceCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListProduceCategoriesQuery, ListProduceCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProduceCategoriesQuery, ListProduceCategoriesQueryVariables>(ListProduceCategoriesDocument, options);
      }
export function useListProduceCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProduceCategoriesQuery, ListProduceCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProduceCategoriesQuery, ListProduceCategoriesQueryVariables>(ListProduceCategoriesDocument, options);
        }
export function useListProduceCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListProduceCategoriesQuery, ListProduceCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListProduceCategoriesQuery, ListProduceCategoriesQueryVariables>(ListProduceCategoriesDocument, options);
        }
export type ListProduceCategoriesQueryHookResult = ReturnType<typeof useListProduceCategoriesQuery>;
export type ListProduceCategoriesLazyQueryHookResult = ReturnType<typeof useListProduceCategoriesLazyQuery>;
export type ListProduceCategoriesSuspenseQueryHookResult = ReturnType<typeof useListProduceCategoriesSuspenseQuery>;
export type ListProduceCategoriesQueryResult = Apollo.QueryResult<ListProduceCategoriesQuery, ListProduceCategoriesQueryVariables>;
export const GetProduceSubcategoryDocument = gql`
    query GetProduceSubcategory($id: ID!) {
  getProduceSubcategory(id: $id) {
    id
    name
    description
    image
    icon
    categoryId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetProduceSubcategoryQuery__
 *
 * To run a query within a React component, call `useGetProduceSubcategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProduceSubcategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProduceSubcategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProduceSubcategoryQuery(baseOptions: Apollo.QueryHookOptions<GetProduceSubcategoryQuery, GetProduceSubcategoryQueryVariables> & ({ variables: GetProduceSubcategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProduceSubcategoryQuery, GetProduceSubcategoryQueryVariables>(GetProduceSubcategoryDocument, options);
      }
export function useGetProduceSubcategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProduceSubcategoryQuery, GetProduceSubcategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProduceSubcategoryQuery, GetProduceSubcategoryQueryVariables>(GetProduceSubcategoryDocument, options);
        }
export function useGetProduceSubcategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProduceSubcategoryQuery, GetProduceSubcategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProduceSubcategoryQuery, GetProduceSubcategoryQueryVariables>(GetProduceSubcategoryDocument, options);
        }
export type GetProduceSubcategoryQueryHookResult = ReturnType<typeof useGetProduceSubcategoryQuery>;
export type GetProduceSubcategoryLazyQueryHookResult = ReturnType<typeof useGetProduceSubcategoryLazyQuery>;
export type GetProduceSubcategorySuspenseQueryHookResult = ReturnType<typeof useGetProduceSubcategorySuspenseQuery>;
export type GetProduceSubcategoryQueryResult = Apollo.QueryResult<GetProduceSubcategoryQuery, GetProduceSubcategoryQueryVariables>;
export const ListProduceSubcategoriesDocument = gql`
    query ListProduceSubcategories($filter: ModelProduceSubcategoryFilterInput, $limit: Int, $nextToken: String) {
  listProduceSubcategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      image
      icon
      categoryId
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListProduceSubcategoriesQuery__
 *
 * To run a query within a React component, call `useListProduceSubcategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProduceSubcategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProduceSubcategoriesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListProduceSubcategoriesQuery(baseOptions?: Apollo.QueryHookOptions<ListProduceSubcategoriesQuery, ListProduceSubcategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProduceSubcategoriesQuery, ListProduceSubcategoriesQueryVariables>(ListProduceSubcategoriesDocument, options);
      }
export function useListProduceSubcategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProduceSubcategoriesQuery, ListProduceSubcategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProduceSubcategoriesQuery, ListProduceSubcategoriesQueryVariables>(ListProduceSubcategoriesDocument, options);
        }
export function useListProduceSubcategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListProduceSubcategoriesQuery, ListProduceSubcategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListProduceSubcategoriesQuery, ListProduceSubcategoriesQueryVariables>(ListProduceSubcategoriesDocument, options);
        }
export type ListProduceSubcategoriesQueryHookResult = ReturnType<typeof useListProduceSubcategoriesQuery>;
export type ListProduceSubcategoriesLazyQueryHookResult = ReturnType<typeof useListProduceSubcategoriesLazyQuery>;
export type ListProduceSubcategoriesSuspenseQueryHookResult = ReturnType<typeof useListProduceSubcategoriesSuspenseQuery>;
export type ListProduceSubcategoriesQueryResult = Apollo.QueryResult<ListProduceSubcategoriesQuery, ListProduceSubcategoriesQueryVariables>;
export const GetProduceTypeDocument = gql`
    query GetProduceType($id: ID!) {
  getProduceType(id: $id) {
    id
    name
    description
    image
    icon
    subcategoryId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetProduceTypeQuery__
 *
 * To run a query within a React component, call `useGetProduceTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProduceTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProduceTypeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProduceTypeQuery(baseOptions: Apollo.QueryHookOptions<GetProduceTypeQuery, GetProduceTypeQueryVariables> & ({ variables: GetProduceTypeQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProduceTypeQuery, GetProduceTypeQueryVariables>(GetProduceTypeDocument, options);
      }
export function useGetProduceTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProduceTypeQuery, GetProduceTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProduceTypeQuery, GetProduceTypeQueryVariables>(GetProduceTypeDocument, options);
        }
export function useGetProduceTypeSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProduceTypeQuery, GetProduceTypeQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProduceTypeQuery, GetProduceTypeQueryVariables>(GetProduceTypeDocument, options);
        }
export type GetProduceTypeQueryHookResult = ReturnType<typeof useGetProduceTypeQuery>;
export type GetProduceTypeLazyQueryHookResult = ReturnType<typeof useGetProduceTypeLazyQuery>;
export type GetProduceTypeSuspenseQueryHookResult = ReturnType<typeof useGetProduceTypeSuspenseQuery>;
export type GetProduceTypeQueryResult = Apollo.QueryResult<GetProduceTypeQuery, GetProduceTypeQueryVariables>;
export const ListProduceTypesDocument = gql`
    query ListProduceTypes($filter: ModelProduceTypeFilterInput, $limit: Int, $nextToken: String) {
  listProduceTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      image
      icon
      subcategoryId
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListProduceTypesQuery__
 *
 * To run a query within a React component, call `useListProduceTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProduceTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProduceTypesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListProduceTypesQuery(baseOptions?: Apollo.QueryHookOptions<ListProduceTypesQuery, ListProduceTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProduceTypesQuery, ListProduceTypesQueryVariables>(ListProduceTypesDocument, options);
      }
export function useListProduceTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProduceTypesQuery, ListProduceTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProduceTypesQuery, ListProduceTypesQueryVariables>(ListProduceTypesDocument, options);
        }
export function useListProduceTypesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListProduceTypesQuery, ListProduceTypesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListProduceTypesQuery, ListProduceTypesQueryVariables>(ListProduceTypesDocument, options);
        }
export type ListProduceTypesQueryHookResult = ReturnType<typeof useListProduceTypesQuery>;
export type ListProduceTypesLazyQueryHookResult = ReturnType<typeof useListProduceTypesLazyQuery>;
export type ListProduceTypesSuspenseQueryHookResult = ReturnType<typeof useListProduceTypesSuspenseQuery>;
export type ListProduceTypesQueryResult = Apollo.QueryResult<ListProduceTypesQuery, ListProduceTypesQueryVariables>;
export const GetProduceVarietyDocument = gql`
    query GetProduceVariety($id: ID!) {
  getProduceVariety(id: $id) {
    id
    name
    description
    image
    typeId
    season
    harvestInstructions
    storageInstructions
    averageShelfLife
    averageWeight
    weightUnit
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetProduceVarietyQuery__
 *
 * To run a query within a React component, call `useGetProduceVarietyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProduceVarietyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProduceVarietyQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProduceVarietyQuery(baseOptions: Apollo.QueryHookOptions<GetProduceVarietyQuery, GetProduceVarietyQueryVariables> & ({ variables: GetProduceVarietyQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetProduceVarietyQuery, GetProduceVarietyQueryVariables>(GetProduceVarietyDocument, options);
      }
export function useGetProduceVarietyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProduceVarietyQuery, GetProduceVarietyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetProduceVarietyQuery, GetProduceVarietyQueryVariables>(GetProduceVarietyDocument, options);
        }
export function useGetProduceVarietySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetProduceVarietyQuery, GetProduceVarietyQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetProduceVarietyQuery, GetProduceVarietyQueryVariables>(GetProduceVarietyDocument, options);
        }
export type GetProduceVarietyQueryHookResult = ReturnType<typeof useGetProduceVarietyQuery>;
export type GetProduceVarietyLazyQueryHookResult = ReturnType<typeof useGetProduceVarietyLazyQuery>;
export type GetProduceVarietySuspenseQueryHookResult = ReturnType<typeof useGetProduceVarietySuspenseQuery>;
export type GetProduceVarietyQueryResult = Apollo.QueryResult<GetProduceVarietyQuery, GetProduceVarietyQueryVariables>;
export const ListProduceVarietiesDocument = gql`
    query ListProduceVarieties($filter: ModelProduceVarietyFilterInput, $limit: Int, $nextToken: String) {
  listProduceVarieties(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      image
      typeId
      season
      averageShelfLife
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListProduceVarietiesQuery__
 *
 * To run a query within a React component, call `useListProduceVarietiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListProduceVarietiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListProduceVarietiesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListProduceVarietiesQuery(baseOptions?: Apollo.QueryHookOptions<ListProduceVarietiesQuery, ListProduceVarietiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListProduceVarietiesQuery, ListProduceVarietiesQueryVariables>(ListProduceVarietiesDocument, options);
      }
export function useListProduceVarietiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListProduceVarietiesQuery, ListProduceVarietiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListProduceVarietiesQuery, ListProduceVarietiesQueryVariables>(ListProduceVarietiesDocument, options);
        }
export function useListProduceVarietiesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListProduceVarietiesQuery, ListProduceVarietiesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListProduceVarietiesQuery, ListProduceVarietiesQueryVariables>(ListProduceVarietiesDocument, options);
        }
export type ListProduceVarietiesQueryHookResult = ReturnType<typeof useListProduceVarietiesQuery>;
export type ListProduceVarietiesLazyQueryHookResult = ReturnType<typeof useListProduceVarietiesLazyQuery>;
export type ListProduceVarietiesSuspenseQueryHookResult = ReturnType<typeof useListProduceVarietiesSuspenseQuery>;
export type ListProduceVarietiesQueryResult = Apollo.QueryResult<ListProduceVarietiesQuery, ListProduceVarietiesQueryVariables>;
export const GetUserDocument = gql`
    query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    role
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables> & ({ variables: GetUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export function useGetUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserSuspenseQueryHookResult = ReturnType<typeof useGetUserSuspenseQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const ListUsersDocument = gql`
    query ListUsers($filter: ModelUserFilterInput, $limit: Int, $nextToken: String) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      role
      createdAt
      updatedAt
    }
    nextToken
  }
}
    `;

/**
 * __useListUsersQuery__
 *
 * To run a query within a React component, call `useListUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListUsersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      limit: // value for 'limit'
 *      nextToken: // value for 'nextToken'
 *   },
 * });
 */
export function useListUsersQuery(baseOptions?: Apollo.QueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
      }
export function useListUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
        }
export function useListUsersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<ListUsersQuery, ListUsersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ListUsersQuery, ListUsersQueryVariables>(ListUsersDocument, options);
        }
export type ListUsersQueryHookResult = ReturnType<typeof useListUsersQuery>;
export type ListUsersLazyQueryHookResult = ReturnType<typeof useListUsersLazyQuery>;
export type ListUsersSuspenseQueryHookResult = ReturnType<typeof useListUsersSuspenseQuery>;
export type ListUsersQueryResult = Apollo.QueryResult<ListUsersQuery, ListUsersQueryVariables>;
export const OnCreateProduceListingDocument = gql`
    subscription OnCreateProduceListing {
  onCreateProduceListing {
    id
    title
    description
    price
    priceUnit
    quantity
    quantityUnit
    availableQuantity
    farmId
    farmOwnerId
    produceVarietyId
    isOrganic
    harvestDate
    expirationDate
    daysToExpiration
    freshness
    active
    isInstantlyAvailable
    instantDeliveryFee
    estimatedDeliveryMinutes
    images
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnCreateProduceListingSubscription__
 *
 * To run a query within a React component, call `useOnCreateProduceListingSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateProduceListingSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateProduceListingSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnCreateProduceListingSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateProduceListingSubscription, OnCreateProduceListingSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateProduceListingSubscription, OnCreateProduceListingSubscriptionVariables>(OnCreateProduceListingDocument, options);
      }
export type OnCreateProduceListingSubscriptionHookResult = ReturnType<typeof useOnCreateProduceListingSubscription>;
export type OnCreateProduceListingSubscriptionResult = Apollo.SubscriptionResult<OnCreateProduceListingSubscription>;
export const OnUpdateProduceListingDocument = gql`
    subscription OnUpdateProduceListing {
  onUpdateProduceListing {
    id
    title
    description
    price
    priceUnit
    quantity
    quantityUnit
    availableQuantity
    farmId
    farmOwnerId
    produceVarietyId
    isOrganic
    harvestDate
    expirationDate
    daysToExpiration
    freshness
    active
    isInstantlyAvailable
    instantDeliveryFee
    estimatedDeliveryMinutes
    images
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnUpdateProduceListingSubscription__
 *
 * To run a query within a React component, call `useOnUpdateProduceListingSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateProduceListingSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateProduceListingSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnUpdateProduceListingSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateProduceListingSubscription, OnUpdateProduceListingSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnUpdateProduceListingSubscription, OnUpdateProduceListingSubscriptionVariables>(OnUpdateProduceListingDocument, options);
      }
export type OnUpdateProduceListingSubscriptionHookResult = ReturnType<typeof useOnUpdateProduceListingSubscription>;
export type OnUpdateProduceListingSubscriptionResult = Apollo.SubscriptionResult<OnUpdateProduceListingSubscription>;
export const OnDeleteProduceListingDocument = gql`
    subscription OnDeleteProduceListing {
  onDeleteProduceListing {
    id
    title
    farmId
    farmOwnerId
    produceVarietyId
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnDeleteProduceListingSubscription__
 *
 * To run a query within a React component, call `useOnDeleteProduceListingSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnDeleteProduceListingSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnDeleteProduceListingSubscription({
 *   variables: {
 *   },
 * });
 */
export function useOnDeleteProduceListingSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnDeleteProduceListingSubscription, OnDeleteProduceListingSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnDeleteProduceListingSubscription, OnDeleteProduceListingSubscriptionVariables>(OnDeleteProduceListingDocument, options);
      }
export type OnDeleteProduceListingSubscriptionHookResult = ReturnType<typeof useOnDeleteProduceListingSubscription>;
export type OnDeleteProduceListingSubscriptionResult = Apollo.SubscriptionResult<OnDeleteProduceListingSubscription>;
export const OnCreateNotificationDocument = gql`
    subscription OnCreateNotification($filter: ModelSubscriptionNotificationFilterInput, $userId: String) {
  onCreateNotification(filter: $filter, userId: $userId) {
    id
    userId
    title
    message
    read
    actionLink
    imageLink
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnCreateNotificationSubscription__
 *
 * To run a query within a React component, call `useOnCreateNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateNotificationSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useOnCreateNotificationSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateNotificationSubscription, OnCreateNotificationSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateNotificationSubscription, OnCreateNotificationSubscriptionVariables>(OnCreateNotificationDocument, options);
      }
export type OnCreateNotificationSubscriptionHookResult = ReturnType<typeof useOnCreateNotificationSubscription>;
export type OnCreateNotificationSubscriptionResult = Apollo.SubscriptionResult<OnCreateNotificationSubscription>;
export const OnUpdateNotificationDocument = gql`
    subscription OnUpdateNotification($filter: ModelSubscriptionNotificationFilterInput, $userId: String) {
  onUpdateNotification(filter: $filter, userId: $userId) {
    id
    userId
    title
    message
    read
    actionLink
    imageLink
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnUpdateNotificationSubscription__
 *
 * To run a query within a React component, call `useOnUpdateNotificationSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateNotificationSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateNotificationSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useOnUpdateNotificationSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateNotificationSubscription, OnUpdateNotificationSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnUpdateNotificationSubscription, OnUpdateNotificationSubscriptionVariables>(OnUpdateNotificationDocument, options);
      }
export type OnUpdateNotificationSubscriptionHookResult = ReturnType<typeof useOnUpdateNotificationSubscription>;
export type OnUpdateNotificationSubscriptionResult = Apollo.SubscriptionResult<OnUpdateNotificationSubscription>;
export const OnCreateOrderDocument = gql`
    subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput, $userId: String) {
  onCreateOrder(filter: $filter, userId: $userId) {
    id
    userId
    status
    subtotal
    tax
    total
    deliveryFee
    deliveryAddressId
    deliveryNotes
    requestedDeliveryDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnCreateOrderSubscription__
 *
 * To run a query within a React component, call `useOnCreateOrderSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateOrderSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateOrderSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useOnCreateOrderSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateOrderSubscription, OnCreateOrderSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateOrderSubscription, OnCreateOrderSubscriptionVariables>(OnCreateOrderDocument, options);
      }
export type OnCreateOrderSubscriptionHookResult = ReturnType<typeof useOnCreateOrderSubscription>;
export type OnCreateOrderSubscriptionResult = Apollo.SubscriptionResult<OnCreateOrderSubscription>;
export const OnUpdateOrderDocument = gql`
    subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput, $userId: String) {
  onUpdateOrder(filter: $filter, userId: $userId) {
    id
    userId
    status
    subtotal
    tax
    total
    deliveryFee
    deliveryAddressId
    deliveryNotes
    requestedDeliveryDate
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnUpdateOrderSubscription__
 *
 * To run a query within a React component, call `useOnUpdateOrderSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateOrderSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateOrderSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useOnUpdateOrderSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateOrderSubscription, OnUpdateOrderSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnUpdateOrderSubscription, OnUpdateOrderSubscriptionVariables>(OnUpdateOrderDocument, options);
      }
export type OnUpdateOrderSubscriptionHookResult = ReturnType<typeof useOnUpdateOrderSubscription>;
export type OnUpdateOrderSubscriptionResult = Apollo.SubscriptionResult<OnUpdateOrderSubscription>;
export const OnCreateOrderItemDocument = gql`
    subscription OnCreateOrderItem($filter: ModelSubscriptionOrderItemFilterInput, $userId: String) {
  onCreateOrderItem(filter: $filter, userId: $userId) {
    id
    orderId
    userId
    farmId
    produceListingId
    quantity
    price
    subtotal
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnCreateOrderItemSubscription__
 *
 * To run a query within a React component, call `useOnCreateOrderItemSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnCreateOrderItemSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnCreateOrderItemSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useOnCreateOrderItemSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnCreateOrderItemSubscription, OnCreateOrderItemSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnCreateOrderItemSubscription, OnCreateOrderItemSubscriptionVariables>(OnCreateOrderItemDocument, options);
      }
export type OnCreateOrderItemSubscriptionHookResult = ReturnType<typeof useOnCreateOrderItemSubscription>;
export type OnCreateOrderItemSubscriptionResult = Apollo.SubscriptionResult<OnCreateOrderItemSubscription>;
export const OnUpdateOrderItemDocument = gql`
    subscription OnUpdateOrderItem($filter: ModelSubscriptionOrderItemFilterInput, $userId: String) {
  onUpdateOrderItem(filter: $filter, userId: $userId) {
    id
    orderId
    userId
    farmId
    produceListingId
    quantity
    price
    subtotal
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useOnUpdateOrderItemSubscription__
 *
 * To run a query within a React component, call `useOnUpdateOrderItemSubscription` and pass it any options that fit your needs.
 * When your component renders, `useOnUpdateOrderItemSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOnUpdateOrderItemSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useOnUpdateOrderItemSubscription(baseOptions?: Apollo.SubscriptionHookOptions<OnUpdateOrderItemSubscription, OnUpdateOrderItemSubscriptionVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useSubscription<OnUpdateOrderItemSubscription, OnUpdateOrderItemSubscriptionVariables>(OnUpdateOrderItemDocument, options);
      }
export type OnUpdateOrderItemSubscriptionHookResult = ReturnType<typeof useOnUpdateOrderItemSubscription>;
export type OnUpdateOrderItemSubscriptionResult = Apollo.SubscriptionResult<OnUpdateOrderItemSubscription>;