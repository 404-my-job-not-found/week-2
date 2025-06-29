const isPalidrome = (s) => {
  const filtered = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  return filtered === filtered.split("").reverse().join("");
};

const input = "race a car";
const input2 = "A man, a plan, a canal: Panama";

console.log(isPalidrome(input));
console.log(isPalidrome(input2));
