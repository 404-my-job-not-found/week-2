const isAnagram = (s, t) => {
  const firstCount = new Map();
  const secondCount = new Map();
  const length = s.length;

  if (length !== t.length) {
    return false;
  }
  //
  for (let i = 0; i < length; i++) {
    firstCount.set(s[i], (firstCount.get(s[i]) || 0) + 1);
    secondCount.set(t[i], (secondCount.get(t[i]) || 0) + 1);
  }

  for (const [key, value] of firstCount) {
    if (value !== secondCount.get(key)) {
      return false;
    }
  }

  return true;
};
