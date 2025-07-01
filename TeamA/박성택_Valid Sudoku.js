/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // board.length == 9
    // board[i].length == 9
    // board[i][j] is a digit 1-9 or '.'.
    // 다행히 사이즈는 정해져있고
    // 1. 행별로 검사하통과
    // 2. 열별로 검사하고 -> 90도 돌린 배열을 만들어서 똑같이 검사하면 될까?
    // 3. 3x3 으로 나눈 배열을 만들까?
    // 3가지 조건을 모두 만족하면 true

    // 생성할 함수
    // 길이가 9인 숫자+문자 배열의 1~9 숫자의 중복여부를 확인하는 함수를 생성
    // 90도 회전하는 함수
    // 3x3 배열의 숫자로 변경하는 함수

    // 1. 중복여부 검증 함수
    const isValidDuplicated = (arr) => {
        const target = new Set();

        for(let num of arr) {
            // 빈 칸은 무시
            if (num === '.') continue;
            // 이미 있으면 중복
            if (target.has(num)) return false; 
            // 없으면 추가
            target.add(num);
        }
        
        // 중복이 없을 경우 true
        return true;
    }

    // 2. 90도 회전한 배열 생성
    const isRotatedBoard = (board) => {
        const rotated = [];
        for (let i = 0; i < 9; i++) {
            rotated[i] = [];
            for (let j = 0; j < 9; j++) {
                rotated[i][j] = board[9 - j - 1][i];
            }
        }
        return rotated;
    }

    // 3. 3x3 배열 생성
    const isSamBySam = (board) => {
        const boxes = [];
        for (let boxRow = 0; boxRow < 3; boxRow++) {
            for (let boxCol = 0; boxCol < 3; boxCol++) {
                const box = [];
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                            // 0, 0, 0, 0 -> 0,0 -> 5
                            // 0, 0, 0, 1 -> 0,1 -> 3
                            // 0, 0, 0, 2 -> 0,2 -> .
                            // 0, 0, 1, 0 -> 1,0 -> 6
                            // 0, 0, 1, 1 -> 1,1 -> .
                            // 0, 0, 1, 2 -> 1,2 -> .
                            // 0, 0, 2, 0 -> 2,0 -> .
                            // 0, 0, 2, 1 -> 2,1 -> 9
                            // 0, 0, 2, 2 -> 2,2 -> 8        
                        box.push(board[boxRow * 3 + i][boxCol * 3 + j]);
                    }
                }
                // 5,3,.,6,.,.,.,9,8
                boxes.push(box);
            }
        }
        return boxes;
    }


    // 4. 전체 검증하기, 각 조건을 만족하지 않으면 false;
    // 행
    for(let row of board) {
        if(!isValidDuplicated(row)) return false;
    };

    // 열
    const colBoard = isRotatedBoard(board);
    for(let col of colBoard) {
        if(!isValidDuplicated(col)) return false;
    };

    // 3x3
    const samsamBoard = isSamBySam(board);
    for(let samsam of samsamBoard) {
        if(!isValidDuplicated(samsam)) return false;
    };

    return true;
};