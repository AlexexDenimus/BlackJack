import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  ArrayField,
  SingleFieldList,
  ChipField,
} from 'react-admin';
import { EventsFilter } from './EventsFilter';
import { UserNameField } from '../core/components/UserNameField';

export const EventsList = props => {
  return (
    <List filters={<EventsFilter />} {...props}>
      <Datagrid>
        <UserNameField sortable={false} />
        <TextField source="barber.name" label="Barber" sortable={false} />
        <ArrayField label="Services" source="service">
          <SingleFieldList>
            <ChipField source="name" />
          </SingleFieldList>
        </ArrayField>
        <DateField source="date" />
        <TextField source="status" />
        <EditButton />
        <DeleteButton />
      </Datagrid>
    </List>
  );
};
