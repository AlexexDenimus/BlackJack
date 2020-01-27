import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import type { Dispatch } from 'redux';
import type { EventType } from '../../data-layer/events/types';
import type { BarberDto } from '../../data-layer/barbers/types';
import type { ServiceDto } from '../../data-layer/services/types';
import { eventsService } from '../../data-layer/events/EventsService';
import * as actions from '../../data-layer/events/actions';
import { fetchBarbersAsync } from '../../data-layer/barbers/actions';
import { selectBarbers } from '../../data-layer/barbers/selectors';
import { fetchServicesAsync } from '../../data-layer/services/actions';
import { selectServices } from '../../data-layer/services/selectors';

type DispatchProps = {
  changeEventType: EventType => void,
  pickBarber: ({ id: string, name: string, src: string }) => void,
  pickServices: (
    [
      {
        id: string,
        name: string,
        price: number,
      },
    ],
  ) => void,
  pickDate: Date => void,
  onFetchBarbers: () => void,
  onFetchServices: () => void,
};

type StateProps = {
  barbers: BarberDto[],
  services: ServiceDto[],
  page: number,
  setPage: number => void,
};

type ControllerProps = DispatchProps & StateProps;

const mapStateToProps = state => ({
  barbers: selectBarbers(state),
  services: selectServices(state),
});

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    changeEventType: eventType => dispatch(actions.setEventType(eventType)),
    pickBarber: barber => dispatch(actions.setBarber(barber)),
    pickServices: services => dispatch(actions.setServices(services)),
    pickDate: date => dispatch(actions.setDate(date)),
    onFetchBarbers: () => dispatch(fetchBarbersAsync()),
    onFetchServices: () => dispatch(fetchServicesAsync()),
  };
}

const enhance = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const RegistrationType = React.lazy(() => import('../../ui/events/RegistrationType'));
const BarbersForm = React.lazy(() => import('../../ui/events/BarbersForm'));
const ServicesForm = React.lazy(() => import('../../ui/events/ServicesForm'));
const DateForm = React.lazy(() => import('../../ui/events/DateForm'));

export const CreateEventController = enhance((props: ControllerProps) => {
  const [page, setPage] = useState(1);
  const [bookedDates, setBookedDates] = useState([]);
  const [cookies] = useCookies();
  const {
    barbers,
    services,
    changeEventType,
    onFetchBarbers,
    pickBarber,
    pickServices,
    pickDate,
    onFetchServices,
  } = props;

  const fetchBookedDates = useCallback(async () => {
    const dates = await eventsService.fetchBookedDates();
    setBookedDates(dates);
  }, [setBookedDates]);
  useEffect(() => {
    cookies.user && cookies.token ? setPage(2) : setPage(4);
    onFetchBarbers();
    onFetchServices();
    if (page === 4) fetchBookedDates();
  }, [setPage, cookies, onFetchBarbers, onFetchServices, page, fetchBookedDates]);

  const nextPage = () => {
    setPage(page + 1);
  };

  const previousPage = () => {
    setPage(page - 1);
  };

  return (
    <Suspense fallback={<div>Loading ...</div>}>
      {page === 1 && <RegistrationType changeEventType={changeEventType} nextPage={nextPage} />}
      {page === 2 && <BarbersForm barbers={barbers} pickBarber={pickBarber} nextPage={nextPage} />}
      {page === 3 && (
        <ServicesForm
          services={services}
          pickServices={pickServices}
          nextPage={nextPage}
          previousPage={previousPage}
        />
      )}
      {page === 4 && (
        <DateForm
          previousPage={previousPage}
          nextPage={nextPage}
          pickDate={pickDate}
          excludeDates={bookedDates}
        />
      )}
    </Suspense>
  );
});
