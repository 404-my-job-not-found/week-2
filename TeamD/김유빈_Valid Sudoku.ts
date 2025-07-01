function isValidSudoku(board: string[][]): boolean {
  if (board.length !== 9 || board.some((row) => row.length !== 9)) {
    return false; // 보드가 9x9가 아닌 경우
  }

  const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
  const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

  // for문을 돌며 행, 열, 3x3 박스에 있는 숫자를 검사
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = board[i][j];
      if (cell !== ".") {
        // 1. 행 검사
        if (rows[i].has(cell)) {
          return false; // 중복된 숫자 발견
        }
        rows[i].add(cell);

        // 2. 열 검사
        if (cols[j].has(cell)) {
          return false; // 중복된 숫자 발견
        }
        cols[j].add(cell);

        // 3. 3x3 박스 검사
        const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3); // 박스 인덱스 계산
        // 박스 인덱스는 0~8 사이의 값이 되어야 함
        if (boxes[boxIndex].has(cell)) {
          return false; // 중복된 숫자 발견
        }
        boxes[boxIndex].add(cell);
      }
    }
  }

  return true; // 모든 검사 통과
}
