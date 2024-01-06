import {useState} from 'react';
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from './components/Log';

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
] 


const getActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){ 
      currentPlayer = 'O';
  }
  return currentPlayer;
}


function App() {
  // const [activePlayer,setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = getActivePlayer(gameTurns);
  


  const handleSelectSquare = (rowIndex,colIndex) => {
    setGameTurns((prevTurns)=> {
      let currentPlayer = getActivePlayer(prevTurns);

    console.log('current active player',currentPlayer)
      const updatedTurns = [{
        square: {
          row: rowIndex,
          col: colIndex
        },
        player : currentPlayer   
      },...prevTurns];
      return updatedTurns;

    })
  }

  console.log('current active player',activePlayer)
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player name='Player 2' symbol='O'isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
