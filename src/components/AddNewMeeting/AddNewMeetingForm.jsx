import React from 'react';
import PropTypes from 'prop-types';

// Other
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { uuid } from 'uuidv4';

// Components
import AddNewMeetingFormWrapper from './AddNewMeetingFormWrapper';

const AddNewMeetingForm = ({ meetingsData, addNewMeeting }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        ddMmYyyy: '',
        hhMm: '',
        meetingRoom: meetingsData.meetingRooms[0]
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Meeting Name is required'),
        ddMmYyyy: Yup.string()
          .required('Ivalid date')
          .length(10, 'Please enter dd-mm-yyyy format')
          .matches(/(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d/g, 'Invalid date'),
        hhMm: Yup.string()
          .required('Ivalid time')
          .length(5, 'Please enter hh:mm format')
          // TODO improve regEx
          .matches(/[0-2][0-9]:[0-5][0-9]/g, 'Invalid time'),
        durationHhMm: Yup.string()
          .required('Ivalid time')
          .length(5, 'Please enter hh:mm format')
          // TODO improve regEx
          .matches(/[0-2][0-9]:[0-5][0-9]/g, 'Invalid time')
      })}
      onSubmit={values => {
        addNewMeeting(values);
      }}
      render={() => (
        <AddNewMeetingFormWrapper>
          <Form>
            <div className='form-group select-wrapper'>
              <label htmlFor='meetingRoom'>Meeting room *</label>
              <Field as='select' name='meetingRoom'>
                {meetingsData.meetingRooms.map(room => (
                  <option value={room} key={uuid()}>
                    {room}
                  </option>
                ))}
              </Field>
            </div>
            <div className='form-group'>
              <label htmlFor='name'>Meeting Name *</label>
              <Field name='name' type='text' placeholder='Enter first name' />
              <ErrorMessage name='name' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='ddMmYyyy'>Start date *</label>
              <Field name='ddMmYyyy' type='text' id='ddMmYyyy' placeholder='Enter dd-mm-yyyy format' />
              <ErrorMessage name='ddMmYyyy' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='ddMmYyyy'>Start time *</label>
              <Field name='hhMm' type='text' id='hhMm' placeholder='Enter hh:mm format' />
              <ErrorMessage name='hhMm' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='durationHhMm'>Duration time *</label>
              <Field name='durationHhMm' type='text' id='durationHhMm' placeholder='Enter hh:mm format' />
              <ErrorMessage name='durationHhMm' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <button type='submit'>Add Meeting</button>
            </div>
          </Form>
        </AddNewMeetingFormWrapper>
      )}
    />
  );
};

AddNewMeetingForm.propTypes = {
  addNewMeeting: PropTypes.func,
  meetingsData: PropTypes.shape({
    meetingRooms: PropTypes.array
  })
};

export default AddNewMeetingForm;
