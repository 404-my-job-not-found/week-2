function isPalindrome(s: string): boolean {
	const original = s.toLowerCase().replace(/[^a-z0-9]/g, "")
	console.log(original)

	const replace = original.split("").reverse().join("")
	console.log(replace)

	return original === replace
}
// 고급 풀이 Two Poin
// function isPalindrome(s: string): boolean {
//   let left = 0;
//   let right = s.length - 1;

//   while (left < right) {
//     // 알파벳이나 숫자가 아니면 건너뛰기
//     while (left < right && !isAlphaNum(s[left])) left++;
//     while (left < right && !isAlphaNum(s[right])) right--;

//     if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

//     left++;
//     right--;
//   }

//   return true;
// }

// function isAlphaNum(c: string): boolean {
//   return /[a-z0-9]/i.test(c); // 대소문자, 숫자 확인
// }
