function intersect(nums1: number[], nums2: number[]): number[] {
  // map을 사용하여 nums1의 숫자와 그 개수를 저장
  const map = new Map<number, number>();
  const result: number[] = [];

  for (const num of nums1) {
    // Map에 숫자가 이미 존재하면 그 값을 1 증가시키고, 없으면 1로 초기화
    // ex) map.set(1, 2) -> 1이 2개 존재
    // ex) map.set(2, 1) -> 2가 1개 존재
    map.set(num, (map.get(num) || 0) + 1);
  }

  for (const num of nums2) {
    // Map에서 숫자를 찾고, 그 숫자가 존재하고 0보다 크면 결과 배열에 추가
    // 그리고 Map에서 그 숫자의 카운트를 1 감소시킴
    // ex) map.get(1) -> 2 -> result.push(1) -> map.set(1, 1)
    // ex) map.get(2) -> 1 -> result.push(2) -> map.set(2, 0)
    // ex) map.get(3) -> undefined -> result에 추가하지 않음
    const count = map.get(num);
    if (count && count > 0) {
      result.push(num);
      map.set(num, count - 1);
    }
  }

  return result;
}
