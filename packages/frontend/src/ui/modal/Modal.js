// @flow

import * as React from 'react';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import '@reach/dialog/styles.css';

type Props = {
  children?: React.Node,
  showDialog: Boolean,
  onDismiss: () => void,
};

export const Modal = (props: Props) => (
  <DialogOverlay
    style={{ background: 'rgba(0, 0, 0, 0.75)' }}
    isOpen={props.showDialog}
    onDismiss={props.onDismiss}
  >
    <DialogContent aria-labelledby="dialog">
      <div id="dialog">{props.children}</div>
    </DialogContent>
  </DialogOverlay>
);
