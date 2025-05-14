/**
 * Navigation types for the Pluk ecosystem
 * These types define the navigation structure for each app
 */

// Consumer App Navigation Types
export type ConsumerRootParamList = {
  Auth: undefined;
  Main: undefined;
};

export type ConsumerAuthParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Onboarding: undefined;
  ForgotPassword: undefined;
};

export type ConsumerMainParamList = {
  Home: undefined;
  Explore: undefined;
  Cart: undefined;
  Orders: undefined;
  Profile: undefined;
};

export type ConsumerHomeParamList = {
  Home: undefined;
  CategoryList: { categoryId?: string; title?: string };
  SubcategoryList: { subcategoryId: string; title: string };
  TypeList: { typeId: string; title: string };
  ProductDetails: { listingId: string };
  FarmProfile: { farmId: string };
};

export type ConsumerExploreParamList = {
  Search: undefined;
  SearchResults: { query: string; filters?: any };
  FarmList: undefined;
  FarmProfile: { farmId: string };
  ProductDetails: { listingId: string };
};

export type ConsumerCartParamList = {
  Cart: undefined;
  Checkout: undefined;
  PaymentMethod: undefined;
  OrderConfirmation: { orderId: string };
};

export type ConsumerOrdersParamList = {
  OrderList: undefined;
  OrderDetails: { orderId: string };
  TrackDelivery: { orderId: string; deliveryId: string };
};

export type ConsumerProfileParamList = {
  Profile: undefined;
  EditProfile: undefined;
  Addresses: undefined;
  AddAddress: { addressId?: string };
  PaymentMethods: undefined;
  AddPaymentMethod: { paymentMethodId?: string };
  ShoppingLists: undefined;
  ShoppingListDetails: { listId: string };
  Preferences: undefined;
  Settings: undefined;
  Support: undefined;
};

// Farmer App Navigation Types
export type FarmerRootParamList = {
  Auth: undefined;
  Main: undefined;
};

export type FarmerAuthParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Onboarding: undefined;
  ForgotPassword: undefined;
};

export type FarmerMainParamList = {
  Dashboard: undefined;
  Inventory: undefined;
  Listings: undefined;
  Orders: undefined;
  Social: undefined;
  Profile: undefined;
};

export type FarmerDashboardParamList = {
  Dashboard: undefined;
  Analytics: undefined;
  Metrics: { metricType: string };
};

export type FarmerInventoryParamList = {
  InventoryList: undefined;
  InventoryBatchDetails: { batchId: string };
  AddInventoryBatch: { batchId?: string };
  PreHarvestList: undefined;
  PreHarvestDetails: { listingId: string };
  AddPreHarvestListing: { listingId?: string; batchId?: string };
};

export type FarmerListingsParamList = {
  ListingList: undefined;
  ListingDetails: { listingId: string };
  AddListing: { listingId?: string; batchId?: string; preHarvestId?: string };
};

export type FarmerOrdersParamList = {
  OrderList: undefined;
  OrderDetails: { orderId: string };
};

export type FarmerSocialParamList = {
  Posts: undefined;
  PostDetails: { postId: string };
  AddPost: { postId?: string; preHarvestId?: string };
  Followers: undefined;
};

export type FarmerProfileParamList = {
  Profile: undefined;
  EditProfile: undefined;
  FarmProfile: undefined;
  EditFarmProfile: undefined;
  MarketSchedule: undefined;
  EditMarketSchedule: { scheduleId?: string };
  Settings: undefined;
};

// Driver App Navigation Types
export type DriverRootParamList = {
  Auth: undefined;
  Main: undefined;
};

export type DriverAuthParamList = {
  Splash: undefined;
  Login: undefined;
  Register: undefined;
  Onboarding: undefined;
  ForgotPassword: undefined;
};

export type DriverMainParamList = {
  Dashboard: undefined;
  Deliveries: undefined;
  Earnings: undefined;
  Profile: undefined;
};

export type DriverDashboardParamList = {
  Dashboard: undefined;
  Schedule: undefined;
};

export type DriverDeliveriesParamList = {
  DeliveryList: undefined;
  DeliveryDetails: { deliveryId: string };
  Route: { deliveryId: string };
  PickupConfirmation: { deliveryId: string; farmId: string };
  DeliveryConfirmation: { deliveryId: string; orderId: string };
};

export type DriverEarningsParamList = {
  EarningsSummary: undefined;
  EarningsHistory: undefined;
  EarningsDetails: { period: string };
};

export type DriverProfileParamList = {
  Profile: undefined;
  EditProfile: undefined;
  Vehicle: undefined;
  EditVehicle: { vehicleId?: string };
  Settings: undefined;
};

// Admin Portal Navigation Types (Web)
export type AdminNavigation = {
  Dashboard: string;
  Users: string;
  Farms: string;
  Drivers: string;
  Orders: string;
  Content: string;
  Analytics: string;
  Settings: string;
};
