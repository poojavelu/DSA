/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let longest=0,left=0;
    const newSet= new Set();
    for(let i=0;i<s.length;i++){
        while(newSet.has(s[i])){
            newSet.delete(s[left]);
            left++;
        }
        newSet.add(s[i])
        longest=Math.max(longest,newSet.size)
    }
    return longest;
};