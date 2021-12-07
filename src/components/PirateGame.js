import GameMap from './GameMap';
import './PirateGame.css';
import SideBar from './SideBar';

function PirateGame () {
  return (
    <div className='game'>
      <GameMap />
      <SideBar/>
    </div>
  );
}

export default PirateGame; 