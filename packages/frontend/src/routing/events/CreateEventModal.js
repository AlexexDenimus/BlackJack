import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';
import { Modal } from '../../ui/modal/Modal';
import { Header3 } from '../../ui/Typography';
import { TypeOfEventForm } from '../../ui/events/TypeOfEventForm';

type Props = {
  showDialog: Boolean,
  onDismiss: () => void,
};

const Header = styled(Box)`
  width: 100%;
  height: 64px;
  background-color: black;
  color: #006400;
  text-align: center;
  padding: 16px 0;
`;

const Body = styled(Box)`
  width: 100%;
  min-height: 100px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(105, 105, 105, 1) 25%,
    rgba(220, 220, 220, 1) 50%
  );
  padding: 64px 48px 32px;
`;

export const CreateEventModal = (props: Props) => (
  <Modal isOpen={props.showDialog} onDismiss={props.onDismiss} width={'600px'}>
    <Header>
      <Header3>Тип регистрации</Header3>
    </Header>
    <Body>
      <TypeOfEventForm />
    </Body>
  </Modal>
);
