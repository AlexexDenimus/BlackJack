import React from 'react';
import { Edit, SimpleForm, TextInput, ImageField, ImageInput, LongTextInput } from 'react-admin';

export const BarberEdit = props => (
  <Edit {...props} title="Barber info">
    <SimpleForm>
      <TextInput source="name" label="Barber name" />
      <LongTextInput source="description" label="Description" resettable />
      <ImageInput source="picture" label="Pictures" accept="image/*">
        <ImageField source="picture" title="name" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
