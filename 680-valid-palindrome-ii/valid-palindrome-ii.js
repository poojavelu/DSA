/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome= function(l,r,s){
        while(l<r){
            if(s[l]!==s[r]){
                return false;
            }
            l++;
            r--;
        }
        return true;
}
var validPalindrome = function(s) {
        let left=0,right=s.length-1;

        while(left<right){
            if(s[left]!==s[right]){
                return (isPalindrome(left,right-1,s) || isPalindrome(left+1,right,s));           
            }
            left++;
            right--;
        }
        return true;
};