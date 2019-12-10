import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Flex, Box } from 'rebass';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import {
  Header1,
  Header2,
  Header3,
  Header4,
  Header5,
  Header6,
  Body,
  BodyBold,
  BodyItalic,
  BodyLight,
  Caption,
} from '../ui/Typography';
import { CreateEventModal } from './events/CreateEventModal';
import '../utils/setupAxiosInterceptors';

const Button = styled.button`
  color: white;
  padding: 4px 8px;
  border: 1px solid green;
  background: green;
  width: 144px;
  align-self: center;
  margin: 8px;
  cursor: pointer;
  border-radius: 4px;
`;

export const App = withRouter((props: any) => {
  const { history } = props;
  const [showModal, switchModal] = useState(false);
  const [cookies, , removeCookies] = useCookies(['token', 'user']);
  const handleLogout = () => {
    removeCookies('token', { path: '/' });
    removeCookies('user', { path: '/' });
    history.push('/login');
  };
  const redirectToLogin = () => {
    history.push('/login');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Header1>Header1</Header1>
        <Header2>Header2</Header2>
        <Header3>Header3</Header3>
        <Header4>Header4</Header4>
        <Header5>Header5</Header5>
        <Header6>Header6</Header6>
        <Flex flexDirection="column">
          <Box mt="8px" width="440px">
            <Body>
              Мы подберем Вам прическу или выполним Вашу. Позаботимся о Вашей бороде. Кальян и Sony
              PlayStation к Вашим услугам. Мы не курим кальян в присутствии детей.
            </Body>
          </Box>
          <Box mt="8px" width="440px">
            <BodyBold>
              Мы подберем Вам прическу или выполним Вашу. Позаботимся о Вашей бороде. Кальян и Sony
              PlayStation к Вашим услугам. Мы не курим кальян в присутствии детей.
            </BodyBold>
          </Box>
          <Box mt="8px" width="440px">
            <BodyLight letterSpacing={1}>
              Мы подберем Вам прическу или выполним Вашу. Позаботимся о Вашей бороде. Кальян и Sony
              PlayStation к Вашим услугам. Мы не курим кальян в присутствии детей.
            </BodyLight>
          </Box>
          <Box mt="8px" width="440px">
            <BodyItalic fontSize={3}>
              Мы подберем Вам прическу или выполним Вашу. Позаботимся о Вашей бороде. Кальян и Sony
              PlayStation к Вашим услугам. Мы не курим кальян в присутствии детей.
            </BodyItalic>
          </Box>
          <Box mt="8px">
            <Caption color="red">Ошибка. Поля введены неверно</Caption>
          </Box>
          <Box mt="8px" width="440px">
            <Caption color="blue">Выберете ваш город</Caption>
          </Box>
          <Box mt="8px" width="440px">
            <Caption color="yellow">Не забудьте сохранить изменения</Caption>
          </Box>
          <Box mt="8px" width="440px">
            <Caption color="green">Изменения успешно сохранены</Caption>
          </Box>
          <Box mt="8px" width="440px">
            <Caption color="cocoa">Выберете ваш город</Caption>
          </Box>
          <Box mt="8px" width="440px">
            <Caption color="grey">Выберете ваш город</Caption>
          </Box>
          <Box mt="8px" width="440px">
            <Caption color="pink">Выберете ваш город</Caption>
          </Box>
          {cookies.token ? (
            <Button onClick={handleLogout}>Logout</Button>
          ) : (
            <Button onClick={redirectToLogin}>Login</Button>
          )}
          <Button onClick={() => switchModal(true)}>Modal</Button>
          {showModal && (
            <CreateEventModal
              onDismiss={() => switchModal(false)}
              showDialog={showModal}
            ></CreateEventModal>
          )}
        </Flex>
      </header>
    </div>
  );
});
