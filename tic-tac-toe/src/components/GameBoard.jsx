const GameBoard = ({onSelectSquare, gameBoard})=>{
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