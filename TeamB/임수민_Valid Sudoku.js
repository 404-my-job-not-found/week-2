/**
 * 누구나 다 알겠지만 스도쿠의 룰은 가로, 세로, 박스엔 같은 수가 들어가면 안된다.
 * row, column, box 탐색을 하고 비교할 배열을 만들어보면 되지 않을까
 * 1. 값을 할 빈 배열부터 만들고 (중복 값이 있는지 확인하기 위해 Set 사용하기)
 * 2. 9*9로 탐색을 하고 "."은 제외
 * 3. 값이 있으면 박스 인덱스를 구해서 비교할 배열에 추가
 * 4. 각각 빈 배열에 값을 할당하고 중복이면 false를 return
 */

/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = board => {
  const [rows, columns, boxes] = Array.from({ length: 3 }, () => Array.from({ length: 9 }, () => new Set()));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const num = board[i][j];
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      if (num === ".") continue;

      if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
        return false;
      }

      rows[i].add(num);
      columns[j].add(num);
      boxes[boxIndex].add(num);
    }
  }
  return true;
};

/**
 * 번외
 * 예시: 12×12 스도쿠, 4×3 박스 (가로4칸 × 세로3칸)
 * boxWidth = 4, boxHeight = 3
 *
 * 보드 구조:
 *     j: 0  1  2  3 | 4  5  6  7 | 8  9 10 11
 * i:0    [   박스0   |   박스1   |   박스2   ]
 *   1    [          |          |          ]
 *   2    [          |          |          ]
 *   ───  ───────────┼──────────┼──────────
 *   3    [   박스3   |   박스4   |   박스5   ]
 *   4    [          |          |          ]
 *   5    [          |          |          ]
 *   ───  ───────────┼──────────┼──────────
 *   6    [   박스6   |   박스7   |   박스8   ]
 *   7    [          |          |          ]
 *   8    [          |          |          ]
 *   ───  ───────────┼──────────┼──────────
 *   9    [   박스9   |  박스10   |  박스11   ]
 *  10    [          |          |          ]
 *  11    [          |          |          ]
 *
 * ────────────────────────────────────────────────────────────
 * j (열) 나누기 - Math.floor(j / boxWidth):
 * ─────────────────────────────────────────────────────────────
 * j = 0,1,2,3    → Math.floor(j/4) = 0  (박스 열 0)
 * j = 4,5,6,7    → Math.floor(j/4) = 1  (박스 열 1)
 * j = 8,9,10,11  → Math.floor(j/4) = 2  (박스 열 2)
 *
 * ─────────────────────────────────────────────────────────────
 * i (행) 나누기 - Math.floor(i / boxHeight):
 * ─────────────────────────────────────────────────────────────
 * i = 0,1,2      → Math.floor(i/3) = 0  (박스 행 0)
 * i = 3,4,5      → Math.floor(i/3) = 1  (박스 행 1)
 * i = 6,7,8      → Math.floor(i/3) = 2  (박스 행 2)
 * i = 9,10,11    → Math.floor(i/3) = 3  (박스 행 3)
 *
 * ─────────────────────────────────────────────────────────────
 * 최종 박스 인덱스 계산:
 * ─────────────────────────────────────────────────────────────
 * boxIndex = boxRow * boxesPerRow + boxCol
 * boxesPerRow = 12 / 4 = 3 (한 행에 3개 박스)
 *
 * 예시:
 * • (1,5)  → boxRow=0, boxCol=1 → 0*3+1 = 박스 1
 * • (4,8)  → boxRow=1, boxCol=2 → 1*3+2 = 박스 5
 * • (10,6) → boxRow=3, boxCol=1 → 3*3+1 = 박스 10
 */

/**
const isValidSudoku = (board, boxWidth = 3, boxHeight = 3) => {
  const boardSize = board.length;
  const boxesPerRow = boardSize / boxWidth;

  const [rows, columns, boxes] = Array.from({ length: boxHeight }, () =>
    Array.from({ length: boardSize }, () => new Set())
  );
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const num = board[i][j];
      const boxRow = Math.floor(i / boxHeight);
      const boxCol = Math.floor(j / boxWidth);
      const boxIndex = boxRow * boxesPerRow + boxCol;

      if (num === ".") continue;

      if (rows[i].has(num) || columns[j].has(num) || boxes[boxIndex].has(num)) {
        return false;
      }

      rows[i].add(num);
      columns[j].add(num);
      boxes[boxIndex].add(num);
    }
  }
  return true;
};
 */

const board_1 = [
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

const board_2 = [
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

console.log(isValidSudoku(board_1));
console.log(isValidSudoku(board_2));
