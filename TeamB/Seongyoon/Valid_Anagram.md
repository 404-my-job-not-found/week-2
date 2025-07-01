# Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.
Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## 번역

두 문자열 s와 t가 주어졌을 때 t가 s의 아나그램이면 참을 반환하고, 그렇지 않으면 거짓을 반환합니다.
후속 조치: 입력에 유니코드 문자가 포함되어 있으면 어떻게 하나요? 이러한 경우 솔루션을 어떻게 조정하시겠습니까?

## 예시
```
Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
```

## 의식의 흐름
### step 1
- anagram은 문자열을 똑같은 문자낱말 내에서 다른방식으로 조합한 것.
- 그러면 정렬시켜서 비교하면 순식간에 해결?
### step 2
- 금방끝난만큼 유니코드에 대한 고민도 해봄.
- javascript에는 ```normalize()``` 라는 유니코드 정규화 메소드가 있음.
- 이를 이용해 문자열을 유니코드 정규화 시킨 후 비교.
```typescript
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  return s.normalize().split("").sort().join("") === t.normalize().split("").sort().join("");
}

console.log(isAnagram("민성윤", "성민윤"));
```