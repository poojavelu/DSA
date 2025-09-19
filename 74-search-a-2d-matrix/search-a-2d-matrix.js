/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(!matrix.length || !matrix[0].length) return false;

    let rows=matrix.length;
    let cols=matrix[0].length;
    console.log(cols);
    let l=0,r=(rows*cols)-1;
    
    while(l<=r){
        let mid=Math.floor((l+r)/2);
        let row=Math.floor(mid/cols);
        let col=mid%cols;
        let value=matrix[row][col];
        if(value===target) return true;
        if(value<target){
            l=mid+1;
        }
        if(value>target){
            r=mid-1;
        }
    }
    return false;
};