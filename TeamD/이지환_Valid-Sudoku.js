/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    return checkRow(board) && checkCol(board) && checkBox(board);
};
function checkBox(board) {
    for (let box = 0; box < 9; box++) {
        let set = new Set();

        let rowStart = Math.floor(box / 3) * 3;
        let colStart = (box % 3) * 3;

        // 3x3 박스 내부를 순회
        for (let i = rowStart; i < rowStart + 3; i++) {
            for (let j = colStart; j < colStart + 3; j++) {
                if (board[i][j] === ".") continue;

                if (set.has(board[i][j])) return false;
                set.add(board[i][j]);
            }
        }
    }
    return true;
}
function checkRow(board) {
    let row = new Set();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === ".") {
                continue;
            }
            if (row.has(board[i][j])) {
                return false;
            }
            row.add(board[i][j]);
        }
        row.clear();
    }
    return true;
}
function checkCol(board) {
    let col = new Set();
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[j][i] === ".") {
                continue;
            }
            if (col.has(board[j][i])) {
                return false;
            }
            col.add(board[j][i]);
        }
        col.clear();
    }
    return true;
}
const board = [
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

console.log(isValidSudoku(board));
