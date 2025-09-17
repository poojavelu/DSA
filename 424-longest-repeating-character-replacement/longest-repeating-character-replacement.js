/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let l=0;
    let count={};
    let maxCount=0;
    let maxLength=0;

    for(let r=0;r<s.length;r++){
        let char=s[r];
        count[char]=(count[char] || 0)+1;
        maxCount=Math.max(maxCount,count[char]);
        while((r-l+1)-maxCount>k){
            count[s[l]]--;
            l++;
        }
        maxLength=Math.max(maxLength,r-l+1);
    }

    return maxLength;
};