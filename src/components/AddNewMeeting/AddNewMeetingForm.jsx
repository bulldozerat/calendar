import React from 'react';
import PropTypes from 'prop-types';

// Other
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Components
import AddNewMeetingFormWrapper from './AddNewMeetingFormWrapper';

const AddNewMeetingForm = () => {
  return (
    <Formik
      initialValues={{
        name: '',
        ddMmYyyy: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string().required('Meeting Name is required'),
        ddMmYyyy: Yup.string()
          .required('Ivalid date')
          .length(10, 'Please enter dd-mm-yyyy format')
          .matches(/(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[012])-(19|20)\d\d/g, 'Invalid date')
      })}
      onSubmit={() => {}}
      render={() => (
        <AddNewMeetingFormWrapper>
          <Form>
            <div className='form-group'>
              <label htmlFor='name'>Meeting Name *</label>
              <Field name='name' type='text' placeholder='Enter first name' />
              <ErrorMessage name='name' component='div' className='formik-error' />
            </div>
            <div className='form-group'>
              <label htmlFor='ddMmYyyy'>Meeting start date *</label>
              <Field name='ddMmYyyy' type='text' id='ddMmYyyy' placeholder='Enter dd-mm-yyyy' />
              <ErrorMessage name='ddMmYyyy' component='div' className='formik-error' />
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

AddNewMeetingForm.propTypes = {};

export default AddNewMeetingForm;
