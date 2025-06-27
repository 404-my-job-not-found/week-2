function isValidSudoku(board: string[][]): boolean {
  const rowSets: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const columnSets: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const boxSets: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const number = board[i][j];
      if (number === ".") continue;
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (
        rowSets[i].has(number) ||
        columnSets[j].has(number) ||
        boxSets[boxIndex].has(number)
      ) {
        return false;
      } else {
        rowSets[i].add(number);
        columnSets[j].add(number);
        boxSets[boxIndex].add(number);
      }
    }
  }
  return true;
}
