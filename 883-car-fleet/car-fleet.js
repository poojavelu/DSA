/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    let cars=position.map((p,i)=>[p,(target-p)/speed[i]]);
    cars.sort((a,b)=>b[0]-a[0]);
    let fleet=0;
    let time=0;
    for(let i=0;i<cars.length;i++){
        let stime=cars[i][1];
        if(stime>time){
            fleet++;
            time=stime;
        }
    }
    return fleet;
};