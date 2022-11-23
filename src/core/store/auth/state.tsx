import { AuthUser } from '@core/models';

export interface AuthState {
  authUser: AuthUser | undefined;
}

export const initialAuthState: AuthState = {
  authUser: AuthUser._currentUser,
};
