import React from 'react';
import { List, Datagrid, TextField, NumberField, EditButton, DeleteButton } from 'react-admin';
import { ServicesFilter } from './ServicesFilter';

export const ServicesList = props => {
  return (
    <List filters={<ServicesFilter />} {...props}>
      <Datagrid>
        <TextField source="name" label="Service" />
        <NumberField textAlign="center" source="price" label="Price" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
