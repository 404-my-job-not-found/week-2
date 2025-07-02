function firstUniqChar(s: string): number {
  const obj: { [key: string]: number } = {};
  for (let c of s) {
    if (!obj[c]) {
      obj[c] = 1;
    } else {
      obj[c]++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) {
      return i;
    }
  }
  return -1;
}
