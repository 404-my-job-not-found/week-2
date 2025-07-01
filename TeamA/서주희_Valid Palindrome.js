const isPalindrome = (s) => {
  const replacedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  let leftIndex = 0,
    rightIndex = replacedStr.length - 1;

  while (leftIndex <= rightIndex) {
    if (replacedStr[leftIndex] !== replacedStr[rightIndex]) {
      return false;
    }
    leftIndex++;
    rightIndex--;
  }

  return true;
};
