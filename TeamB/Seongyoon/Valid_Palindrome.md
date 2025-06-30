# Valid Palindrome

[Link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/883/)

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

## 번역

모든 대문자를 소문자로 변환하고 영숫자가 아닌 문자를 모두 제거한 후 앞뒤로 똑같이 읽으면 구문은 팔린드롬입니다. 영숫자 문자는 문자와 숫자를 포함합니다.

문자열 s가 주어지면 팔린드롬이면 참을 반환하고, 그렇지 않으면 거짓을 반환합니다.

## 예시
```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

## 의식의 흐름
### step 1
- 알파벳만을 남겨야하니 일단 정규표현식으로 알파벳을 제외한 값들 모두 제거(/[^a-zA-Z]/g) 이후 toLowerCase를 이용해 소문자 통일
- 이후 문자열 길이의 절반인 index를 찾아낸 후 그곳을 기준으로 앞뒤로 잘라냄.
- 앞 절반과 뒷 절반이 나올탠데 뒷 절반을 .reverse() 를 이용해 뒤집어준 뒤 비교하여 같으면 true 틀리면 false
- 예시 3번을 생각해 문자열이 비어있는지 가장먼저 체크하고 비어있으면 일단 true 반환.
### step 2
```javascript
const halfIndex = Math.floor(lowerString.length / 2);
const frontHalf = lowerString.slice(0, halfIndex);
const backHalf = lowerString.slice(halfIndex).split("").reverse().join("");
```
- 처음에 단순히 저렇게 작성했음.
- 문제는 홀수일때 floor에 의해 내림이 적용됨.
- 그래서 홀수문제에선 실패.
- 개선된코드는 다음과 같음
```javascript
const halfIndex = Math.floor(lowerString.length / 2);
const frontHalf = lowerString.slice(0, lowerString.length % 2 === 0 ? halfIndex : halfIndex + 1);
const backHalf = lowerString.slice(halfIndex).split("").reverse().join("");
```
### step3
- "0P" 일때 자꾸 false가 되면서 실패함.
- 또또또 문제를 똑바로 안읽어서그럼..! 영문 + 숫자 인데 바보같이 영문만 구분했음