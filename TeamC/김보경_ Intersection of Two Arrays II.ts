//nums1 = number[]
//nums2 = number[]

function intersect(nums1: number[], nums2: number[]): number[] {
  const map = new Map();
  const output: number[] = [];

  for (const n of nums1) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  for (const n of nums2) {
    if (map.get(n) > 0) {
      output.push(n);
      map.set(n, map.get(n) - 1);
    }
  }

  return output;
}
console.log(intersect([1, 2, 2, 1], [2, 2]));
