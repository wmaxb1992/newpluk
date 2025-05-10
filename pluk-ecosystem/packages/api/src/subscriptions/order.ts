import { useEffect } from 'react';
import { 
  useOnCreateOrderSubscription,
  useOnUpdateOrderSubscription,
  useOnCreateOrderItemSubscription,
  useOnUpdateOrderItemSubscription
} from '../graphql';

/**
 * Custom hook for subscribing to new order creation events
 */
export const useOrderCreatedSubscription = (userId?: string, onOrderCreated?: (order: any) => void) => {
  const { data, loading, error } = useOnCreateOrderSubscription({
    variables: userId ? { userId } : undefined,
    skip: !userId
  });

  useEffect(() => {
    if (data?.onCreateOrder && onOrderCreated) {
      onOrderCreated(data.onCreateOrder);
    }
  }, [data, onOrderCreated]);

  return {
    newOrder: data?.onCreateOrder,
    loading,
    error
  };
};

/**
 * Custom hook for subscribing to order status update events
 */
export const useOrderUpdatedSubscription = (userId?: string, onOrderUpdated?: (order: any) => void) => {
  const { data, loading, error } = useOnUpdateOrderSubscription({
    variables: userId ? { userId } : undefined,
    skip: !userId
  });

  useEffect(() => {
    if (data?.onUpdateOrder && onOrderUpdated) {
      onOrderUpdated(data.onUpdateOrder);
    }
  }, [data, onOrderUpdated]);

  return {
    updatedOrder: data?.onUpdateOrder,
    loading,
    error
  };
};

/**
 * Custom hook for subscribing to new order item creation events
 */
export const useOrderItemCreatedSubscription = (orderId?: string, onOrderItemCreated?: (orderItem: any) => void) => {
  const { data, loading, error } = useOnCreateOrderItemSubscription({
    variables: orderId ? { orderId } : undefined,
    skip: !orderId
  });

  useEffect(() => {
    if (data?.onCreateOrderItem && onOrderItemCreated) {
      onOrderItemCreated(data.onCreateOrderItem);
    }
  }, [data, onOrderItemCreated]);

  return {
    newOrderItem: data?.onCreateOrderItem,
    loading,
    error
  };
};

/**
 * Custom hook for subscribing to order item update events
 */
export const useOrderItemUpdatedSubscription = (orderId?: string, onOrderItemUpdated?: (orderItem: any) => void) => {
  const { data, loading, error } = useOnUpdateOrderItemSubscription({
    variables: orderId ? { orderId } : undefined,
    skip: !orderId
  });

  useEffect(() => {
    if (data?.onUpdateOrderItem && onOrderItemUpdated) {
      onOrderItemUpdated(data.onUpdateOrderItem);
    }
  }, [data, onOrderItemUpdated]);

  return {
    updatedOrderItem: data?.onUpdateOrderItem,
    loading,
    error
  };
};
