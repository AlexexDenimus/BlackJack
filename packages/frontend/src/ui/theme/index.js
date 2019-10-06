// @flow

import { fonts } from './fonts';
import { colors } from './colors';

export const theme = Object.freeze({
  ...fonts,
  colors,
});

export type Theme = typeof theme;
