import React from 'react';
import { Create, SimpleForm, TextInput, ImageField, ImageInput, LongTextInput } from 'react-admin';

export const BarberCreate = props => (
  <Create title="Create a Barber" {...props}>
    <SimpleForm>
      <TextInput source="name" label="Barber name" />
      <LongTextInput source="description" label="Description" resettable />
      <ImageInput source="picture" label="Pictures" accept="image/*">
        <ImageField source="src" title="alt" />
      </ImageInput>
    </SimpleForm>
  </Create>
);
