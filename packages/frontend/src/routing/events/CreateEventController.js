import React, { useState, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import type { Dispatch } from 'redux';
import { RegistrationType } from '../../ui/events/RegistrationType';
import type { EventType } from '../../data-layer/events/types';
import type { BarberDto } from '../../data-layer/barbers/types';
import * as actions from '../../data-layer/events/actions';
import { BarbersForm } from '../../ui/events/BarbersForm';
import { fetchBarbersAsync } from '../../data-layer/barbers/actions';
import { selectBarbers } from '../../data-layer/barbers/selectors';

type DispatchProps = {
  changeEventType: EventType => void,
  pickBarber: ({ id: string, name: string, src: string }) => void,
  onFetchBarbers: () => void,
};

type StateProps = {
  barbers: BarberDto[],
  page: number,
  setPage: number => void,
};

type ControllerProps = DispatchProps & StateProps;

const mapStateToProps = state => ({
  barbers: selectBarbers(state),
});

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    changeEventType: eventType => dispatch(actions.setEventType(eventType)),
    pickBarber: barber => dispatch(actions.setBarber(barber)),
    onFetchBarbers: () => dispatch(fetchBarbersAsync()),
  };
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export const CreateEventController = enhance((props: ControllerProps) => {
  const [page, setPage] = useState(1);
  const [cookies] = useCookies();
  const { barbers, changeEventType, onFetchBarbers, pickBarber } = props;

  useEffect(() => {
    cookies.user && cookies.token ? setPage(2) : setPage(1);
    onFetchBarbers();
  }, [setPage, cookies, onFetchBarbers]);

  return (
    <Fragment>
      {page === 1 && <RegistrationType changeEventType={changeEventType} setPage={setPage} />}
      {page === 2 && <BarbersForm barbers={barbers} pickBarber={pickBarber} />}
    </Fragment>
  );
});
