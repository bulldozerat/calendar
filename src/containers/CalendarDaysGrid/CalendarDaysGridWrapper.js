import styled from '@emotion/styled';

const CalendarDaysGrid = styled.div`
  display: flex;
  height: 70vh;
  .calendar-day-cell {
    padding: 5px;
    background: #fff;
    border-left: 1px solid gray;
    border-bottom: 1px solid gray;
    &:nth-of-type(7n) {
      border-right: 1px solid gray;
    }
    .day-number {
      margin-left: 0.5rem;
      font-size: 1.5rem;
    }
  }
`;

export default CalendarDaysGrid;
