import { useGetUserQuery, useListUsersQuery } from '../graphql';

/**
 * Custom hook for fetching a user by ID with error handling and loading state
 */
export const useUser = (id: string) => {
  const { data, loading, error } = useGetUserQuery({
    variables: { id },
    skip: !id,
  });

  return {
    user: data?.getUser,
    loading,
    error,
  };
};

/**
 * Custom hook for fetching users with pagination and filtering
 */
export const useUsers = (limit = 20, nextToken?: string, filter?: any) => {
  const { data, loading, error, fetchMore } = useListUsersQuery({
    variables: { limit, nextToken, filter },
  });

  const loadMore = () => {
    if (data?.listUsers?.nextToken) {
      fetchMore({
        variables: {
          nextToken: data.listUsers.nextToken,
        },
      });
    }
  };

  return {
    users: data?.listUsers?.items || [],
    nextToken: data?.listUsers?.nextToken,
    loading,
    error,
    loadMore,
  };
};
