import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthUser } from '@core/models';

import { initialAuthState as initialState, AuthState } from './state';

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signIn: (state: AuthState, action: PayloadAction<AuthUser>) => {
      state.authUser = action.payload;
    },
    signOut: (state: AuthState) => {
      state.authUser = undefined;
    },
  },
});

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;
