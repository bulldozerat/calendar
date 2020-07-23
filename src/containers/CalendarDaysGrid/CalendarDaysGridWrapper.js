import styled from '@emotion/styled';

const CalendarDaysGrid = styled.div`
  display: flex;
  height: 70vh;
  .calendar-day-cell {
    border-left: 1px solid gray;
    border-bottom: 1px solid gray;
    &:nth-child(7n) {
      border-right: 1px solid gray;
    }
    .day-number {
      font-size: 1.8rem;
    }
  }
`;

export default CalendarDaysGrid;
