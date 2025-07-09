import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialPlayerName="Player 1" playerSymbol="X" />
          <Player initialPlayerName="Player 2" playerSymbol="0" />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
