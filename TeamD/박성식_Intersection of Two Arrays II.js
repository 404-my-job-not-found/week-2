const intersect = (nums1, nums2) => {
  return nums1
    .filter((num) => nums2.includes(num))
    .splice(0, Math.min(nums1.length, nums2.length));
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
console.log(intersect([1], [1])); // [1]
console.log(intersect([3, 1, 2], [1, 1])); // [1]
console.log(intersect([1, 2, 2, 1], [2])); // [2]
