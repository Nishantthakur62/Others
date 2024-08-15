// WelcomeModal.js
import React from 'react';
import Modal from '../Modal/Modal'; // Adjust path if needed
import { NextButton } from '../Modal/Modal.style';
const WelcomeModal = ({ isOpen, onClose, onNext }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1>Welcome!</h1>
      <p>We're glad to have you here. Follow these instructions to get started:</p>
      <NextButton onClick={onNext}>Next </NextButton>
       {/* Button to trigger the next modal */}
    </Modal>
  );
};

export default WelcomeModal;
