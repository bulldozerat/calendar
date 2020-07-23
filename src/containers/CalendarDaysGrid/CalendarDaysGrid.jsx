import React from 'react';

// Other
import { uuid } from 'uuidv4';

// Components
import CalendarDaysGridWrapper from './CalendarDaysGridWrapper';

const CalendarDaysGrid = () => {
  const countOfTiles = 35;

  return (
    <CalendarDaysGridWrapper>
      <div className='calendar-row'>
        {Array(countOfTiles)
          .fill()
          .map((x, index) => (
            <div className='calendar-col calendar-day-cell' key={uuid()}>
              <div className='day-number'>{index + 1}</div>
            </div>
          ))}
      </div>
    </CalendarDaysGridWrapper>
  );
};

export default CalendarDaysGrid;
