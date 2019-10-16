import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const BarbersList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" label="Barber" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
