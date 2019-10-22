import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UsersList } from './users/UsersList';
import { UserEdit } from './users/UserEdit';
import { ServicesList } from './services/ServicesList';
import { ServiceEdit } from './services/ServiceEdit';
import { ServiceCreate } from './services/ServiceCreate';
import { BarbersList } from './barbers/BarbersList';
import { BarberEdit } from './barbers/BarberEdit';
import { BarberCreate } from './barbers/BarberCreate';
import { EventsList } from './events/EventsList';
import { EventEdit } from './events/EventEdit';
import theme from './theme';
import authProvider from './core/authProvider';
import dataProvider from './core/dataProvider';
import addUploadFeature from './core/addUploadFeature';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CreateIcon from '@material-ui/icons/Create';
import FaceIcon from '@material-ui/icons/Face';
import BookIcon from '@material-ui/icons/Book';

const uploadCapableDataProvider = addUploadFeature(dataProvider);

const App = () => (
  <Admin
    title="BlackJack Admin"
    authProvider={authProvider}
    dataProvider={uploadCapableDataProvider}
    theme={theme}
  >
    <Resource name="events" list={EventsList} edit={EventEdit} icon={BookIcon} />
    <Resource name="users" list={UsersList} edit={UserEdit} icon={AccountBoxIcon} />
    <Resource
      name="services"
      list={ServicesList}
      edit={ServiceEdit}
      create={ServiceCreate}
      icon={CreateIcon}
    />
    <Resource
      name="barbers"
      list={BarbersList}
      edit={BarberEdit}
      create={BarberCreate}
      icon={FaceIcon}
    />
  </Admin>
);

export default App;
