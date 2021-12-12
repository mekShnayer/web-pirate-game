import React, { useContext } from 'react';
import { DiceContext } from '../context/DiceContextProvider';
import './Message.css';

const Message = () => {

  const { diceResult, message, setMessage, startOver } = useContext(DiceContext);
  const randomMessagesArr = [
    `Don't you have something better to do?`,
    'The real treasure is time, so stop killing it playing this game!',
    'Shani is the best , better hire her',
    `Don't look behind you!`,
    'The ghost behind you thinks you need to go out more'
  ]
  const randomIndex = Math.floor(Math.random() * randomMessagesArr.length)
  const rum = ['The rum is poisand, YOU LOST', 'The rum is good, YAY - YOU WON!']
  const randomRum = Math.floor(Math.random() * 2)
  const islandNumMessageArr = ['0',
    'you stayed in the same place, GAME OVER',
    '2',
    'you got eaten by a dragon, GAME OVER',
    'you have found the treasure, YOU WON!',
    '5',
    'you got to the final island, YOU WON!']
  switch (diceResult) {
    case 2:
      setMessage(rum[randomRum])
      break;
    case 5:
      setMessage(`Message in a bottle: ${randomMessagesArr[randomIndex]}`)
      break;
    default:
      setMessage(islandNumMessageArr[diceResult])
  }

  return (
    <div className='message-div'>
      <h1 id='message'> {message}</h1>
      <button id='start-over'
        onClick={() => startOver()}
      >start over</button>
    </div>
  )
}

export default Message;