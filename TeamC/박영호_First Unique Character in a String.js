var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const regexp = new RegExp(`[${s[i]}]`, "g");
    if (s.match(regexp).length === 1) return i;
  }
  return -1;
};
