/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let l=1,r=0;
    for(let p of piles){
        r=Math.max(r,p);
    }
    while(l<r){
        let m=Math.floor((l+r)/2);
        let maxh=0;
        for(let p of piles){
            maxh+=Math.ceil(p/m);
        }
        if(maxh>h){
            l=m+1;
        }else{
            r=m;
        }
    }
    
    return l;

};