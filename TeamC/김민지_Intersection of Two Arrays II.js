var intersect = function (nums1, nums2) {
  const nums1Map = new Map();

  for (let i = 0; i < nums1.length; i++) {
    nums1Map.set(nums1[i], (nums1Map.get(nums1[i]) || 0) + 1);
  }

  let answer = [];

  for (let j = 0; j < nums2.length; j++) {
    if (map.get(nums2[j])) {
      answer.push(nums2[j]);
      map.set(nums2[j], map.get(nums2[j]) - 1);
    }
  }

  return answer;
};
