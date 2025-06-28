var isPalindrome = function (s) {
  const arr = s
    .toLowerCase()
    .split('')
    .filter(s => /[a-zA-Z0-9]/.test(s));

  const normalizedString = arr.join('');
  const reversedString = arr.reverse().join('');

  return normalizedString === reversedString;
};
