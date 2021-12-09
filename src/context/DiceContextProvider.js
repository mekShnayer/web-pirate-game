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

  const startOver = () =>{
    console.log('starting over')
    setIsStart(true)
    setDiceResult(1)
  }


  return (
    <DiceContext.Provider value={{ diceResult, rollDice, isStart, setMessage, message ,startOver}}>
      {props.children}
    </DiceContext.Provider>
  )

}

export default DiceContextProvider;