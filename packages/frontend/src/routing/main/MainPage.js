// @flow

import React from 'react';
import styled from 'styled-components';
import { Hero } from './Hero';
import { Info } from './Info';
import { Prices } from './Prices';
import { Quote } from './Quote';
import { Team } from './Team';
import { Discount } from './Discount';

const Main = styled.div`
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
    <section>
      <Prices />
    </section>
    <section>
      <Quote />
    </section>
    <section>
      <Team />
    </section>
    <section>
      <Discount />
    </section>
  </Main>
);
