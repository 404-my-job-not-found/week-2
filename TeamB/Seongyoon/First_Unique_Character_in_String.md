# First Unique Character in a String

[Link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/881/)

Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

## 번역

문자열 s가 주어지면, 그 안에서 반복되지 않는 첫 번째 문자를 찾아 그 색인을 반환합니다. 존재하지 않으면 -1을 반환합니다.

## 예시

```
Example 1:
Input: s = "leetcode"
Output: 0
Explanation:
The character 'l' at index 0 is the first character that does not occur at any other index.

Example 2:
Input: s = "loveleetcode"
Output: 2

Example 3:
Input: s = "aabb"
Output: -1
```

## 의식의 흐름
### step 1
- 단순하게 문자열 이 반복되는지만 체크하는줄 알고 투포인터 형식으로 i, i+1 의 값만 체크함.
```typescript
function firstUniqChar(s: string): number {
    let startNums = 0;
    let nextNums = 1;
    let result = -1;
    while(nextNums < s.length) {
        if(s[startNums] !== s[nextNums]) {
            result = startNums;
            break;
        }
        startNums++;
        nextNums++;
    }
    return result;
};
```
- 근데 그게아니였음. 2번예시를 보면 l이 ove 뒤에 leet에서 다시 나온거처럼 i, i+1 을 비교히는 형식으로 가면안됨.
### step 2
- string을 순회하면서 i+1번째부터 slice한 문자열과 i번째 문자를 비교해서 includes값이 false면 return 하게함.
- 근데 "aabb" 케이스에서 실패가 나타났음.
### step 3
- new Set() 을 이용해 문자열에 사용된 알파벳들을 추출해내고, 해당 알파벳을 이용한다면?
- 아니면 new Map()을 이용해 { l : 1}, {e : 2} 이런식으로 만들어서 알파벳의 빈도수를 체크한다면?
### step 4
- new Set()은 생각해보는데 너무 쓰기 애매했음.. 그래서 new Map()을 쓰기로함.
- map으로 각 문자마다 나타나는 빈도수를 저장하고, 해당 map을 다시 for문을 돌려 빈도수가 1인(key: value = 1) 값이 나타나면 바로 해당 값이 string에서 위치하는 indexOf를 result에 부여한뒤 break.
- return result