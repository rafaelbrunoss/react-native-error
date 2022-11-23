import { ComponentType, ReactNode } from 'react';
import { AppRouteType } from '@core/models';

export class AppRoute {
  public path: string = '/';
  public component: ComponentType | ReactNode | any = {};
  public type: AppRouteType = AppRouteType.STACK;
  public isPublic?: boolean = false;
  public useMainLayout?: boolean = true;
  public text?: string = '';
  public permission?: number = 0;

  constructor(appRoute: AppRoute) {
    Object.assign(this, appRoute);
  }
}
