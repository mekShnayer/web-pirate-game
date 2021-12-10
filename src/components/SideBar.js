import './SideBar.css'
import Dice from './Dice';
import Hand from '../images/hand.png';
import React, { useState, useContext } from 'react';
import { DiceContext } from '../context/DiceContextProvider';

const SideBar = () => {
  const { diceResult, rollDice } = useContext(DiceContext);
 

  return (
    <div className='side-bar'>
      <div id='hand' className='side-items'>
        <img src={Hand} alt='img' className='side-items' />
        <br />
        <span>  browse map</span>
      </div>
      <button id='dice-roll' onClick={rollDice} className='side-items'> Roll dice</button>
      <Dice />
    </div>
  )
}

export default SideBar;