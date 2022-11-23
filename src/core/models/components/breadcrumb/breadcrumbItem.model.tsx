export class BreadcrumbItem {
  public text: string = '';
  public screenName: string = '';
  public params: any = {};

  constructor(breadcrumbItem: Partial<BreadcrumbItem>) {
    Object.assign(this, breadcrumbItem);
  }
}
