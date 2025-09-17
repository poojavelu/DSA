/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    if(s1.length>s2.length) return false;

    const need={};
    for(let ch of s1){
        need[ch]=(need[ch]||0)+1
    }

    const window={};
    let l=0;

    for(let r=0;r<s2.length;r++){
        const ch=s2[r];
        window[ch]=(window[ch] ||0)+1;

        while(r-l+1>s1.length){
            window[s2[l]]--;
            if(window[s2[l]]===0) delete window[s2[l]]
            l++;
        }

        if(r-l+1===s1.length){
            let match=true;
            for(let key in need){
                if(need[key]!==window[key]){
                    match=false;
                    break;
                }
            }
            if(match) return true;
        }
    }
    return false;
};