import {WIN_COMBOS} from './const'
export const checkWinn = (boardCheck) => {
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

export const chekFull = (boardCheck) => {
  return boardCheck.every((item) => item !== null);
};
