import { 
  useGetProduceListingQuery, 
  useListProduceListingsQuery,
  useListProduceListingsByFarmQuery,
  useListProduceListingsByVarietyQuery
} from '../graphql';

/**
 * Custom hook for fetching a produce listing by ID
 */
export const useProduceListing = (id: string) => {
  const { data, loading, error } = useGetProduceListingQuery({
    variables: { id },
    skip: !id,
  });

  return {
    listing: data?.getProduceListing,
    loading,
    error,
  };
};

/**
 * Custom hook for fetching produce listings with pagination and filtering
 */
export const useProduceListings = (limit = 20, nextToken?: string, filter?: any) => {
  const { data, loading, error, fetchMore } = useListProduceListingsQuery({
    variables: { limit, nextToken, filter },
  });

  const loadMore = () => {
    if (data?.listProduceListings?.nextToken) {
      fetchMore({
        variables: {
          nextToken: data.listProduceListings.nextToken,
        },
      });
    }
  };

  return {
    listings: data?.listProduceListings?.items || [],
    nextToken: data?.listProduceListings?.nextToken,
    loading,
    error,
    loadMore,
  };
};

/**
 * Custom hook for fetching produce listings by farm ID
 */
export const useProduceListingsByFarm = (farmId: string, limit = 20, nextToken?: string) => {
  const { data, loading, error, fetchMore } = useListProduceListingsByFarmQuery({
    variables: { farmId, limit, nextToken },
    skip: !farmId,
  });

  const loadMore = () => {
    if (data?.listProduceListingsByFarm?.nextToken) {
      fetchMore({
        variables: {
          nextToken: data.listProduceListingsByFarm.nextToken,
        },
      });
    }
  };

  return {
    listings: data?.listProduceListingsByFarm?.items || [],
    nextToken: data?.listProduceListingsByFarm?.nextToken,
    loading,
    error,
    loadMore,
  };
};

/**
 * Custom hook for fetching produce listings by variety ID
 * Useful for showing all listings of a specific produce variety
 */
export const useProduceListingsByVariety = (varietyId: string, limit = 20, nextToken?: string) => {
  const { data, loading, error, fetchMore } = useListProduceListingsByVarietyQuery({
    variables: { varietyId, limit, nextToken },
    skip: !varietyId,
  });

  const loadMore = () => {
    if (data?.listProduceListingsByVariety?.nextToken) {
      fetchMore({
        variables: {
          nextToken: data.listProduceListingsByVariety.nextToken,
        },
      });
    }
  };

  return {
    listings: data?.listProduceListingsByVariety?.items || [],
    nextToken: data?.listProduceListingsByVariety?.nextToken,
    loading,
    error,
    loadMore,
  };
};
