// @flow

import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import styled from 'styled-components';
import type { ServiceDto } from '../../data-layer/services/types';
import { ElevationBox } from '../boxes/ElevationBox';

type Props = {
  services: ServiceDto[],
  handleSubmit: () => void,
  previousPage: () => void,
};

const CheckBoxInput = styled.input`
  display: none;
  &:checked + label > div {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const servicesPalette = ({ input, services, meta: { error, checked } }) => (
  <Fragment>
    {services.map(service => (
      <ElevationBox key={service.name}>
        <CheckBoxInput
          {...input}
          type="checkbox"
          id={service.name}
          value={service.publicId}
          name={service.name}
        />
        <label htmlFor={service.name}>
          <div key={service.name}>
            <h6>{service.name}</h6>
            <span>{service.price}</span>
          </div>
        </label>
      </ElevationBox>
    ))}
    {error && checked && <span>{error}</span>}
  </Fragment>
);

const ServicesForm = (props: Props) => {
  const { handleSubmit, services, previousPage } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="service"
        component={servicesPalette}
        services={services}
        // normalize={(value, q, w, e, r) => console.log(value, q, w, e, r)}
        format={(q, w) => console.log(q, w)}
      />
      <button type="button" onClick={previousPage}>
        Previous
      </button>
      <div>
        <button type="submit">Далее</button>
      </div>
    </form>
  );
};

const validate = value => {
  const errors = {};
  if (!value.service) {
    errors.service = 'Выбирите одну из представленных услуг';
  }
  return errors;
};

export default reduxForm({
  form: 'event',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
  validate,
})(ServicesForm);
