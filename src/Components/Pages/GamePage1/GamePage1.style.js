import styled from 'styled-components';

export const Container = styled.div`
  position: absolute; /* Absolute positioning to center relative to parent */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Center the div */
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0; /* Light gray background color */

  /* Apply a custom cursor */
  cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><text x="0" y="20" font-size="20">🪄</text></svg>'), auto;
`;
