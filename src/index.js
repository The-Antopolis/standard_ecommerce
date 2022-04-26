// React Module Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// CSS File of Antopolis for every React Project 
import './index.css';

// Component Imports
import App from './App';
window.baseUrl = "https://asce.antopolis.xyz/";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
