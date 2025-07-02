function isPalindrome(s: string): boolean {
  const engNumReg = /[^a-zA-Z0-9]/g;
  const formattedString = s.trim().replaceAll(engNumReg, "").toLowerCase();

  let result = "";

  for (let i = formattedString.length - 1; i >= 0; i--) {
    result += formattedString[i];
  }

  return formattedString === result;
}
