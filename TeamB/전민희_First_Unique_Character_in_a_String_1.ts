function firstUniqChar(s: string): number {
  const strList = s.split('');
  if (strList.length === Array.from(new Set(strList)).length) {
    return 0;
  }

  const sortedStrList = s.split('').sort();
  const uniques: string[] = [];
  if (sortedStrList[0] !== sortedStrList[1]) {
    uniques.push(sortedStrList[0]);
  }
  if (sortedStrList[sortedStrList.length - 1] !== sortedStrList[sortedStrList.length - 2]) {
    uniques.push(sortedStrList[sortedStrList.length - 1]);
  }
  for (let i = 1; i < sortedStrList.length - 1; i++) {
    if (sortedStrList[i] !== sortedStrList[i + 1] && sortedStrList[i] !== sortedStrList[i - 1]) {
      uniques.push(sortedStrList[i]);
    }
  }
  if (uniques.length === 0) return -1;

  let idx = 1000000;
  uniques.forEach((char) => {
    idx = Math.min(idx, strList.findIndex((c) => c === char));
  });
  return idx;
};