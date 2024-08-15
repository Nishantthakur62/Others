import styled, { keyframes } from 'styled-components';

// Define a glowing animation
const glow = keyframes`
  0% {
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
  }
  100% {
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
  }
`;

export const StyledMagicBall = styled.button`
  position: absolute;
  width: 40px; /* Adjusted size for better visibility */
  height:40px;
  font-size: 24px;
  border: none;
  border-radius: 50%; 
   background: radial-gradient(circle, #ff4c4c, #600000);
  color: white;
 cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><text x="0" y="20" font-size="20">💥</text></svg>'), auto;
;
  box-shadow: 0 0 10px rgba(0, 255, 0, 0.6); /* Glowing effect */
  transition: 
    top 0.8s ease, 
    left 0.8s ease, 
    transform 0.3s ease, 
    box-shadow 0.3s ease; /* Smooth transition for position, transform, and shadow */
  animation: ${glow} 1.5s infinite; /* Apply glow animation */
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 5px rgba(0, 255, 0, 0.7); /* Enhance text visibility */
  
  &:hover {
    transform: scale(1.1); /* Slightly larger on hover */
    box-shadow: 0 0 20px rgba(0, 255, 0, 1); /* Stronger glow on hover */
  }

  &:active {
    transform: scale(0.9); /* Slightly smaller on click */
    box-shadow: 0 0 5px rgba(0, 255, 0, 0.5); /* Less glow on click */
  }
`;
