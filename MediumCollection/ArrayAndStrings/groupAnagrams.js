/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let l = strs.length
    let kso = {}
    for (let i = 0; i < l; i ++) {
        let w = strs[i]
        let wl = w.length
        let ks = w.split('').sort().join('')

        if (kso[ks] === undefined) {
            kso[ks] = []
        }
        kso[ks].push(w)
    }
    return Object.values(kso)
};

export default groupAnagrams;
