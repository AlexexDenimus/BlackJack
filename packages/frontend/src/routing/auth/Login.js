// @flow

import React, { useRef } from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import { authService } from '../../data-layer/auth/AuthService';
import { Header1 } from '../../ui/Typography';

export const TextField = styled.input`
  border: 1px solid black;
`;

export const Login = (props: any) => {
  const [, setCookie] = useCookies(['token', 'user']);
  const emailRef = useRef('');
  const passwordRef = useRef('');

  const handleSubmit = async event => {
    event.preventDefault();
    const { token, userId } = await authService.loginUser({
      // $FlowFixMe
      email: emailRef.current.value,
      // $FlowFixMe
      password: passwordRef.current.value,
    });
    setCookie('token', token, { path: '/' });
    setCookie('user', userId, { path: '/' });
  };
  return (
    <Flex flexDirection="column" m="auto" width="256px">
      <Header1>Login</Header1>
      <form onSubmit={handleSubmit}>
        <TextField type="text" name="email" placeholder="Email" ref={emailRef} />
        <TextField type="password" name="password" placeholder="Password" ref={passwordRef} />
        <TextField type="submit" />
      </form>
    </Flex>
  );
};
