import React from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin';

export const EventsList = props => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="user.name" label="UserName" sortable={false} />
        <TextField source="barber.name" label="Barber" sortable={false} />
        <TextField source="service.name" label="Service" sortable={false} />
        <DateField source="date" />
        <TextField source="status" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
