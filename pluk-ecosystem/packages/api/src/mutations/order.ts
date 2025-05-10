import { 
  useCreateOrderMutation, 
  useUpdateOrderMutation,
  useCreateOrderItemMutation,
  useUpdateOrderItemMutation,
  CreateOrderInput,
  UpdateOrderInput,
  CreateOrderItemInput,
  UpdateOrderItemInput,
  OrderStatus
} from '../graphql';

/**
 * Custom hook for creating an order with error handling
 */
export const useCreateOrder = () => {
  const [createOrder, { loading, error }] = useCreateOrderMutation();

  const create = async (input: CreateOrderInput) => {
    try {
      const response = await createOrder({
        variables: { input },
        // Update the cache to include the new order
        update: (cache, { data }) => {
          if (data?.createOrder) {
            cache.modify({
              fields: {
                listOrders: (existingOrders = { items: [] }) => {
                  const newOrderRef = cache.writeFragment({
                    data: data.createOrder,
                    fragment: /* GraphQL */ `
                      fragment NewOrder on Order {
                        id
                        userId
                        status
                        total
                        createdAt
                      }
                    `
                  });
                  return {
                    ...existingOrders,
                    items: [...existingOrders.items, newOrderRef]
                  };
                }
              }
            });
          }
        }
      });
      return response.data?.createOrder;
    } catch (err) {
      console.error('Error creating order:', err);
      return null;
    }
  };

  return {
    createOrder: create,
    loading,
    error
  };
};

/**
 * Custom hook for updating an order status with error handling
 */
export const useUpdateOrderStatus = () => {
  const [updateOrder, { loading, error }] = useUpdateOrderMutation();

  const updateStatus = async (id: string, status: OrderStatus) => {
    try {
      const response = await updateOrder({
        variables: { 
          input: { 
            id, 
            status 
          } 
        }
      });
      return response.data?.updateOrder;
    } catch (err) {
      console.error('Error updating order status:', err);
      return null;
    }
  };

  return {
    updateOrderStatus: updateStatus,
    loading,
    error
  };
};

/**
 * Custom hook for adding an item to an order with error handling
 */
export const useAddOrderItem = () => {
  const [createOrderItem, { loading, error }] = useCreateOrderItemMutation();

  const addItem = async (input: CreateOrderItemInput) => {
    try {
      const response = await createOrderItem({
        variables: { input },
        // Update the cache to include the new order item
        update: (cache, { data }) => {
          if (data?.createOrderItem) {
            // We could update the order's items list here if needed
          }
        }
      });
      return response.data?.createOrderItem;
    } catch (err) {
      console.error('Error adding order item:', err);
      return null;
    }
  };

  return {
    addOrderItem: addItem,
    loading,
    error
  };
};

/**
 * Custom hook for updating an order item quantity with error handling
 */
export const useUpdateOrderItemQuantity = () => {
  const [updateOrderItem, { loading, error }] = useUpdateOrderItemMutation();

  const updateQuantity = async (id: string, quantity: number) => {
    try {
      const response = await updateOrderItem({
        variables: { 
          input: { 
            id, 
            quantity 
          } 
        }
      });
      return response.data?.updateOrderItem;
    } catch (err) {
      console.error('Error updating order item quantity:', err);
      return null;
    }
  };

  return {
    updateQuantity,
    loading,
    error
  };
};
