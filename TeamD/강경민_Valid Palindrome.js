/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const word = s.toLowerCase().replaceAll(/[^a-z0-9]/g, '');
    
    return word === word.split('').reverse().join('');
};