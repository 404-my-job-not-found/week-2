/**
 * @param {character[][]} board
 * @return {boolean}
 * 
 * board.length == 9
 * board[i].lengt == 9
 * board[i][j]는 1~9 또는 '.'
 */
var isValidSudoku = function(board) {
    const row = Array.from({length: 9}, () => new Set());
    const col = Array.from({length: 9}, () => new Set());
    const square = Array.from({length: 9}, () => new Set());

    for(let i=0; i<board.length; i++){
        for(let j=0; j<board.length; j++){
            
            if(board[i][j] === '.'){
                continue
            }

            const data = board[i][j];
            const index = Math.floor(i/3) * 3 + Math.floor(j/3);

            if(row[i].has(data) || col[j].has(data) || square[index].has(data)){
                return false;
            }

            row[i].add(data);
            col[j].add(data);
            square[index].add(data);
        }
    }

    return true;
};
