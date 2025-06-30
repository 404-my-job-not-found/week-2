function isAnagram(s: string, t: string): boolean {
  const sMap = new Map();
  const tMap = new Map();

  for (let charS of s) {
    if (!sMap.has(charS)) {
      sMap.set(charS, 1);
    } else {
      sMap.set(charS, sMap.get(charS) + 1);
    }
  }

  for (let charT of t) {
    if (!tMap.has(charT)) {
      tMap.set(charT, 1);
    } else {
      tMap.set(charT, tMap.get(charT) + 1);
    }
  }

  if (sMap.size !== tMap.size) return false;

  for (let sM of sMap.keys()) {
    console.log(sMap.get(sM), tMap.get(sM));
    if (sMap.get(sM) !== tMap.get(sM)) return false;
  }

  return true;
}
