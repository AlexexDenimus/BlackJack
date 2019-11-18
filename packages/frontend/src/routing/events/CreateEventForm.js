//@flow

import React, { useEffect, useState } from 'react';
import { Box, Flex } from 'grid-styled';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { addMonths, setMinutes, setHours } from 'date-fns';
import styled from 'styled-components';
import { connect } from 'react-redux';
import type { Dispatch } from 'redux';
import type { BarberDto } from '../../data-layer/barbers/types';
import type { ServiceDto } from '../../data-layer/services/types';
import { BarberCard } from '../../ui/barbers/BarberCard';
import { selectBarbers } from '../../data-layer/barbers/selectors';
import { fetchBarbersAsync } from '../../data-layer/barbers/actions';
import { fetchServicesAsync } from '../../data-layer/services/actions';
import { selectServices } from '../../data-layer/services/selectors';
import { eventsService } from '../../data-layer/events/EventsService';
import 'react-datepicker/dist/react-datepicker.css';

const Root = styled(Box)`
  width: 900px;
  margin: 100px auto;
`;

const ElevationBox = styled(Box)`
  margin-left: 8px;
  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
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

export const CreateEventForm = enhance((props: Props) => {
  const { barbers, services, onFetchServices, onFetchBarbers } = props;
  const [barberValue, setBarber] = useState('');
  const [serviceValue, setService] = useState('');
  const [dateValue, setDate] = useState(new Date());

  useEffect(() => {
    onFetchBarbers();
    onFetchServices();
    registerLocale('ru', ru);
    setDefaultLocale('ru');
  }, [onFetchBarbers, onFetchServices]);

  const handleBarberClick = barber => {
    setBarber(barber);
  };

  const handleServiceClick = service => {
    setService(service);
  };

  const handleSubmit = async () => {
    await eventsService.createEvent({
      date: dateValue,
      serviceId: serviceValue,
      barberId: barberValue,
    });
  };

  return (
    <Root>
      <Flex>
        {barberValue === '' &&
          barbers.map(barber => (
            <ElevationBox key={barber.name} onClick={() => handleBarberClick(barber.publicId)}>
              <BarberCard
                name={barber.name}
                picture={barber.picture.src}
                description={barber.description}
                width="150px"
                height="150px"
              />
            </ElevationBox>
          ))}
        {barberValue !== '' &&
          serviceValue === '' &&
          services.map(service => (
            <ElevationBox key={service.name} onClick={() => handleServiceClick(service.publicId)}>
              <div key={service.name}>
                <h6>{service.name}</h6>
                <span>{service.price}</span>
              </div>
            </ElevationBox>
          ))}
        {barberValue !== '' && serviceValue !== '' && (
          <Box>
            <DatePicker
              selected={dateValue}
              onChange={date => setDate(date)}
              locale="ru"
              peekNextMonth
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={30}
              timeCaption="time"
              dateFormat="MMMM d, yyyy h:mm aa"
              minTime={setHours(setMinutes(new Date(), 0), 10)}
              maxTime={setHours(setMinutes(new Date(), 0), 22)}
              todayButton="Сегодня"
              withPortal
              minDate={new Date()}
              maxDate={addMonths(new Date(), 6)}
            />
            <button onClick={handleSubmit}>Next</button>
          </Box>
        )}
      </Flex>
    </Root>
  );
});
