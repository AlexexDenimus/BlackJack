export type { ReduxState } from '../types';

export const selectServices = (state: ReduxState) => state.services.list;
