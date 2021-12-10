import Dice_1 from '../images/dice/dice-1.png';
import Dice_2 from '../images/dice/dice-2.png';
import Dice_3 from '../images/dice/dice-3.png';
import Dice_4 from '../images/dice/dice-4.png';
import Dice_5 from '../images/dice/dice-5.png';
import Dice_6 from '../images/dice/dice-6.png';
import React, { useContext } from 'react';
import { DiceContext } from '../context/DiceContextProvider';

function Dice() {

  const { diceResult } = useContext(DiceContext);

  const result = () => {
    let img = Dice_1;
    switch (diceResult) {
      case 1:
        img = Dice_1;
        break;
      case 2:
        img = Dice_2;
        break;
      case 3:
        img = Dice_3;
        break;
      case 4:
        img = Dice_4;
        break;
      case 5:
        img = Dice_5;
        break;
      case 6:
        img = Dice_6;
        break;
    }
    return img;
  }
  return (
    <div  className='side-items'>
      <img src={result()} alt='img' className='side-items' id='dice'/>
    </div>
  )
}

export default Dice;