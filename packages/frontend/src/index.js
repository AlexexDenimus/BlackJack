import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './utils/setupAxiosInterceptors';
import { RootRouter } from './routing/RootRouter';
import * as serviceWorker from './serviceWorker';
import store from './store/store';
import { CookiesProvider } from 'react-cookie';

ReactDOM.render(
  <Provider store={store}>
    <CookiesProvider>
      <RootRouter />
    </CookiesProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
