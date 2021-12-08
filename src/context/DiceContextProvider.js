import React, { createContext, useState } from 'react';

export const DiceContext = createContext();

const DiceContextProvider = (props) => {
  const [diceResult, setDiceResult] = useState(1)
  
  const rollDice = () => {
    let result = Math.floor(Math.random() * 6 + 1);
    setDiceResult( result );
    console.log(diceResult)
  }

  return (
    <DiceContext.Provider value={{ diceResult, rollDice }}>
      {props.children}
    </DiceContext.Provider>
  )

}

export default DiceContextProvider;