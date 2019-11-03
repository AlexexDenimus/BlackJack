import React from 'react';
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from 'react-admin';
import { EventsFilter } from './EventsFilter';

export const EventsList = props => {
  return (
    <List filters={<EventsFilter />} {...props}>
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
