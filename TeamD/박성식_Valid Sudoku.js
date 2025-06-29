const isValidSudoku = (board) => {
  const row = Array.from({ length: 9 }).map(() => new Set());
  const col = Array.from({ length: 9 }).map(() => new Set());
  const boxes = Array.from({ length: 9 }).map(() => new Set());

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const val = board[i][j];

      if (val === ".") continue;

      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (row[i].has(val) || col[j].has(val) || boxes[boxIndex].has(val)) {
        return false;
      }

      row[i].add(val);
      col[j].add(val);
      boxes[boxIndex].add(val);
    }
  }

  return true;
};

const Input = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const input2 = [
  ["8", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

console.log(isValidSudoku(Input));
console.log(isValidSudoku(input2));
