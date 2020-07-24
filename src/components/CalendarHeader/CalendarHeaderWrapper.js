import styled from '@emotion/styled';

const CalendarHeaderWrapper = styled.div`
  .calendar-header-cell {
    padding: 5px;
    background: #ebffff;
    font-size: 1.4rem;
    text-transform: uppercase;
    border: 1px solid gray;
    border-right: none;
    &:last-of-type {
      border-right: 1px solid gray;
    }
  }
  .active {
    background: skyblue;
    font-weight: 600;
  }
  @media only screen and (max-width: 992px) {
    .calendar-header-cell {
      font-size: 1rem;
    }
  }
  @media only screen and (max-width: 992px) {
    .calendar-header-cell {
      font-size: 0.7rem;
    }
  }
`;

export default CalendarHeaderWrapper;
