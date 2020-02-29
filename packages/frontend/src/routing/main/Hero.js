// @flow

import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from 'rebass';
import { Parallax } from 'react-parallax';
import { BodyBold, Header3, Body } from '../../ui/Typography';
import { HorizontalLine } from '../../ui/boxes/HorizontalLine';

const Background = styled.div`
  width: 100%;
  height: 600px;
  padding: 40px 0 90px;
`;

const Wrapper = styled(Flex).attrs({
  flexDirection: 'raw',
  justifyContent: 'space-around',
  width: '100%',
})`
  position: relative;
`;

const TabPanel = styled(Flex)`
  position: relative;
  right: 75px;
`;

const Tab = styled(BodyBold).attrs({
  fontSize: 1,
  color: 'white',
})`
  text-transform: uppercase;

  &:hover {
    color: #e3871d;
  }
`;

const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

const PhoneNumber = styled(Tab)`
  position: absolute;
  right: 50px;
  cursor: pointer;
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
  cursor: pointer;

  &:hover {
    border: 4px solid #e3871d;
    background: transparent;
    padding: 16px;
    color: #e3871d;
  }
`;

const ParallaxStyled = styled(Parallax)`
  & > img {
    filter: brightness(0.5) !important;
    top: 10%;
    height: 1000px !important;
  }
`;

export const Hero = () => (
  <ParallaxStyled bgImage="/assets/main/hero.jpg" strength={800}>
    <Background>
      <Wrapper>
        <TabPanel flexDirection="raw" justifyContent="space-between" margin="auto" width="700px">
          <Box>
            <Link href="#about">
              <Tab>Барбершоп на академической</Tab>
            </Link>
          </Box>
          <Box>
            <Link href="#prices">
              <Tab>Цены</Tab>
            </Link>
          </Box>
          <Logo />
          <Box>
            <Link href="#team">
              <Tab>Мастера</Tab>
            </Link>
          </Box>
          <Box>
            <Link href="#map">
              <Tab>Контакты</Tab>
            </Link>
          </Box>
        </TabPanel>
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
  </ParallaxStyled>
);
