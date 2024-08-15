// MagicBall.js
import React, { useEffect, useRef, useState } from 'react';
import { StyledMagicBall } from './MagicBall.styles'; 

const MagicBall = ({ onTouch }) => {
  const ballRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (ballRef.current) {
        const container = ballRef.current.parentElement;
        const containerRect = container.getBoundingClientRect();
        const ballRect = ballRef.current.getBoundingClientRect();

        const maxTop = containerRect.height - ballRect.height;
        const maxLeft = containerRect.width - ballRect.width;

        setPosition({
          top: Math.random() * maxTop + 'px',
          left: Math.random() * maxLeft + 'px',
        });
      }
    };

    updatePosition(); // Initial position
    const interval = setInterval(updatePosition, 1000); // Update position every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <StyledMagicBall 
      ref={ballRef} 
      style={{ top: position.top, left: position.left }}
      onMouseEnter={() => onTouch && onTouch()} // Call onTouch when hovered
    >
      O
    </StyledMagicBall>
  );
};

export default MagicBall;
