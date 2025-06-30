/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = s => ((str = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()), [...str].reverse().join("") === str);

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("s= '"));
