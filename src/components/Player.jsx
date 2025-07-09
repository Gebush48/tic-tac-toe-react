import { useState } from "react";

export default function Player({ initialPlayerName, playerSymbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialPlayerName);
  const onEditClickHander = () => {
    setIsEditing((editing) => !editing);
  };

  const nameChangeHandler = (e) => {
    setPlayerName(e.target.value);
  };

  let playerzName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    playerzName = (
      <input type="text" value={playerName} onChange={nameChangeHandler} />
    );
  }

  return (
    <li className="player">
      <span className="player">
        {playerzName}
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button onClick={onEditClickHander}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
