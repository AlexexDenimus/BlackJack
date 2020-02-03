// @flow

import React, { useState } from 'react';
import type { EventFormState } from '../../data-layer/events/reducer';
// $FlowFixMe
import { useHistory } from 'react-router-dom';

type Props = {
  eventForm: EventFormState,
  createEvent: boolean => void,
};

const ResultForm = (props: Props) => {
  const { eventForm, createEvent } = props;
  const [notification, setNotification] = useState(false);
  const history = useHistory();

  const handleSubmit = event => {
    event.preventDefault();
    createEvent(notification);
    history.push('/');
  };

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
      <form onSubmit={handleSubmit}>
        <input id="notification" type="checkbox" onChange={() => setNotification(!notification)} />
        <label htmlFor="notification">
          Включить напоминание? Мы уведомим вас за час до стрижки
        </label>
        <input type="submit" value="Подтвердить заказ" />
      </form>
    </div>
  );
};

export default ResultForm;
