/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let n of numSet) {
        if (!numSet.has(n - 1)) {
            let length = 1;
            let current = n;

            while (numSet.has(current + 1)) {
                current += 1;
                length += 1;
            }

            longest = Math.max(longest, length);
        }
    }

    return longest;
};