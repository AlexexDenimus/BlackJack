import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UsersList } from './users/UsersList';
import { UserEdit } from './users/UserEdit';
import { ServicesList } from './services/ServicesList';
import { ServiceEdit } from './services/ServiceEdit';
import { ServiceCreate } from './services/ServiceCreate';
import theme from './theme';
import authProvider from './core/authProvider';
import dataProvider from './core/dataProvider';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CreateIcon from '@material-ui/icons/Create';

const App = () => (
  <Admin
    title="BlackJack Admin"
    authProvider={authProvider}
    dataProvider={dataProvider}
    theme={theme}
  >
    <Resource name="users" list={UsersList} edit={UserEdit} icon={AccountBoxIcon} />
    <Resource
      name="services"
      list={ServicesList}
      edit={ServiceEdit}
      create={ServiceCreate}
      icon={CreateIcon}
    />
  </Admin>
);

export default App;
