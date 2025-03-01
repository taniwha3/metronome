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
    background-image: 
      radial-gradient(circle at 50% 50%, rgba(128, 0, 255, 0.1) 0%, transparent 60%),
      linear-gradient(180deg, #0f0020 0%, #220938 100%);
    color: #f5f5f5;
    min-height: 100vh;
    position: relative;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(to bottom, rgba(255, 0, 255, 0.2) 0%, transparent 5%, transparent 95%, rgba(255, 0, 255, 0.2) 100%),
      linear-gradient(90deg, rgba(0, 255, 255, 0.2) 0%, transparent 5%, transparent 95%, rgba(0, 255, 255, 0.2) 100%);
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