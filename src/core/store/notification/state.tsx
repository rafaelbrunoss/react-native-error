import { Notification } from '@core/models';

export interface NotificationState {
  notifications: Notification[];
}

export const initialNotificationState: NotificationState = {
  notifications: [],
};
