function isValidRow(board, rowIndex) {
  const cells = board[rowIndex].filter(cell => cell !== '.');
  const unique = new Set(cells);

  return cells.length === unique.size;
}

function isValidColumn(board, columnIndex) {
  const cells = [];

  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    if (board[rowIndex][columnIndex] !== '.') {
      cells.push(board[rowIndex][columnIndex]);
    }
  }

  const unique = new Set(cells);

  return cells.length === unique.size;
}

function isValidBox(board, boxRow, boxCol) {
  const cells = new Set();

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const row = boxRow * 3 + i;
      const col = boxCol * 3 + j;
      const value = board[row][col];

      if (value !== '.') {
        if (cells.has(value)) {
          return false;
        }

        cells.add(value);
      }
    }
  }

  return true;
}

function isValidSudoku(board) {
  for (let rowIndex = 0; rowIndex < 9; rowIndex++) {
    if (!isValidRow(board, rowIndex)) {
      return false;
    }
  }

  for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
    if (!isValidColumn(board, columnIndex)) {
      return false;
    }
  }

  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxColumn = 0; boxColumn < 3; boxColumn++) {
      if (!isValidBox(board, boxRow, boxColumn)) {
        return false;
      }
    }
  }

  return true;
}
