function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  const [minNums, maxNums] =
    nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];
  for(let i = 0; i < minNums.length; i++) {
    if(maxNums.includes(minNums[i])) {
      result.push(minNums[i]);
      maxNums.splice(maxNums.indexOf(minNums[i]), 1);
    }
  }

  return result
}
