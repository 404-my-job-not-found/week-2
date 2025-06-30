/**
 * 조건1. 공백: 앞쪽 공백 무시
 * 조건2. 부호: '-' 또는 '+' 확인, 없으면 양수
 * 조건3. 변환: 숫자 아닌 문자 나올 때까지 읽기, 숫자 없으면 0
 * 조건4. 범위: [-2³¹, 2³¹-1] 벗어나면 경계값으로 고정
 *
 * 조건 1 ~ 3은 parseInt()로 처리
 * 조건 4는 범위 체크 후 경계값으로 고정
 */

/**
 * @param {string} s
 * @return {number}
 */
const myAtoi = s => (
  (num = parseInt(s)),
  (_32Bit = Math.pow(2, 31)),
  isNaN(num) ? 0 : num < -_32Bit ? -_32Bit : num > _32Bit - 1 ? _32Bit - 1 : num
);

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("1337c0d3"));
