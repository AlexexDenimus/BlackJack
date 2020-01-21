// @flow

import React, { Fragment } from 'react';
import { Box } from 'rebass';
// $FlowFixMe
import { useHistory } from 'react-router-dom';
import type { EventType } from '../../data-layer/events/types';

export const RegistrationType = (props: {
  changeEventType: EventType => void,
  setPage: number => void,
}) => {
  const history = useHistory();

  const redirectToSignUp = () => {
    history.push('/signup');
  };

  const chooseFastRegistration = () => {
    props.changeEventType('fast');
    props.setPage(2);
  };

  return (
    <Fragment>
      <Box>
        <button onClick={redirectToSignUp}>Зарегистрироваться</button>
      </Box>
      <Box>
        <button onClick={chooseFastRegistration}>Быстрый заказ</button>
      </Box>
    </Fragment>
  );
};
