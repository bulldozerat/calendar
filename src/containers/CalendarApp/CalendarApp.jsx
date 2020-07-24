import React, { useState } from 'react';

// Other
import meetings from './meetings.json';
import { convertNumberToMonthStirng } from '../../utils/helpers';

// Components
import CalendarAppWrapper from './CalendarAppWrpper';
import CalendarHeader from '../../components/CalendarHeader';
import CalendarDaysGrid from '../CalendarDaysGrid';

const CalendarApp = () => {
  const [meetingsData, setMeetingsData] = useState(meetings);
  const dateNow = new Date();
  const currentMonthNumber = dateNow.getMonth();
  const [calendarActiveMonthNumber, setCalendarActiveMonthNumber] = useState(dateNow.getMonth());

  const changeMonth = isNext => {
    isNext
      ? setCalendarActiveMonthNumber(calendarActiveMonthNumber + 1)
      : setCalendarActiveMonthNumber(calendarActiveMonthNumber - 1);
  };

  const removeMeeting = meetingData => {
    const { meetingRoom, end, start, name } = meetingData;
    const removedMeetingData = meetingsData.meetings.filter(m => {
      const isRemovedMeeting = m.meetingRoom === meetingRoom && m.end === end && m.start === start && m.name === name;
      return !isRemovedMeeting;
    });
    const newMeetingsData = { meetingRooms: [...meetingsData.meetingRooms], meetings: [...removedMeetingData] };
    setMeetingsData(newMeetingsData);
  };

  return (
    <CalendarAppWrapper>
      <div className='calendar-container'>
        {/* // TODO extract to component */}
        <h1 className='main-title'>
          {calendarActiveMonthNumber > 0 && <span onClick={() => changeMonth()}>&larr;</span>}
          {convertNumberToMonthStirng(calendarActiveMonthNumber)}
          {calendarActiveMonthNumber < 11 && <span onClick={() => changeMonth(true)}>&rarr;</span>}
        </h1>
        {/* // TODO extract to component */}
        <CalendarHeader isCurrentMonth={currentMonthNumber === calendarActiveMonthNumber} dateNow={dateNow} />
        <CalendarDaysGrid
          calendarActiveMonthNumber={calendarActiveMonthNumber}
          meetingsData={meetingsData}
          removeMeeting={removeMeeting}
        />
      </div>
    </CalendarAppWrapper>
  );
};

export default CalendarApp;
