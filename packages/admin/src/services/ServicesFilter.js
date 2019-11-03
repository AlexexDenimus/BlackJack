import React from 'react';
import { Filter, TextInput } from 'react-admin';

export const ServicesFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="name" alwaysOn />
  </Filter>
);
