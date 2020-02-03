import React, { useState, useEffect, useCallback, Suspense } from 'react';
import { connect } from 'react-redux';
import { useCookies } from 'react-cookie';
import type { Dispatch } from 'redux';
import type { EventType } from '../../data-layer/events/types';
import type { BarberDto } from '../../data-layer/barbers/types';
import type { ServiceDto } from '../../data-layer/services/types';
import type { EventFormState } from '../../data-layer/events/reducer';
import { eventsService } from '../../data-layer/events/EventsService';
import * as actions from '../../data-layer/events/actions';
import { fetchBarbersAsync } from '../../data-layer/barbers/actions';
import { selectBarbers } from '../../data-layer/barbers/selectors';
import { fetchServicesAsync } from '../../data-layer/services/actions';
import { selectServices } from '../../data-layer/services/selectors';
import { selectEventForm } from '../../data-layer/events/selectors';

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
  setUser: ({ name: string, phoneNumber: string }) => void,
  onFetchBarbers: () => void,
  onFetchServices: () => void,
};

type StateProps = {
  barbers: BarberDto[],
  services: ServiceDto[],
  eventType: EventType,
  eventForm: EventFormState,
  page: number,
  setPage: number => void,
};

type ControllerProps = DispatchProps & StateProps;

const mapStateToProps = state => ({
  barbers: selectBarbers(state),
  services: selectServices(state),
  eventForm: selectEventForm(state),
});

function mapDispatchToProps(dispatch: Dispatch<*>) {
  return {
    changeEventType: eventType => dispatch(actions.setEventType(eventType)),
    pickBarber: barber => dispatch(actions.setBarber(barber)),
    pickServices: services => dispatch(actions.setServices(services)),
    pickDate: date => dispatch(actions.setDate(date)),
    setUser: user => dispatch(actions.setUser(user)),
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
const UserForm = React.lazy(() => import('../../ui/events/UserForm'));
const ResultForm = React.lazy(() => import('../../ui/events/ResultForm'));

export const CreateEventController = enhance((props: ControllerProps) => {
  const [cookies] = useCookies();
  const [page, setPage] = useState(cookies.user && cookies.token ? 2 : 1);
  const [bookedDates, setBookedDates] = useState([]);
  const {
    barbers,
    services,
    eventForm,
    changeEventType,
    onFetchBarbers,
    pickBarber,
    pickServices,
    pickDate,
    setUser,
    onFetchServices,
  } = props;

  const fetchBookedDates = useCallback(async () => {
    const dates = await eventsService.fetchBookedDates();
    setBookedDates(dates);
  }, [setBookedDates]);
  useEffect(() => {
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

  const createEvent = async notification => {
    await eventsService.createEvent({
      date: eventForm.date || new Date(),
      services: eventForm.services.map(value => value.id) || [],
      barberId: eventForm.barber.id || '',
      user: eventForm.user.name ? eventForm.user : { id: cookies.user },
      notification,
    });
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
      {page === 5 && (
        <UserForm
          eventType={eventForm.eventType}
          previousPage={previousPage}
          nextPage={nextPage}
          setUser={setUser}
        />
      )}
      {page === 6 && <ResultForm eventForm={eventForm} createEvent={createEvent} />}
    </Suspense>
  );
});
