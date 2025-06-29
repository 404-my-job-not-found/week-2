/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 대문자를 소문자로
    // 영문자, 숫자를 제외한 문자 제거
    // 기존 문자열과 뒤집은 문자열의 같으면 true 아니면 false
    // 빈 문자열은 팔린드롬

    const target = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    // console.log(target);

    const reverse = target.split('').reverse().join('');
    // console.log(reverse);

    if(target === '') return true;

    if(target === reverse) return true;

    else return false;

};