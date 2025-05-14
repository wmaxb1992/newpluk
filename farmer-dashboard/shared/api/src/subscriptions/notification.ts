import { useEffect } from 'react';
import { 
  useOnCreateNotificationSubscription,
  useOnUpdateNotificationSubscription
} from '../graphql';

/**
 * Custom hook for subscribing to new notification creation events
 */
export const useNotificationCreatedSubscription = (userId?: string, onNotificationCreated?: (notification: any) => void) => {
  const { data, loading, error } = useOnCreateNotificationSubscription({
    variables: userId ? { userId } : undefined,
    skip: !userId
  });

  useEffect(() => {
    if (data?.onCreateNotification && onNotificationCreated) {
      onNotificationCreated(data.onCreateNotification);
    }
  }, [data, onNotificationCreated]);

  return {
    newNotification: data?.onCreateNotification,
    loading,
    error
  };
};

/**
 * Custom hook for subscribing to notification update events
 * Useful for tracking when notifications are read
 */
export const useNotificationUpdatedSubscription = (userId?: string, onNotificationUpdated?: (notification: any) => void) => {
  const { data, loading, error } = useOnUpdateNotificationSubscription({
    variables: userId ? { userId } : undefined,
    skip: !userId
  });

  useEffect(() => {
    if (data?.onUpdateNotification && onNotificationUpdated) {
      onNotificationUpdated(data.onUpdateNotification);
    }
  }, [data, onNotificationUpdated]);

  return {
    updatedNotification: data?.onUpdateNotification,
    loading,
    error
  };
};
