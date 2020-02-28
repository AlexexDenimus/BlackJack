// @flow

import React from 'react';
import styled from 'styled-components';
import { Flex } from 'rebass';
import { Header2, Header4 } from '../../ui/Typography';
import { HorizontalLine } from '../../ui/boxes/HorizontalLine';

const Root = styled.div`
  position: relative;
  height: 575px;
`;

const Contacts = styled(Flex)`
  position: absolute;
  top: 95px;
  left: 270px;
  max-width: 355px;
  max-height: 380px;
  border: 16px solid #e3871d;
  padding: 20px;
  background: rgba(34, 34, 34, 1);
  text-align: center;
`;

const InstagramImage = styled.img`
  width: 40px;
  margin: 16px 0;
`;

export const Map = () => (
  <Root>
    <Contacts flexDirection="column" alignItems="center">
      <Header2 marginBottom="8px" color="white">
        КОНТАКТЫ
      </Header2>
      <HorizontalLine width="285px" />
      <Header4 marginTop="16px" marginBottom="8px" color="white">
        МОСКВА
      </Header4>
      <Header4 marginTop="8px" marginBottom="8px" color="white">
        ПРОСПЕКТ 60-ЛЕТИЯ ОКТЯБРЯ
        <br />
        ДОМ 21 КОРПУС 1
      </Header4>
      <Header4 marginTop="8px" marginBottom="16px" color="white">
        8(495)741-94-25
      </Header4>
      <HorizontalLine width="85px" />
      <InstagramImage alt="inst" src="/assets/main/inst.svg" />
    </Contacts>
  </Root>
);
