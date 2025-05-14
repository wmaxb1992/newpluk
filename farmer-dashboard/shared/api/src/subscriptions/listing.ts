import { useEffect } from 'react';
import { 
  useOnCreateProduceListingSubscription,
  useOnUpdateProduceListingSubscription,
  useOnDeleteProduceListingSubscription
} from '../graphql';

/**
 * Custom hook for subscribing to new produce listing creation events
 */
export const useProduceListingCreatedSubscription = (farmId?: string, onListingCreated?: (listing: any) => void) => {
  const { data, loading, error } = useOnCreateProduceListingSubscription({
    variables: farmId ? { farmId } : undefined,
    skip: !farmId
  });

  useEffect(() => {
    if (data?.onCreateProduceListing && onListingCreated) {
      onListingCreated(data.onCreateProduceListing);
    }
  }, [data, onListingCreated]);

  return {
    newListing: data?.onCreateProduceListing,
    loading,
    error
  };
};

/**
 * Custom hook for subscribing to produce listing update events
 * Useful for tracking price changes, availability updates, etc.
 */
export const useProduceListingUpdatedSubscription = (farmId?: string, onListingUpdated?: (listing: any) => void) => {
  const { data, loading, error } = useOnUpdateProduceListingSubscription({
    variables: farmId ? { farmId } : undefined,
    skip: !farmId
  });

  useEffect(() => {
    if (data?.onUpdateProduceListing && onListingUpdated) {
      onListingUpdated(data.onUpdateProduceListing);
    }
  }, [data, onListingUpdated]);

  return {
    updatedListing: data?.onUpdateProduceListing,
    loading,
    error
  };
};

/**
 * Custom hook for subscribing to produce listing deletion events
 */
export const useProduceListingDeletedSubscription = (farmId?: string, onListingDeleted?: (listing: any) => void) => {
  const { data, loading, error } = useOnDeleteProduceListingSubscription({
    variables: farmId ? { farmId } : undefined,
    skip: !farmId
  });

  useEffect(() => {
    if (data?.onDeleteProduceListing && onListingDeleted) {
      onListingDeleted(data.onDeleteProduceListing);
    }
  }, [data, onListingDeleted]);

  return {
    deletedListing: data?.onDeleteProduceListing,
    loading,
    error
  };
};
