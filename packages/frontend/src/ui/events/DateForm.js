// @flow

import React, { useEffect, useState } from 'react';
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';
import { addMonths, setMinutes, setHours, getMinutes, getHours } from 'date-fns';

import 'react-datepicker/dist/react-datepicker.css';

type Props = {
  previousPage: () => void,
  nextPage: () => void,
  pickDate: Date => void,
  excludeDates: Date[],
};

const DateForm = (props: Props) => {
  const { nextPage, previousPage, pickDate, excludeDates } = props;
  const minutes = getMinutes(new Date()) > 30 ? 0 : 30;
  const hours = minutes === 0 ? getHours(new Date()) + 1 : getHours(new Date());
  const [date, setDate] = useState(setMinutes(setHours(new Date(), hours), minutes));

  useEffect(() => {
    registerLocale('ru', ru);
    setDefaultLocale('ru');
  });

  const handleSubmit = event => {
    event.preventDefault();
    pickDate(date);
    nextPage();
  };

  return (
    <form onSubmit={handleSubmit}>
      <DatePicker
        selected={date}
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
        dateFormat="d MMMM, yyyy HH:mm"
        todayButton="Сегодня"
        minTime={setHours(setMinutes(new Date(), 0), 10)}
        maxTime={setHours(setMinutes(new Date(), 0), 22)}
        minDate={new Date()}
        maxDate={addMonths(new Date(), 6)}
        // timeClassName={exclude}
        // excludeTimes={excludeDates.map(value => new Date(value))}
        withPortal
      />
      {/* {touched && error && <span>{error}</span>} */}
      <button type="button" onClick={previousPage}>
        Previous
      </button>
      <div>
        <button type="submit">Далее</button>
      </div>
    </form>
  );
};

export default DateForm;
