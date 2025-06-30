/*********************FAILED************************************
 *  nums1 = [1, 2, 2, 1], nums2 = [2] 엣지케이스에서 fail
 * includes()는 원소의 존재 여부만 확인하지, 개수는 고려하지 않았음
 * nums2가 2개 이상 중복된 원소가 있을 경우 중복된 원소가 중복으로 출력됨
 * 문제 의도와는 다르게 해결됨
 */
const FAILED_intersect = (nums1, nums2) => nums1.filter(v => nums2.includes(v));
console.log(FAILED_intersect([1, 2, 2, 1], [2]));
console.log(FAILED_intersect([4, 9, 9, 9, 5], [9, 4, 9, 8, 4]));

/********************************해결************************************
 * 필터 조건에 교집합 + 중복 원소는 splice로 제거 조건 추가하여 해결
 * splice는 배열을 직접 수정하는 메서드이므로 원본 배열을 변경하여 중복 원소 제거로 사용
 *
 * nums1 = [1, 2, 2, 1], nums2 = [2, 2]
 *
 * 1 => nums2에 없음 => 제외
 *
 * 2 => nums2에 있음 => 결과에 추가하고 nums2에서 제거 → nums2 = [2]
 *
 * 2 => 다시 nums2에 있음 → 결과에 추가하고 nums2에서 제거 → nums2 = []
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) => nums1.filter(v => nums2.includes(v) && nums2.splice(nums2.indexOf(v), 1));
console.log(intersect([1, 2, 2, 1], [2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
