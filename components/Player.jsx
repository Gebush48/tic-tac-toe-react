export default function Player({ playerName, playerSymbol }) {
  return (
    <li className="player">
      <span className="player">
        <span className="player-name" playerName="Player 1">
          {playerName}
        </span>
        <span className="player-symbol">{playerSymbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
