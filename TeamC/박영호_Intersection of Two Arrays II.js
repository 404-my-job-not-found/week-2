var intersect = function (nums1, nums2) {
  const arr1 = nums1.sort((a, b) => a - b);
  const arr2 = nums2.sort((a, b) => a - b);

  let p1 = 0;
  let p2 = 0;
  const result = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return result;
};
