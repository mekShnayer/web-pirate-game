import React, { createContext, useState } from 'react';

export const DiceContext = createContext();

const DiceContextProvider = (props) => {

  const [diceResult, setDiceResult] = useState(1)
  const [isStart, setIsStart] = useState(true);
  const [message, setMessage] = useState('');


  let rootElementStyle = document.querySelector(':root');


  const changePirateLocation = (result) => {
    let offsets = document.getElementById(`island_${result}`).getBoundingClientRect();
    rootElementStyle.style.setProperty('--chosenTop', `${offsets.top}px`)
    rootElementStyle.style.setProperty('--chosenLeft', `${offsets.left}px`)
  }

  const rollDice = () => {

    let result = Math.floor(Math.random() * 6 + 1);
    setDiceResult(result);

    document.getElementById('dice').className += ' rolling';
    if (result !== 1) {
      changePirateLocation(result)
    }
    setDiceResult(result);
    setTimeout(() => {
      document.getElementById('dice').className -= ' rolling';
      setIsStart(false)
    }, 2000)

  }


  const startOver = () => {
    setIsStart(true)
    setDiceResult(1)
    rootElementStyle.style.setProperty('--chosenTop', '-10px')
    rootElementStyle.style.setProperty('--chosenLeft', '100px')
  }


  return (
    <DiceContext.Provider value={{ diceResult, rollDice, isStart, setMessage, message, startOver }}>
      {props.children}
    </DiceContext.Provider>
  )

}

export default DiceContextProvider;