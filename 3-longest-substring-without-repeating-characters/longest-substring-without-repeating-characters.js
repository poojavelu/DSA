/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let long=0;
    let left=0
    const newSet=new Set();
    for(let i=0;i<s.length;i++){
        while(newSet.has(s[i])){
            newSet.delete(s[left]);
            left++;
        }
        newSet.add(s[i]);
        long=Math.max(long,newSet.size)       
    }
    return long;
};