var isPalindrome = function (s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s.at(-(i + 1))) {
      return false;
    }
  }
  return true;
};
