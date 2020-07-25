import React from 'react';
import PropTypes from 'prop-types';

// Other
import { uuid } from 'uuidv4';
import { getDaysInMonth, getFirstDayOfMonth } from '../../utils/helpers';

// Components
import CalendarDaysGridWrapper from './CalendarDaysGridWrapper';

const CalendarDaysGrid = ({ calendarActiveMonthNumber, meetingsData, removeMeeting, dateNow }) => {
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
              findDayMeetings = prevMonthMeetings.filter(meeting => new Date(meeting.start).getDate() === dayToRender);
            } else if (isNextMonthDay) {
              findDayMeetings = nextMonthMeetings.filter(meeting => new Date(meeting.start).getDate() === dayToRender);
            } else {
              findDayMeetings = activeMonthMeetings.filter(
                meeting => new Date(meeting.start).getDate() === dayToRender
              );
            }

            if (findDayMeetings) {
              findDayMeetings.sort((a, b) => a.start.localeCompare(b.start));
            }

            return (
              <div
                className={`calendar-col calendar-day-cell ${
                  dayToRender === dateNow.getDate() && calendarActiveMonthNumber === dateNow.getMonth()
                    ? 'today-cell'
                    : ''
                }`}
                key={uuid()}
              >
                <div className='day-number'>{dayToRender}</div>
                {findDayMeetings?.map(meeting => {
                  const startDate = new Date(meeting.start);
                  const endDate = new Date(meeting.end);

                  return (
                    <div className='meeting-info-wrapper' key={uuid()}>
                      <div className='remove-wrapper'>
                        <span>
                          {startDate.getHours()}:{(String(startDate.getMinutes()) + 0).substring(0, 2)}-
                          {endDate.getHours()}:{(String(endDate.getMinutes()) + 0).substring(0, 2)}
                        </span>
                        <span className='remove-meeting' onClick={() => removeMeeting(meeting)}>
                          Remove
                        </span>
                      </div>
                      {meeting.name} in {meeting.meetingRoom}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </div>
    </CalendarDaysGridWrapper>
  );
};

CalendarDaysGrid.propTypes = {
  calendarActiveMonthNumber: PropTypes.number,
  removeMeeting: PropTypes.func,
  dateNow: PropTypes.instanceOf(Date),
  meetingsData: PropTypes.shape({
    meetingRooms: PropTypes.array,
    // Todo add proptypes
    meetings: PropTypes.array
  })
};

export default CalendarDaysGrid;
