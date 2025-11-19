/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let startP=-1;
        let lastP=-1;
        let l=0,r=nums.length-1;
        while(l<=r){
            let m=Math.floor((l+r)/2);
            if(nums[m]===target){
                if(m===0 || nums[m-1]<target){
                    startP=m;
                    break;
                }else if(nums[m-1]===target){
                    r=m-1;
                }               
            }else if(nums[m]<target){
                l=m+1;
            }else if(nums[m]>target){
                r=m-1;
            }
        }
        l=0,r=nums.length-1;
        while(l<=r){
            let m=Math.floor((l+r)/2);
            if(nums[m]===target){
                if(m===nums.length-1 || nums[m+1]>target){
                    lastP=m;
                    break;
                }else if(nums[m+1]===target){
                    l=m+1;
                }               
            }else if(nums[m]<target){
                l=m+1;
            }else if(nums[m]>target){
                r=m-1;
            }
        }
        return [startP,lastP];
};