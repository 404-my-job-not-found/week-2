const intersect = (nums1, nums2) => {
  return nums1.filter((num) => nums2.includes(num));
};

console.log(intersect([1, 2, 2, 1], [2, 2])); // [2, 2]
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4])); // [4, 9]
console.log(intersect([1], [1])); // [1]
console.log(intersect([3, 1, 2], [1, 1])); // [1]
console.log(intersect([1, 2, 2, 1], [2])); // [2, 2]
