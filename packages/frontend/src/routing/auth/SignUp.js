// @flow

import React, { useRef } from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { authService } from '../../data-layer/auth/AuthService';
import { Header1 } from '../../ui/Typography';

const Root = styled(Flex)`
  width: 256px;
  margin: auto;
`;

const TextField = styled.input`
  border: 1px solid black;
`;

export const SignUp = withRouter((props: any) => {
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = async event => {
    event.preventDefault();
    await authService.signUpUser({
      // $FlowFixMe
      email: emailRef.current.value,
      // $FlowFixMe
      password: passwordRef.current.value,
    });
    props.history.push('/login');
  };

  return (
    <Root flexDirection="column">
      <Header1>SignUp</Header1>
      <form onSubmit={handleSubmit}>
        <TextField type="text" name="email" placeholder="Email" ref={emailRef} />
        <TextField type="password" name="password" placeholder="Password" ref={passwordRef} />
        <TextField type="submit" />
      </form>
    </Root>
  );
});
