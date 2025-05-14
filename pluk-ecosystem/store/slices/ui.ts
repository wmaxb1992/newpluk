import { StateCreator } from 'zustand';
import { UIState, Toast } from '../types';

const initialState: UIState = {
  theme: 'light',
  isOffline: false,
  toasts: [],
};

export interface UISlice {
  ui: UIState;
  setTheme: (theme: 'light' | 'dark') => void;
  setOfflineStatus: (isOffline: boolean) => void;
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

export const createUISlice: StateCreator<UISlice> = (set) => ({
  ui: initialState,
  setTheme: (theme) => {
    set((state) => ({
      ui: { ...state.ui, theme }
    }));
  },
  setOfflineStatus: (isOffline) => {
    set((state) => ({
      ui: { ...state.ui, isOffline }
    }));
  },
  addToast: (toast) => {
    const id = Math.random().toString(36).substring(7);
    set((state) => ({
      ui: {
        ...state.ui,
        toasts: [...state.ui.toasts, { ...toast, id }]
      }
    }));

    // Auto-remove toast after duration (default: 3000ms)
    const duration = toast.duration || 3000;
    setTimeout(() => {
      set((state) => ({
        ui: {
          ...state.ui,
          toasts: state.ui.toasts.filter((t) => t.id !== id)
        }
      }));
    }, duration);
  },
  removeToast: (id) => {
    set((state) => ({
      ui: {
        ...state.ui,
        toasts: state.ui.toasts.filter((t) => t.id !== id)
      }
    }));
  },
}); 