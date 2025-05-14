import { 
  useGetFarmQuery, 
  useListFarmsQuery,
  useGetFarmByOwnerQuery
} from '../graphql';

/**
 * Custom hook for fetching a farm by ID
 */
export const useFarm = (id: string) => {
  const { data, loading, error } = useGetFarmQuery({
    variables: { id },
    skip: !id,
  });

  return {
    farm: data?.getFarm,
    loading,
    error,
  };
};

/**
 * Custom hook for fetching farms with pagination and filtering
 */
export const useFarms = (limit = 20, nextToken?: string, filter?: any) => {
  const { data, loading, error, fetchMore } = useListFarmsQuery({
    variables: { limit, nextToken, filter },
  });

  const loadMore = () => {
    if (data?.listFarms?.nextToken) {
      fetchMore({
        variables: {
          nextToken: data.listFarms.nextToken,
        },
      });
    }
  };

  return {
    farms: data?.listFarms?.items || [],
    nextToken: data?.listFarms?.nextToken,
    loading,
    error,
    loadMore,
  };
};

/**
 * Custom hook for fetching a farm by owner ID
 * Useful for getting a farmer's farm
 */
export const useFarmByOwner = (ownerId: string) => {
  const { data, loading, error } = useGetFarmByOwnerQuery({
    variables: { ownerId },
    skip: !ownerId,
  });

  return {
    farm: data?.getFarmByOwner?.items?.[0] || null,
    loading,
    error,
  };
};
