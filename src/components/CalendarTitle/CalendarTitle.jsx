import React from 'react';
import PropTypes from 'prop-types';

// Other
import { convertNumberToMonthStirng } from '../../utils/helpers';

const CalendarTitle = ({ calendarActiveMonthNumber, changeMonth }) => {
  return (
    <h1 className='main-title'>
      {calendarActiveMonthNumber > 0 && <span onClick={() => changeMonth()}>&larr;</span>}
      {convertNumberToMonthStirng(calendarActiveMonthNumber)}
      {calendarActiveMonthNumber < 11 && <span onClick={() => changeMonth(true)}>&rarr;</span>}
    </h1>
  );
};

CalendarTitle.propTypes = {
  calendarActiveMonthNumber: PropTypes.number,
  changeMonth: PropTypes.func
};

export default CalendarTitle;
