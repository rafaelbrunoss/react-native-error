import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BreadcrumbItem } from '@core/models';

import { initialBreadcrumbState as initialState, BreadcrumbState } from './state';

export const breadcrumbSlice = createSlice({
  name: 'breadcrumb',
  initialState,
  reducers: {
    setBreadcrumb: (
      state: BreadcrumbState,
      action: PayloadAction<BreadcrumbItem[]>,
    ) => {
      state.breadcrumbs = initialState.breadcrumbs.concat(action.payload);
    },
    clearBreadcrumb: (state: BreadcrumbState) => {
      state.breadcrumbs = initialState.breadcrumbs;
    },
  },
});

export const breadcrumbReducer = breadcrumbSlice.reducer;
export const breadcrumbActions = breadcrumbSlice.actions;
