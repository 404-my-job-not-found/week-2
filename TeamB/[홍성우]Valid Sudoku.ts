function isValidSudoku(board: string[][]): boolean {
  for (let row = 0; row < 9; row++) {
    const seen = new Set();
    for (let col = 0; col < 9; col++) {
      const val = board[row][col];
      if (val === ".") continue;
      if (seen.has(val)) return false;
      seen.add(val);
    }
  }

  for (let col = 0; col < 9; col++) {
    const seen = new Set();
    for (let row = 0; row < 9; row++) {
      const val = board[row][col];
      if (val === ".") continue;
      if (seen.has(val)) return false;
      seen.add(val);
    }
  }

  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const seen = new Set();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const val = board[boxRow * 3 + i][boxCol * 3 + j];
          if (val === ".") continue;
          if (seen.has(val)) return false;
          seen.add(val);
        }
      }
    }
  }

  return true;
}
