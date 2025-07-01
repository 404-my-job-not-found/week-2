function firstUniqChar(s: string): number {
  let result = -1;
  const map = new Map<string, number>();

  for (const str of s) {
    map.set(str, (map.get(str) ?? 0) + 1);
  }
  for (const [key, value] of map) {
    if (value === 1) {
      result = s.indexOf(key);
      break;
    }
  }
  return result;
}
