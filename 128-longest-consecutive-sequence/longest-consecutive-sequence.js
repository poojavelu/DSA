/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let longest=0;
    const numSet = new Set(nums);
    for(let num of numSet){
        if(!numSet.has(num-1)){
            let length=1
            while(numSet.has(num+length)){
                length++
            }
            longest=Math.max(longest,length)
        }
    }
    return longest;
};