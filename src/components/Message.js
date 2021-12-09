import React, { useContext } from 'react';
import { DiceContext } from '../context/DiceContextProvider';
import './Message.css';

const Message = () => {

  const { diceResult, message, setMessage, startOver } = useContext(DiceContext);
  const randomMessagesArr = ['funny1', 'funny2']
  const randomIndex = Math.floor(Math.random() * randomMessagesArr.length)
  const rum = ['rum is poisand, you lost', 'rum is good, have fun - you won!']
  const randomRum = Math.floor(Math.random() * 2)

  switch (diceResult) {
    case 1:
      setMessage('you stayed in the same place, GAME OVER')
      break;
    case 2:
      setMessage(rum[randomRum])
      break;
    case 3:
      setMessage('you got eaten by a dragon, GAME OVER')
      break;
    case 4:
      setMessage('you have found the treasure, YOU WON!')
      break;
    case 5:
      setMessage(randomMessagesArr[randomIndex])
      break;
    case 6:
      setMessage('you got to the final island, YOU WON!')
      break;
  }

  return (
    <div className='message-div'>
      <h1 id='message'> {message}</h1>
      <button id='start-over'
        onClick={()=>startOver()}
      >start over</button>
    </div>
  )
}

export default Message;