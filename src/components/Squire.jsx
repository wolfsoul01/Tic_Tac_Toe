
function Squire({ children, index, isTurn, updateBoard }) {
    const handelClick = () => {
      updateBoard(index);
    };
  
    return (
      <article
        className={`squire ${isTurn && "isTurn alt"}`}
        onClick={handelClick}
      >
        {children}
      </article>
    );
  }
  export default Squire