
var StockSpanner = function() {
    this.stack=[];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    this.stack.push(price)
        let i=this.stack.length-1;
        let sPrice=1;
        while(i>0){
            if(price>=this.stack[i-1]){
                sPrice+=1;
            }else{
                break;
            }
            i--;
        }
    return sPrice;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */