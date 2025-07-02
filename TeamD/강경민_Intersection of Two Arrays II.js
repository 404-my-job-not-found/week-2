/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const arr = new Map();
    
    for (let num of nums1){
        arr.set(num, (arr.get(num) || 0)+1);
    }
    
    const result = [];
    for(let num of nums2){
        if(arr.has(num) && arr.get(num)>0){
            result.push(num);
            arr.set(num, arr.get(num)-1);
        }
    }
    
    return result;
};