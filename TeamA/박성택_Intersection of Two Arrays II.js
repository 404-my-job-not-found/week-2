/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    // 교집합을 구해라
    // 결과의 각 요소는 두 배열에 표시되는 횟수만큼 나타나야 하며, 순서에 상관없이 결과를 반환할 수 있습니다.

    // 두 배열의 길이를 비교해서, 작은 배열을 기준으로 긴 배열의 원소들과 비교해서 중복되는 경우에 결과 배열에 넣는다..?

    const result = [];

    // 1. 두 배열의 길이를 비교해서 정렬
    const sortedArrays = nums1.length > nums2.length ? [nums2, nums1] : [nums1, nums2];
    // console.log(sortedArrays[0])

    // 2. 긴 배열을 기준으로 반복
    for(let num of sortedArrays[0]) {
        const index = sortedArrays[1].indexOf(num);
        // console.log(index);
        if(index !== -1) {
            // 긴 배열에 존재하면 결과 배열에 푸쉬, 그리고 중복 방지를 위해 해당 요소 제거
            result.push(num); 
            sortedArrays[1].splice(index, 1);
        }
    }
    
    return result;
};