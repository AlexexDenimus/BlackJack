import React from 'react';
import { Modal } from '../../ui/modal/Modal';

type Props = {
  showDialog: Boolean,
  onDismiss: () => void,
};

export const CreateEventModal = (props: Props) => (
  <Modal isOpen={props.showDialog} onDismiss={props.onDismiss}>
    Hello
  </Modal>
);
