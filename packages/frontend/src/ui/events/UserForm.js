// @flow

import React, { useRef } from 'react';
import type { EventType } from '../../data-layer/events/types';

type Props = {
  eventType: EventType,
  previousPage: () => void,
  nextPage: () => void,
};

const UserForm = (props: Props) => {
  const { eventType, previousPage, nextPage, setUser } = props;
  const nameField = useRef();
  const phoneField = useRef();

  const handleSubmit = event => {
    event.preventDefault();
    if (eventType === 'fast')
      setUser({ name: nameField.current.value, number: phoneField.current.value });
    console.log({ name: nameField.current.value, number: phoneField.current.value });
    nextPage();
  };

  return (
    <form onSubmit={handleSubmit}>
      {eventType === 'fast' ? (
        <div>
          <input type="text" placeholder="Введите ваше имя" ref={nameField} />
          <input type="tel" placeholder="Введите ваш номер телефона" ref={phoneField} />
        </div>
      ) : (
        <div>Введите недостающие данные</div>
      )}
      <button type="button" onClick={previousPage}>
        Previous
      </button>
      <div>
        <button type="submit">Далее</button>
      </div>
    </form>
  );
};

export default UserForm;
