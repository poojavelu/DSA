/**
 * @param {string} s
 * @return {boolean}
 */
var isAlphanumeric = function(c) {
    return ((c>='a'&& c<='z')||(c>='A'&& c<='Z')||(c>='0'&& c<='9'))
};
 
var isPalindrome = function(s) {
    let l=0,
    r=s.length-1;
    while(l<r){
        while(l<r && !isAlphanumeric(s[l])){
            l++;
        }
        while(l<r && !isAlphanumeric(s[r])){
            r--;
        }
        if(s[l].toLowerCase()!==s[r].toLowerCase()){
            return false
        }
        l++;
        r--;
    }
    return true;
};