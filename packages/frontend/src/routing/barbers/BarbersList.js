// @flow

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { BarberDto } from '../../data-layer/barbers/types';
import { Flex } from 'grid-styled';
import { BarberCard } from '../../ui/barbers/BarberCard';
import BarberFactory from '../../data-layer/barbers/BarberFactory';
import { selectBarbers } from '../../data-layer/barbers/selectors';
import { fetchBarbersAsync } from '../../data-layer/barbers/actions';

const account = BarberFactory.build();

type Props = {
  barbers: BarberDto[],
  onFetchBarbers: () => void,
};

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    onFetchBarbers: () => dispatch(fetchBarbersAsync()),
  };
}

const enhance = connect(
  state => ({
    barbers: selectBarbers(state),
  }),
  mapDispatchToProps,
);

export const BarbersList = enhance((props: Props) => {
  const { barbers, onFetchBarbers } = props;

  useEffect(() => {
    onFetchBarbers();
  }, [onFetchBarbers]);

  console.log(barbers);

  return (
    <Flex>
      {barbers.map(barber => (
        <BarberCard
          key={barber.name}
          name={barber.name}
          picture={account.picture}
          description={barber.description}
        />
      ))}
    </Flex>
  );
});
