// @flow

import { createAction } from 'redux-actions';
import type { ActionType } from 'redux-actions';

export const catchError = createAction('@error/SERVICE_ERROR', (error: Error) => error);

export type CatchError = ActionType<typeof catchError>;
