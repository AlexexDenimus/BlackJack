// @flow

import React, { Fragment, useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { ReduxState } from '../../data-layer/types';
import { selectCounter } from '../../data-layer/test/selectors';
import { plusOne, minusOneAsync, minusOne } from '../../data-layer/test/actions';

type Props = {
    counter: number,
    onPlusOne: () => void,
    onMinusOne: () => void,
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
    return {
      onPlusOne: () => dispatch(dispatch(plusOne)),
      onMinusOne: () => dispatch(minusOneAsync())
    };
  }

const enhance = connect(
    (state) => ({
      counter:  selectCounter(state)
    }),
    mapDispatchToProps
  );

export const Test = enhance((props: Props) => {
    const {counter, onPlusOne, onMinusOne } = props;

    return (
    <Fragment>
        <div>{props.counter}</div>
        <button onClick={onPlusOne}>+</button>
        <button onClick={onMinusOne}>-</button>
    </Fragment>
    
)});