// @flow

import React from 'react';
import styled from 'styled-components';
import { Hero } from './Hero';
import { Info } from './Info';

const Main = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const MainPage = () => (
  <Main>
    <section>
      <Hero />
    </section>
    <section>
      <Info />
    </section>
  </Main>
);
