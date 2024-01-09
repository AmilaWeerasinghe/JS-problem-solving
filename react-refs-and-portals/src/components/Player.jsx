import { useState, useRef } from "react";

export default function Player() {
  const [playerName , setPlayerName] = useState(null);
  const playerNameInput = useRef();

  const handleSubmit = ()=>{
    setPlayerName(playerNameInput.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown entity'}</h2>
      <p>
        <input ref={playerNameInput} type="text"/>
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
