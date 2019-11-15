//@flow

import React, { useEffect } from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { fetchServicesAsync } from '../../data-layer/services/actions';
import { selectServices } from '../../data-layer/services/selectors';
import type { ServiceDto } from '../../data-layer/services/types';
import type { ReduxState } from '../../data-layer/types';

type ServicesProps = {
  services: ServiceDto[],
  onFetchServices: () => void,
};

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    onFetchServices: () => dispatch(fetchServicesAsync()),
  };
}

const enhance = connect(
  (state: ReduxState) => ({
    services: selectServices(state),
  }),
  mapDispatchToProps,
);

export const ServicesList = enhance((props: ServicesProps) => {
  const { onFetchServices, services } = props;

  useEffect(() => {
    onFetchServices();
  }, [onFetchServices]);

  return services[0].name === '' ? (
    <h1>Loading</h1>
  ) : (
    services.map(service => (
      <div key={service.name}>
        <h6>{service.name}</h6>
        <span>{service.price}</span>
      </div>
    ))
  );
});
