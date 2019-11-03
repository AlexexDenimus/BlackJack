import React from 'react';
import { Create, SimpleForm, TextInput, NumberInput } from 'react-admin';

export const ServiceCreate = props => (
  <Create title="Create a Service" {...props}>
    <SimpleForm redirect="/services">
      <TextInput source="name" label="Service name" />
      <NumberInput source="price" label="Service price" />
    </SimpleForm>
  </Create>
);
