const intersect = (nums1, nums2) => {
  const result = [];

  const min = Math.min(nums1.length, nums2.length);
  const max = Math.max(nums1.length, nums2.length);

  for (let i = 0; i < min; i++) {
    for (let j = 0; j < max; j++) {
      if (nums1.length < nums2.length && nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        break;
      }

      if (nums1.length > nums2.length && nums1[j] === nums2[i]) {
        result.push(nums1[j]);
        break;
      }

      if (nums1.length === nums2.length && nums1[i] === nums2[j]) {
        result.push(nums1[i]);
        break;
      }
    }
  }

  return result;
};

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersect([1], [1]));
console.log(intersect([3, 1, 2], [1, 1]));
