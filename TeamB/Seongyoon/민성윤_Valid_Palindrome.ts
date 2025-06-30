function isPalindrome(s: string): boolean {
    const lowerString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    if(lowerString.length === 0) return true;
    if(lowerString.length === 1) return true;

    const halfIndex = Math.floor(lowerString.length / 2);
    const frontHalf = lowerString.slice(0, lowerString.length % 2 === 0 ? halfIndex : halfIndex + 1);
    const backHalf = lowerString.slice(halfIndex).split("").reverse().join("");

    return frontHalf === backHalf;
};

console.log(isPalindrome("0P"));