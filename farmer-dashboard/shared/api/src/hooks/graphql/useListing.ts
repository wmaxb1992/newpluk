import { useCallback } from 'react';
import { 
  useGetProduceListingQuery, 
  useListProduceListingsQuery,
  useProduceListingsByFarmIdQuery,
  useCreateProduceListingMutation,
  useUpdateProduceListingMutation,
  useDeleteProduceListingMutation,
  useOnCreateProduceListingSubscription,
  useOnUpdateProduceListingSubscription,
  useOnDeleteProduceListingSubscription,
  GetProduceListingQueryVariables,
  ListProduceListingsQueryVariables,
  ProduceListingsByFarmIdQueryVariables,
  ProduceListing,
  CreateProduceListingInput,
  UpdateProduceListingInput,
  ModelSortDirection
} from '../../graphql/generated';
import { ApolloError } from '@apollo/client';

export interface UseListingResult {
  // Queries
  getListing: (variables: GetProduceListingQueryVariables) => Promise<ProduceListing | null>;
  listListings: (variables?: ListProduceListingsQueryVariables) => Promise<ProduceListing[] | null>;
  getListingsByFarmId: (farmId: string, sortDirection?: ModelSortDirection) => Promise<ProduceListing[] | null>;
  
  // Mutations
  createListing: (input: CreateProduceListingInput) => Promise<ProduceListing | null>;
  updateListing: (input: UpdateProduceListingInput) => Promise<ProduceListing | null>;
  deleteListing: (id: string) => Promise<ProduceListing | null>;
  
  // Subscriptions
  onCreateListing: {
    data?: { onCreateProduceListing?: ProduceListing | null } | null;
    loading: boolean;
    error?: ApolloError;
  };
  onUpdateListing: {
    data?: { onUpdateProduceListing?: ProduceListing | null } | null;
    loading: boolean;
    error?: ApolloError;
  };
  onDeleteListing: {
    data?: { onDeleteProduceListing?: ProduceListing | null } | null;
    loading: boolean;
    error?: ApolloError;
  };
  
  // Loading states
  loading: {
    getListing: boolean;
    listListings: boolean;
    getListingsByFarmId: boolean;
    createListing: boolean;
    updateListing: boolean;
    deleteListing: boolean;
  };
  
  // Error states
  errors: {
    getListing: ApolloError | undefined;
    listListings: ApolloError | undefined;
    getListingsByFarmId: ApolloError | undefined;
    createListing: ApolloError | undefined;
    updateListing: ApolloError | undefined;
    deleteListing: ApolloError | undefined;
  };
}

export const useListing = (): UseListingResult => {
  // Queries
  const { loading: getListingLoading, error: getListingError, refetch: refetchListing } = useGetProduceListingQuery({ skip: true });
  const { loading: listListingsLoading, error: listListingsError, refetch: refetchListings } = useListProduceListingsQuery({ skip: true });
  const { loading: listingsByFarmIdLoading, error: listingsByFarmIdError, refetch: refetchListingsByFarmId } = useProduceListingsByFarmIdQuery({ skip: true });
  
  // Mutations
  const [createListingMutation, { loading: createListingLoading, error: createListingError }] = useCreateProduceListingMutation();
  const [updateListingMutation, { loading: updateListingLoading, error: updateListingError }] = useUpdateProduceListingMutation();
  const [deleteListingMutation, { loading: deleteListingLoading, error: deleteListingError }] = useDeleteProduceListingMutation();
  
  // Subscriptions
  const onCreateListing = useOnCreateProduceListingSubscription();
  const onUpdateListing = useOnUpdateProduceListingSubscription();
  const onDeleteListing = useOnDeleteProduceListingSubscription();
  
  // Query handlers
  const getListing = useCallback(async (variables: GetProduceListingQueryVariables): Promise<ProduceListing | null> => {
    try {
      const { data } = await refetchListing(variables);
      return data?.getProduceListing || null;
    } catch (error) {
      console.error('Error fetching listing:', error);
      return null;
    }
  }, [refetchListing]);
  
  const listListings = useCallback(async (variables?: ListProduceListingsQueryVariables): Promise<ProduceListing[] | null> => {
    try {
      const { data } = await refetchListings(variables || {});
      return data?.listProduceListings?.items?.filter(Boolean) as ProduceListing[] || null;
    } catch (error) {
      console.error('Error fetching listings:', error);
      return null;
    }
  }, [refetchListings]);
  
  const getListingsByFarmId = useCallback(async (
    farmId: string, 
    sortDirection?: ModelSortDirection
  ): Promise<ProduceListing[] | null> => {
    try {
      const { data } = await refetchListingsByFarmId({
        farmId,
        sortDirection,
      });
      return data?.produceListingsByFarmId?.items?.filter(Boolean) as ProduceListing[] || null;
    } catch (error) {
      console.error('Error fetching listings by farm:', error);
      return null;
    }
  }, [refetchListingsByFarmId]);
  
  // Mutation handlers
  const createListing = useCallback(async (input: CreateProduceListingInput): Promise<ProduceListing | null> => {
    try {
      const { data } = await createListingMutation({
        variables: { input },
        refetchQueries: ['ListProduceListings', 'ProduceListingsByFarmId'],
      });
      return data?.createProduceListing || null;
    } catch (error) {
      console.error('Error creating listing:', error);
      return null;
    }
  }, [createListingMutation]);
  
  const updateListing = useCallback(async (input: UpdateProduceListingInput): Promise<ProduceListing | null> => {
    try {
      const { data } = await updateListingMutation({
        variables: { input },
        refetchQueries: ['GetProduceListing', 'ListProduceListings', 'ProduceListingsByFarmId'],
      });
      return data?.updateProduceListing || null;
    } catch (error) {
      console.error('Error updating listing:', error);
      return null;
    }
  }, [updateListingMutation]);
  
  const deleteListing = useCallback(async (id: string): Promise<ProduceListing | null> => {
    try {
      const { data } = await deleteListingMutation({
        variables: { input: { id } },
        refetchQueries: ['ListProduceListings', 'ProduceListingsByFarmId'],
      });
      return data?.deleteProduceListing || null;
    } catch (error) {
      console.error('Error deleting listing:', error);
      return null;
    }
  }, [deleteListingMutation]);
  
  return {
    // Queries
    getListing,
    listListings,
    getListingsByFarmId,
    
    // Mutations
    createListing,
    updateListing,
    deleteListing,
    
    // Subscriptions
    onCreateListing,
    onUpdateListing,
    onDeleteListing,
    
    // Loading states
    loading: {
      getListing: getListingLoading,
      listListings: listListingsLoading,
      getListingsByFarmId: listingsByFarmIdLoading,
      createListing: createListingLoading,
      updateListing: updateListingLoading,
      deleteListing: deleteListingLoading,
    },
    
    // Error states
    errors: {
      getListing: getListingError,
      listListings: listListingsError,
      getListingsByFarmId: listingsByFarmIdError,
      createListing: createListingError,
      updateListing: updateListingError,
      deleteListing: deleteListingError,
    },
  };
};
