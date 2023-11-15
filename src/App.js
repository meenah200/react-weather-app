import React from 'react';
import Weather from './Weather';

import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">

      <Weather />
      <footer>
        This project was coded by odenike Aminat and <a href="https://github.com/meenah200/react-weather-app">Open-sourced</a> on Github
      </footer> 
      </div> 
    </div>
  );
}