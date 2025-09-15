/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const mySet = new Set(nums);
        if (mySet.size!==nums.length) return true;
        return false
};