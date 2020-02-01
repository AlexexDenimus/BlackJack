// @flow

import React, { useRef } from 'react';
import type { EventType } from '../../data-layer/events/types';

type Props = {
  eventType: EventType,
  previousPage: () => void,
  nextPage: () => void,
  setUser: ({ name: string, phoneNumber: string }) => void,
};

const UserForm = (props: Props) => {
  const { eventType, previousPage, nextPage, setUser } = props;
  const nameField = useRef<void | HTMLInputElement>();
  const phoneField = useRef<void | HTMLInputElement>();

  const handleSubmit = event => {
    event.preventDefault();
    if (eventType === 'fast')
      setUser({
        // $FlowFixMe
        name: nameField.current.value || 'User',
        // $FlowFixMe
        phoneNumber: phoneField.current.value || '+7',
      });
    nextPage();
  };

  return (
    <form onSubmit={handleSubmit}>
      {eventType === 'fast' ? (
        <div>
          {/* $FlowFixMe */}
          <input type="text" placeholder="Введите ваше имя" ref={nameField} />
          {/* $FlowFixMe */}
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
