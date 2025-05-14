import { 
  useCreateProduceListingMutation, 
  useUpdateProduceListingMutation,
  useDeleteProduceListingMutation,
  CreateProduceListingInput,
  UpdateProduceListingInput
} from '../graphql';

/**
 * Custom hook for creating a produce listing with error handling
 */
export const useCreateProduceListing = () => {
  const [createListing, { loading, error }] = useCreateProduceListingMutation();

  const create = async (input: CreateProduceListingInput) => {
    try {
      const response = await createListing({
        variables: { input },
        // Update the cache to include the new listing
        update: (cache, { data }) => {
          if (data?.createProduceListing) {
            // Update the main listings list
            cache.modify({
              fields: {
                listProduceListings: (existingListings = { items: [] }) => {
                  const newListingRef = cache.writeFragment({
                    data: data.createProduceListing,
                    fragment: /* GraphQL */ `
                      fragment NewListing on ProduceListing {
                        id
                        title
                        price
                        farmId
                        varietyId
                      }
                    `
                  });
                  return {
                    ...existingListings,
                    items: [...existingListings.items, newListingRef]
                  };
                }
              }
            });
            
            // Update the farm-specific listings list
            if (input.farmId) {
              cache.modify({
                fields: {
                  [`listProduceListingsByFarm({"farmId":"${input.farmId}"})`]: (existingListings = { items: [] }) => {
                    const newListingRef = cache.writeFragment({
                      data: data.createProduceListing,
                      fragment: /* GraphQL */ `
                        fragment NewFarmListing on ProduceListing {
                          id
                          title
                          price
                          farmId
                          varietyId
                        }
                      `
                    });
                    return {
                      ...existingListings,
                      items: [...existingListings.items, newListingRef]
                    };
                  }
                }
              });
            }
          }
        }
      });
      return response.data?.createProduceListing;
    } catch (err) {
      console.error('Error creating produce listing:', err);
      return null;
    }
  };

  return {
    createListing: create,
    loading,
    error
  };
};

/**
 * Custom hook for updating a produce listing with error handling
 */
export const useUpdateProduceListing = () => {
  const [updateListing, { loading, error }] = useUpdateProduceListingMutation();

  const update = async (input: UpdateProduceListingInput) => {
    try {
      const response = await updateListing({
        variables: { input }
      });
      return response.data?.updateProduceListing;
    } catch (err) {
      console.error('Error updating produce listing:', err);
      return null;
    }
  };

  return {
    updateListing: update,
    loading,
    error
  };
};

/**
 * Custom hook for deleting a produce listing with error handling
 */
export const useDeleteProduceListing = () => {
  const [deleteListing, { loading, error }] = useDeleteProduceListingMutation();

  const remove = async (id: string) => {
    try {
      const response = await deleteListing({
        variables: { input: { id } },
        // Update the cache to remove the deleted listing
        update: (cache, { data }) => {
          if (data?.deleteProduceListing) {
            // Remove from main listings list
            cache.modify({
              fields: {
                listProduceListings: (existingListings = { items: [] }, { readField }) => {
                  return {
                    ...existingListings,
                    items: existingListings.items.filter(
                      (listingRef: any) => readField('id', listingRef) !== id
                    )
                  };
                }
              }
            });
            
            // We would also need to remove it from farm-specific and variety-specific lists
            // but we don't have that information here without making additional queries
          }
        }
      });
      return response.data?.deleteProduceListing;
    } catch (err) {
      console.error('Error deleting produce listing:', err);
      return null;
    }
  };

  return {
    deleteListing: remove,
    loading,
    error
  };
};
