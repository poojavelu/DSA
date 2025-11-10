/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    
    const rows= Array.from({length:9},()=>new Set());
    const cols= Array.from({length:9},()=>new Set());
    const boxes= Array.from({length:9},()=>new Set());
    for(let r=0; r<9; r++) {
        for(let c=0; c<9; c++){
            let value=board[r][c];
            if(value==='.') continue;

            if(rows[r].has(value)) return false;
            rows[r].add(value);

            if(cols[c].has(value)) return false;
            cols[c].add(value);

            let boxId= Math.floor(r/3)*3+Math.floor(c/3);
            if(boxes[boxId].has(value)) return false;
            boxes[boxId].add(value);

        }
    }
    return true;
};