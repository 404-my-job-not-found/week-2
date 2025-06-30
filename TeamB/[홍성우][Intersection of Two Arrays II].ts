function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  nums2.forEach((item) => {
    const index = nums1.findIndex((n) => n === item);

    if (index !== -1) {
      const spliceNum = nums1.splice(index, 1);
      result.push(...spliceNum);
    }
  });

  return result;
}
