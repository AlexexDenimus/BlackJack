import React from 'react';
import { Edit, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const ServiceEdit = props => (
  <Edit {...props} title="Service info" hasDelete={false}>
    <SimpleForm>
      <TextInput source="name" label="Service" />
      <NumberInput label="Price" source="price" />
    </SimpleForm>
  </Edit>
);
