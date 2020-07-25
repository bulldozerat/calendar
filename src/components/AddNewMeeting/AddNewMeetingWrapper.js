import styled from '@emotion/styled';

const AddNewMeetingWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  text-align: center;
  .add-new-meeting {
    display: inline-block;
    padding: 5px;
    background: skyblue;
    color: #fff;
    border: 1px solid gray;
    cursor: pointer;
  }
  .modal {
    position: absolute;
    width: 300px;
    height: 300px;
    background: #fff;
    border: 1px solid gray;
  }
`;

export default AddNewMeetingWrapper;
