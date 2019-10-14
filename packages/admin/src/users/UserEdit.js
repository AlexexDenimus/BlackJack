import React from 'react';
import { Edit, SimpleForm, DisabledInput, TextInput, BooleanInput, NumberInput } from 'react-admin';

export const UserEdit = props => (
  <Edit {...props} title="User data">
    <SimpleForm>
      <TextInput source="name" label="Author" />
      <DisabledInput source="email" label="Email" />
      <BooleanInput label="Premium user" source="premiumUser" />
      <NumberInput label="Visits" source="visits" step={1} />
    </SimpleForm>
  </Edit>
);
