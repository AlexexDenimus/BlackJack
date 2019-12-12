import React from 'react';
import {
  Edit,
  SimpleForm,
  DisabledInput,
  DateInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from 'react-admin';

export const EventEdit = props => (
  <Edit {...props} title="Event info" hasDelete={false}>
    <SimpleForm>
      <DisabledInput source="user.name" label="User name" />
      <DisabledInput source="user.email" label="User email" />
      <ReferenceInput label="Barber" source="barber._id" reference="barbers">
        <SelectInput optionText="name" optionValue="_id" />
      </ReferenceInput>
      <ReferenceArrayInput label="Service" source="service._id" reference="services">
        <SelectArrayInput optionText="name" optionValue="service._id" />
      </ReferenceArrayInput>
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
