import { useState } from "react"

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = ({onSelectSquare, turns})=>{
    // const [boardState, setBoardState] = useState(initialBoard);
    // const [symbol,setSymbol] = useState('X');

    let gameBoard = initialBoard;

    for (const turn of turns){
        
        const { square:{row,col} , player } = turn;
        
        console.log(gameBoard, row, col,player);

        gameBoard[row][col] = player;
    }

    // const handleBoxClick = (row,col) =>{
    //     setBoardState((prevboardState)=> {
    //         const updatedBoard =[...prevboardState.map((innerArray)=> [...innerArray])];
    //         updatedBoard[row][col] = activeSymbol;
    //         return updatedBoard;

    //     });
    //     // setSymbol((prevSymbol)=> {
    //     //     console.log(prevSymbol)
    //     //     if(prevSymbol==='X'){
    //     //         return 'O'
    //     //     }
    //     //     return 'X'
    //     // })

    //     onSelectSquare();
    // }

    return(
        <ol id='game-board'>
            {gameBoard.map((row, rowIndex)=> <li index={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => <li index={colIndex}>
                        <button onClick={() => onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!== null}>
                            {playerSymbol}
                            </button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard;