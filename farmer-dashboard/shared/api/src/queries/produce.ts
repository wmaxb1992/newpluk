import { 
  useGetProduceCategoryQuery, 
  useListProduceCategoriesQuery,
  useGetProduceSubcategoryQuery,
  useListProduceSubcategoriesQuery,
  useGetProduceTypeQuery,
  useListProduceTypesQuery,
  useGetProduceVarietyQuery,
  useListProduceVarietiesQuery
} from '../graphql';

/**
 * Custom hook for fetching a produce category by ID
 */
export const useProduceCategory = (id: string) => {
  const { data, loading, error } = useGetProduceCategoryQuery({
    variables: { id },
    skip: !id,
  });

  return {
    category: data?.getProduceCategory,
    loading,
    error,
  };
};

/**
 * Custom hook for fetching produce categories with pagination
 */
export const useProduceCategories = (limit = 50, nextToken?: string) => {
  const { data, loading, error, fetchMore } = useListProduceCategoriesQuery({
    variables: { limit, nextToken },
  });

  const loadMore = () => {
    if (data?.listProduceCategories?.nextToken) {
      fetchMore({
        variables: {
          nextToken: data.listProduceCategories.nextToken,
        },
      });
    }
  };

  return {
    categories: data?.listProduceCategories?.items || [],
    nextToken: data?.listProduceCategories?.nextToken,
    loading,
    error,
    loadMore,
  };
};

/**
 * Custom hook for fetching a produce subcategory by ID
 */
export const useProduceSubcategory = (id: string) => {
  const { data, loading, error } = useGetProduceSubcategoryQuery({
    variables: { id },
    skip: !id,
  });

  return {
    subcategory: data?.getProduceSubcategory,
    loading,
    error,
  };
};

/**
 * Custom hook for fetching produce subcategories with filtering by category
 */
export const useProduceSubcategories = (categoryId?: string, limit = 50, nextToken?: string) => {
  const filter = categoryId ? { categoryId: { eq: categoryId } } : undefined;
  
  const { data, loading, error, fetchMore } = useListProduceSubcategoriesQuery({
    variables: { filter, limit, nextToken },
  });

  const loadMore = () => {
    if (data?.listProduceSubcategories?.nextToken) {
      fetchMore({
        variables: {
          nextToken: data.listProduceSubcategories.nextToken,
        },
      });
    }
  };

  return {
    subcategories: data?.listProduceSubcategories?.items || [],
    nextToken: data?.listProduceSubcategories?.nextToken,
    loading,
    error,
    loadMore,
  };
};
