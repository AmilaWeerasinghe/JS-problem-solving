import {useState} from 'react';
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winningCombinations';
import GameOver from './components/GameOver';

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
  const [playerName, setPlayerName] = useState({
    X: 'Player 1',
    O: 'Player 2'
  })

  const activePlayer = getActivePlayer(gameTurns);

  let gameBoard = [...initialBoard.map((innerArray)=>[...innerArray])]; //ddep copy , so that have decopuled arrays from original and make it possible to rematch

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
      winner = playerName[firstSquareSymbol];
    }
  }

  //automatically calculated at the each time
  const hasDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex,colIndex) => {
    setGameTurns((prevTurns)=> {
      let currentPlayer = getActivePlayer(prevTurns);

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

  const handleRematch = ()=> {
    setGameTurns([]);
  }

  const handlePlayerName = (symbol, newName)=> {
    setPlayerName((prevName) => {
      return {
        ...prevName,
        [symbol]:newName
      }
    })
  }

  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player 1' symbol='X' onNameChange={handlePlayerName} isActive={activePlayer === 'X'}/>
          <Player name='Player 2' symbol='O' onNameChange={handlePlayerName} isActive={activePlayer === 'O'}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRematch}/>}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
