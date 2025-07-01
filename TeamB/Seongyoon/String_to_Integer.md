# String to Integer (atoi)

[Link](https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/884/)

Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer.

The algorithm for myAtoi(string s) is as follows:

- Whitespace: Ignore any leading whitespace (" ").
- Signedness: Determine the sign by checking if the next character is '-' or '+', assuming positivity if neither present.
- Conversion: Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.
- Rounding: If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then round the integer to remain in the range. Specifically, integers less than -231 should be rounded to -231, and integers greater than 231 - 1 should be rounded to 231 - 1.
- Return the integer as the final result.

## 번역

문자열을 32비트 부호 있는 정수로 변환하는 myAtoi(문자열 s) 함수를 구현합니다.

myAtoi(문자열 s)의 알고리즘은 다음과 같습니다:

- 공백: 선행 공백(" ")을 무시합니다.
- 부호: 다음 문자가 '-' 또는 '+'인지 확인하여 부호를 결정하고, 둘 다 없으면 양수로 가정합니다.
- 변환: 숫자가 아닌 문자가 발견되거나 문자열의 끝에 도달할 때까지 선행 0을 건너뛰는 방식으로 정수를 읽습니다. 읽은 자릿수가 없으면 결과는 0입니다.
- 반올림: 정수가 32비트 부호 있는 정수 범위[-2^31, 2^31 - 1]를 벗어난 경우 정수를 반올림하여 범위 내에 유지합니다. 구체적으로 -2^31보다 작은 정수는 -2^31로 반올림하고, 2^31 - 1보다 큰 정수는 2^31 - 1로 반올림해야 합니다.
- 최종 결과로 정수를 반환합니다.

## 예시
```
Example 1:
Input: s = "42"
Output: 42
Explanation:
The underlined characters are what is read in and the caret is the current reader position.
Step 1: "42" (no characters read because there is no leading whitespace)
         ^
Step 2: "42" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "42" ("42" is read in)
           ^

Example 2:
Input: s = " -042"
Output: -42
Explanation:
Step 1: "   -042" (leading whitespace is read and ignored)
            ^
Step 2: "   -042" ('-' is read, so the result should be negative)
             ^
Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)
               ^

Example 3:
Input: s = "1337c0d3"
Output: 1337
Explanation:
Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
         ^
Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)
             ^

Example 4:
Input: s = "0-1"
Output: 0
Explanation:
Step 1: "0-1" (no characters read because there is no leading whitespace)
         ^
Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
         ^
Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)
          ^

Example 5:
Input: s = "words and 987"
Output: 0
Explanation:
Reading stops at the first non-digit character 'w'.
```

## 의식의 흐름
### step 1
- parseInt를 이용해보면 어떨까..? 넘버로 시작하면 넘버만을 리턴하고, 문자열로 시작하면 isNaN을 이용해 확인 후 0을 리턴.
### step 2
- ```-91283472332``` 에서 실패함.
- ```-2147483648``` 값이 나와야 한다고함..왜지...
- 반올림 부분때문인거같음... 다시 문제 이해부터 해야할듯.
- 실패한 예시는 요구한 2^31 의 범위를 넘는 값이기 때문에 -2^31이 나와야한다.
- 그러면 자바스크립트에서 제곱을 계산하는 Math의 메서드를 찾아봐야할듯.
- 제곱근 = ```Math.sqrt(nums: number)```
- 거듭제곱 = ```Math.pow(제곱하고자 하는 숫자, 거듭제곱 횟수)```
- 즉, 문제에서 요구한 min, max값을 정해놓고 해당값보다 높을경우 min, max에 맞는 값을 리턴하면될듯