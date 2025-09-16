/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l=0,r=height.length-1;
    let max=0;

    while(l<r){
        let h=Math.min(height[l],height[r]);
        let w=r-l;
        let area=h*w;
        max=Math.max(max,area);
        if(height[l]<height[r]){
            l++;
        }else{
            r--
        }
    }

    return max
};