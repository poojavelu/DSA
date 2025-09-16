/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let res=[];
    for(let i=0;i<nums.length;i++){
        //if (nums[i] > 0) break;
        if(i>0 && nums[i]===nums[i-1]) continue;
        let l=i+1,r=nums.length-1;
        while(l<r){
            let curSum=nums[i]+nums[l]+nums[r];
            if(curSum>0){
                r--;
            }else if(curSum<0){
                l++;
            }else{
                res.push([nums[i],nums[l],nums[r]]);
                l++;
                r--;
                while(l<r && nums[l]===nums[l-1]){
                    l++;
                }
            }
        }
    }
    return res;
};