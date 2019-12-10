// @flow

import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import { Body, Caption } from '../Typography';
import { Link } from 'react-router-dom';

type Props = {
  onClick: () => void,
};

const Button = styled.button`
  width: 128px;
  height: 48px;
  padding: 8px 16px;
  background: #006400;
  border-radius: 8px;
  align-self: center;
  margin: 8px 0;
  cursor: pointer;
`;

export const TypeOfEventForm = (props: Props) => (
  <Flex flexDirection="column" alignItems="center">
    <Flex flexDirection="column" alignItems="center" width="100%" mb="24px">
      <Body fontSize={1}>Зарегиструйтесь, чтобы получать бонусы за стрижку:</Body>
      <Box alignSelf="center">
        <Link to="/signup">
          <Button>Регистрация</Button>
        </Link>
        <Caption>
          или <Link to="/login">войдите</Link> в систему
        </Caption>
      </Box>
    </Flex>
    <Flex flexDirection="column" alignItems="center" width="100%">
      <Body fontSize={1}>Используйте возможность быстрой записи:</Body>
      <Button onClick={props.onClick}>Быстрая запись</Button>
    </Flex>
  </Flex>
);
