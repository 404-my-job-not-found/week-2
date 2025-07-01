function firstUniqChar(s: string): number {
  const count = new Map<string, number>();

  // 1. 각 문자의 개수 카운팅
  for (const char of s) {
    count.set(char, (count.get(char) || 0) + 1);
  }

  // 2. 원래 순서대로 순회하며 count가 1인 문자 찾기
  for (let i = 0; i < s.length; i++) {
    if (count.get(s[i]) === 1) {
      return i;
    }
  }

  return -1; // 유일한 문자가 없음
}
