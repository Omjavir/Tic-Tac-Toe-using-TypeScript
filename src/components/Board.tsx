import Square from "./Square";
import "../App.css";
import { useState } from "react";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [currentTurn, setCurrentTurn] = useState("X");
  // console.log("state", state);

  const checkWinner = (state: any[]) => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        window.location.reload();
        return true;
      }
    }
    return false;
  };

  const handleClick = (index: number) => {
    // console.log("index", index);
    const stateCopy: any[] = Array.from(state);
    if (stateCopy[index] !== null) return;
    stateCopy[index] = currentTurn;

    const win: boolean | undefined = checkWinner(stateCopy);
    console.log("win", win);
    if (win) {
      alert(`Player ${currentTurn} won the game!`);
    }
    setCurrentTurn(currentTurn === "X" ? "O" : "X");
    setState(stateCopy);
  };

  return (
    <div className="board">
      <div className="row">
        <Square onclick={() => handleClick(0)} value={state[0]} />
        <Square onclick={() => handleClick(1)} value={state[1]} />
        <Square onclick={() => handleClick(2)} value={state[2]} />
      </div>
      <div className="row">
        <Square onclick={() => handleClick(3)} value={state[3]} />
        <Square onclick={() => handleClick(4)} value={state[4]} />
        <Square onclick={() => handleClick(5)} value={state[5]} />
      </div>
      <div className="row">
        <Square onclick={() => handleClick(6)} value={state[6]} />
        <Square onclick={() => handleClick(7)} value={state[7]} />
        <Square onclick={() => handleClick(8)} value={state[8]} />
      </div>
    </div>
  );
};

export default Board;
