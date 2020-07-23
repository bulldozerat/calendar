import styled from '@emotion/styled';

const CalendarDaysGrid = styled.div`
  display: flex;
  height: 70vh;
  .calendar-day-cell {
    background: #fff;
    border-left: 1px solid gray;
    border-bottom: 1px solid gray;
    &:nth-of-type(7n) {
      border-right: 1px solid gray;
    }
    .day-number {
      margin-top: 0.5rem;
      margin-left: 1rem;
      font-size: 1.8rem;
    }
  }
`;

export default CalendarDaysGrid;
