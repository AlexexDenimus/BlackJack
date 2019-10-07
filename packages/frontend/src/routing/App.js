import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Flex, Box } from 'grid-styled';
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

export const App = () => (
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
      </Flex>
    </header>
  </div>
);
