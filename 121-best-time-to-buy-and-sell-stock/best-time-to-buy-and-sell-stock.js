/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let l=0,r=1;
    let maxP=0;
    while(r<prices.length){
        if(prices[r]>prices[l]){
            maxP=Math.max(maxP,prices[r]-prices[l])
        }else{
            l=r;
        }
        r++
    }
    return maxP;
};