import { MMKV } from 'react-native-mmkv';
import { StateStorage } from 'zustand/middleware';

/**
 * MMKV storage instance for the entire app
 * This provides high-performance local storage
 */
export const storage = new MMKV({
  id: 'pluk-app-storage',
  encryptionKey: 'pluk-secure-storage-key', // In production, this should be securely generated
});

/**
 * Zustand storage adapter for MMKV
 * This allows Zustand to use MMKV as its persistence layer
 */
export const zustandStorage: StateStorage = {
  getItem: (name: string) => {
    const value = storage.getString(name);
    return value ? value : null;
  },
  setItem: (name: string, value: string) => {
    storage.set(name, value);
  },
  removeItem: (name: string) => {
    storage.delete(name);
  },
};

/**
 * Helper function to check if data is stale based on TTL
 * @param lastUpdated Timestamp when data was last updated
 * @param ttlMs Time-to-live in milliseconds
 * @returns Boolean indicating if data should be refreshed
 */
export const isDataStale = (lastUpdated: number | undefined, ttlMs: number): boolean => {
  if (!lastUpdated) return true;
  return Date.now() - lastUpdated > ttlMs;
};

/**
 * TTL constants for different data categories
 */
export const TTL = {
  STATIC: 24 * 60 * 60 * 1000, // 24 hours for static data
  SEMI_STATIC: 60 * 60 * 1000, // 1 hour for semi-static data
  DYNAMIC: 5 * 60 * 1000, // 5 minutes for dynamic data
  REAL_TIME: 0, // No caching for real-time data
};
