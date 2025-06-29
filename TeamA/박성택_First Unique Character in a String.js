/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // 순서대로 배열하면서 중복되지 않은 경우 해당 index 리턴
    // indexOf, lastIndexOf를 이용
    // 아무래도 이 방법은 아닌 것 같은데
    
    let result = -1;

    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            result = i;
            break;
        }
    }
    return result;
};

// 위 풀이의 시간 복잡도는 O(n^2)이다.
// 한 문자 확인 비용: O(n) (indexOf) + O(n) (lastIndexOf) = O(n)
// 전체 문자 순회: O(n) 문자 × O(n) 연산 = O(n²)

// Map을 이용해보자

function firstUniqueChar(s) {
  const count = new Map();

    // 문자별로 카운트
    for (let char of s) {
        if (count.has(char)) {
            count.set(char, count.get(char) + 1);
        } else {
            count.set(char, 1);
        }
    }

    for (let i=0; i<s.length; i++) {
        if (count.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
}

