import Squire from "../components/Squire";
import ResetButton from "../components/RestButton";

function TableWinner({ winner, resetGame }) {
  if (winner == null) return;

  return (
    <section className="winner">
      <article className="tab">
        <h1>{winner ? `Gano🥳:` : "Empate"}</h1>
        <Squire>{winner ? winner : "😐"}</Squire>
        <ResetButton resetGame={resetGame}>Jugar Otra Ves</ResetButton>
      </article>
    </section>
  );
}

export default TableWinner;
