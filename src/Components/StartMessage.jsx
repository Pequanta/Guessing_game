import styles from "./Comonents.module.css";
import errorPic from "../assets/error.png";
import React, { useEffect, useState } from "react";
function GameoverMessage(props) {
  const [instructionReading, setInstructionReading] = useState(false);
  const handleInstructionReading = (event) => {
    instructionReading
      ? setInstructionReading(false)
      : setInstructionReading(true);
  };
  const handleGameStarting = (event) => {
    props.gameStartingFunction(false);
  };
  return (
    <div className={styles.pageCover}>
      <div className={styles.card}>
        {!instructionReading && (
          <div id="not-instruction" className={styles.message}>
            <h1>Welcome to the Game enjoy</h1>
          </div>
        )}
        {!instructionReading && (
          <div id="not-instruction" className={styles.userResponse}>
            <button onClick={(event) => handleGameStarting(event)}>
              Start
            </button>
            <button onClick={(event) => handleInstructionReading(event)}>
              Instractions
            </button>
          </div>
        )}
        {instructionReading && (
          <div id="instruction" className={styles.instructionDiv}>
            <span>
              The Computer will generate a four digit number where the digits
              are non-repeated and between 1-9(inclusively). Your role is to
              guess this number within 9 trials.
            </span>
            <button onClick={(event) => handleInstructionReading(event)}>
              back
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default GameoverMessage;
