/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let outStack=[];
        for(let c of s){
            if(c!==']'){
                outStack.push(c);              
            }else{
                let str=[];
                while(outStack[outStack.length-1]!=='['){
                    str.push(outStack.pop());
                }
                str=str.reverse().join('');
                outStack.pop();
                let k = '';
                while (outStack.length > 0 && !isNaN(outStack[outStack.length - 1])) {
                    k = outStack.pop() + k;
                }
                outStack.push(str.repeat(k));
                console.log(outStack)
            }
        }
        return outStack.join('');
};