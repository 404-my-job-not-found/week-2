function isAnagram(s: string, t: string): boolean {
  // length가 다르면 false
  if (s.length !== t.length) {
    return false;
  }

  // s의 각 문자를 t에서 찾고, 찾은 문자는 제거
  // 만약 t에서 찾지 못한 문자가 있다면 false
  // newWord는 s의 각 문자를 담은 배열
  const newWord = new Array<string>();
  for (let i = 0; i < s.length; i++) {
    newWord.push(s[i]);
  }

  // t의 각 문자를 순회하면서 newWord에서 해당 문자를 제거
  for (let i = 0; i < t.length; i++) {
    if (!newWord.includes(t[i])) {
      return false;
    }

    // t[i]가 newWord에 있다면 해당 문자를 제거
    // findIndex를 사용하여 t[i]가 newWord에서 처음으로 나타나는 인덱스를 찾고, splice로 제거
    // splice는 배열에서 특정 위치의 요소를 제거하는 메서드
    newWord.splice(
      newWord.findIndex((item) => item === t[i]),
      1
    );
  }

  return true;
}
