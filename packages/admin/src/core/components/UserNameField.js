import React from 'react';

export const UserNameField = ({ record = {} }) =>
  record.alternativeUser ? (
    <span>{record.alternativeUser.name}</span>
  ) : (
    <span>{record.user.name}</span>
  );
UserNameField.defaultProps = { label: 'User Name' };
