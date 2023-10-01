import { useState } from "react";

const Turn = {
  X: "x",
  O: "o",
};

const WIN_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function Squire({ children, index, isTurn, updateBoard }) {
  const handelClick = () => {
    updateBoard(index);
  };

  return (
    <article className={`squire ${isTurn && "isTurn"}`} onClick={handelClick}>
      {children}
    </article>
  );
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(Turn.X);
  const [winner, setWinner] = useState(null);

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

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newTurn = turn === Turn.X ? Turn.O : Turn.X;

    const newBoard = [...board];
    newBoard[index] = turn;
    const newWinner = checkWinn(newBoard);

    if (newWinner) setWinner(newWinner);

    setBoard(newBoard);
    setTurn(newTurn);
  };
  return (
    <main>
      <h1>Tic Tac Toe </h1>

      <section className="board">
        {board.map((_, index) => {
          return (
            <>
              <Squire key={index} updateBoard={updateBoard} index={index}>
                {" "}
                {board[index]}{" "}
              </Squire>
            </>
          );
        })}
      </section>

      <section className="turn">
        <Squire isTurn={turn === Turn.X}>{Turn.X}</Squire>
        <Squire isTurn={turn === Turn.O}>{Turn.O}</Squire>
      </section>
      <h1>{winner && `Gano:${winner}`}</h1>
    </main>
  );
}

export default App;
