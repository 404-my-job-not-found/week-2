// 처음 풀이
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const combinatedStrs1 = new Set();
const combinatedStrs2 = new Set();

const combination = (originNums, currentNums, currentIndex, targetLength) => {
  if (currentNums.length === targetLength) {
    combinatedStrs.add(currentNums.join(''));
    return;
  }

  for (let i = currentIndex; i < originNums.length; i++) {
    currentNums.push(originNums[i]);
    combination(originNums, currentNums, i + 1, targetLength);
    currentNums.pop();
  }
};

const intersect1 = (nums1, nums2) => {
  combinatedStrs.clear();

  let smallNums, bigNums;
  let result;

  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);

  if (nums1.length > nums2.length) {
    smallNums = nums2;
    bigNums = nums1;
  } else {
    smallNums = nums1;
    bigNums = nums2;
  }

  const bigNumsStr = bigNums.join('');

  for (let i = 1; i <= smallNums.length; i++) {
    combination(smallNums, [], 0, i);
  }

  for (const combinatedStr of combinatedStrs) {
    if (bigNumsStr.includes(combinatedStr)) {
      console.log(combinatedStr);

      result = combinatedStr.split('').map((num) => +num);
    }
  }

  console.log(bigNums);
  console.log(combinatedStrs);

  return result;
};

// 두번째 풀이
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
