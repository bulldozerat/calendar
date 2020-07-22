import styled from '@emotion/styled';

const CalendarHeaderWrapper = styled.div`
  .calendar-header-cell {
    padding: 5px;
    background: #ebffff;
    font-size: 1.6rem;
    text-transform: uppercase;
    border: 1px solid gray;
    border-right: none;
    &:last-of-type {
      border-right: 1px solid gray;
    }
  }
  .active {
    background: skyblue;
  }
`;

export default CalendarHeaderWrapper;
