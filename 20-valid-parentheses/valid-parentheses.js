/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    const closeToOpen={
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for(let c of s){
        console.log(c)
        if(stack.length>0 && stack[stack.length-1]===closeToOpen[c]){
            stack.pop();
        }else{
            stack.push(c);
        }
    }
    return stack.length===0;
};