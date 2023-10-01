import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function Squire({ children,index }) {
  return <article className="squire">{children}</article>;
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  return (
    <main>
      <h1>Tic Tac Toe </h1>

      <section className="board">
        {board.map((item, index) => {
          return (
            <>
              <Squire key={index}> {index} </Squire>
            </>
          );
        })}
      </section>
    </main>
  );
}

export default App;
