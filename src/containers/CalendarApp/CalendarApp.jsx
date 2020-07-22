import React, { useEffect } from 'react';

// Other
import { Container } from 'reactstrap';

// Components
import CalendarAppWrapper from './CalendarAppWrpper';
import CalendarHeader from '../../components/CalendarHeader';

const CalendarApp = () => {
  useEffect(() => {
    fetchCalendarData();
  }, []);

  const fetchCalendarData = async () => {
    await fetch('https://slack-files.com/TLYRT5VGQ-F014G8476RY-38c3178694')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <CalendarAppWrapper>
      <Container>
        <h1 className='main-title'>Calendar App</h1>
        <div className='calendar-row'>
          <CalendarHeader />
        </div>
      </Container>
    </CalendarAppWrapper>
  );
};

export default CalendarApp;
