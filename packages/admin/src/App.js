import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import theme from './theme';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin title="BlackJack Admin" dataProvider={dataProvider} theme={theme}>
    <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
