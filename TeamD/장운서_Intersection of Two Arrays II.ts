// let difference = arr1.filter(x => arr2.includes(x)); // 결과 2, 3

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

// function intersect(nums1: number[], nums2: number[]): number[] {

//   return nums1.filter(x => nums2.includes(x))
// };

function intersect(nums1: number[], nums2: number[]): number[] {
	const map = new Map<number, number>()
	console.log("map=>", map)
	// nums2의 각 숫자 빈도 저장

	for (const num of nums2) {
		map.set(num, (map.get(num) || 0) + 1)
	}

	console.log("1=>", map)

	return nums1.filter((num) => {
		const count = map.get(num)
		console.log("count", count)
		if (count && count > 0) {
			map.set(num, count - 1)
			return true
		}
		return false
	})
}

const nums1 = [4, 9, 5]
const nums2 = [9, 4, 9, 8, 4]

intersect(nums1, nums2)
