/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let res=[];
    for(let i=0;i<tokens.length;i++){
        if(tokens[i]==='+'){
            res.push(res.pop()+res.pop());
        }else if(tokens[i]==='-'){
            let a = res.pop();
            let b = res.pop();
            res.push(b-a);
        }else if(tokens[i]==='/'){
            let a = res.pop();
            let b = res.pop();
            res.push(Math.trunc(b/a));
        }else if(tokens[i]==='*'){
            res.push(res.pop()*res.pop());
        }else{
            res.push(Number(tokens[i]));
        }      
    }
    return res.pop();
};