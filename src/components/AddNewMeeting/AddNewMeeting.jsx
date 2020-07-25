import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import AddNewMeetingWrapper from './AddNewMeetingWrapper';
import Modal from '../Modal';
import AddNewMeetingForm from './AddNewMeetingForm';

const AddNewMeeting = ({ meetingsData, addNewMeeting }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);

  return (
    <AddNewMeetingWrapper>
      <div className='add-new-meeting' onClick={() => setIsModalOpen(true)}>
        Add new meeting
      </div>
      {isModalOpen && (
        <Modal title='Add new meeting' left='37%' top='2.7rem' closeModal={closeModal}>
          <AddNewMeetingForm meetingsData={meetingsData} addNewMeeting={addNewMeeting} closeModal={closeModal} />
        </Modal>
      )}
    </AddNewMeetingWrapper>
  );
};

AddNewMeeting.propTypes = {
  meetingsData: PropTypes.shape({}),
  addNewMeeting: PropTypes.func
};

export default AddNewMeeting;
