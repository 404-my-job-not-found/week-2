/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = s => [...s].findIndex(c => s.indexOf(c) === s.lastIndexOf(c));

//타임 아웃
//const firstUniqChar = (s) => [...s].findIndex((char, _, arr) => arr.filter(c => c === char).length === 1);
