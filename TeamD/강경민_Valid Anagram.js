/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sArr = s.split('').sort().join('');
    const tArr = t.split('').sort().join('');

    return sArr === tArr;
};