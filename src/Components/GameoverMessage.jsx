import styles from "./Comonents.module.css";
import errorPic from "../assets/error.png";
import rightPic from "../assets/right.png";
function GameoverMessage(props) {
  const startGameAgain = (event) => {
    props.gameStartingFunction(false);
    if (props.notification === "gameover") {
      props.gameOverFunction(false);
    } else if (props.notification === "gamewon") {
      props.gameWonFunction(false);
    }
  };
  return (
    <div className={styles.pageCover}>
      <div className={styles.card}>
        <div className={styles.message}>
          {props.notification === "gameover" && (
            <div>
              <img src={errorPic} />
              <div className={styles.subMessage}>
                <h1>Game Over !</h1>
                <button
                  onClick={(event) => {
                    startGameAgain(event);
                  }}
                >
                  Try Again
                </button>
              </div>
            </div>
          )}
          {props.notification === "gamewon" && (
            <div>
              <img src={rightPic} />
              <div className={styles.subMessage}>
                <h1>You Won !</h1>
                <button
                  onClick={(event) => {
                    startGameAgain(event);
                  }}
                >
                  Play Again
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default GameoverMessage;
