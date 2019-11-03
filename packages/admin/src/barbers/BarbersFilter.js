import React from 'react';
import { Filter, TextInput } from 'react-admin';

export const BarbersFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);
