import React, { createContext, useState } from 'react';

export const DiceContext = createContext();

const DiceContextProvider = (props) => {
  const [diceResult, setDiceResult] = useState(1)
  const [isStart, setIsStart] = useState(true);
  const [message, setMessage] = useState('');

  const rollDice = () => {
    let result = Math.floor(Math.random() * 6 + 1);
    setDiceResult(result);
    document.getElementById('dice').className += ' rolling';
    setTimeout(() => {
      document.getElementById('dice').className -= ' rolling';
      setIsStart(false)
    }, 2000)

  }
  // const addAnimation = (num) => {

  //   document.getElementById('pirate').style
  // }

  const startOver = () => {
    setIsStart(true)
    setDiceResult(1)
  }


  return (
    <DiceContext.Provider value={{ diceResult, rollDice, isStart, setMessage, message, startOver }}>
      {props.children}
    </DiceContext.Provider>
  )

}

export default DiceContextProvider;