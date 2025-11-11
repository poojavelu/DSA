/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
        if(strs.length===0) return "";
        for(let k = 0; k < strs[0].length; k++) {
            for(let i=0;i<strs.length;i++){
                if(strs[0][k]!== strs[i][k]) {
                    return strs[0].substring(0, k);
                }
            }
        }
        return strs[0];
};