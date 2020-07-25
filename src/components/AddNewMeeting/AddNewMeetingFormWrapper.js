import styled from '@emotion/styled';

const AddNewMeetingFormWrapper = styled.div`
  margin-top: 2rem;
  font-size: 1.2rem;
  .form-group {
    margin-bottom: 1rem;
    label {
      display: inline-block;
      min-width: 12rem;
      text-align: left;
    }
  }
  button {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 100%;
    background: #fff;
    outline: none;
    border: none;
    cursor: pointer;
  }
  .formik-error {
    font-size: 1rem;
    text-align: right;
  }
  input::placeholder {
    font-size: 1rem;
  }
  .select-wrapper {
    display: flex;
    select {
      padding: 2px;
      width: 100%;
      font-size: 12px;
    }
  }
`;

export default AddNewMeetingFormWrapper;
