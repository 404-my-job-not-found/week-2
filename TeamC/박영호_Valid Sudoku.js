var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    if (hasRepetition(board[i])) {
      return false;
    }
    let column = [];

    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
      if (i % 3 === 0 && j % 3 === 0) {
        const box = boxToArray(board, j, i);
        if (hasRepetition(box)) {
          return false;
        }
      }
    }

    if (hasRepetition(column)) {
      return false;
    }
  }
  return true;
};

const hasRepetition = function (arr) {
  arr = arr.filter((element) => element !== ".");
  return arr.length !== new Set(arr).size;
};

const boxToArray = function (board, startRow, startCol) {
  const arr = [];
  for (let i = startRow; i < startRow + 3; i++) {
    for (let j = startCol; j < startCol + 3; j++) {
      arr.push(board[i][j]);
    }
  }
  return arr;
};
