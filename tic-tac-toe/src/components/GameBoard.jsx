import { useState } from "react"

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

const GameBoard = ()=>{
    const [boardState, setBoardState] = useState(initialBoard);
    const [symbol,setSymbol] = useState('X');

    console.log(symbol)

    const handleBoxClick = (row,col) =>{
        setBoardState((prevboardState)=> {
            const updatedBoard =[...prevboardState.map((innerArray)=> [...innerArray])];
            updatedBoard[row][col] = symbol;
            return updatedBoard;

        });
        setSymbol((prevSymbol)=> {
            console.log(prevSymbol)
            if(prevSymbol==='X'){
                return 'O'
            }
            return 'X'
        })
    }

    return(
        <ol id='game-board'>
            {boardState.map((row, rowIndex)=> <li index={rowIndex}>
                <ol>
                    {row.map((playerSymbol,colIndex) => <li index={colIndex}><button onClick={()=>handleBoxClick(rowIndex,colIndex)}>{playerSymbol}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}

export default GameBoard;