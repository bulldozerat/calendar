import styled from '@emotion/styled';

const CalendarHeaderWrapper = styled.div`
  .calendar-header-cell {
    background: #ebffff;
    font-size: 1.4rem;
    text-transform: uppercase;
    border: 0.1rem solid gray;
    border-right: none;
    &:last-of-type {
      border-right: 0.1rem solid gray;
    }
    span {
      display: inline-block;
      padding: 0.5rem;
    }
  }
  .active {
    background: #556de6;
    color: #fff;
  }
  @media only screen and (max-width: 992px) {
    .calendar-header-cell {
      font-size: 1rem;
    }
  }
`;

export default CalendarHeaderWrapper;
