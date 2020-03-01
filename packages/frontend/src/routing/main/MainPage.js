// @flow

import React from 'react';
import styled from 'styled-components';
import { Hero } from './Hero';
import { Info } from './Info';
import { Prices } from './Prices';
import { Quote } from './Quote';
import { Team } from './Team';
import { Discount } from './Discount';
import { Feedback } from './Feedback';
import { Contacts } from './Contacts';

const Main = styled.div`
  height: 100vh;
`;

export const MainPage = () => (
  <Main>
    <section>
      <Hero />
    </section>
    <section id="about">
      <Info />
    </section>
    <section id="prices">
      <Prices />
    </section>
    <section>
      <Quote />
    </section>
    <section id="team">
      <Team />
    </section>
    <section>
      <Discount />
    </section>
    <section>
      <Feedback />
    </section>
    <section id="map">
      <Contacts />
    </section>
  </Main>
);
