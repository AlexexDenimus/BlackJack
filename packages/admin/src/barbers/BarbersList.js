import React from 'react';
import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';
import { BarbersFilter } from './BarbersFilter';

export const BarbersList = props => {
  return (
    <List filters={<BarbersFilter />} {...props}>
      <Datagrid>
        <TextField source="name" label="Barber" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
