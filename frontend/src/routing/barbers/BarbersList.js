// @flow

import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import get from 'lodash/get';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { BarbersMapper } from '../../data-layer/barbers/types';
import { Flex } from 'grid-styled';
import {BarberCard} from '../../ui/barbers/BarberCard';
import BarberFactory from '../../data-layer/barbers/BarberFactory';
import { selectBarbers, selectBarbersTotal } from '../../data-layer/barbers/selectors';
import { fetchBarbersAsync } from '../../data-layer/barbers/actions';

const account = BarberFactory.build();

type Props = {
   barbers: BarbersMapper,
   total: Number,
   onFetchBarbers: () => void
}

function mapDispatchToProps(dispatch: Dispatch<*>) {
   return {
      onFetchBarbers: () => dispatch(fetchBarbersAsync())
   };
}

const enhance = connect(
   (state) => ({
     barbers:  selectBarbers(state),
     total: selectBarbersTotal(state)
   }),
   mapDispatchToProps
)

export const BarbersList = enhance((props: any) => {

   const {barbers, total, onFetchBarbers} = props;

   useEffect(() => {
      onFetchBarbers();
      console.log('fetch')
   },
   [onFetchBarbers])

   return (
      <Flex>
         {
            barbers.map(barber => <BarberCard key={barber.name} name={barber.name} picture={account.picture} description={barber.description} />)
         }
      </Flex>
)});