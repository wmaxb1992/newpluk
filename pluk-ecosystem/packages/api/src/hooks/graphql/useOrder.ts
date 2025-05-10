import { useCallback } from 'react';
import { 
  useGetOrderQuery, 
  useListOrdersQuery,
  useOrdersByUserIdQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useOnCreateOrderSubscription,
  useOnUpdateOrderSubscription,
  useCreateOrderItemMutation,
  useUpdateOrderItemMutation,
  useOnCreateOrderItemSubscription,
  useOnUpdateOrderItemSubscription,
  GetOrderQueryVariables,
  ListOrdersQueryVariables,
  OrdersByUserIdQueryVariables,
  Order,
  OrderItem,
  CreateOrderInput,
  UpdateOrderInput,
  CreateOrderItemInput,
  UpdateOrderItemInput,
  ModelSortDirection
} from '../../graphql/generated';
import { ApolloError } from '@apollo/client';

export interface UseOrderResult {
  // Order Queries
  getOrder: (variables: GetOrderQueryVariables) => Promise<Order | null>;
  listOrders: (variables?: ListOrdersQueryVariables) => Promise<Order[] | null>;
  getOrdersByUserId: (userId: string, sortDirection?: ModelSortDirection) => Promise<Order[] | null>;
  
  // Order Mutations
  createOrder: (input: CreateOrderInput) => Promise<Order | null>;
  updateOrder: (input: UpdateOrderInput) => Promise<Order | null>;
  deleteOrder: (id: string) => Promise<Order | null>;
  
  // OrderItem Mutations
  createOrderItem: (input: CreateOrderItemInput) => Promise<OrderItem | null>;
  updateOrderItem: (input: UpdateOrderItemInput) => Promise<OrderItem | null>;
  
  // Subscriptions
  onCreateOrder: {
    data?: { onCreateOrder?: Order | null } | null;
    loading: boolean;
    error?: ApolloError;
  };
  onUpdateOrder: {
    data?: { onUpdateOrder?: Order | null } | null;
    loading: boolean;
    error?: ApolloError;
  };
  onCreateOrderItem: {
    data?: { onCreateOrderItem?: OrderItem | null } | null;
    loading: boolean;
    error?: ApolloError;
  };
  onUpdateOrderItem: {
    data?: { onUpdateOrderItem?: OrderItem | null } | null;
    loading: boolean;
    error?: ApolloError;
  };
  
  // Loading states
  loading: {
    getOrder: boolean;
    listOrders: boolean;
    getOrdersByUserId: boolean;
    createOrder: boolean;
    updateOrder: boolean;
    deleteOrder: boolean;
    createOrderItem: boolean;
    updateOrderItem: boolean;
  };
  
  // Error states
  errors: {
    getOrder: ApolloError | undefined;
    listOrders: ApolloError | undefined;
    getOrdersByUserId: ApolloError | undefined;
    createOrder: ApolloError | undefined;
    updateOrder: ApolloError | undefined;
    deleteOrder: ApolloError | undefined;
    createOrderItem: ApolloError | undefined;
    updateOrderItem: ApolloError | undefined;
  };
}

