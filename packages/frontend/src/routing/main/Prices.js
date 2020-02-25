// @flow

import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { Body, Header1 } from '../../ui/Typography';

const Root = styled(Flex)`
  justify-content: center;
  background: #f4f2eb;
  padding: 48px 0;
  align-items: center;
`;

const MustacheImage = styled.img`
  margin: 16px 0 32px;
`;

const Card = styled(Flex)`
  width: 350px;
  height: 460px;
  border: 3px solid #e3871d;
  border-radius: 16px;
  padding: 10px 20px;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 66px;
`;

const Wrapper = styled(Flex)`
  position: relative;

  & > p:before {
    content: '';
    position: absolute;
    bottom: 0.25rem;
    width: 100%;
    height: 0;
    line-height: 0;
    border-bottom: 2px dotted black;
  }
`;

const Text = styled.span`
  position: relative;
  background: #f4f2eb;
  z-index: 2;
  padding-right: 4px;
`;

const Text2 = styled(Text)`
  position: absolute;
  right: 0;
  text-align: right;
  color: #e3871d;
  padding-left: 4px;
`;

export const Prices = () => (
  <Root flexDirection="column">
    <Header1>ЦЕНЫ НА УСЛУГИ</Header1>
    <MustacheImage alt="mustache" src="/assets/main/mustache.png" />
    <Flex flexDirection="row" width="1080px" justifyContent="space-between">
      <Card>
        <CardImage src="/assets/main/haircut-card.png" alt="haircut" />
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Мужская стрижка</Text>
            <Text2>1200 Р</Text2>
          </Body>
        </Wrapper>
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Детская Стрижка</Text>
            <Text2>700 Р</Text2>
          </Body>
        </Wrapper>
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Стрижка машинкой</Text>
            <Text2>600 Р</Text2>
          </Body>
        </Wrapper>
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Бритье головы</Text>
            <Text2>1500 Р</Text2>
          </Body>
        </Wrapper>
      </Card>
      <Card>
        <CardImage src="/assets/main/beard-card.png" alt="haircut" />
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Моделирование бороды</Text>
            <Text2>850 Р</Text2>
          </Body>
        </Wrapper>
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Стрижка бороды и усов</Text>
            <Text2>600 Р</Text2>
          </Body>
        </Wrapper>
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Камуфляж бороды</Text>
            <Text2>500 Р</Text2>
          </Body>
        </Wrapper>
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Королевское бритье</Text>
            <Text2>1000 Р</Text2>
          </Body>
        </Wrapper>
      </Card>
      <Card>
        <CardImage src="/assets/main/fullcut-card.png" alt="haircut" />
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Папа+сын</Text>
            <Text2>1700 Р</Text2>
          </Body>
        </Wrapper>
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Друг+друг</Text>
            <Text2>2050 Р</Text2>
          </Body>
        </Wrapper>
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Камуфляж седины</Text>
            <Text2>700 Р</Text2>
          </Body>
        </Wrapper>
        <Wrapper justifyContent="space-between" my="30px" width="100%">
          <Body fontSize={3}>
            <Text>Мытье и укладка волос</Text>
            <Text2>400 Р</Text2>
          </Body>
        </Wrapper>
      </Card>
    </Flex>
  </Root>
);
