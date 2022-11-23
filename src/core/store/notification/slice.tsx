import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Notification } from '@core/models';

import {
  initialNotificationState as initialState,
  NotificationState,
} from './state';

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification: (
      state: NotificationState,
      action: PayloadAction<Notification>,
    ) => {
      const notificationAlreadyExists = state.notifications.find(
        (notification) => notification.content === action.payload.content,
      );

      if (!notificationAlreadyExists) {
        state.notifications.push(action.payload);
      }
    },
    hideNotification: (state: NotificationState, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (notification) => notification.id !== action.payload,
      );
    },
  },
});

export const notificationReducer = notificationSlice.reducer;
export const notificationActions = notificationSlice.actions;
