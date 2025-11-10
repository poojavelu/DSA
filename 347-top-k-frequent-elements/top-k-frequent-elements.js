/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const res={};
    for(let i=0;i<nums.length;i++){
        res[nums[i]] = (res[nums[i]] || 0) + 1;
    }
    const pairs=Object.entries(res);
    pairs.sort((a,b)=>b[1]-a[1]);

    return pairs.slice(0,k).map(pair=>Number(pair[0]));
};