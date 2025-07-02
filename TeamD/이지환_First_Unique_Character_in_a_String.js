/**
 * @param {string} s
 * @return {number}
 */

// Input: s = "leetcode"
// Output: 0
// Explanation:
// The character 'l' at index 0 is the first character that does not occur at any other index.

var firstUniqChar = function (s) {
    let map = new Map();

    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        } else {
            map.set(s[i], 1);
        }
    }
    for (let [key, value] of map.entries()) {
        // 1인 경우 첫 번째 고유 문자
        if (value === 1) {
            return s.indexOf(key);
        }
    }
    return -1;
};

const s = "leetcode";

console.log(firstUniqChar(s));
