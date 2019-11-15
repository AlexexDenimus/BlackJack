// @flow

import { createAction } from 'redux-actions';
import type { ActionType } from 'redux-actions';
import { servicesService } from './ServicesService';
import type { ServicesMapper } from './types';
import type { ReduxState } from '../types';
import type { ThunkAction } from 'redux-thunk';

export const setServices = createAction(
  '@services/SET_SERVICES',
  (services: ServicesMapper) => services,
);

export type SetServices = ActionType<typeof setServices>;

export const fetchServicesFailure = createAction(
  '@services/FETCH_SERVICES_FAILURE',
  (error: Error) => error,
);

export type FetchServicesFailure = ActionType<typeof fetchServicesFailure>;

export const fetchServicesAsync = (): ThunkAction<void, ReduxState> => async dispatch => {
  try {
    const response = await servicesService.fetchServices();

    dispatch(setServices(response));
  } catch (error) {
    dispatch(fetchServicesFailure(error));
  }
};
