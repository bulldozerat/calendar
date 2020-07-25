import React from 'react';
import PropTypes from 'prop-types';

// Components
import ModalWrapper from './ModalWrapper';

const Modal = ({ children, title, closeModal, left, right, top }) => {
  return (
    <ModalWrapper right={right} left={left} top={top}>
      <h3>{title}</h3>
      <div>{children}</div>
      <span onClick={closeModal} className='close'>
        X
      </span>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  closeModal: PropTypes.func,
  left: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  right: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  top: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Modal;
