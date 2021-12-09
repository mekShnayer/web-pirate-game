
import './App.css';
import PirateGame from './components/PirateGame';
// import {Dimensions} from 'react-native';
import React, { useState, useEffect } from 'react';

function App() {
  const [isLandscape, setIsLandscape] = useState(window.innerHeight < window.innerWidth)
  // useEffect(() => {
  //   console.log('useEffect works')
  //   setIsLandscape(window.innerHeight < window.innerWidth)
  // },[window])
  return (
    <div className="App">
      {console.log(isLandscape)}
      {isLandscape ? <PirateGame /> : 'please change to landscape mode'}

    </div>
  );
}

export default App;
