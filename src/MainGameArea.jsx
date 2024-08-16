import React, { useEffect, useState } from "react";
function MainGameArea(props) {
  const [computerNumber, setComputerNumber] = useState();
  const [countTrials, setCountTrials] = useState(1);

  useEffect(function generator() {
    const generateRandomNumbers = () => {
      let generatedNumbers = new Set();
      let result = "";
      while (generatedNumbers.size < 4) {
        let num = Math.floor((Math.random() + 0.1) * 10) % 10;
        if (generatedNumbers.has(num)) continue;
        generatedNumbers.add(num);
      }
      for (let num of generatedNumbers) {
        result += num;
      }
      setComputerNumber(result);
    };
    generateRandomNumbers();
  }, []);
  const [userTrials, setUserTrials] = useState({
    prevGuesses: [],
    prevNumbers: [],
    prevOrders: [],
  });
  const [userGuess, setUserGuess] = useState();

  const assessUserGuess = (userGuess, computerNumber) => {
    let numberFound = 0;
    let orderFound = 0;
    let checkedValue = computerNumber + "";
    for (let i = 0; i < userGuess.length; i++) {
      if (checkedValue.includes(userGuess[i])) {
        numberFound++;
        if (userGuess[i] == checkedValue[i]) {
          orderFound++;
        }
      }
    }
    return [numberFound, orderFound];
  };
  const checkUserGuess = (event) => {
    if (userGuess.length < 4 || countTrials > 9) {
      return;
    }
    const assessedValues = assessUserGuess(userGuess, computerNumber);
    setUserTrials({
      prevGuesses: [...userTrials.prevGuesses, userGuess],
      prevNumbers: [...userTrials.prevNumbers, assessedValues[0]],
      prevOrders: [...userTrials.prevOrders, assessedValues[1]],
    });
    if (countTrials >= 9 && (assessedValues[0] < 4 || assessedValues[1] < 4)) {
      props.gameOverFunction(true);
    } else if (assessedValues[0] === 4 && assessedValues[1] === 4) {
      props.gameWonFunction(true);
    }
    setCountTrials(countTrials + 1);
    console.log(countTrials);
  };
  const handleInputChange = (event) => {
    const guess = event.target.value;
    setUserGuess(guess);
  };
  return (
    <div className="container">
      <div className="game-card">
        <div className="game-display-area">
          <div className="titles-container">
            <div className="titles">User Guess</div>
            <div className="titles">Number</div>
            <div className="titles">Order</div>
          </div>
          <div className="result-display">
            <div className="entities user-guess">
              <div className="guess-container">
                <ol>
                  {userTrials.prevGuesses.map((guess, index) => (
                    <li key={index}>
                      <span className="counter-numbers">
                        {index + 1 + ".  "}
                      </span>
                      <span>{guess}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
            <div className="entities number">
              <div className="number-container">
                <ul>
                  {userTrials.prevNumbers.map((number, index) => (
                    <li key={index}>{number}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="entities order">
              <div className="order-container">
                <ul>
                  {userTrials.prevOrders.map((order, index) => (
                    <li key={index}>{order}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="user-interactions">
        <h1>Guess</h1>
        <input
          className="guess-input"
          onChange={(event) => handleInputChange(event)}
          maxLength={4}
        />
        <button onClick={(event) => checkUserGuess(event)}>guess</button>
      </div>
    </div>
  );
}
export default MainGameArea;
