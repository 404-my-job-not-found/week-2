# Valid Sudoku

[Link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/769/)

Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

## 번역
9 x 9 스도쿠 보드가 유효한지 확인합니다. 다음 규칙에 따라 채워진 셀만 유효성을 검사하면 됩니다:

각 행에는 반복 없이 숫자 1~9가 포함되어야 합니다.
각 열에는 반복 없이 숫자 1~9가 포함되어야 합니다.
그리드의 3 x 3 하위 상자 9개에는 반복 없이 숫자 1~9가 각각 포함되어야 합니다.
참고:

스도쿠 보드(부분적으로 채워진)는 유효할 수 있지만 반드시 풀 수 있는 것은 아닙니다.
언급된 규칙에 따라 채워진 칸만 유효성을 검사하면 됩니다.

## 예시
```typescript
Input: board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true

Input: board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8.
// Since there are two 8's in the top left 3x3 sub-box, it is invalid.
```

## 의식의 흐름
### step 1
- 스도쿠는 제자리 정렬 을 하란 이야기가 없고, 9 * 9라는 제한된 2차원배열의 형태.
- 2중 for문을 이용하면 어떨까..? O(n^2) 로 비효율적이지만 9 * 9 라는 제한된 입력에서는 괜찮지않을까? O(9^2) = 81회이니깐.
- 첫번째 칸과 나머지 칸을 비교하면 되지않을까?
### step 2
- 첫번째 칸이 빈칸이고 나머지칸에서 중복이 일어나면 step1의 방식으로는 계산이 안됨..
- 일단 정렬시키고 .은 제외 시켜보면 좋을듯..
### step 3
- 박스에서도 체크하는걸 깜빡해서 다시짜야함...
- 처음 단순 2차원배열을 2중for문으로 돌린다는 생각은 아예버려야할듯. 생각보다 복잡함.
- row를 먼저 체크하고, column만 따로 모은 배열을 만들어서 체크
- 체크방식은 new Set().size를 이용한 길이체크 -> 중복이 있으면 중복이 제거됨으로써 길이가 틀려지는점을 이용.
- 박스를 어떻게 체크할지 고민해봐야함.. 무조건 3 * 3 이라는 점을 이용해야할꺼같은데 고민중
### step 4
- 박스는 3. 반복문의 현재 인덱스에 +3 한 i+3 의 값에서 % 3 했을때 0 이면 박스의 시작점으로 간주.
- 그리고 반복은 i부터 i+3번까지만 반복하면 3*3 으로 맞게 되지않을까..?
- 가로 세로로 i ~ i+2 까지의 네모 박스[i][i] ~ [i+2][i+2]
### step 5
- 3*3 을 하나의 배욜로 묶어서 새로운 2차원 배열로 만들어서 rowArray만 중복값 체크하면되지않을까..?
### step 6
- 박스를 어떻게 풀어내야할까 고민하다가 chatGPT의 도움을 받음.
```javascript
const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
```
- 2중for문을 이용해 순회를 하며 위와같은 코드로 box값을 배열에 저장.
- 이후 해당 값의 중복값 체크를 통해 풀이함.
- 처음에는 이렇게도 단순한걸 왜이렇게 힘들게 돌아서 풀었을까 라는 고민이 많이 들었음..
- 이는 아직 알고리즘에 대한 문제가 없음으로 인한 문제인듯함!