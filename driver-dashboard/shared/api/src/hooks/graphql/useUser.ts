import { useCallback } from 'react';
import { 
  useGetUserQuery, 
  useListUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  GetUserQueryVariables,
  ListUsersQueryVariables,
  CreateUserMutationVariables,
  UpdateUserMutationVariables,
  DeleteUserMutationVariables,
  User,
  CreateUserInput,
  UpdateUserInput
} from '../../graphql/generated';
import { ApolloError } from '@apollo/client';

export interface UseUserResult {
  // Queries
  getUser: (variables: GetUserQueryVariables) => Promise<User | null>;
  listUsers: (variables?: ListUsersQueryVariables) => Promise<User[] | null>;
  
  // Mutations
  createUser: (input: CreateUserInput) => Promise<User | null>;
  updateUser: (input: UpdateUserInput) => Promise<User | null>;
  deleteUser: (id: string) => Promise<User | null>;
  
  // Loading states
  loading: {
    getUser: boolean;
    listUsers: boolean;
    createUser: boolean;
    updateUser: boolean;
    deleteUser: boolean;
  };
  
  // Error states
  errors: {
    getUser: ApolloError | undefined;
    listUsers: ApolloError | undefined;
    createUser: ApolloError | undefined;
    updateUser: ApolloError | undefined;
    deleteUser: ApolloError | undefined;
  };
}

export const useUser = (): UseUserResult => {
  // Queries
  const { loading: getUserLoading, error: getUserError, refetch: refetchUser } = useGetUserQuery({ skip: true });
  const { loading: listUsersLoading, error: listUsersError, refetch: refetchUsers } = useListUsersQuery({ skip: true });
  
  // Mutations
  const [createUserMutation, { loading: createUserLoading, error: createUserError }] = useCreateUserMutation();
  const [updateUserMutation, { loading: updateUserLoading, error: updateUserError }] = useUpdateUserMutation();
  const [deleteUserMutation, { loading: deleteUserLoading, error: deleteUserError }] = useDeleteUserMutation();
  
  // Query handlers
  const getUser = useCallback(async (variables: GetUserQueryVariables): Promise<User | null> => {
    try {
      const { data } = await refetchUser(variables);
      return data?.getUser || null;
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  }, [refetchUser]);
  
  const listUsers = useCallback(async (variables?: ListUsersQueryVariables): Promise<User[] | null> => {
    try {
      const { data } = await refetchUsers(variables || {});
      return data?.listUsers?.items?.filter(Boolean) as User[] || null;
    } catch (error) {
      console.error('Error fetching users:', error);
      return null;
    }
  }, [refetchUsers]);
  
  // Mutation handlers
  const createUser = useCallback(async (input: CreateUserInput): Promise<User | null> => {
    try {
      const { data } = await createUserMutation({
        variables: { input },
        refetchQueries: ['ListUsers'],
      });
      return data?.createUser || null;
    } catch (error) {
      console.error('Error creating user:', error);
      return null;
    }
  }, [createUserMutation]);
  
  const updateUser = useCallback(async (input: UpdateUserInput): Promise<User | null> => {
    try {
      const { data } = await updateUserMutation({
        variables: { input },
        refetchQueries: ['GetUser', 'ListUsers'],
      });
      return data?.updateUser || null;
    } catch (error) {
      console.error('Error updating user:', error);
      return null;
    }
  }, [updateUserMutation]);
  
  const deleteUser = useCallback(async (id: string): Promise<User | null> => {
    try {
      const { data } = await deleteUserMutation({
        variables: { input: { id } },
        refetchQueries: ['ListUsers'],
      });
      return data?.deleteUser || null;
    } catch (error) {
      console.error('Error deleting user:', error);
      return null;
    }
  }, [deleteUserMutation]);
  
  return {
    // Queries
    getUser,
    listUsers,
    
    // Mutations
    createUser,
    updateUser,
    deleteUser,
    
    // Loading states
    loading: {
      getUser: getUserLoading,
      listUsers: listUsersLoading,
      createUser: createUserLoading,
      updateUser: updateUserLoading,
      deleteUser: deleteUserLoading,
    },
    
    // Error states
    errors: {
      getUser: getUserError,
      listUsers: listUsersError,
      createUser: createUserError,
      updateUser: updateUserError,
      deleteUser: deleteUserError,
    },
  };
};
