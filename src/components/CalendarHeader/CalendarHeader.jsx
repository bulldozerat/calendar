import React from 'react';
import PropTypes from 'prop-types';

// Other
import { calendarDaysOfTheWeek, convertNumberToDayStirng } from '../../utils/helpers';
import { uuid } from 'uuidv4';

// Components
import CalendarHeaderWrapper from './CalendarHeaderWrapper';

const CalendarHeader = ({ isCurrentMonth, dateNow }) => {
  const currentDayString = convertNumberToDayStirng(dateNow.getDay());

  return (
    <CalendarHeaderWrapper className='calendar-row'>
      {calendarDaysOfTheWeek.map(day => (
        <div
          className={`calendar-col calendar-header-cell ${currentDayString === day && isCurrentMonth ? 'active' : ''}`}
          key={uuid()}
        >
          <span>{day}</span>
        </div>
      ))}
    </CalendarHeaderWrapper>
  );
};

CalendarHeader.propTypes = {
  isCurrentMonth: PropTypes.bool,
  dateNow: PropTypes.instanceOf(Date)
};

export default CalendarHeader;
