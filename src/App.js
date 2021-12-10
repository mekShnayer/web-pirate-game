
import './App.css';
import PirateGame from './components/PirateGame';
// import {Dimensions} from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  const [isLandscape, setIsLandscape] = useState(window.innerHeight > window.innerWidth)

  window.addEventListener("orientationchange", function () {
    setIsLandscape(window.innerHeight > window.innerWidth)
  }, false)

  return (
    <div className="App">
      {isLandscape ? <PirateGame /> : 'please change to landscape mode'}
    </div>
  );
}

export default App;
