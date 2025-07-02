/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
  const rows = Array.from({ length: 9 }, () => new Set());
  const cols = Array.from({ length: 9 }, () => new Set());
  const subs = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const val = board[i][j];

      if (val === ".") continue;

      const group = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (rows[i].has(val) || cols[j].has(val) || subs[group].has(val)) {
        return false;
      }

      rows[i].add(val);
      cols[j].add(val);
      subs[group].add(val);
    }
  }

  return true;
}
