import { StateCreator } from 'zustand';
import { NavigationState, ModalType } from '../types';

const MAX_HISTORY_LENGTH = 50;

const initialState: NavigationState = {
  currentRoute: '/',
  previousRoute: null,
  modalStack: [],
  navigationHistory: ['/'],
  params: {},
  isNavigating: false,
};

export interface NavigationSlice {
  navigation: NavigationState;
  navigate: (route: string, params?: Record<string, any>) => void;
  goBack: () => void;
  resetNavigation: (route: string) => void;
  pushModal: (modalType: ModalType) => void;
  popModal: () => void;
  replaceModal: (modalType: ModalType) => void;
  clearModals: () => void;
  setParams: (params: Record<string, any>) => void;
}

export const createNavigationSlice: StateCreator<NavigationSlice> = (set, get) => ({
  navigation: initialState,

  navigate: (route: string, params?: Record<string, any>) => {
    set((state) => {
      const newHistory = [...state.navigation.navigationHistory, route].slice(-MAX_HISTORY_LENGTH);
      
      return {
        navigation: {
          ...state.navigation,
          previousRoute: state.navigation.currentRoute,
          currentRoute: route,
          navigationHistory: newHistory,
          params: params || {},
          isNavigating: true,
        }
      };
    });

    // Reset isNavigating after a short delay
    setTimeout(() => {
      set((state) => ({
        navigation: {
          ...state.navigation,
          isNavigating: false,
        }
      }));
    }, 100);
  },

  goBack: () => {
    set((state) => {
      const history = state.navigation.navigationHistory;
      if (history.length <= 1) return state;

      const newHistory = history.slice(0, -1);
      const previousRoute = newHistory[newHistory.length - 2] || '/';
      const currentRoute = newHistory[newHistory.length - 1];

      return {
        navigation: {
          ...state.navigation,
          previousRoute,
          currentRoute,
          navigationHistory: newHistory,
          params: {},
          isNavigating: true,
        }
      };
    });

    setTimeout(() => {
      set((state) => ({
        navigation: {
          ...state.navigation,
          isNavigating: false,
        }
      }));
    }, 100);
  },

  resetNavigation: (route: string) => {
    set((state) => ({
      navigation: {
        ...initialState,
        currentRoute: route,
        navigationHistory: [route],
      }
    }));
  },

  pushModal: (modalType: ModalType) => {
    set((state) => ({
      navigation: {
        ...state.navigation,
        modalStack: [...state.navigation.modalStack, modalType],
      }
    }));
  },

  popModal: () => {
    set((state) => ({
      navigation: {
        ...state.navigation,
        modalStack: state.navigation.modalStack.slice(0, -1),
      }
    }));
  },

  replaceModal: (modalType: ModalType) => {
    set((state) => ({
      navigation: {
        ...state.navigation,
        modalStack: [...state.navigation.modalStack.slice(0, -1), modalType],
      }
    }));
  },

  clearModals: () => {
    set((state) => ({
      navigation: {
        ...state.navigation,
        modalStack: [],
      }
    }));
  },

  setParams: (params: Record<string, any>) => {
    set((state) => ({
      navigation: {
        ...state.navigation,
        params: {
          ...state.navigation.params,
          ...params,
        },
      }
    }));
  },
}); 