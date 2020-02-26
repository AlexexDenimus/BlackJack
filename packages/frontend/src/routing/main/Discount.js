// @flow

import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { Header3 } from '../../ui/Typography';

const Background = styled(Box)`
  background: #e3871d;
  width: 100%;
  height: 120px;
  padding: 50px 150px;
`;

const Button = styled.button`
  outline: none;
  border: none;
  padding: 16px;
  text-transform: uppercase;
  color: white;
  background: #333;
  width: 200px;
  font-weight: 700;
  font-size: 12px;
`;

export const Discount = () => (
  <Background>
    <Flex flexDirection="row" justifyContent="space-around" alignItems="center">
      <Header3 color="white">ПОЛУЧИ СКИДКУ 20% НА ПЕРВОЕ ПОСЕЩЕНИЕ ОНЛАЙН</Header3>
      <Button>записаться на прием</Button>
    </Flex>
  </Background>
);
