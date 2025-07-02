/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    const count = {};
    
    for(let word of s){
        count[word] = (count[word] || 0)+1;
    }
    
    for(let i=0; i<s.length; i++){
        if(count[s[i]] === 1){
            return i;
        }
    }
    
    return -1;
};