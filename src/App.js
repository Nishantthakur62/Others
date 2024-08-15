import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GamePage1 from './Components/Pages/GamePage1/GamePage1';
import WelcomeModal from './Components/WelcomeModal/WelcomeModal'; 
import InstructionsModal from './Components/InstructionsModal/InstructionsModal'; 

function App() {
  const [isWelcomeModalOpen, setIsWelcomeModalOpen] = useState(true);
  const [isInstructionsModalOpen, setIsInstructionsModalOpen] = useState(false);

  const handleCloseWelcomeModal = () => {
    setIsWelcomeModalOpen(false);
    setIsInstructionsModalOpen(true); // Open instructions modal after closing welcome modal
  };

  const handleCloseInstructionsModal = () => {
    setIsInstructionsModalOpen(false);
    // Optionally, handle further actions after closing instructions modal
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<GamePage1 />} />
      </Routes>

      <WelcomeModal
        isOpen={isWelcomeModalOpen}
        onClose={handleCloseWelcomeModal}
        onNext={handleCloseWelcomeModal} // Button to close welcome and open instructions modal
      />
      <InstructionsModal
        isOpen={isInstructionsModalOpen}
        onClose={handleCloseInstructionsModal}
      />
    </Router>
  );
}

export default App;
