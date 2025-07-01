/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // 어라..?
    // n, n+1 을 비교
    // targetArr, targetLengthArr;
    // targetArr에 해당 문자가 없으면 push
    // 있으면, targetArr.length push, targetArr 초기화, push i 
    // 나중에 math.max

    let targetArr = [];
    const lengthArr = [];
    for(let i=0; i<s.length; i++) {
        if(targetArr.includes(s[i])) {
            lengthArr.push(targetArr.length);
            targetArr = [];
            targetArr.push(s[i]);
        }
        else {
            targetArr.push(s[i]);
        }
    }


    return Math.max(...lengthArr, 0);
};