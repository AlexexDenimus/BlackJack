import React from 'react';
import { Filter, TextInput, BooleanInput, NumberInput } from 'react-admin';

export const UsersFilter = props => (
  <Filter {...props}>
    <TextInput source="name" label="Author" alwaysOn />
    <TextInput source="email" label="Email" />
    <NumberInput label="Visits" source="visits" step={1} />
    <BooleanInput label="Premium user" source="premiumUser" />
  </Filter>
);
