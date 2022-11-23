import { NotificationStyles } from '@core/models';

export class Notification {
  public id: string = '';
  public style: NotificationStyles = NotificationStyles.NONE;
  public icon: boolean = true;
  public timeout: number = 10000; // milliseconds
  public content: string = '';

  constructor(notification: Partial<Notification>) {
    notification.id = '';
    Object.assign(this, notification);
  }
}
