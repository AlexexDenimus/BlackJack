// @flow

import green from '@material-ui/core/colors/green';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const values = {
  xs: 0,
  sm: 768,
  md: 1024,
  lg: 1280,
  xl: 1560,
};

export default createMuiTheme({
  palette: {
    background: {
      default: '#eee',
    },
    primary: green,
    secondary: green,
    type: 'light',
  },
  breakpoints: { values },
  mixins: {
    gutters: styles => ({
      ...styles,
      paddingLeft: '1rem',
      paddingRight: '1rem',
    }),

    toolbar: {
      minHeight: 48,

      [`@media (min-width: ${values.sm}px)`]: {
        minHeight: 64,
      },
    },
  },
});
