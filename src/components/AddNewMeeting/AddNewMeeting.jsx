import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Components
import AddNewMeetingWrapper from './AddNewMeetingWrapper';
import Modal from '../Modal';
import AddNewMeetingForm from './AddNewMeetingForm';

const AddNewMeeting = ({ meetingsData }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <AddNewMeetingWrapper>
      <div className='add-new-meeting' onClick={() => setIsModalOpen(true)}>
        Add new meeting
      </div>
      {isModalOpen && (
        <Modal title='Add new meeting' closeModal={() => setIsModalOpen(false)}>
          <AddNewMeetingForm meetingsData={meetingsData} />
        </Modal>
      )}
    </AddNewMeetingWrapper>
  );
};

AddNewMeeting.propTypes = {
  meetingsData: PropTypes.shape({})
};

export default AddNewMeeting;
