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
    src: island_1,
    left: '10px',
    top: '-10px'
  },
  {
    inx: 2,
    src: island_2,
    top: '20px'
  },
  {
    inx: 3,
    src: dragon
  },
  {
    inx: 5,
    src: bottle_message,


  },
  {
    inx: 4,
    src: island_4,
    topnum: '150px',
    top: '-150px'
  },
  {
    inx: 6,
    src: island_6,
    topnum: '150px'
  },
]

function GameMap() {
  const { diceResult, rollDice, isStart } = useContext(DiceContext);

  return (
    <div className='game-map'>
      {!isStart ? <Message /> : ''}
      {
        islandsArr.map((island, inx) =>
          <div className='island' key={inx} id={`num_${inx}`} style={{ left: island.left, top: island.top }}>
            <img src={island.src} alt='img' className='island' />
            {inx + 1 == diceResult && <Pirate />}

            <div className='island-num' style={{ top: island.topnum }}>
              {island.inx}
            </div>
          </div>
        )
      }
    </div>

  )
}

export default GameMap;