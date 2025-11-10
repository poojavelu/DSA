/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res={};
    for(let str of strs){
        let sortedStr= str.split('').sort().join('');
        if(!res[sortedStr]){
            res[sortedStr]=[];
        }
        res[sortedStr].push(str);
    }
    return Object.values(res);
};