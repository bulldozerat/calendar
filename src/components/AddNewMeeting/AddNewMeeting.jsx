import React, { useState, useLayoutEffect } from 'react';

// Components
import AddNewMeetingWrapper from './AddNewMeetingWrapper';
import Modal from '../Modal';
import AddNewMeetingForm from './AddNewMeetingForm';

const AddNewMeeting = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <AddNewMeetingWrapper>
      <div className='add-new-meeting' onClick={() => setIsModalOpen(true)}>
        Add new meeting
      </div>
      {isModalOpen && (
        <Modal title='Add new meeting' closeModal={() => setIsModalOpen(false)}>
          <AddNewMeetingForm />
        </Modal>
      )}
    </AddNewMeetingWrapper>
  );
};
export default AddNewMeeting;
