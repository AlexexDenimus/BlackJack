// @flow

import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { BodyBold, Header3, Body } from '../../ui/Typography';
import { HorizontalLine } from '../../ui/boxes/HorizontalLine';

const Background = styled.div`
  background-image: url('/assets/main/hero.jpg');
  background-size: cover;
  width: 100%;
  height: 600px;
  padding: 20px 0 90px;
`;

const Wrapper = styled(Flex).attrs({
  flexDirection: 'raw',
  justifyContent: 'space-around',
  width: '100%',
})`
  position: relative;
`;

const Tab = styled(BodyBold).attrs({
  fontSize: 1,
  color: 'white',
})`
  text-transform: uppercase;
`;

const PhoneNumber = styled(Tab)`
  position: absolute;
  right: 50px;
`;

const Logo = styled.img.attrs({
  src: '/assets/main/logo.png',
  alt: 'logo',
})`
  width: 140px;
`;

const Title = styled(Box).attrs({
  textAlign: 'center',
  width: '600px',
  margin: '80px auto',
})`
  position: relative;
  left: 70px;
`;

const Scissors = styled.img`
  width: 50px;
  margin: 0 8px;
`;

const Description = styled(Flex).attrs({
  textAlign: 'center',
  width: '60%',
  margin: 'auto',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
})`
  position: relative;
  left: 64px;
  min-height: 200px;
`;

const Button = styled.button`
  outline: none;
  border: none;
  padding: 20px;
  text-transform: uppercase;
  color: white;
  background: #e3871d;
  border-radius: 32px;
  width: 200px;
`;

export const Hero = () => (
  <Background>
    <Wrapper>
      <Flex flexDirection="raw" justifyContent="space-between" margin="auto" width="700px">
        <Tab>Барбершоп на академической</Tab>
        <Tab>Цены</Tab>
        <Logo />
        <Tab>Мастера</Tab>
        <Tab>Контакты</Tab>
      </Flex>
      <PhoneNumber>8(495)741-94-25</PhoneNumber>
    </Wrapper>
    <Title>
      <Header3 color="white" fontSize="32px">
        Барбершоп, каким он должен быть - ничего лишнего. Фанаты своего дела - стрижем и бреем на
        высшем уровне.
      </Header3>
    </Title>
    <Description>
      <Flex flexDirection="raw" alignItems="center">
        <HorizontalLine width="500px" />
        <Scissors src="/assets/main/scissors.svg" />
        <HorizontalLine width="500px" />
      </Flex>
      <Body color="white" fontSize={3}>
        Запишись к профессиональному барберу на первую стрижку за 960 рублей + 20% Cashback на
        следующую
      </Body>
      <Button>Записаться</Button>
      <HorizontalLine width="1065px" />
    </Description>
  </Background>
);
