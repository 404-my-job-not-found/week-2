const firstUniqChar = (s) => {
  const count = new Map();
  const length = s.length;
  let result = -1;

  for (let i = 0; i < length; i++) {
    const char = s[i];

    if (count.has(char)) {
      count.get(char)[0]++;
    } else {
      count.set(char, [1, i]);
    }
  }

  for (const [key, value] of count) {
    if (value[0] === 1) {
      result = value[1];
      break;
    }
  }

  return result;
};
