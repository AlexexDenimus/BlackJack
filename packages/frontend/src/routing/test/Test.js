// @flow

import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import { selectCounter } from '../../data-layer/test/selectors';
import { plusOne, minusOneAsync } from '../../data-layer/test/actions';

type Props = {
  counter: number,
  onPlusOne: () => void,
  onMinusOne: () => void,
};

function mapDispatchToProps(dispatch: Dispatch<any>) {
  return {
    onPlusOne: () => dispatch(dispatch(plusOne)),
    onMinusOne: () => dispatch(minusOneAsync()),
  };
}

const enhance = connect(
  state => ({
    counter: selectCounter(state),
  }),
  mapDispatchToProps,
);

export const Test = enhance((props: Props) => {
  const { counter, onPlusOne, onMinusOne } = props;

  return (
    <Fragment>
      <div>{counter}</div>
      <button onClick={onPlusOne}>+</button>
      <button onClick={onMinusOne}>-</button>
    </Fragment>
  );
});
