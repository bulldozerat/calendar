import styled from '@emotion/styled';

const CalendarDaysGrid = styled.div`
  display: flex;
  .calendar-day-cell {
    background: #fff;
    border-left: 0.1rem solid gray;
    border-bottom: 0.1rem solid gray;
    height: auto;
    min-height: 8rem;
    &:nth-of-type(7n) {
      border-right: 0.1rem solid gray;
    }
    .day-number {
      padding: 0.5rem;
      margin-left: 0.5rem;
      font-size: 1.5rem;
      @media only screen and (max-width: 992px) {
        & {
          font-size: 1rem;
        }
      }
    }
    .meeting-info-wrapper {
      margin-left: 0.5rem;
      margin-bottom: 0.5rem;
      padding: 0 0.5rem;
      font-size: 1rem;
    }
    .remove-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .remove-meeting {
      margin-bottom: 0.3rem;
      color: red;
      font-size: 0.8rem;
      cursor: pointer;
    }
  }
  .today-cell {
    background: #556de6;
    color: #fff;
  }
`;

export default CalendarDaysGrid;
