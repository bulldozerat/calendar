import React from 'react';
import PropTypes from 'prop-types';

// Other
import { uuid } from 'uuidv4';
import { getDaysInMonth, getFirstDayOfMonth } from '../../utils/helpers';

// Components
import CalendarDaysGridWrapper from './CalendarDaysGridWrapper';

const CalendarDaysGrid = ({ calendarActiveMonthNumber, meetingsData }) => {
  const totalGridDaysCound = 42;
  const daysInActiveMonth = getDaysInMonth(calendarActiveMonthNumber);
  const firstDayOfActiveMonth = getFirstDayOfMonth(calendarActiveMonthNumber);
  let lastDayInPrevMonth = getDaysInMonth(calendarActiveMonthNumber - 1);

  const activeMonthMeetings = meetingsData.meetings.filter(
    meeting => new Date(meeting.start).getMonth() === calendarActiveMonthNumber
  );

  // TODO optimize with func, cover edge cases where calendarActiveMonthNumber is 0 or 11
  const prevMonthMeetings = meetingsData.meetings.filter(
    meeting => new Date(meeting.start).getMonth() === calendarActiveMonthNumber - 1
  );
  const nextMonthMeetings = meetingsData.meetings.filter(
    meeting => new Date(meeting.start).getMonth() === calendarActiveMonthNumber + 1
  );

  console.log('activeMonthMeetings: ', activeMonthMeetings);
  console.log('prevMonthMeetings: ', prevMonthMeetings);
  console.log('nextMonthMeetings: ', nextMonthMeetings);

  return (
    <CalendarDaysGridWrapper>
      <div className='calendar-row'>
        {Array(totalGridDaysCound)
          .fill()
          .map((x, index) => {
            const indexStartOne = index + 1;
            let isPrevMonthDay = false;
            let isNextMonthDay = false;
            let dayToRender = indexStartOne - firstDayOfActiveMonth;

            // Prev month days logic
            if (firstDayOfActiveMonth > index) {
              isPrevMonthDay = true;
              dayToRender = lastDayInPrevMonth - firstDayOfActiveMonth + indexStartOne;
            }

            // Next month days logic
            const cellsBeforeNextMonth = firstDayOfActiveMonth + daysInActiveMonth;
            if (cellsBeforeNextMonth < indexStartOne) {
              isNextMonthDay = true;
              dayToRender = indexStartOne - cellsBeforeNextMonth;
            }

            let findDayMeetings;
            if (isPrevMonthDay) {
            } else if (isNextMonthDay) {
            } else {
              findDayMeetings = activeMonthMeetings.filter(
                meeting => new Date(meeting.start).getDate() === dayToRender
              );
            }

            console.log('findDayMeetings: ', findDayMeetings);

            return (
              <div className={`calendar-col calendar-day-cell`} key={uuid()}>
                <div className='day-number'>{dayToRender}</div>
                {findDayMeetings?.map(meeting => (
                  <div>
                    {meeting.start} - {meeting.end} {meeting.name} {meeting.room}
                  </div>
                ))}
              </div>
            );
          })}
      </div>
    </CalendarDaysGridWrapper>
  );
};

CalendarDaysGrid.propTypes = {
  calendarActiveMonthNumber: PropTypes.number,
  meetingsData: PropTypes.shape({
    meetingRooms: PropTypes.array,
    // Todo add proptypes
    meetings: PropTypes.array
  })
};

export default CalendarDaysGrid;
