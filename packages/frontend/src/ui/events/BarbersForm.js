// @flow

import React, { useState } from 'react';
import styled from 'styled-components';
import type { BarberDto } from '../../data-layer/barbers/types';
import { BarberCard } from '../barbers/BarberCard';
import { ElevationBox } from '../boxes/ElevationBox';
import validate from 'validate.js';

type Props = {
  barbers: BarberDto[],
  pickBarber: ({ id: string, name: string, src: string }) => void,
  nextPage: () => void,
};

const RadioInput = styled.input`
  opacity: 0;
  &:checked + label > div {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const BarbersForm = (props: Props) => {
  const { pickBarber, barbers, nextPage } = props;
  const [selectedBarber, setSelectedBarber] = useState([]);
  const [error, setError] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const validation = validate.single(selectedBarber, {
      presence: { allowEmpty: false, message: 'Выберите барбера' },
    });
    if (!validation) {
      pickBarber({
        id: selectedBarber[0],
        name: selectedBarber[1],
        src: selectedBarber[2] + selectedBarber[3],
      });
      nextPage();
    } else setError(validation[0]);
  };

  const handleChange = event => {
    setSelectedBarber([event.target.value][0].split(','));
  };

  return (
    <form onSubmit={handleSubmit}>
      {barbers.map(barber => (
        <ElevationBox key={barber.name}>
          <RadioInput
            type="radio"
            id={barber.name}
            value={[barber.publicId, barber.name, barber.picture.src]}
            name="barber"
            onChange={handleChange}
          />
          <label htmlFor={barber.name}>
            <BarberCard
              name={barber.name}
              picture={barber.picture.src}
              description={barber.description}
              width="150px"
              height="150px"
            />
          </label>
        </ElevationBox>
      ))}
      {error && <span>{error}</span>}
      <button type="submit">Далее</button>
    </form>
  );
};

export default BarbersForm;

// const validate = value => {
//   const errors = {};
//   if (!value.barber) {
//     errors.barber = 'Выбирите одного из барберов';
//   }
//   return errors;
// };
