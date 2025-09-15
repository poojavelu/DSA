/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {       
    const map={};
    for(let num of nums){
        map[num]=(map[num]||0)+1;
    }
    const pairs = Object.entries(map);
    pairs.sort((a, b) => b[1] - a[1]);
    return pairs.slice(0, k).map(pair => Number(pair[0]));   
};