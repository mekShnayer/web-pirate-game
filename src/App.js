
import './App.css';
import PirateGame from './components/PirateGame';
// import {Dimensions} from 'react-native';
import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react';
import { DiceContext } from './context/DiceContextProvider';

function App() {

  const { message, diceResult } = useContext(DiceContext);
  // const { diceResult } = useContext(DiceContext);
  const [isLandscape, setIsLandscape] = useState(window.innerHeight < window.innerWidth)
  useEffect(() => {
    window.addEventListener("orientationchange", function () {
      setIsLandscape(window.innerHeight > window.innerWidth)
    })
  }, [])
  ///
  const [ip, setIP] = useState('');

  const getIPData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    // console.log(res.data.IPv4);
    setIP(res.data.IPv4)

  }

  useEffect(() => {
    getIPData()
    let game_data = {
      ip: ip,
      dice_result: diceResult,
      action: message,
      time_stamp: Date.now()
    }
    fetch('https://fake-backend/pirategamedata', {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: game_data
    }).then(() => {
      console.log(game_data)
    }).catch(err=>console.log(err))
  }, [message])

  ////
  return (
    <div className="App">

      {isLandscape ? <PirateGame /> :
        <h1>please change to landscape mode</h1>
      }
    </div>
  );
}

export default App;
