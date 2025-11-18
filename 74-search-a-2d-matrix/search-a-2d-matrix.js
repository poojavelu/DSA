/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows=matrix.length,
        cols=matrix[0].length,
        left=0,
        right=rows*cols-1;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        let row=Math.floor(mid/cols);
        let col=Math.floor(mid%cols);
        let value = matrix[row][col];
        if(value>target){
            right=mid-1
        }else if(value<target){
            left=mid+1;
        }else{
            return true;
        }
    }
    return false;
};