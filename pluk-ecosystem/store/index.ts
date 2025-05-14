import { create } from 'zustand';
import { createAuthSlice, AuthSlice } from './slices/auth';
import { createUISlice, UISlice } from './slices/ui';
import { createNavigationSlice, NavigationSlice } from './slices/navigation';

export type StoreState = AuthSlice & UISlice & NavigationSlice;

export const useStore = create<StoreState>()((...args) => ({
  ...createAuthSlice(...args),
  ...createUISlice(...args),
  ...createNavigationSlice(...args),
}));

// Selector hooks for better performance
export const useAuth = () => useStore((state) => state.auth);
export const useUser = () => useStore((state) => state.auth.user);
export const useIsAuthenticated = () => useStore((state) => state.auth.isAuthenticated);
export const useTheme = () => useStore((state) => state.ui.theme);
export const useToasts = () => useStore((state) => state.ui.toasts);

// Navigation selectors
export const useNavigation = () => useStore((state) => state.navigation);
export const useCurrentRoute = () => useStore((state) => state.navigation.currentRoute);
export const useNavigationParams = () => useStore((state) => state.navigation.params);
export const useModalStack = () => useStore((state) => state.navigation.modalStack);
export const useCurrentModal = () => useStore((state) => {
  const modalStack = state.navigation.modalStack;
  return modalStack[modalStack.length - 1] || 'none';
});

// Action hooks
export const useAuthActions = () => {
  const { login, logout, updateUser, clearError } = useStore();
  return { login, logout, updateUser, clearError };
};

export const useUIActions = () => {
  const { setTheme, setOfflineStatus, addToast, removeToast } = useStore();
  return { setTheme, setOfflineStatus, addToast, removeToast };
};

export const useNavigationActions = () => {
  const { navigate, goBack, resetNavigation, pushModal, popModal, replaceModal, clearModals, setParams } = useStore();
  return { navigate, goBack, resetNavigation, pushModal, popModal, replaceModal, clearModals, setParams };
}; 