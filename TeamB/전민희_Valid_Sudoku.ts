function isValidSudoku(board: string[][]): boolean {
  for (let i = 0; i < board.length; i++) {
    const row = new Set();
    const col = new Set();
    const box = new Set();

    for (let j = 0; j < 9; j++) {
      const rowVal = board[i][j];
      const colVal = board[j][i];
      const boxVal = board[3 * Math.floor(i / 3) + Math.floor(j / 3)]
      [3 * (i % 3) + (j % 3)];

      if (rowVal !== '.') {
        if (row.has(rowVal)) return false;
        row.add(rowVal);
      }
      if (colVal !== '.') {
        if (col.has(colVal)) return false;
        col.add(colVal);
      }
      if (boxVal !== '.') {
        if (box.has(boxVal)) return false;
        box.add(boxVal);
      }
    }
  }
  return true;
};