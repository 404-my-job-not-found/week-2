const isValidSudoku = (board) => {
  const rows = Array.from({ length: 9 }, () => new Set());
  const columns = Array.from({ length: 9 }, () => new Set());
  const boxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const item = board[i][j];
      if (item === '.') {
        continue;
      }

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (
        rows[i].has(item) ||
        columns[j].has(item) ||
        boxes[boxIndex].has(item)
      ) {
        return false;
      }

      rows[i].add(item);
      columns[j].add(item);
      boxes[boxIndex].add(item);
    }
  }

  return true;
};
