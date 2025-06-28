var isAnagram = function (s, t) {
  return s.length === t.length
    ? s.split("").sort().join("") === t.split("").sort().join("")
    : false;
};
