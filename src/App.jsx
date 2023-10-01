import { useState, useEffect } from "react";
import Squire from "./components/Squire";
import ResetButton from "./components/RestButton";
import { Turn } from "./utils/const";
import TableWinner from "./components/TableWinner";
import { checkWinn, chekFull } from "./utils/chek";
import { readGame, saveGame } from "./utils/saveGAme";

function App() {
  //Estado
  const [board, setBoard] = useState(() => {
    const boardLocalStorage = readGame("board");

    return boardLocalStorage ? boardLocalStorage : Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnLocalStorage = readGame("turn");

    return turnLocalStorage ? turnLocalStorage : Turn.X;
  });
  const [winner, setWinner] = useState(null);

  //Resetear el juego
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(Turn.X);
    setWinner(null);
    localStorage.removeItem("board");
    localStorage.removeItem("turn");
  };

  //Actualizar el tablero
  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newTurn = turn === Turn.X ? Turn.O : Turn.X;

    const newBoard = [...board];
    newBoard[index] = turn;
    const newWinner = checkWinn(newBoard);
    //Gardando en local

    //Comprobando si hay ganador o esta lleno
    if (newWinner) setWinner(newWinner);
    if (chekFull(newBoard)) setWinner(false);

    setBoard(newBoard);
    setTurn(newTurn);
  };
  
  useEffect(()=>{
    saveGame(board, turn);

  },[board,turn])
  //Render
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

      <TableWinner winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
