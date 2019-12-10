//@flow

import React, { useEffect, useState } from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { BarberDto } from '../../data-layer/barbers/types';
import type { ServiceDto } from '../../data-layer/services/types';
import { selectBarbers } from '../../data-layer/barbers/selectors';
import { fetchBarbersAsync } from '../../data-layer/barbers/actions';
import { fetchServicesAsync } from '../../data-layer/services/actions';
import { selectServices } from '../../data-layer/services/selectors';
import { eventsService } from '../../data-layer/events/EventsService';
import BarbersForm from '../../ui/events/BarbersForm';
import ServicesForm from '../../ui/events/ServicesForm';
import DataForm from '../../ui/events/DataForm';

const Root = styled(Box)`
  width: 900px;
  margin: 100px auto;
`;

type Props = {
  barbers: BarberDto[],
  services: ServiceDto[],
  onFetchServices: () => void,
  onFetchBarbers: () => void,
};

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    onFetchBarbers: () => dispatch(fetchBarbersAsync()),
    onFetchServices: () => dispatch(fetchServicesAsync()),
  };
}

const enhance = connect(
  state => ({
    services: selectServices(state),
    barbers: selectBarbers(state),
  }),
  mapDispatchToProps,
);

export const FormTest = enhance((props: Props) => {
  const { barbers, services, onFetchServices, onFetchBarbers } = props;
  const [page, setPage] = useState(1);

  useEffect(() => {
    onFetchBarbers();
    onFetchServices();
  }, [onFetchBarbers, onFetchServices]);

  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    setPage(page - 1);
  };
  const handleSubmit = async () => {
    console.log('submit');
    // await eventsService.createEvent({
    //   date: dateValue,
    //   serviceId: serviceValue,
    //   barberId: barberValue,
    // });
  };

  return (
    <Root>
      {page === 1 && <BarbersForm barbers={barbers} handleSubmit={nextPage} />}

      {page === 2 && (
        <ServicesForm services={services} handleSubmit={nextPage} previousPage={previousPage} />
      )}
      {page === 3 && <DataForm handleSubmit={handleSubmit} previousPage={previousPage} />}
    </Root>
  );
});
