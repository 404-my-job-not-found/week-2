# Intersection of Two Arrays II

[Link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/674/)

Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

- What if the given array is already sorted? How would you optimize your algorithm?
- What if nums1's size is small compared to nums2's size? Which algorithm is better?
- What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

## 번역

두 개의 정수 배열 nums1과 nums2가 주어졌을 때, 그 교집합의 배열을 반환합니다. 결과의 각 요소는 두 배열에 표시되는 횟수만큼 나타나야 하며 순서에 상관없이 결과를 반환할 수 있습니다.

- 주어진 배열이 이미 정렬되어 있다면 어떻게 해야 할까요? 알고리즘을 어떻게 최적화할까요?
- nums1의 크기가 nums2의 크기에 비해 작다면 어떻게 해야 할까요? 어떤 알고리즘이 더 좋을까요?
- nums2의 요소가 디스크에 저장되어 있는데 메모리가 제한되어 있어 모든 요소를 한 번에 메모리에 로드할 수 없다면 어떻게 해야 할까요?

## 예시
```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

## 의식의 흐름
### step 1
- 문자열로 바꿔서 indexOf 를 이용하는 방식은 어떨까?
- nums1 을 예시로 1221, 22 라는 문자열이 존재한다고 가정하면 아래와 같은 방식으로 진행해보자.
```javascript
const findIndex = "1221".indexOf("22");
[1,2,2,1].splice(findIndex, [2,2].length);
```
- 주어진 배열이 이미 정렬되어있다면, O(log n)의 시간복잡도를 가지는 알고리즘을 사용하면 되지않을까?(Map, Set 등...)
### step 2
- 위 케이스는 너무 1번케이스에 국한된 내용이고 2번케이스에서는 바로 실패...
- 교집합이면 완벽히 같은게 아닌 공통된 부분을 찾는건데 해당부분을 깜빡함.
- for문 쓰면 편할꺼 같긴한데.. + includes로 있을경우 배열에 값 추가?
- 추가 하고 해당 값을 indexOf로 위치를 찾아내 제거해야함.
