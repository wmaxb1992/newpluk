import { useCallback } from 'react';
import { 
  useGetFarmQuery, 
  useListFarmsQuery,
  useFarmsByOwnerIdQuery,
  useCreateFarmMutation,
  useUpdateFarmMutation,
  useDeleteFarmMutation,
  GetFarmQueryVariables,
  ListFarmsQueryVariables,
  FarmsByOwnerIdQueryVariables,
  CreateFarmMutationVariables,
  UpdateFarmMutationVariables,
  DeleteFarmMutationVariables,
  Farm,
  CreateFarmInput,
  UpdateFarmInput,
  ModelSortDirection
} from '../../graphql/generated';
import { ApolloError } from '@apollo/client';

export interface UseFarmResult {
  // Queries
  getFarm: (variables: GetFarmQueryVariables) => Promise<Farm | null>;
  listFarms: (variables?: ListFarmsQueryVariables) => Promise<Farm[] | null>;
  getFarmsByOwnerId: (ownerId: string, sortDirection?: ModelSortDirection) => Promise<Farm[] | null>;
  
  // Mutations
  createFarm: (input: CreateFarmInput) => Promise<Farm | null>;
  updateFarm: (input: UpdateFarmInput) => Promise<Farm | null>;
  deleteFarm: (id: string) => Promise<Farm | null>;
  
  // Loading states
  loading: {
    getFarm: boolean;
    listFarms: boolean;
    getFarmsByOwnerId: boolean;
    createFarm: boolean;
    updateFarm: boolean;
    deleteFarm: boolean;
  };
  
  // Error states
  errors: {
    getFarm: ApolloError | undefined;
    listFarms: ApolloError | undefined;
    getFarmsByOwnerId: ApolloError | undefined;
    createFarm: ApolloError | undefined;
    updateFarm: ApolloError | undefined;
    deleteFarm: ApolloError | undefined;
  };
}

export const useFarm = (): UseFarmResult => {
  // Queries
  const { loading: getFarmLoading, error: getFarmError, refetch: refetchFarm } = useGetFarmQuery({ skip: true });
  const { loading: listFarmsLoading, error: listFarmsError, refetch: refetchFarms } = useListFarmsQuery({ skip: true });
  const { loading: farmsByOwnerIdLoading, error: farmsByOwnerIdError, refetch: refetchFarmsByOwnerId } = useFarmsByOwnerIdQuery({ skip: true });
  
  // Mutations
  const [createFarmMutation, { loading: createFarmLoading, error: createFarmError }] = useCreateFarmMutation();
  const [updateFarmMutation, { loading: updateFarmLoading, error: updateFarmError }] = useUpdateFarmMutation();
  const [deleteFarmMutation, { loading: deleteFarmLoading, error: deleteFarmError }] = useDeleteFarmMutation();
  
  // Query handlers
  const getFarm = useCallback(async (variables: GetFarmQueryVariables): Promise<Farm | null> => {
    try {
      const { data } = await refetchFarm(variables);
      return data?.getFarm || null;
    } catch (error) {
      console.error('Error fetching farm:', error);
      return null;
    }
  }, [refetchFarm]);
  
  const listFarms = useCallback(async (variables?: ListFarmsQueryVariables): Promise<Farm[] | null> => {
    try {
      const { data } = await refetchFarms(variables || {});
      return data?.listFarms?.items?.filter(Boolean) as Farm[] || null;
    } catch (error) {
      console.error('Error fetching farms:', error);
      return null;
    }
  }, [refetchFarms]);
  
  const getFarmsByOwnerId = useCallback(async (
    ownerId: string, 
    sortDirection?: ModelSortDirection
  ): Promise<Farm[] | null> => {
    try {
      const { data } = await refetchFarmsByOwnerId({
        ownerId,
        sortDirection,
      });
      return data?.farmsByOwnerId?.items?.filter(Boolean) as Farm[] || null;
    } catch (error) {
      console.error('Error fetching farms by owner:', error);
      return null;
    }
  }, [refetchFarmsByOwnerId]);
  
  // Mutation handlers
  const createFarm = useCallback(async (input: CreateFarmInput): Promise<Farm | null> => {
    try {
      const { data } = await createFarmMutation({
        variables: { input },
        refetchQueries: ['ListFarms', 'FarmsByOwnerId'],
      });
      return data?.createFarm || null;
    } catch (error) {
      console.error('Error creating farm:', error);
      return null;
    }
  }, [createFarmMutation]);
  
  const updateFarm = useCallback(async (input: UpdateFarmInput): Promise<Farm | null> => {
    try {
      const { data } = await updateFarmMutation({
        variables: { input },
        refetchQueries: ['GetFarm', 'ListFarms', 'FarmsByOwnerId'],
      });
      return data?.updateFarm || null;
    } catch (error) {
      console.error('Error updating farm:', error);
      return null;
    }
  }, [updateFarmMutation]);
  
  const deleteFarm = useCallback(async (id: string): Promise<Farm | null> => {
    try {
      const { data } = await deleteFarmMutation({
        variables: { input: { id } },
        refetchQueries: ['ListFarms', 'FarmsByOwnerId'],
      });
      return data?.deleteFarm || null;
    } catch (error) {
      console.error('Error deleting farm:', error);
      return null;
    }
  }, [deleteFarmMutation]);
  
  return {
    // Queries
    getFarm,
    listFarms,
    getFarmsByOwnerId,
    
    // Mutations
    createFarm,
    updateFarm,
    deleteFarm,
    
    // Loading states
    loading: {
      getFarm: getFarmLoading,
      listFarms: listFarmsLoading,
      getFarmsByOwnerId: farmsByOwnerIdLoading,
      createFarm: createFarmLoading,
      updateFarm: updateFarmLoading,
      deleteFarm: deleteFarmLoading,
    },
    
    // Error states
    errors: {
      getFarm: getFarmError,
      listFarms: listFarmsError,
      getFarmsByOwnerId: farmsByOwnerIdError,
      createFarm: createFarmError,
      updateFarm: updateFarmError,
      deleteFarm: deleteFarmError,
    },
  };
};
