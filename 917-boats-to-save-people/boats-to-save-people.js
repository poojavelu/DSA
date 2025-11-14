/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b)=>a-b);
        let l=0,r=people.length-1;
        let minBoat=0;
        while(l<=r){
            let sumW=people[l]+people[r];
            if(sumW<=limit){
                l++;
            }
            r--;
            minBoat+=1;  
        }
    return minBoat
};