// @flow

import React from 'react';
import { List, Datagrid, TextField, EmailField, NumberField } from 'react-admin';

export const UsersList = props => {
  console.log(props);
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" label="Author" width="5rem" sortable={false} />
        <NumberField textAlign="center" source="visits" />
        <EmailField source="email" label="Email" width="10rem" sortable={false} />
        <TextField source="type" label="Role" sortable={false} />
      </Datagrid>
    </List>
  );
};
