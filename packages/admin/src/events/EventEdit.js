import React from 'react';
import {
  Edit,
  SimpleForm,
  DisabledInput,
  DateInput,
  ReferenceInput,
  SelectInput,
} from 'react-admin';

export const EventEdit = props => (
  <Edit {...props} title="Event info" hasDelete={false}>
    <SimpleForm>
      <DisabledInput source="user.name" label="User name" />
      <DisabledInput source="user.email" label="User email" />
      <ReferenceInput label="Barber" source="barber._id" reference="barbers">
        <SelectInput optionText="name" optionValue="_id" />
      </ReferenceInput>
      <ReferenceInput label="Service" source="service._id" reference="services">
        <SelectInput optionText="name" optionValue="_id" />
      </ReferenceInput>
      <DateInput source="date" />
      <SelectInput
        source="status"
        choices={[
          { id: 'done', name: 'Done' },
          { id: 'decline', name: 'Decline' },
          { id: 'waiting', name: 'Waiting' },
        ]}
      />
    </SimpleForm>
  </Edit>
);
