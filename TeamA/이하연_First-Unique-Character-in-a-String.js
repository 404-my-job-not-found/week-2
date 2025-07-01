/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let index = -1;
  let already = []; // aabb 때문에 넣음

  loop1: for (let i = 0; i < s.length; i++) {
    if (already.includes(s[i])) continue loop1;

    already.push(s[i]);

    for (let j = i + 1; j < s.length; j++) {
      if (s[i] == s[j]) continue loop1;

      // 이 코드 필요 없음. "z" 덕분에 발견 ㅠ
      //   if (s[i] !== s[j] && j == s.length - 1) {
      //     index = i;
      //     break loop1;
      //   }
    }

    index = i;
    break loop1;
  }

  return index;
};
