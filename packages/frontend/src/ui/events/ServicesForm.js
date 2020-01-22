// @flow

import React, { useState } from 'react';
import styled from 'styled-components';
import type { ServiceDto } from '../../data-layer/services/types';
import { ElevationBox } from '../boxes/ElevationBox';

type Props = {
  services: ServiceDto[],
  nextPage: () => void,
  previousPage: () => void,
  pickServices: (
    [
      {
        id: string,
        name: string,
        price: number,
      },
    ],
  ) => void,
};

const CheckBoxInput = styled.input`
  display: none;
  &:checked + label > div {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
`;

const normalizeServices = (services: any) => {
  return services.map(value => {
    const arrayOfValue = [value][0].split(',');
    return { id: arrayOfValue[0], name: arrayOfValue[1], price: +arrayOfValue[2] };
  });
};

const ServicesForm = (props: Props) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const { pickServices, services, previousPage, nextPage } = props;

  const handleSubmit = event => {
    event.preventDefault();
    pickServices(normalizeServices(selectedServices));
    nextPage();
  };

  const handleChange = event => {
    selectedServices.includes(event.target.value)
      ? setSelectedServices(
          selectedServices.filter(value => {
            if (event.target.value === value) return false;
            return true;
          }),
        )
      : setSelectedServices([...selectedServices, event.target.value]);
  };

  return (
    <form onSubmit={handleSubmit}>
      {services.map(service => (
        <ElevationBox key={service.name}>
          <CheckBoxInput
            type="checkbox"
            id={service.name}
            value={[service.publicId, service.name, service.price]}
            name={service.name}
            onChange={handleChange}
          />
          <label htmlFor={service.name}>
            <div key={service.name}>
              <h6>{service.name}</h6>
              <span>{service.price}</span>
            </div>
          </label>
        </ElevationBox>
      ))}
      {/* {error && checked && <span>{error}</span>} */}
      <button type="button" onClick={previousPage}>
        Previous
      </button>
      <div>
        <button type="submit">Далее</button>
      </div>
    </form>
  );
};

export default ServicesForm;

// const validate = value => {
//   const errors = {};
//   if (!value.service) {
//     errors.service = 'Выбирите одну из представленных услуг';
//   }
//   return errors;
// };
