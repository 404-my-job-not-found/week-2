/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function (nums1, nums2) {
    let result = [];
    let map = new Map();
    for (let i = 0; i < nums1.length; i++) {
        // 중복된 숫자가 있는지 확인
        if (map.has(nums1[i])) {
            map.set(nums1[i], map.get(nums1[i]) + 1);
        } else {
            map.set(nums1[i], 1);
        }
    }
    for (let i = 0; i < nums2.length; i++) {
        if (map.has(nums2[i])) {
            if (map.get(nums2[i]) > 0) {
                // nums1에 중복된 숫자가 있으면
                result.push(nums2[i]);
                map.set(nums2[i], map.get(nums2[i]) - 1);
            }
        }
    }
    return result;
};

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];

console.log(intersect(nums1, nums2));
