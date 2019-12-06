// @flow

import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import type { BarberDto } from '../../data-layer/barbers/types';
import { BarberCard } from '../barbers/BarberCard';
import { ElevationBox } from '../boxes/ElevationBox';

type Props = {
  barbers: BarberDto[],
  handleSubmit: () => void,
};

const RadioInput = styled.input`
  opacity: 0;
  &:checked + label > div {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const barbersPalette = ({ input, barbers, meta: { error, checked } }) => (
  <Fragment>
    {barbers.map(barber => (
      <ElevationBox key={barber.name}>
        <RadioInput
          {...input}
          type="radio"
          id={barber.name}
          value={barber.publicId}
          name="barber"
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
    {error && checked && <span>{error}</span>}
  </Fragment>
);

const BarbersForm = (props: Props) => {
  const { handleSubmit, barbers } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="barber" component={barbersPalette} barbers={barbers} />
      <div>
        <button type="submit">Далее</button>
      </div>
    </form>
  );
};

const validate = value => {
  const errors = {};
  if (!value.barber) {
    errors.barber = 'Выбирите одного из барберов';
  }
  return errors;
};

export default reduxForm({
  form: 'event',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(BarbersForm);
