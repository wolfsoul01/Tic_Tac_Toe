import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const Turn = {
  X: "x",
  O: "o",
};

function Squire({ children, index, isTurn }) {
  return (
    <article className={`squire ${isTurn && "isTurn"}`}>{children}</article>
  );
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(Turn.X);

  const updateBoard = () => {
    const newTurn = turn === Turn.X ? Turn.O : Turn.X;
    setTurn(newTurn);
  };
  return (
    <main>
      <h1>Tic Tac Toe </h1>

      <section className="board">
        {board.map((item, index) => {
          return (
            <>
              <Squire key={index + 1}> {index} </Squire>
            </>
          );
        })}
      </section>

      <section className="turn">
        <Squire isTurn={turn === Turn.X}>{Turn.X}</Squire>
        <Squire isTurn={turn === Turn.O}>{Turn.O}</Squire>
      </section>
    </main>
  );
}

export default App;
