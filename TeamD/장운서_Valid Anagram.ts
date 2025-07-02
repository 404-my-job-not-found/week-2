function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false
	const sCount: Record<string, number> = {}
	const tCount: Record<string, number> = {}
	for (const str of s) {
		// console.log(str)
		sCount[str] = (sCount[str] || 0) + 1
	}

	// console.log(sCount)

	for (const str of t) {
		// console.log(str)
		tCount[str] = (tCount[str] || 0) + 1
	}

	for (const key in sCount) {
		if (sCount[key] !== tCount[key]) return false
	}
	return true
}
