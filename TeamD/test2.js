const majorityElement = (nums) => {
  const freMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    freMap.has(nums[i])
      ? freMap.set(nums[i], freMap.get(nums[i]) + 1)
      : freMap.set(nums[i], 1);
  }

  const max = Math.max(...freMap.values());

  for (let num of freMap) {
    if (num[1] === max) return num[0];
  }
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
