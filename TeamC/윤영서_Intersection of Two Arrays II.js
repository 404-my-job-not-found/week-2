var intersect = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    [nums1, nums2] = [nums2, nums1];
  }

  const countMap = new Map();
  for (let num of nums1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  const result = [];

  for (let num of nums2) {
    if (countMap.has(num) && countMap.get(num) !== 0) {
      result.push(num);
      countMap.set(num, countMap.get(num) - 1);
    }
  }

  return result;
};
