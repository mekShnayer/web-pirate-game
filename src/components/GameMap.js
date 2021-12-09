import './GameMap.css'
import island_1 from '../images/island_1.png'
import island_2 from '../images/island_2.png'
import dragon from '../images/dragon.png'
import island_4 from '../images/island_4.png'
import bottle_message from '../images/bottle_message.png'
import island_6 from '../images/island_6.png'
import Pirate from './Pirate'
import { useContext } from 'react'
import { DiceContext } from '../context/DiceContextProvider'
import Message from './Message'

const islandsArr = [
  {
    inx: 1,
    src: island_1
  },
  {
    inx: 2,
    src: island_2
  },
  {
    inx: 3,
    src: dragon
  },
  {
    inx: 4,
    src: island_4
  },
  {
    inx: 5,
    src: bottle_message
  },
  {
    inx: 6,
    src: island_6
  },
]

function GameMap() {
  const { diceResult, rollDice, isStart } = useContext(DiceContext);
  
  return (
    <div className='game-map'>
      {!isStart ? <Message /> : ''}
      {
        islandsArr.map((island, inx) =>
          <div className='island' key={inx}>

            <img src={island.src} alt='img' className='island' />
            {inx + 1 == diceResult && <Pirate />}

            <div className='island-num'>
              {island.inx}
            </div>
          </div>
        )
      }
    </div>

  )
}

export default GameMap;