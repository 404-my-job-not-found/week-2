/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let sCount = {};
  let tCount = {};

  for (let i of s) {
    if (sCount[i]) sCount[i]++;
    else sCount[i] = 1;
  }

  for (let i of t) {
    if (tCount[i]) tCount[i]++;
    else tCount[i] = 1;
  }

  for (let i in sCount) {
    // "a" "ab" 일 때 fail
    if (sCount[i] !== tCount[i]) return false;
  }

  return true;
};

// 개간지나는 쇼트코드
// var isAnagram = function(s, t) {
//   return s.split('').sort().join('') === t.split('').sort().join('');
// };
