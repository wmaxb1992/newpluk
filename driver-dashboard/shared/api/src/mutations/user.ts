import { 
  useCreateUserMutation, 
  useUpdateUserMutation,
  useDeleteUserMutation,
  CreateUserInput,
  UpdateUserInput
} from '../graphql';

/**
 * Custom hook for creating a user with error handling
 */
export const useCreateUser = () => {
  const [createUser, { loading, error }] = useCreateUserMutation();

  const create = async (input: CreateUserInput) => {
    try {
      const response = await createUser({
        variables: { input },
        // Update the cache to include the new user
        update: (cache, { data }) => {
          if (data?.createUser) {
            cache.modify({
              fields: {
                listUsers: (existingUsers = { items: [] }) => {
                  const newUserRef = cache.writeFragment({
                    data: data.createUser,
                    fragment: /* GraphQL */ `
                      fragment NewUser on User {
                        id
                        name
                        email
                        role
                      }
                    `
                  });
                  return {
                    ...existingUsers,
                    items: [...existingUsers.items, newUserRef]
                  };
                }
              }
            });
          }
        }
      });
      return response.data?.createUser;
    } catch (err) {
      console.error('Error creating user:', err);
      return null;
    }
  };

  return {
    createUser: create,
    loading,
    error
  };
};

/**
 * Custom hook for updating a user with error handling
 */
export const useUpdateUser = () => {
  const [updateUser, { loading, error }] = useUpdateUserMutation();

  const update = async (input: UpdateUserInput) => {
    try {
      const response = await updateUser({
        variables: { input }
      });
      return response.data?.updateUser;
    } catch (err) {
      console.error('Error updating user:', err);
      return null;
    }
  };

  return {
    updateUser: update,
    loading,
    error
  };
};

/**
 * Custom hook for deleting a user with error handling
 */
export const useDeleteUser = () => {
  const [deleteUser, { loading, error }] = useDeleteUserMutation();

  const remove = async (id: string) => {
    try {
      const response = await deleteUser({
        variables: { input: { id } },
        // Update the cache to remove the deleted user
        update: (cache, { data }) => {
          if (data?.deleteUser) {
            cache.modify({
              fields: {
                listUsers: (existingUsers = { items: [] }, { readField }) => {
                  return {
                    ...existingUsers,
                    items: existingUsers.items.filter(
                      (userRef: any) => readField('id', userRef) !== id
                    )
                  };
                }
              }
            });
          }
        }
      });
      return response.data?.deleteUser;
    } catch (err) {
      console.error('Error deleting user:', err);
      return null;
    }
  };

  return {
    deleteUser: remove,
    loading,
    error
  };
};
