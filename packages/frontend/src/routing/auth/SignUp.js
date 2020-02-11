// @flow

import React, { useRef, useState } from 'react';
import { Flex } from 'rebass';
import styled from 'styled-components';
import validate from 'validate.js';
import { withRouter } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import { useCookies } from 'react-cookie';
import { authService } from '../../data-layer/auth/AuthService';
import { Header1 } from '../../ui/Typography';

const TextField = styled.input`
  border: 1px solid black;
`;

export const SignUp = withRouter((props: any) => {
  const [, setCookie] = useCookies(['token', 'user']);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [error, setError] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();
    // $FlowFixMe
    const emailValidation = validate.single(emailRef.current.value, {
      presence: { allowEmpty: false, message: 'Введите Email' },
      email: { message: 'Email должен быть в формате example@mail.com' },
    });
    // $FlowFixMe
    const pwValidation = validate.single(passwordRef.current.value, {
      presence: { allowEmpty: false, message: 'Введите пароль' },
      length: { minimum: 6, tooShort: 'Пароль должен содержать 6 или более символов' },
    });

    if (!emailValidation && !pwValidation) {
      await authService.signUpUser({
        // $FlowFixMe
        email: emailRef.current.value,
        // $FlowFixMe
        password: passwordRef.current.value,
      });
      props.history.push('/login');
    } else emailValidation ? setError(emailValidation[0]) : setError(pwValidation[0]);
  };

  const googleSubmit = async response => {
    await authService.signUpUser({
      email: response.profileObj.email,
      password: response.tokenObj.login_hint,
      registrationType: 'google',
      publicId: response.googleId,
    });
    setCookie('token', response.tokenId, { path: '/' });
    setCookie('user', response.googleId, { path: '/' });
  };

  const handleFailure = response => {
    console.log(response);
  };

  return (
    <Flex flexDirection="column" m="auto" width="256px">
      <Header1>SignUp</Header1>
      <GoogleLogin
        clientId="201063677432-5mvoeuvm3gpqgtol7ril0rn3kbctvo23.apps.googleusercontent.com"
        buttonText="SignUp"
        onSuccess={googleSubmit}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
      />
      <form onSubmit={handleSubmit}>
        <TextField type="text" name="email" placeholder="Email" ref={emailRef} />
        <TextField type="password" name="password" placeholder="Password" ref={passwordRef} />
        <TextField type="submit" />
      </form>
      {error && <span>{error}</span>}
    </Flex>
  );
});
