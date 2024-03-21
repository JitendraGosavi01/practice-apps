import React, { useEffect, useState, useRef } from "react";
import classes from "./index.module.css";
function TicTacToe() {
  let [turn, setTurn] = useState(0);
  const [winMessage, setWinMessage] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  let [clickedBoxes, setClickedBoxes] = useState([]);
  const drawMessage = () => (
    <span>
      It's a Draw!{" "}
      <span
        onClick={handleReset}
        onKeyUp={handleReset}
        style={{ color: "#00ff88", cursor: "pointer" }}
      >
        <em>Try again</em>
      </span>
    </span>
  );
  const winningCombinations = [
    [0, 1, 2],
    [0, 3, 6],
    [1, 4, 7], // Rows
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8], // Columns
    [0, 4, 8], //left-to-right cross
    [2, 4, 6], //right-to-left cross
  ];

  const box0 = useRef();
  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const box5 = useRef();
  const box6 = useRef();
  const box7 = useRef();
  const box8 = useRef();
  const boxRefs = [box0, box1, box2, box3, box4, box5, box6, box7, box8];

  const handleBoxClick = (e, boxNo) => {
    console.log(turn % 2 === 0);
    if (isDisabled) {
      return 0;
    }
    const symbol = turn % 2 === 0 ? "X" : "O";
    const iconElement =
      symbol === "X"
        ? `<i class="fa-solid fa-xmark fa-2xl" style="color:#FFD43B;"></i>`
        : `<i class="fa-regular fa-circle fa-2xl" style="color:#00ff88;"}></i>`;

    e.target.innerHTML = iconElement;
    e.target.style.pointerEvents = "none";
    e.target.style.opacity = 0.7;
    setTurn(turn + 1);
    setClickedBoxes((previousClickedBoxes) => {
      const newArray = [...previousClickedBoxes];
      newArray[boxNo] = symbol;
      return newArray;
    });
  };

  useEffect(() => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        clickedBoxes[a] === "X" &&
        clickedBoxes[b] === "X" &&
        clickedBoxes[c] === "X"
      ) {
        setWinMessage("X wins this game!");
        setIsDisabled(true);
        return;
      } else if (
        clickedBoxes[a] === "O" &&
        clickedBoxes[b] === "O" &&
        clickedBoxes[c] === "O"
      ) {
        setWinMessage("O wins this game!");
        setIsDisabled(true);
        return;
      }

      if (
        winMessage.length === 0 &&
        clickedBoxes.filter((ele) => ele).length > 8
      ) {
        setWinMessage(drawMessage);
      }
    }
  }, [clickedBoxes, winMessage, isDisabled]);

  const handleReset = () => {
    setTurn(0);
    setClickedBoxes([]);
    setIsDisabled(false);
    for (const element of boxRefs) {
      element.current.innerHTML = "";
      element.current.style = "unset";
    }
    setWinMessage("");
  };
  return (
    <div className={classes["container"]}>
      <h1>Welcome to Tic-tac-toe!</h1>
      <h2>{winMessage}</h2>
      <div className={classes["game-container"]}>
        <div className={classes["row1"]}>
          <div
            className={classes["box"]}
            onClick={(e) => handleBoxClick(e, 0)}
            onKeyDown={(e) => handleBoxClick(e, 0)}
            ref={box0}
          ></div>
          <div
            className={classes["box"]}
            onClick={(e) => handleBoxClick(e, 1)}
            onKeyDown={(e) => handleBoxClick(e, 1)}
            ref={box1}
          ></div>
          <div
            className={classes["box"]}
            onClick={(e) => handleBoxClick(e, 2)}
            onKeyDown={(e) => handleBoxClick(e, 2)}
            ref={box2}
          ></div>
        </div>
        <div className={classes["row2"]}>
          <div
            className={classes["box"]}
            onClick={(e) => handleBoxClick(e, 3)}
            onKeyDown={(e) => handleBoxClick(e, 3)}
            ref={box3}
          ></div>
          <div
            className={classes["box"]}
            onClick={(e) => handleBoxClick(e, 4)}
            onKeyDown={(e) => handleBoxClick(e, 4)}
            ref={box4}
          ></div>
          <div
            className={classes["box"]}
            onClick={(e) => handleBoxClick(e, 5)}
            onKeyDown={(e) => handleBoxClick(e, 5)}
            ref={box5}
          ></div>
        </div>
        <div className={classes["row3"]}>
          <div
            className={classes["box"]}
            onClick={(e) => handleBoxClick(e, 6)}
            onKeyDown={(e) => handleBoxClick(e, 6)}
            ref={box6}
          ></div>
          <div
            className={classes["box"]}
            onClick={(e) => handleBoxClick(e, 7)}
            onKeyDown={(e) => handleBoxClick(e, 7)}
            ref={box7}
          ></div>
          <div
            className={classes["box"]}
            onClick={(e) => handleBoxClick(e, 8)}
            onKeyDown={(e) => handleBoxClick(e, 8)}
            ref={box8}
          ></div>
        </div>
      </div>
      <div className={classes["btn-container"]} onClick={handleReset}>
        Reset
      </div>
    </div>
  );
}

export default TicTacToe;
