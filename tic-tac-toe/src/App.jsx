import {useState} from 'react';
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from './components/Log';
import { WINNING_COMBINATIONS } from './winningCombinations';
import GameOver from './components/GameOver';

const INITIAL_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
};

const getActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X'){ 
      currentPlayer = 'O';
  }
  return currentPlayer;
}

const getWinner = (gameBoard,playerName)=> {
  let winner;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
  

    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = playerName[firstSquareSymbol];
    }
  }
  return winner;
}

const getGameBoard = (gameTurns)=> {
  let gameBoard = [...INITIAL_BOARD.map((innerArray)=>[...innerArray])]; //depp copy , so that have decopuled arrays from original and make it possible to rematch

    for (const turn of gameTurns){
        
        const { square:{row,col} , player } = turn;
        gameBoard[row][col] = player;
    }

    return gameBoard;
}


function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [playerName, setPlayerName] = useState(PLAYERS)

  const activePlayer = getActivePlayer(gameTurns);
  const gameBoard = getGameBoard(gameTurns);

    const winner = getWinner(gameBoard,playerName);

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
          <Player name={PLAYERS.X} symbol='X' onNameChange={handlePlayerName} isActive={activePlayer === 'X'}/>
          <Player name={PLAYERS.O} symbol='O' onNameChange={handlePlayerName} isActive={activePlayer === 'O'}/>
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRematch}/>}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />
      </div>
      <Log turns={gameTurns}/>
    </main>
  )
}

export default App
