import { configureStore } from '@reduxjs/toolkit';
import { AnyAction, combineReducers, EmptyObject, Store } from 'redux';
import { authReducer, AuthState } from './auth';
import { breadcrumbReducer, BreadcrumbState } from './breadcrumb';
import { notificationReducer, NotificationState } from './notification';

export type RootStateName = 'auth' | 'breadcrumb' | 'notification';

export type RootState = AuthState & BreadcrumbState & NotificationState;

export interface RootReducerProps {
  auth: AuthState;
  breadcrumb: BreadcrumbState;
  notification: NotificationState;
}

export const createAppStore = (): Store<EmptyObject & RootReducerProps, AnyAction> =>
  configureStore({
    reducer: combineReducers<RootReducerProps>({
      auth: authReducer,
      breadcrumb: breadcrumbReducer,
      notification: notificationReducer,
    }),
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
