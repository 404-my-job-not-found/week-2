function isPalindrome(s: string): boolean {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  if (s.length === 0) return true;

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true;
};