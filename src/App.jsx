import { useState, useEffect } from "react";
import Squire from "./components/Squire";
import ResetButton from "./components/RestButton";
import {Turn} from './utils/const'
import TableWinner from "./components/TableWinner";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(Turn.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(Turn.X);
    setWinner(null);
  };
  const checkWinn = (boardCheck) => {
    for (const combo of WIN_COMBOS) {
      const [a, b, c] = combo;

      if (
        boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      ) {
        return boardCheck[a];
      }
    }
    return false;
  };

  const chekFull = (boardCheck) => {
    return boardCheck.every((item) => item !== null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newTurn = turn === Turn.X ? Turn.O : Turn.X;

    const newBoard = [...board];
    newBoard[index] = turn;
    const newWinner = checkWinn(newBoard);

    if (newWinner) setWinner(newWinner);
    if (chekFull(newBoard)) setWinner(false);

    setBoard(newBoard);
    setTurn(newTurn);
  };
  return (
    <main>
      <h1>Tic Tac Toe </h1>
      <ResetButton resetGame={resetGame}>Reset</ResetButton>

      <section className="board">
        {board.map((_, index) => {
          return (
            <>
              <Squire key={index} updateBoard={updateBoard} index={index}>
                {board[index]}
              </Squire>
            </>
          );
        })}
      </section>

      <section className="turn">
        <Squire isTurn={turn === Turn.X}>{Turn.X}</Squire>
        <Squire isTurn={turn === Turn.O}>{Turn.O}</Squire>
      </section>

      <TableWinner/>
    </main>
  );
}

export default App;
