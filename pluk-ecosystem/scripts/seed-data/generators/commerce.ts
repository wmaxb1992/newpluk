import { faker } from '@faker-js/faker';
import { 
  executeGraphQL, 
  randomBoolean, 
  randomProduceImage,
  randomOrderStatus,
  randomLocation,
  formatAWSDate
} from '../utils';
import { 
  createProduceListing,
  createListingReview,
  createCart,
  createCartItem,
  createOrder,
  createOrderItem,
  createPayment
} from '../graphql';
import { seedConfig } from '../config';
import {
  Farm,
  ProduceVariety,
  InventoryBatch,
  ProduceListing,
  ListingReview,
  Cart,
  CartItem,
  Order,
  OrderItem,
  Payment,
  User,
  CreateProduceListingResponse,
  CreateListingReviewResponse,
  CreateCartResponse,
  CreateCartItemResponse,
  CreateOrderResponse,
  CreateOrderItemResponse,
  CreatePaymentResponse,
  Location
} from '../types';

// Generate produce listings
export const generateProduceListings = async (
  farms: Farm[],
  varieties: ProduceVariety[],
  inventoryBatches: InventoryBatch[],
  count: number = seedConfig.produceListingCount
) => {
  console.log(`Generating produce listings for ${farms.length} farms...`);
  
  const listings: ProduceListing[] = [];
  const batchesByFarm: Record<string, InventoryBatch[]> = inventoryBatches.reduce((acc: Record<string, InventoryBatch[]>, batch) => {
    if (!acc[batch.farmID]) {
      acc[batch.farmID] = [];
    }
    acc[batch.farmID].push(batch);
    return acc;
  }, {});
  
  for (const farm of farms) {
    // Generate listings for each farm
    for (let i = 0; i < count; i++) {
      // Select a random variety
      const variety = faker.helpers.arrayElement(varieties);
      
      // Try to link to an inventory batch if available
      let inventoryBatchID = null;
      if (batchesByFarm[farm.id] && batchesByFarm[farm.id].length > 0) {
        const batch: InventoryBatch = faker.helpers.arrayElement(batchesByFarm[farm.id]);
        inventoryBatchID = batch.id;
      }
      
      // Generate dates
      const now = new Date();
      const harvestDate = new Date(now.getTime() - faker.number.int({ min: 1, max: 14 }) * 24 * 60 * 60 * 1000);
      const expirationDate = new Date(now.getTime() + faker.number.int({ min: 3, max: 21 }) * 24 * 60 * 60 * 1000);
      
      // Calculate freshness score (0-100)
      const daysSinceHarvest = Math.floor((now.getTime() - harvestDate.getTime()) / (24 * 60 * 60 * 1000));
      const freshness = Math.max(0, 100 - (daysSinceHarvest * 5)); // Decrease by 5 points per day
      
      const listingData = {
        farmId: farm.id,
        varietyId: variety.id,
        inventoryBatchId: inventoryBatchID,
        title: `${variety.name} from ${farm.name}`,
        description: faker.lorem.paragraph(),
        pricePerUnit: faker.number.float({ min: 2, max: 20, precision: 0.01 }),
        unit: faker.helpers.arrayElement(['kg', 'lb', 'bunch', 'each']),
        quantityAvailable: faker.number.float({ min: 5, max: 100, precision: 0.1 }),
        organic: true, // Set to true since we don't have this in the Farm model anymore
        isInstantlyAvailable: randomBoolean(0.3), // 30% chance of being instantly available
        instantDeliveryFee: randomBoolean(0.3) ? faker.number.float({ min: 2, max: 10, precision: 0.01 }) : null,
        estimatedDeliveryMinutes: randomBoolean(0.3) ? faker.number.int({ min: 30, max: 120 }) : null,
        harvestDate: formatAWSDate(harvestDate),
        expirationDate: formatAWSDate(expirationDate),
        images: [randomProduceImage(), randomProduceImage()],
        freshness,
        ownerId: farm.ownerId
      };
      
      try {
        const response = await executeGraphQL<CreateProduceListingResponse>(createProduceListing, {
          input: listingData
        });
        
        const listing = response.data.createProduceListing;
        listings.push(listing);
        console.log(`Created produce listing: ${listing.title} (${listing.id}) for farm ${farm.name}`);
      } catch (error) {
        console.error(`Failed to create produce listing for farm ${farm.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${listings.length} produce listings`);
  return listings;
};

// Generate listing reviews
export const generateListingReviews = async (
  listings: ProduceListing[],
  users: User[]
) => {
  console.log(`Generating reviews for ${listings.length} listings...`);
  
  const reviews: ListingReview[] = [];
  const consumerUsers = users.filter(user => user.role === 'CONSUMER');
  
  if (consumerUsers.length === 0) {
    console.error('No consumer users found for listing reviews');
    return reviews;
  }
  
  for (const listing of listings) {
    // Determine if this listing will have reviews (50% chance)
    if (!randomBoolean(0.5)) {
      continue;
    }
    
    // Generate 1-3 reviews per listing
    const reviewCount = faker.number.int({ min: 1, max: 3 });
    
    // Select random users for reviews
    const selectedUsers = faker.helpers.arrayElements(consumerUsers, reviewCount);
    
    for (const user of selectedUsers) {
      const rating = faker.number.int({ min: 3, max: 5 }); // Mostly positive reviews (3-5 stars)
      
      const reviewData = {
        listingID: listing.id,
        userID: user.id,
        rating,
        comment: generateReviewComment(rating),
        owner: user.id
      };
      
      try {
        const response = await executeGraphQL<CreateListingReviewResponse>(createListingReview, {
          input: reviewData
        });
        
        const review = response.data.createListingReview;
        reviews.push(review);
        console.log(`Created review: ${review.id} (${review.rating}★) for listing ${listing.id} by user ${user.name}`);
      } catch (error) {
        console.error(`Failed to create review for listing ${listing.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${reviews.length} listing reviews`);
  return reviews;
};

// Helper function to generate review comments based on rating
const generateReviewComment = (rating: number): string => {
  if (rating === 5) {
    return faker.helpers.arrayElement([
      'Absolutely perfect! The freshest produce I\'ve ever had.',
      'Exceptional quality and flavor. Will definitely buy again!',
      'Farm-fresh and delicious. Highly recommend!',
      'Outstanding quality. You can taste the difference.',
      'Best I\'ve ever had. Worth every penny!'
    ]);
  } else if (rating === 4) {
    return faker.helpers.arrayElement([
      'Very good quality. Fresh and tasty.',
      'Really enjoyed these. Will buy again.',
      'Great flavor and freshness. Minor imperfections but still excellent.',
      'Very satisfied with my purchase. Good value.',
      'Fresh and delicious. Just a bit pricey.'
    ]);
  } else {
    return faker.helpers.arrayElement([
      'Decent quality but not as fresh as expected.',
      'Good flavor but arrived with some bruising.',
      'Average quality. Expected better for the price.',
      'Acceptable but not exceptional. Might try again.',
      'Okay but not as described. Slightly disappointed.'
    ]);
  }
};

// Generate carts
export const generateCarts = async (users: User[]) => {
  console.log(`Generating carts for users...`);
  
  const carts: Cart[] = [];
  const consumerUsers = users.filter(user => user.role === 'CONSUMER');
  
  if (consumerUsers.length === 0) {
    console.error('No consumer users found for carts');
    return carts;
  }
  
  // Create a cart for each consumer user
  for (const user of consumerUsers) {
    const cartData = {
      userID: user.id,
      owner: user.id
    };
    
    try {
      const response = await executeGraphQL<CreateCartResponse>(createCart, {
        input: cartData
      });
      
      const cart = response.data.createCart;
      carts.push(cart);
      console.log(`Created cart: ${cart.id} for user ${user.name}`);
    } catch (error) {
      console.error(`Failed to create cart for user ${user.id}:`, error);
    }
  }
  
  console.log(`Successfully created ${carts.length} carts`);
  return carts;
};

// Generate cart items
export const generateCartItems = async (
  carts: Cart[],
  listings: ProduceListing[]
) => {
  console.log(`Generating cart items for ${carts.length} carts...`);
  
  const cartItems: CartItem[] = [];
  
  // Add items to 70% of carts
  const cartsWithItems = faker.helpers.arrayElements(carts, Math.floor(carts.length * 0.7));
  
  for (const cart of cartsWithItems) {
    // Add 1-5 items to each cart
    const itemCount = faker.number.int({ min: 1, max: 5 });
    
    // Select random listings for cart items
    const selectedListings = faker.helpers.arrayElements(listings, itemCount);
    
    for (const listing of selectedListings) {
      const cartItemData = {
        cartID: cart.id,
        listingID: listing.id,
        quantity: faker.number.float({ min: 1, max: 5, precision: 0.1 }),
        owner: cart.owner
      };
      
      try {
        const response = await executeGraphQL<CreateCartItemResponse>(createCartItem, {
          input: cartItemData
        });
        
        const cartItem = response.data.createCartItem;
        cartItems.push(cartItem);
        console.log(`Created cart item: ${cartItem.id} for cart ${cart.id} with listing ${listing.id}`);
      } catch (error) {
        console.error(`Failed to create cart item for cart ${cart.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${cartItems.length} cart items`);
  return cartItems;
};

// Generate orders
export const generateOrders = async (
  users: User[],
  listings: ProduceListing[]
) => {
  console.log(`Generating orders...`);
  
  const orders: Order[] = [];
  const consumerUsers = users.filter(user => user.role === 'CONSUMER');
  
  if (consumerUsers.length === 0) {
    console.error('No consumer users found for orders');
    return orders;
  }
  
  // Create 1-3 orders for 80% of consumer users
  const usersWithOrders = faker.helpers.arrayElements(consumerUsers, Math.floor(consumerUsers.length * 0.8));
  
  for (const user of usersWithOrders) {
    // Generate 1-3 orders per user
    const orderCount = faker.number.int({ min: 1, max: 3 });
    
    for (let i = 0; i < orderCount; i++) {
      const status = randomOrderStatus();
      const deliveryAddress = randomLocation();
      
      // Calculate order totals
      const subtotal = faker.number.float({ min: 20, max: 100, precision: 0.01 });
      const tax = subtotal * 0.08; // 8% tax
      const deliveryFee = faker.number.float({ min: 5, max: 15, precision: 0.01 });
      const total = subtotal + tax + deliveryFee;
      
      const orderData = {
        userID: user.id,
        status,
        subtotal,
        tax,
        deliveryFee,
        total,
        deliveryAddress,
        deliveryNotes: randomBoolean(0.3) ? faker.lorem.sentence() : null,
        owner: user.id
      };
      
      try {
        const response = await executeGraphQL<CreateOrderResponse>(createOrder, {
          input: orderData
        });
        
        const order = response.data.createOrder;
        orders.push(order);
        console.log(`Created order: ${order.id} (${order.status}) for user ${user.name}`);
        
        // Generate order items
        await generateOrderItemsForOrder(order, listings);
        
        // Generate payment for the order
        await generatePaymentForOrder(order);
      } catch (error) {
        console.error(`Failed to create order for user ${user.id}:`, error);
      }
    }
  }
  
  console.log(`Successfully created ${orders.length} orders`);
  return orders;
};

// Helper function to generate order items for an order
const generateOrderItemsForOrder = async (order: Order, listings: ProduceListing[]) => {
  console.log(`Generating order items for order ${order.id}...`);
  
  // Generate 1-5 items per order
  const itemCount = faker.number.int({ min: 1, max: 5 });
  
  // Select random listings for order items
  const selectedListings = faker.helpers.arrayElements(listings, itemCount);
  
  for (const listing of selectedListings) {
    const quantity = faker.number.float({ min: 1, max: 5, precision: 0.1 });
    const pricePerUnit = listing.pricePerUnit || faker.number.float({ min: 2, max: 20, precision: 0.01 });
    const subtotal = quantity * pricePerUnit;
    
    const orderItemData = {
      orderID: order.id,
      listingID: listing.id,
      farmID: listing.farmID,
      quantity,
      pricePerUnit,
      subtotal,
      owner: order.owner
    };
    
    try {
      const response = await executeGraphQL<CreateOrderItemResponse>(createOrderItem, {
        input: orderItemData
      });
      
      const orderItem = response.data.createOrderItem;
      console.log(`Created order item: ${orderItem.id} for order ${order.id}`);
    } catch (error) {
      console.error(`Failed to create order item for order ${order.id}:`, error);
    }
  }
};

// Helper function to generate payment for an order
const generatePaymentForOrder = async (order: Order) => {
  console.log(`Generating payment for order ${order.id}...`);
  
  // Only completed or processing orders have payments
  if (!['PROCESSING', 'READY_FOR_PICKUP', 'OUT_FOR_DELIVERY', 'DELIVERED'].includes(order.status)) {
    return;
  }
  
  const paymentData = {
    orderID: order.id,
    amount: order.total,
    status: order.status === 'PROCESSING' ? 'PENDING' : 'COMPLETED',
    method: faker.helpers.arrayElement(['CREDIT_CARD', 'DEBIT_CARD', 'PAYPAL', 'APPLE_PAY', 'GOOGLE_PAY']),
    transactionId: faker.string.alphanumeric(16).toUpperCase(),
    owner: order.owner
  };
  
  try {
    const response = await executeGraphQL<CreatePaymentResponse>(createPayment, {
      input: paymentData
    });
    
    const payment = response.data.createPayment;
    console.log(`Created payment: ${payment.id} for order ${order.id}`);
  } catch (error) {
    console.error(`Failed to create payment for order ${order.id}:`, error);
  }
};
