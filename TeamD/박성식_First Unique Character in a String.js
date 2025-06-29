const firstUniqChar = (s) => {
  let result = -1;

  let i = 0;
  while (i < s.length) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      result = i;
      break;
    }
    i++;
  }

  return result;
};

const input = "leetcode";
const input2 = "loveleetcode";
const input3 = "aabb";

console.log(firstUniqChar(input));
console.log(firstUniqChar(input2));
console.log(firstUniqChar(input3));
