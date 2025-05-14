export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface UIState {
  theme: 'light' | 'dark';
  isOffline: boolean;
  toasts: Toast[];
}

export interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

export type ModalType = 
  | 'settings'
  | 'profile'
  | 'share'
  | 'feedback'
  | 'none';

export interface NavigationState {
  currentRoute: string;
  previousRoute: string | null;
  modalStack: ModalType[];
  navigationHistory: string[];
  params: Record<string, any>;
  isNavigating: boolean;
}

export interface SettingsState {
  language: string;
  notifications: {
    push: boolean;
    email: boolean;
    inApp: boolean;
  };
  accessibility: {
    reduceMotion: boolean;
    largeText: boolean;
    highContrast: boolean;
  };
  privacy: {
    shareAnalytics: boolean;
    shareCrashReports: boolean;
  };
}

export interface AppState {
  auth: AuthState;
  ui: UIState;
  navigation: NavigationState;
} 