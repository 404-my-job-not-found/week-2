const findDisappearedNumbers = (nums) => {
  let result = [];
  let dict = {};

  for (const num of nums) {
    dict[num] = true;
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!dict[i]) result.push(i);
  }

  return result;
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
