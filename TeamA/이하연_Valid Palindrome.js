/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let newS = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0; i < newS.length / 2; i++) {
    if (newS[i] !== newS[newS.length - i - 1]) return false;
  }

  return true;
};
