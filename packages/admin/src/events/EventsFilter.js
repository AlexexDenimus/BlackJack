import React from 'react';
import { Filter, DateInput, SelectInput, ReferenceInput } from 'react-admin';

export const EventsFilter = props => (
  <Filter {...props}>
    <ReferenceInput label="Username" source="user._id" reference="users">
      <SelectInput optionText="name" optionValue="_id" />
    </ReferenceInput>
    <ReferenceInput label="Barber" source="barber._id" reference="barbers">
      <SelectInput optionText="name" optionValue="_id" />
    </ReferenceInput>
    <ReferenceInput label="Service" source="service._id" reference="services">
      <SelectInput optionText="name" optionValue="_id" />
    </ReferenceInput>
    <SelectInput
      source="status"
      choices={[
        { id: 'done', name: 'Done' },
        { id: 'decline', name: 'Decline' },
        { id: 'waiting', name: 'Waiting' },
      ]}
    />
    <DateInput source="date" />
  </Filter>
);
