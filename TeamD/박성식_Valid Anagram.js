const isAngram = (s, t) => {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < s.length; i++) {
    if (map1.get(s[i])) {
      map1.set(s[i], map1.get(s[i]) + 1);
    } else {
      map1.set(s[i], 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (map2.get(t[i])) {
      map2.set(t[i], map2.get(t[i]) + 1);
    } else {
      map2.set(t[i], 1);
    }
  }

  const arr = Array.from(map1, ([key, value]) => ({ [key]: value }));

  return (
    map1.size === map2.size &&
    arr.every((item) =>
      Object.keys(item).every((key) => map2.get(key) === item[key])
    )
  );
};

const s = "anagram";
const t = "nagaram";
const s2 = "rat";
const t2 = "car";
const s3 = "a";
const t3 = "ab";

console.log(isAngram(s, t));
console.log(isAngram(s2, t2));
console.log(isAngram(s3, t3));
