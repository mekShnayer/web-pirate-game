import './SideBar.css'
import Dice from './Dice';
import Hand from '../images/hand.png';
import React, { useState, useContext } from 'react';
import { DiceContext } from '../context/DiceContextProvider';

const SideBar = () => {
  const { diceResult ,rollDice} = useContext(DiceContext);
  // const { rollDice } = useContext(DiceContext)


  return (
    <div className='side-bar'>
      <div id='hand'>
        <img src={Hand} alt='img' />
        <br />
        <span>  browse map</span>
      </div>
      <button id='dice-roll' onClick={rollDice}> Roll dice</button>
      <Dice />
      <h1>{diceResult}</h1>
    </div>
  )
}

export default SideBar;