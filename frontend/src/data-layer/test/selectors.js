import { counterFailure } from "./actions";

export type { ReduxState } from '../types';

export const selectCounter = (state: ReduxState) => state.counter ? state.counter.number : 0;