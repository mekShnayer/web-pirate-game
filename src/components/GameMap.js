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
    top: '-10px',
    description: 'You need to escape this island, if you stay here you loose.'
  },
  {
    inx: 2,
    src: island_2,
    top: '20px',
    description: 'Here you win Rum barrle. Be careful! There is 50% chance that it is poisand- if it is, you loose, otherwise you win'
  },
  {
    inx: 3,
    src: dragon,
    description: 'If you land here the dragon is gonna eat you, carefull mate'
  },
  {
    inx: 5,
    src: bottle_message,
    description: 'If you land here you will find a funny message in a bottle'
  },
  {
    inx: 4,
    src: island_4,
    topnum: '150px',
    top: '-150px',
    description: 'If you land here - you will find the treasure! win win win! $$$ '
  },
  {
    inx: 6,
    src: island_6,
    topnum: '150px',
    description: 'If you landed here, you escaped the first island succsesfully and you win'
  },
]

function GameMap() {
  const { diceResult, isStart } = useContext(DiceContext);

  return (
    <div className='game-map'>
    
      {!isStart ? <Message /> : ''}
      {
        islandsArr.map((island, inx) =>
          <div className='island' key={inx} id={`num_${inx}`} style={{ left: island.left, top: island.top }}>
            <img src={island.src} alt='img' className='island' id={`island_${island.inx}`} />
            {island.inx === diceResult && <Pirate />}

            <div className='island-num' style={{ top: island.topnum }} onClick={()=>alert(island.description)}>
              {island.inx}
            </div>
          </div>
        )
      }

    </div>

  )
}

export default GameMap;