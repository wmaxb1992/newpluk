import { StateCreator } from 'zustand';
import { AuthState, User } from '../types';

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
};

export interface AuthSlice {
  auth: AuthState;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUser: (user: Partial<User>) => void;
  clearError: () => void;
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  auth: initialState,
  login: async (email: string, password: string) => {
    set((state) => ({
      auth: { ...state.auth, isLoading: true, error: null }
    }));
    
    try {
      // TODO: Implement actual login logic here
      const mockUser: User = {
        id: '1',
        email,
        name: 'Test User',
      };
      
      set((state) => ({
        auth: {
          ...state.auth,
          user: mockUser,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        }
      }));
    } catch (error) {
      set((state) => ({
        auth: {
          ...state.auth,
          isLoading: false,
          error: error instanceof Error ? error.message : 'An error occurred',
        }
      }));
    }
  },
  logout: () => {
    set((state) => ({
      auth: { ...initialState }
    }));
  },
  updateUser: (userData: Partial<User>) => {
    set((state) => ({
      auth: {
        ...state.auth,
        user: state.auth.user ? { ...state.auth.user, ...userData } : null,
      }
    }));
  },
  clearError: () => {
    set((state) => ({
      auth: { ...state.auth, error: null }
    }));
  },
}); 