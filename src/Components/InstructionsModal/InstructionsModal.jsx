// InstructionsModal.js
import React from 'react';
import Modal from '../Modal/Modal'; 

const InstructionsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h1>Game Instructions</h1>
      <p>Welcome to our game! Here's how you can play:</p>
      <ol>
        <li>Survive to Win and Move to next Page!.</li>
        <li>Avoid obstacles at all cost or reset the timmer</li>
      </ol>
      <p>Good luck and have fun!</p>
    </Modal>
  );
};

export default InstructionsModal;
