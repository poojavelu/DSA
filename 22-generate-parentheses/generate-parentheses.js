/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res=[];
    backtrack(0,0,res,n,'');
    return res;
};

function backtrack(openN,closedN,res,n,stack){
    if(openN===closedN && openN===n){
        res.push(stack);
        return;
    }
    if(openN<n){
        backtrack(openN+1,closedN,res,n,stack+'(')
    }
    if(closedN<openN){
        backtrack(openN,closedN+1,res,n,stack+')')
    }
}