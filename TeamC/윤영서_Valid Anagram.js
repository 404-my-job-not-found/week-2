var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  // 문자열을 배열로 변환 → 정렬 → 다시 문자열로 변환하여 비교
  return s.split("").sort().join("") === t.split("").sort().join("");
};
