import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from 'react-admin';

export const ServicesList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="name" label="Service" />
        <NumberField textAlign="center" source="price" label="Price" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
