import { useState } from "react";

const Player = ({name, symbol, isActive, onNameChange}) =>{
    const [isEditing, setIsEditing] = useState(false);
    const [player, setPlayer] = useState(name);

    const handleEdit = ()=>{
        setIsEditing((isEditing) => !isEditing);
        if(isEditing){
          onNameChange(symbol,player);
        }
    }

    const handleEditInput = (e) => {
        setPlayer(e.target.value);
    }

    return(
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
            {!isEditing && <span className="player-name">{player}</span>}
            {isEditing && <input className="input" value={player} onChange={handleEditInput}></input>}
            <span className="player-symbol">{symbol}</span>
            <button onClick={handleEdit}>{isEditing? 'Save': 'Edit'}</button>
            </span>
          </li>
    )
}

export default Player;