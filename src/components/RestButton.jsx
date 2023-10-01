function ResetButton({ children, resetGame }) {
    return (
      <>
        <div style={{ display: "flex" ,justifyContent:'center',margin:10}}>
          <button className="butonReset" onClick={resetGame}>
            {children}
          </button>
        </div>
      </>
    );
  }

  export default ResetButton