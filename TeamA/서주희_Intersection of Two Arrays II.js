const intersect = (nums1, nums2) => {
  const longNumCount = new Map();
  const result = [];
  let shortNums, longNums;

  if (nums1.length > nums2.length) {
    shortNums = nums2;
    longNums = nums1;
  } else {
    shortNums = nums1;
    longNums = nums2;
  }

  for (const longNum of longNums) {
    longNumCount.set(longNum, (longNumCount.get(longNum) || 0) + 1);
  }

  for (const shortNum of shortNums) {
    if (longNumCount.has(shortNum) && longNumCount.get(shortNum) > 0) {
      longNumCount.set(shortNum, (longNumCount.get(shortNum) || 0) - 1);
      result.push(shortNum);
    }
  }

  return result;
};
