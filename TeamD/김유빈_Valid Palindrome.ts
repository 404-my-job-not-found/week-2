function isPalindrome(s: string): boolean {
  const newWord = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = newWord.length - 1;

  if (newWord.length === 0) {
    return true;
  }

  while (left < right) {
    if (newWord[left] !== newWord[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
