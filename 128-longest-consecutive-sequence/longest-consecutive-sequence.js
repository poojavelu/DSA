/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest=0;
    for(let num of numSet){
        if(!numSet.has(num-1)){
            let length=1;
            let current=num;
            while(numSet.has(current+1)){
                length=length+1;
                current=current+1;
            }
            longest= Math.max(length,longest);
        }
    }
    return longest;
};