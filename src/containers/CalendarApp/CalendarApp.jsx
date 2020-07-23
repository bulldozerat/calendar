import React from 'react';

// Other
// import meetings from './meetings.json';
import { Container } from 'reactstrap';
import { convertNumberToMonthStirng } from '../../utils/helpers';

// Components
import CalendarAppWrapper from './CalendarAppWrpper';
import CalendarHeader from '../../components/CalendarHeader';

const CalendarApp = () => {
  // const [meetingsData, setMeetingsData] = useState(meetings);

  return (
    <CalendarAppWrapper>
      <Container>
        <h1 className='main-title'>
          <span>Arrow left</span> {convertNumberToMonthStirng(new Date().getMonth())} <span>Arrow right</span>
        </h1>
        <div className='calendar-row'>
          <CalendarHeader />
        </div>
      </Container>
    </CalendarAppWrapper>
  );
};

export default CalendarApp;
