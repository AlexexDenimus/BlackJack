// @flow

import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { BodyLight, Header1, Body } from '../../ui/Typography';

const Root = styled(Flex)`
  justify-content: center;
  background: #f4f2eb;
  padding: 48px 0;
  align-items: center;
  text-align: center;
`;

const MustacheImage = styled.img`
  margin: 16px 0 32px;
`;

const Grid = styled(Box)`
  display: grid;
  margin: 48px auto;
  justify-content: center;
  grid-template-columns: 254px 410px 254px;
  grid-template-rows: 410px;
  grid-gap: 32px;
`;

const Card1 = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  background: url('/assets/main/barber1.jpg') no-repeat center;
  background-size: cover;
`;

const Card2 = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  background: url('/assets/main/barber2.jpg') no-repeat center;
  background-size: cover;
`;

const Description = styled(Box)`
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  max-height: 80px;
  background: rgba(51, 51, 51, 1);
  padding: 20px;
`;

const PhotoPanel = styled(Box)`
  display: grid;
  grid-template-columns: 205px 205px;
  grid-template-rows: 205px 205px;
  justify-items: stretch;
  grid-gap: 0px;
`;

const Photo = styled.img`
  width: 100%;
`;

export const Team = () => (
  <Root flexDirection="column">
    <Header1>НАША РАБОТА И КОМАНДА</Header1>
    <MustacheImage alt="mustache" src="/assets/main/mustache.png" />
    <BodyLight fontSize={3}>
      Мы выслушаем и учтем ваши предпочтения или подберем стрижку, которая подойдет вашему образу
      жизни, типу лица и структуре волос. <br />
      Профессиональный подход к каждому клиенту - никаких компромиссов
    </BodyLight>
    <Grid>
      <Card1>
        <Description>
          <Body color="white" fontSize={3} marginBottom="8px">
            БОРИС БРИТВА
          </Body>
          <Body color="#e3871d" fontSize="12px">
            -СТАРШИЙ БАРБЕР
          </Body>
        </Description>
      </Card1>
      <PhotoPanel>
        <Photo src="/assets/main/haircut1.jpg" alt="haircut1" />
        <Photo src="/assets/main/haircut2.jpg" alt="haircut2" />
        <Photo src="/assets/main/haircut3.jpg" alt="haircut3" />
        <Photo src="/assets/main/haircut4.jpg" alt="haircut4" />
      </PhotoPanel>
      <Card2>
        <Description>
          <Body color="white" fontSize={3} marginBottom="8px">
            ЖЕНЯ ПОЗИТИВ
          </Body>
          <Body color="#e3871d" fontSize="12px">
            -ТОП БАРБЕР
          </Body>
        </Description>
      </Card2>
    </Grid>
  </Root>
);