export const useOrder = (): UseOrderResult => {
  // Order Queries
  const { loading: getOrderLoading, error: getOrderError, refetch: refetchOrder } = useGetOrderQuery({ skip: true });
  const { loading: listOrdersLoading, error: listOrdersError, refetch: refetchOrders } = useListOrdersQuery({ skip: true });
  const { loading: ordersByUserIdLoading, error: ordersByUserIdError, refetch: refetchOrdersByUserId } = useOrdersByUserIdQuery({ skip: true });
  
  // Order Mutations
  const [createOrderMutation, { loading: createOrderLoading, error: createOrderError }] = useCreateOrderMutation();
  const [updateOrderMutation, { loading: updateOrderLoading, error: updateOrderError }] = useUpdateOrderMutation();
  const [deleteOrderMutation, { loading: deleteOrderLoading, error: deleteOrderError }] = useDeleteOrderMutation();
  
  // OrderItem Mutations
  const [createOrderItemMutation, { loading: createOrderItemLoading, error: createOrderItemError }] = useCreateOrderItemMutation();
  const [updateOrderItemMutation, { loading: updateOrderItemLoading, error: updateOrderItemError }] = useUpdateOrderItemMutation();
  
  // Subscriptions
  const onCreateOrder = useOnCreateOrderSubscription();
  const onUpdateOrder = useOnUpdateOrderSubscription();
  const onCreateOrderItem = useOnCreateOrderItemSubscription();
  const onUpdateOrderItem = useOnUpdateOrderItemSubscription();
  
  // Order Query handlers
  const getOrder = useCallback(async (variables: GetOrderQueryVariables): Promise<Order | null> => {
    try {
      const { data } = await refetchOrder(variables);
      return data?.getOrder || null;
    } catch (error) {
      console.error('Error fetching order:', error);
      return null;
    }
  }, [refetchOrder]);
  
  const listOrders = useCallback(async (variables?: ListOrdersQueryVariables): Promise<Order[] | null> => {
    try {
      const { data } = await refetchOrders(variables || {});
      return data?.listOrders?.items?.filter(Boolean) as Order[] || null;
    } catch (error) {
      console.error('Error fetching orders:', error);
      return null;
    }
  }, [refetchOrders]);
  
  const getOrdersByUserId = useCallback(async (
    userId: string, 
    sortDirection?: ModelSortDirection
  ): Promise<Order[] | null> => {
    try {
      const { data } = await refetchOrdersByUserId({
        userId,
        sortDirection,
      });
      return data?.ordersByUserId?.items?.filter(Boolean) as Order[] || null;
    } catch (error) {
      console.error('Error fetching orders by user:', error);
      return null;
    }
  }, [refetchOrdersByUserId]);
  
  // Order Mutation handlers
  const createOrder = useCallback(async (input: CreateOrderInput): Promise<Order | null> => {
    try {
      const { data } = await createOrderMutation({
        variables: { input },
        refetchQueries: ['ListOrders', 'OrdersByUserId'],
      });
      return data?.createOrder || null;
    } catch (error) {
      console.error('Error creating order:', error);
      return null;
    }
  }, [createOrderMutation]);
  
  const updateOrder = useCallback(async (input: UpdateOrderInput): Promise<Order | null> => {
    try {
      const { data } = await updateOrderMutation({
        variables: { input },
        refetchQueries: ['GetOrder', 'ListOrders', 'OrdersByUserId'],
      });
      return data?.updateOrder || null;
    } catch (error) {
      console.error('Error updating order:', error);
      return null;
    }
  }, [updateOrderMutation]);
  
  const deleteOrder = useCallback(async (id: string): Promise<Order | null> => {
    try {
      const { data } = await deleteOrderMutation({
        variables: { input: { id } },
        refetchQueries: ['ListOrders', 'OrdersByUserId'],
      });
      return data?.deleteOrder || null;
    } catch (error) {
      console.error('Error deleting order:', error);
      return null;
    }
  }, [deleteOrderMutation]);
  
  // OrderItem Mutation handlers
  const createOrderItem = useCallback(async (input: CreateOrderItemInput): Promise<OrderItem | null> => {
    try {
      const { data } = await createOrderItemMutation({
        variables: { input },
        refetchQueries: ['GetOrder'],
      });
      return data?.createOrderItem || null;
    } catch (error) {
      console.error('Error creating order item:', error);
      return null;
    }
  }, [createOrderItemMutation]);
  
  const updateOrderItem = useCallback(async (input: UpdateOrderItemInput): Promise<OrderItem | null> => {
    try {
      const { data } = await updateOrderItemMutation({
        variables: { input },
        refetchQueries: ['GetOrder'],
      });
      return data?.updateOrderItem || null;
    } catch (error) {
      console.error('Error updating order item:', error);
      return null;
    }
  }, [updateOrderItemMutation]);
  
  return {
    // Order Queries
    getOrder,
    listOrders,
    getOrdersByUserId,
    
    // Order Mutations
    createOrder,
    updateOrder,
    deleteOrder,
    
    // OrderItem Mutations
    createOrderItem,
    updateOrderItem,
    
    // Subscriptions
    onCreateOrder,
    onUpdateOrder,
    onCreateOrderItem,
    onUpdateOrderItem,
    
    // Loading states
    loading: {
      getOrder: getOrderLoading,
      listOrders: listOrdersLoading,
      getOrdersByUserId: ordersByUserIdLoading,
      createOrder: createOrderLoading,
      updateOrder: updateOrderLoading,
      deleteOrder: deleteOrderLoading,
      createOrderItem: createOrderItemLoading,
      updateOrderItem: updateOrderItemLoading,
    },
    
    // Error states
    errors: {
      getOrder: getOrderError,
      listOrders: listOrdersError,
      getOrdersByUserId: ordersByUserIdError,
      createOrder: createOrderError,
      updateOrder: updateOrderError,
      deleteOrder: deleteOrderError,
      createOrderItem: createOrderItemError,
      updateOrderItem: updateOrderItemError,
    },
  };
};
