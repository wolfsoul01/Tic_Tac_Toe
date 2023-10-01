 export function saveGame(board, turn) {
  localStorage.setItem("board", JSON.stringify(board));
  localStorage.setItem("turn", JSON.stringify(turn));
}

export function readGame(item) {
  return JSON.parse(localStorage.getItem(item));
}
