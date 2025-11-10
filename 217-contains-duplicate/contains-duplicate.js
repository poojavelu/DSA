/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const newSet= new Set(nums);
    if(nums.length===newSet.size){
        return false;
    }
    return true;
};