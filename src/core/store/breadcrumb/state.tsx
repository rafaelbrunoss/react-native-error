import { BreadcrumbItem } from '@core/models';

interface BreadcrumbState {
  breadcrumbs: BreadcrumbItem[];
}

const initialBreadcrumbState: BreadcrumbState = {
  breadcrumbs: [],
};

export { initialBreadcrumbState };
export type { BreadcrumbState };
