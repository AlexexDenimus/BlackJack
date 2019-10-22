import React from 'react';
import { Edit, SimpleForm, TextInput, ImageField, ImageInput, LongTextInput } from 'react-admin';

export const BarberEdit = props => (
  <Edit {...props} title="Barber info" hasDelete={false}>
    <SimpleForm>
      <TextInput source="name" label="Barber name" />
      <LongTextInput source="description" label="Description" resettable />
      <ImageInput source="picture" label="Picture" accept="image/*">
        <ImageField source="src" title="alt" />
      </ImageInput>
    </SimpleForm>
  </Edit>
);
