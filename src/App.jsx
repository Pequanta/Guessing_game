import "./index.css";
import React, { useState } from "react";
import MainGameArea from "./MainGameArea";
import StartMessage from "./Components/StartMessage.jsx";
import GameEndMessage from "./Components/GameEndMessaage.jsx";
function App() {
  const [gameStarting, setGameStarting] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  return (
    <>
      {!gameStarting && !gameOver && !gameWon && (
        <MainGameArea
          gameStartingFunction={setGameStarting}
          gameOverFunction={setGameOver}
          gameWonFunction={setGameWon}
        />
      )}
      {gameStarting && <StartMessage gameStartingFunction={setGameStarting} />}
      {gameOver && (
        <GameEndMessage
          gameStartingFunction={setGameStarting}
          gameOverFunction={setGameOver}
          notification={"gameover"}
        />
      )}
      {gameWon && (
        <GameEndMessage
          gameStartingFunction={setGameStarting}
          gameWonFunction={setGameWon}
          notification={"gamewon"}
        />
      )}
    </>
  );
}

export default App;
