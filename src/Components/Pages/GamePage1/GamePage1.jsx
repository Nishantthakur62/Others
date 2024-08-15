import React, { useState, useEffect, useRef } from 'react'; // Ensure useEffect is imported
import { Container } from './GamePage1.style'; 
import MagicBall from '../../MagicBall/MagicBall';
import CountdownTimer from '../../CountdownTimer/CountdownTimer';

const GamePage1 = () => {
  const [obstaclesVisible, setObstaclesVisible] = useState(true);
  const [ballCount, setBallCount] = useState(5); // Initial number of magic balls
  const [resetTimer, setResetTimer] = useState(false); // State to trigger timer reset
  const timerResetRef = useRef(false); // Ref to track timer reset state

  const handleCountdownTick = (timeLeft) => {
    const randomFactor = Math.random(); // Random value between 0 and 1
    const newBallCount = Math.floor(5 + (30 - timeLeft) / (2 + randomFactor * 2)); // Increase with randomness
    setBallCount(newBallCount);
  };

  const handleCountdownEnd = () => {
    setObstaclesVisible(false);
  };

  const handleBallTouch = () => {
    if (!timerResetRef.current) {
      setResetTimer(true);
      timerResetRef.current = true; // Mark timer as reset
    }
  };

  useEffect(() => {
    if (resetTimer) {
      // Reset the timer after a delay to allow the CountdownTimer component to reset
      const timer = setTimeout(() => {
        setResetTimer(false);
        timerResetRef.current = false; // Allow future resets
      }, 100); // Short delay to ensure the timer component resets properly
      return () => clearTimeout(timer);
    }
  }, [resetTimer]);

  return (
    <Container>
      {obstaclesVisible && Array.from({ length: Math.max(ballCount, 0) }).map((_, index) => (
        <MagicBall key={index} onTouch={handleBallTouch} />
      ))}
      <CountdownTimer resetTimer={resetTimer} onEnd={handleCountdownEnd} onTick={handleCountdownTick} />
    </Container>
  );
};

export default GamePage1;
