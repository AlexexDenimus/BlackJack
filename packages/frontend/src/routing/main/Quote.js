// @flow

import React from 'react';
import styled from 'styled-components';
import { Header1, Header3 } from '../../ui/Typography';

const Background = styled.div`
  background-image: url('/assets/main/third-info.jpg');
  background-size: cover;
  width: 100%;
  height: 350px;
  padding: 100px 0;
  margin: auto;
  text-align: center;
`;

export const Quote = () => (
  <Background>
    <img alt="mustache" src="/assets/main/brown-mustache.png" />
    <Header1 color="white" marginTop="48px" marginBottom="48px">
      ВСЕ, ЧТО ВЫ СЛЫШИТЕ В ПАРИКМАХЕРСКОЙ,
      <br /> ОСТАЕТCЯ В ПАРИКМАХЕРСКОЙ
    </Header1>
    <Header3 color="white">- БЕРНИ МАК -</Header3>
  </Background>
);
