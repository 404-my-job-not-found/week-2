/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let shortArr = nums1.length < nums2.length ? nums1 : nums2;
  let longArr = nums1.length < nums2.length ? nums2 : nums1;

  let result = [];

  for (let i = 0; i < shortArr.length; i++) {
    for (let j = 0; j < longArr.length; j++) {
      if (shortArr[i] == longArr[j]) {
        result.push(longArr[j]);
        longArr[j] = "이미 씀";

        break;
      }
    }
  }

  return result;
};
