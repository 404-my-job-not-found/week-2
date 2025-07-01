function myAtoi(s: string): number {
  if(isNaN(parseInt(s))) {
    return 0;
  }
  const min = Math.pow(-2, 31);
  const max = Math.pow(2, 31) - 1;
  if(parseInt(s) < min) {
    return min;
  }
  if(parseInt(s) > max) {
    return max;
  }
  return parseInt(s);
}

console.log(myAtoi("42"));
console.log(myAtoi("   -42"));
console.log(myAtoi("4193 with words"));
console.log(myAtoi("words and 987"));
console.log(myAtoi("-91283472332"));
console.log(myAtoi("3.14159"));
console.log(myAtoi("+-12"));
console.log(myAtoi("00000-42a1234"));
console.log(myAtoi("2147483648"));
