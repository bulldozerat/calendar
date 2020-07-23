import React from 'react';

// Other
import { calendarDaysOfTheWeek, convertNumberToDayStirng } from '../../utils/helpers';
import { uuid } from 'uuidv4';

// Components
import CalendarHeaderWrapper from './CalendarHeaderWrapper';

const currentDayString = convertNumberToDayStirng(new Date().getDay());

const CalendarHeader = () => (
  <CalendarHeaderWrapper className='calendar-row'>
    {calendarDaysOfTheWeek.map(day => (
      <div className={`calendar-col calendar-header-cell ${currentDayString === day ? 'active' : ''}`} key={uuid()}>
        {day}
      </div>
    ))}
  </CalendarHeaderWrapper>
);

export default CalendarHeader;
