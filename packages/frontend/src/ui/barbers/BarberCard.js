// @flow

import React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import { width, height } from 'styled-system';

type Props = {
  picture: string,
  name: string,
  description: string,
  width: string | number,
  height: string | number,
};

const Cover = styled.div`
  background-size: cover;
  background-position: center;
  background-image: url(${props => props.picture});
  ${width};
  ${height};
`;

const Heading1 = styled.h1`
  padding-top: 16px;
`;

const Body = styled.p`
  padding-top: 16px;
`;

export const BarberCard = (props: Props) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Cover picture={props.picture} width={props.width} height={props.height} />
      <Heading1>{props.name}</Heading1>
      <Body>{props.description}</Body>
    </Flex>
  );
};

BarberCard.defaultProps = {
  width: '256px',
  height: '256px',
};
