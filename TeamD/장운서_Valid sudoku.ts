function isValidSudoku(board: string[][]): boolean {
	const rows = Array.from({ length: 9 }, () => new Set<string>())
	const cols = Array.from({ length: 9 }, () => new Set<string>())
	const boxes = Array.from({ length: 9 }, () => new Set<string>())

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			const val = board[i][j]
			if (val === ".") continue

			const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3)

			// 이미 있으면 => 유효하지 않음
			if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
				return false
			}

			// 없으면 => 저장
			rows[i].add(val)
			cols[j].add(val)
			boxes[boxIndex].add(val)
		}
	}

	return true // 모든 칸 통과!
}
