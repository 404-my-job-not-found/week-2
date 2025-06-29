//converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
function isPalindrome(s: string): boolean {
  const sValue = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  const convertValue = s
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .split("")
    .reverse()
    .join("");

  if (sValue === convertValue) {
    return true;
  }

  return false;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
