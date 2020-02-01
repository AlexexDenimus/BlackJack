// @flow

import React from 'react';
import type { EventFormState } from '../../data-layer/events/reducer';

type Props = {
  eventForm: EventFormState,
};

const ResultForm = (props: Props) => {
  const { eventForm } = props;
  console.log(eventForm);

  return (
    <div>
      <p>{eventForm.user.name}, ваш заказ</p>
      <p>Ваш барбер: {eventForm.barber.name}</p>
      <p>Ваши услуги:</p>
      {eventForm.services.map(value => (
        <p key={value.name}>{value.name}</p>
      ))}
      <p>
        Цена за услуги:
        {eventForm.services.reduce((current, previous) => current + previous.price, 0)}
      </p>
      <p>Дата записи: {eventForm.date.toString()}</p>
    </div>
  );
};

export default ResultForm;
