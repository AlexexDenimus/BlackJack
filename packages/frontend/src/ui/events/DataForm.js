// @flow

import React, { useEffect } from 'react';
import { Field, reduxForm } from 'redux-form';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import moment from 'moment';
import { addMonths, setMinutes, setHours } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  handleSubmit: () => void,
  previousPage: () => void,
};

const datePicker = ({ input, meta: { touched, error } }) => {
  const handleClick = () => {
    input.value = input.value ? moment(input.value, 'MMMM d, yyyy h:mm aa')._d : new Date();
  };
  const handleChange = date => {
    if (input.value === date) {
      return;
    }
    input.value = moment(date, 'MMMM d, yyyy h:mm aa')._d;
    input.onChange(input.value);
  };
  return (
    <div onClick={handleClick}>
      <DatePicker
        {...input}
        selected={input.value}
        onChange={date => handleChange(date)}
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
        todayButton="Сегодня"
        minTime={setHours(setMinutes(new Date(), 0), 10)}
        maxTime={setHours(setMinutes(new Date(), 0), 22)}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 6)}
        withPortal
        id={input.name}
      />
      {touched && error && <span>{error}</span>}
    </div>
  );
};

const DateForm = (props: Props) => {
  const { handleSubmit, previousPage } = props;
  useEffect(() => {
    registerLocale('ru', ru);
    setDefaultLocale('ru');
  });

  return (
    <form onSubmit={handleSubmit}>
      <Field name="data" component={datePicker} onBlur={event => event.preventDefault()} />
      <button type="button" onClick={previousPage}>
        Previous
      </button>
      <div>
        <button type="submit">Далее</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'event',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(DateForm);
