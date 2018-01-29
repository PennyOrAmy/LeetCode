/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let length = nums.length,
        result = [],
        isBreak = false;

    for(let i = 0; i < length; i ++){
        for(let j = i + 1; j< length; j ++) {
            if(nums[i] + nums[j] === target) {
                result = [i, j];
                isBreak = true;
                break;
            }
        }
        if(isBreak) {
            break;
        }
    }

    return result;
    // Runtime: 191 ms
    // Beats: 55.93%
};
