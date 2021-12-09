import React, { createContext, useState } from 'react';

export const DiceContext = createContext();

const DiceContextProvider = (props) => {
  const [diceResult, setDiceResult] = useState(1)
  const [isStart, setIsStart] = useState(true);
  const [message, setMessage] = useState('');
  const rollDice = () => {
    let result = Math.floor(Math.random() * 6 + 1);
    setDiceResult(result);
    setIsStart(false)
  }


  return (
    <DiceContext.Provider value={{ diceResult, rollDice, isStart, setMessage, message }}>
      {props.children}
    </DiceContext.Provider>
  )

}

export default DiceContextProvider;