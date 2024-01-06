import {useState} from 'react';
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winningCombinations';

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
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = getActivePlayer(gameTurns);

  let gameBoard = initialBoard;

    for (const turn of gameTurns){
        
        const { square:{row,col} , player } = turn;
        gameBoard[row][col] = player;
    }

    let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
  

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = firstSquareSymbol;
    }
  }


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
        {winner && <p>You Won, {winner}!</p>}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard}/>
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
