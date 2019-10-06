import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UsersList } from './users/UsersList';
import theme from './theme';
import authProvider from './core/authProvider';
import dataProvider from './core/dataProvider';

//const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
  <Admin
    title="BlackJack Admin"
    authProvider={authProvider}
    dataProvider={dataProvider}
    theme={theme}
  >
    <Resource name="users" list={UsersList} />
  </Admin>
);

export default App;
