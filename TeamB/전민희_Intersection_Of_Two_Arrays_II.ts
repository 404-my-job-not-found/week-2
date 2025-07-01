function intersect(nums1: number[], nums2: number[]): number[] {
  const intersect = [];

  // 오름차순으로 정렬하기
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  while (nums1.length > 0) {
    if (nums1[0] === nums2[0]) {
      intersect.push(nums1.shift());
      nums2.shift();
    } else if (nums1[0] > nums2[0]) {
      nums2.shift();
    } else {
      nums1.shift();
    }
  }

  return intersect;
};