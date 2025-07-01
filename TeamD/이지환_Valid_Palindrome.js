/**
 * @param {string} s
 * @return {boolean}
 */

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

var isPalindrome = function (s) {
    let lowerStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let left = 0;
    let right = lowerStr.length - 1;

    while (left < right) {
        if (lowerStr[left] !== lowerStr[right]) {
            return false;
        } else {
            left++;
            right--;
        }
    }
    return true;
};

const s = "A man, a plan, a canal: Panama";

console.log(isPalindrome(s));
