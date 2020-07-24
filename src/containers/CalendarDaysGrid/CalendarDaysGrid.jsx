import React from 'react';
import PropTypes from 'prop-types';

// Other
import { uuid } from 'uuidv4';
import { getDaysInMonth, getFirstDayOfMonth } from '../../utils/helpers';

// Components
import CalendarDaysGridWrapper from './CalendarDaysGridWrapper';

const CalendarDaysGrid = ({ calendarActiveMonthNumber }) => {
  const totalGridDaysCound = 42;
  const daysInActiveMonth = getDaysInMonth(calendarActiveMonthNumber); //31
  console.log('daysInActiveMonth: ', daysInActiveMonth);
  const daysOutOfActiveMonth = totalGridDaysCound - daysInActiveMonth; // 4
  console.log('daysOutOfActiveMonth: ', daysOutOfActiveMonth);

  const firstDayOfActiveMonth = getFirstDayOfMonth(calendarActiveMonthNumber);
  console.log('firstDayOfActiveMonth: ', firstDayOfActiveMonth); // 3 = Chetvurtuk
  let lastDayInPrevMonth = getDaysInMonth(calendarActiveMonthNumber - 1); // 30 = 30
  console.log('lastDayInPrevMonth: ', lastDayInPrevMonth);

  return (
    <CalendarDaysGridWrapper>
      <div className='calendar-row'>
        {Array(totalGridDaysCound)
          .fill()
          .map((x, index) => {
            const indexStartOne = index + 1;
            let dayToRender = indexStartOne - firstDayOfActiveMonth;

            // Prev month days logic
            if (firstDayOfActiveMonth > index) {
              dayToRender = lastDayInPrevMonth - firstDayOfActiveMonth + indexStartOne;
            }

            // Next month days logic
            const cellsBeforeNextMonth = firstDayOfActiveMonth + daysInActiveMonth;
            if (cellsBeforeNextMonth < indexStartOne) {
              dayToRender = indexStartOne - cellsBeforeNextMonth;
            }

            return (
              <div className={`calendar-col calendar-day-cell`} key={uuid()}>
                <div className='day-number'>{dayToRender}</div>
              </div>
            );
          })}
      </div>
    </CalendarDaysGridWrapper>
  );
};

CalendarDaysGrid.propTypes = {
  calendarActiveMonthNumber: PropTypes.number
};

export default CalendarDaysGrid;
