import "./index.css";
import React, { useState } from "react";
import MainGameArea from "./MainGameArea";
import StartMessage from "./Components/StartMessage.jsx";
import GameoverMessage from "./Components/GameoverMessage.jsx";
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
        <GameoverMessage
          gameStartingFunction={setGameStarting}
          gameOverFunction={setGameOver}
          notification={"gameover"}
        />
      )}
      {gameWon && (
        <GameoverMessage
          gameStartingFunction={setGameStarting}
          gameWonFunction={setGameWon}
          notification={"gamewon"}
        />
      )}
    </>
  );
}

export default App;
