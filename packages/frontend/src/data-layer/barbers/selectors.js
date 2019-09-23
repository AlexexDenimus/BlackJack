export type { ReduxState } from '../types';

export const selectState = (state: ReduxState) => state;

export const selectBarbers = (state: ReduxState) => state.barbers.list;

export const selectBarbersTotal = (state: ReduxState) => state.barbers.list.length;

