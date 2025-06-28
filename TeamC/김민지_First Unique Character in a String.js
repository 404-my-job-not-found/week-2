var firstUniqChar = function (s) {
  const sMap = new Map();

  s = s.split('');

  for (let i = 0; i < s.length; i++) {
    sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
  }

  let uniqueCharacter = '';

  for (const [key, value] of sMap) {
    if (value === 1) {
      uniqueCharacter = key;
      break;
    }
  }

  return s.indexOf(uniqueCharacter);
};

// var firstUniqCharOptimized = function (s) {
//   const charCount = new Map();
//   const uniqueChars = new Set();

//   for (let i = 0; i < s.length; i++) {
//     const char = s[i];
//     const count = (charCount.get(char) || 0) + 1;
//     charCount.set(char, count);

//     if (count === 1) {
//       uniqueChars.add(char);
//     } else {
//       uniqueChars.delete(char);
//     }
//   }

//   for (let i = 0; i < s.length; i++) {
//     if (uniqueChars.has(s[i])) {
//       return i;
//     }
//   }

//   return -1;
// };
