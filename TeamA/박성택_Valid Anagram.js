/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    // 정렬해서 같으면 true
    // const target1 = s.split('').sort().join('');
    // const target2 = t.split('').sort().join('');
    // return target1 === target2;

    // Map 을 이용한 풀이
    // 길이가 다를 경우 예외 처리
    
    if (s.length !== t.length) return false;
    
    const count = new Map();

    for (let char of s) {
        if (count.has(char)) {
            count.set(char, count.get(char) + 1);
        } else {
            count.set(char, 1);
        }
    }

    for (let char of t) {
        if (!count.get(char)) {
            return false;
        } else {
            count.set(char, count.get(char) - 1);
        }
    }

    return true;
};