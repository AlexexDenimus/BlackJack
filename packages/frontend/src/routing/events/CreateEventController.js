import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import type { Dispatch } from 'redux';
import { RegistrationType } from './RegistrationType';
import type { EventType } from '../../data-layer/events/types';
import * as actions from '../../data-layer/events/actions';

type DispatchProps = {
  changeEventType: EventType => void,
};

type StateProps = {
  page: number,
  setPage: number => void,
};

type ControllerProps = DispatchProps & StateProps;

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    changeEventType: eventType => dispatch(actions.setEventType(eventType)),
  };
}

const enhance = connect(
  null,
  mapDispatchToProps,
);

export const CreateEventController = enhance((props: ControllerProps) => {
  const [page, setPage] = useState(1);
  const [cookies] = useCookies();
  const { changeEventType } = props;

  useEffect(() => {
    cookies.user && cookies.token ? setPage(2) : setPage(1);
  }, [setPage, cookies]);

  return page === 1 && <RegistrationType changeEventType={changeEventType} setPage={setPage} />;
});
