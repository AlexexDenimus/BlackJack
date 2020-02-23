// @flow

import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { Body, Header3, BodyLight } from '../../ui/Typography';

const Card = styled(Flex)`
  width: 360px;
  height: 400px;
  border: 1px solid black;
`;

const FirstCard = styled(Card)`
  background-image: url('/assets/main/first-info.png');
  background-size: cover;
  padding: 60px 20px;
  text-align: right;
`;

const Percent = styled.span`
  color: #e3871d;
  font-size: 50px;
`;

const Button = styled.button`
  outline: none;
  border: 4px solid #e3871d;
  padding: 20px;
  text-transform: uppercase;
  color: white;
  background: transparent;
  border-radius: 32px;
  width: 300px;
  align-self: flex-end;
  font-weight: 700;
`;

const SecondCard = styled(Card)`
  background: rgba(233, 229, 219, 1);
  text-align: center;
  padding: 20px;
`;

const ThirdCard = styled(Card)`
  background-image: url('/assets/main/third-info.jpg');
  background-size: cover;
  padding: 40px 20px;
`;

const Wrapper = styled(Box)`
  background: rgba(37, 37, 37, 0.9);
  box-size: border-box;
  border: 3px solid #e3871d;
  border-radius: 16px;
  width: 100%;
  height: 100%;
  text-align: center;
  padding: 20px 10px;
`;

export const Info = () => (
  <Flex justifyContent="center" bg="#f4f2eb">
    <FirstCard justifyContent="right" flexDirection="column">
      <Body color="white" fontSize={4}>
        <Percent>20%</Percent> скидка
      </Body>
      <Body color="white" fontSize={3} marginTop="70px" marginBottom="70px">
        на все услуги <br /> при первом посещении
      </Body>
      <Button>Записаться со скидкой</Button>
    </FirstCard>
    <SecondCard alignItems="center" flexDirection="column">
      <Header3 marginBottom="16px">БАРБЕРШОП BLACK JACK</Header3>
      <img alt="mustache" src="/assets/main/mustache.png" />
      <BodyLight marginTop="16px" fontSize={3}>
        Никакого глянца, настоящая мужская атмосфера. Мы не франшиза и у нас нет прописанных
        скриптов. Мы команда единомышленников, профессиональных барберов объединенные одной целью -
        создавать неповторимый стиль и образ для мужчин. Небольшой, уютный барбершоп, домашний клуб
        - к нам приходят не только подстричься, но и за атмосферой. Радушно встретим - чай, кофе,
        PS4 скоротать время или для твоего сына
      </BodyLight>
    </SecondCard>
    <ThirdCard alignItems="center" justifyContent="center">
      <Wrapper>
        <Header3 color="white">МЫ РАБОТАЕМ</Header3>
        <Flex justifyContent="space-between" my="16px">
          <Body color="white" fontSize={3}>
            ПН-ВС
          </Body>
          <Body color="white" fontSize={3}>
            11:00 - 22:00
          </Body>
        </Flex>
        <Header3 color="white" marginBottom="16px">
          АКЦИИ ДЛЯ ТЕБЯ
        </Header3>
        <Flex justifyContent="space-between" my="8px">
          <Body color="white" fontSize={3}>
            Скидка в счастливые часы
          </Body>
          <Body color="white" fontSize={3}>
            20%
          </Body>
        </Flex>
        <Flex justifyContent="space-between" my="8px">
          <Body color="white" fontSize={3}>
            Скидка за отзыв
          </Body>
          <Body color="white" fontSize={3}>
            10%
          </Body>
        </Flex>
        <Flex justifyContent="space-between" my="8px">
          <Body color="white" fontSize={3}>
            Cashback
          </Body>
          <Body color="white" fontSize={3}>
            10%
          </Body>
        </Flex>
        <Flex justifyContent="space-between" my="8px">
          <Body color="white" fontSize={3}>
            Папа + сын
          </Body>
          <Body color="white" fontSize={3}>
            1700 р
          </Body>
        </Flex>
      </Wrapper>
    </ThirdCard>
  </Flex>
);
