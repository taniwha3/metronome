import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700&family=Inter:wght@300;400;500;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #0f0020 0%, #220938 100%);
    color: #f5f5f5;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }
  
  /* Synthwave sun */
  body::after {
    content: '';
    position: fixed;
    bottom: -120px;
    left: 50%;
    transform: translateX(-50%);
    width: 800px;
    height: 600px;
    background: 
      radial-gradient(circle at center, rgba(255, 60, 172, 0.8) 0%, rgba(255, 60, 172, 0) 70%),
      radial-gradient(circle at center, rgba(255, 60, 172, 0.5) 0%, rgba(255, 60, 172, 0) 60%),
      radial-gradient(circle at center, rgba(255, 0, 110, 0.3) 0%, rgba(255, 0, 110, 0) 50%);
    border-radius: 100% 100% 0 0;
    filter: blur(5px);
    z-index: -2;
    opacity: 0.8;
  }

  /* Grid lines on the horizon */
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(to bottom, rgba(255, 0, 255, 0.2) 0%, transparent 5%, transparent 95%, rgba(255, 0, 255, 0.2) 100%),
      linear-gradient(90deg, rgba(0, 255, 255, 0.2) 0%, transparent 5%, transparent 95%, rgba(0, 255, 255, 0.2) 100%),
      repeating-linear-gradient(180deg, transparent, transparent 45%, rgba(255, 0, 255, 0.1) 45%, rgba(255, 0, 255, 0.1) 45.1%, transparent 45.1%, transparent 50%),
      repeating-linear-gradient(90deg, transparent, transparent 45%, rgba(0, 255, 255, 0.05) 45%, rgba(0, 255, 255, 0.05) 45.1%, transparent 45.1%, transparent 50%);
    background-size: 100% 100%, 100% 100%, 100% 100px, 100px 100%;
    background-position: 0 0, 0 0, 0 bottom, 0 0;
    pointer-events: none;
    z-index: 10;
  }

  h1, h2, h3 {
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  button {
    font-family: 'Orbitron', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);