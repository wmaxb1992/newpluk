import { UserRole } from '../../graphql/generated';

export interface AuthUser {
  id: string;
  email: string;
  name?: string;
  role?: UserRole;
  phoneNumber?: string;
  isVerified?: boolean;
}

export interface SignUpParams {
  email: string;
  password: string;
  name?: string;
  phoneNumber?: string;
  role?: UserRole;
}

export interface SignInParams {
  email: string;
  password: string;
}

export interface ConfirmSignUpParams {
  email: string;
  code: string;
}

export interface ForgotPasswordParams {
  email: string;
}

export interface ResetPasswordParams {
  email: string;
  code: string;
  newPassword: string;
}

export interface UpdateUserParams {
  name?: string;
  phoneNumber?: string;
  role?: UserRole;
}

export interface AuthState {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
}

export interface AuthContextType extends AuthState {
  signUp: (params: SignUpParams) => Promise<void>;
  confirmSignUp: (params: ConfirmSignUpParams) => Promise<void>;
  signIn: (params: SignInParams) => Promise<void>;
  signOut: () => Promise<void>;
  forgotPassword: (params: ForgotPasswordParams) => Promise<void>;
  resetPassword: (params: ResetPasswordParams) => Promise<void>;
  updateUser: (params: UpdateUserParams) => Promise<void>;
}
