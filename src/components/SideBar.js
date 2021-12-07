import './SideBar.css'
import Dice from './Dice';
import Hand from '../images/hand.png';

function SideBar() {

  const DiceRoll = () => {
    let result = Math.floor(Math.random()*6+1)
    console.log(result)
  }

  return (
    <div className='container'>
      <div id='hand'>
        <img src={Hand} alt='img' />
        <br />
        <span>  browse map</span>
      </div>
      <button id='dice-roll' onClick={DiceRoll}> Roll dice</button>
      <Dice />
    </div>
  )
}

export default SideBar;