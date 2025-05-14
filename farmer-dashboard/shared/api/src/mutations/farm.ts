import { 
  useCreateFarmMutation, 
  useUpdateFarmMutation,
  useDeleteFarmMutation,
  CreateFarmInput,
  UpdateFarmInput
} from '../graphql';

/**
 * Custom hook for creating a farm with error handling
 */
export const useCreateFarm = () => {
  const [createFarm, { loading, error }] = useCreateFarmMutation();

  const create = async (input: CreateFarmInput) => {
    try {
      const response = await createFarm({
        variables: { input },
        // Update the cache to include the new farm
        update: (cache, { data }) => {
          if (data?.createFarm) {
            cache.modify({
              fields: {
                listFarms: (existingFarms = { items: [] }) => {
                  const newFarmRef = cache.writeFragment({
                    data: data.createFarm,
                    fragment: /* GraphQL */ `
                      fragment NewFarm on Farm {
                        id
                        name
                        description
                        ownerId
                      }
                    `
                  });
                  return {
                    ...existingFarms,
                    items: [...existingFarms.items, newFarmRef]
                  };
                }
              }
            });
          }
        }
      });
      return response.data?.createFarm;
    } catch (err) {
      console.error('Error creating farm:', err);
      return null;
    }
  };

  return {
    createFarm: create,
    loading,
    error
  };
};

/**
 * Custom hook for updating a farm with error handling
 */
export const useUpdateFarm = () => {
  const [updateFarm, { loading, error }] = useUpdateFarmMutation();

  const update = async (input: UpdateFarmInput) => {
    try {
      const response = await updateFarm({
        variables: { input }
      });
      return response.data?.updateFarm;
    } catch (err) {
      console.error('Error updating farm:', err);
      return null;
    }
  };

  return {
    updateFarm: update,
    loading,
    error
  };
};

/**
 * Custom hook for deleting a farm with error handling
 */
export const useDeleteFarm = () => {
  const [deleteFarm, { loading, error }] = useDeleteFarmMutation();

  const remove = async (id: string) => {
    try {
      const response = await deleteFarm({
        variables: { input: { id } },
        // Update the cache to remove the deleted farm
        update: (cache, { data }) => {
          if (data?.deleteFarm) {
            cache.modify({
              fields: {
                listFarms: (existingFarms = { items: [] }, { readField }) => {
                  return {
                    ...existingFarms,
                    items: existingFarms.items.filter(
                      (farmRef: any) => readField('id', farmRef) !== id
                    )
                  };
                }
              }
            });
          }
        }
      });
      return response.data?.deleteFarm;
    } catch (err) {
      console.error('Error deleting farm:', err);
      return null;
    }
  };

  return {
    deleteFarm: remove,
    loading,
    error
  };
};
