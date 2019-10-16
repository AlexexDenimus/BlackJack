import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  NumberField,
  BooleanField,
  EditButton,
} from 'react-admin';

export const UsersList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" label="Author" width="5rem" sortable={false} />
        <NumberField textAlign="center" source="visits" />
        <EmailField source="email" label="Email" width="10rem" sortable={false} />
        <BooleanField source="premiumUser" label="Premium User" />
        <EditButton />
      </Datagrid>
    </List>
  );
};
