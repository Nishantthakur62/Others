// CountdownTimer.js
import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ onEnd, onTick, resetTimer }) => {
  const [timeLeft, setTimeLeft] = useState(30); // Initial countdown time in seconds

  useEffect(() => {
    if (resetTimer) {
      setTimeLeft(30); // Reset timer if resetTimer is true
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        const newTimeLeft = prev - 1;
        if (onTick) {
          onTick(newTimeLeft);
        }
        if (newTimeLeft <= 0) {
          clearInterval(interval);
          onEnd();
        }
        return newTimeLeft;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [resetTimer, onEnd, onTick]);

  return (
    <div>
      <h1>{timeLeft}s</h1>
    </div>
  );
};

export default CountdownTimer;
