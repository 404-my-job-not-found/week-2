function isAnagram(s: string, t: string): boolean {
  if (s.length === t.length) {
    const sortedS = s.split("").sort().join("");
    const sortedT = t.split("").sort().join("");

    if (sortedS === sortedT) {
      return true;
    }
  }
  return false;
}

// 더 효율적인 방법은 map을 사용하는 것
function isAnagram2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const countMap: Record<string, number> = {};

  for (const char of s) {
    countMap[char] = (countMap[char] || 0) + 1;
  }

  for (const char of t) {
    if (!countMap[char]) return false;
    countMap[char]--;
    if (countMap[char] < 0) return false;
  }

  return true;
}
