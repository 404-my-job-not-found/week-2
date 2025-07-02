function firstUniqChar(s: string): number {
	const count: Record<string, number> = {}

	// 1단계: 문자 횟수 세기
	for (const char of s) {
		count[char] = (count[char] || 0) + 1
	}

	console.log(count)

	// 2단계 count 가 1인 첫번째 문자를 찾기
	for (let i = 0; i < s.length; i++) {
		if (count[s[i]] === 1) {
			return i
		}
	}

	return -1
}

firstUniqChar("leetcode")
firstUniqChar("loveleetcode")
firstUniqChar("aabb")

// 1. 문자의 등장 횟수를 세고
// 2. 문자열을 앞에서부터 순회하면서 count가 1인 첫번쨰 문자를 찾기
