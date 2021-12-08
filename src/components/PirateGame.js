import GameMap from './GameMap';
import './PirateGame.css';
import SideBar from './SideBar';
import DiceContextProvider from '../context/DiceContextProvider';

function PirateGame() {
  return (
    <div className='game'>
      <DiceContextProvider>
        <GameMap />
        <SideBar />
      </DiceContextProvider>
    </div>
  );
}

export default PirateGame;