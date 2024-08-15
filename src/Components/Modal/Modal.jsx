// Modal.js
import React from 'react';
import { ModalBackground, ModalContent, CloseButton } from './Modal.style'; // Adjust path if needed

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalBackground>
      <ModalContent>
        {children}
        <CloseButton onClick={onClose}>Close</CloseButton>
      </ModalContent>
    </ModalBackground>
  );
};

export default Modal;
