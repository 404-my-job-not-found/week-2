function firstUniqChar(s: string): number {
  //중복 제거
  const filtered = s
    .split("")
    .filter((char, _, arr) => arr.indexOf(char) === arr.lastIndexOf(char))
    .join();

  const firstChar = filtered[0];

  //기존 배열 돌면서 firstChar위치 찾기
  for (let i = 0; i < s.length; i++) {
    if (firstChar === s[i]) {
      return i;
    }
  }
  return -1;
}

// 그러나 위 방법은 filter 내부에서 두번 탐색해서 시간복잡도가  O(n²)가 된다.
// Map을 사용해서 시간복잡도를 O(n)으로 줄일 수 있다.

function firstUniqChar2(s: string): number {
  const charCount: Map<string, number> = new Map();

  // 각 문자 갯수 세기
  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // 첫 번째로 등장하는 유일한 문자 찾기
  for (let i = 0; i < s.length; i++) {
    if (charCount.get(s[i]) === 1) {
      return i;
    }
  }

  return -1;
}
