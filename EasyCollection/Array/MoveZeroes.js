/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var forTimes = nums.length;
    for(var i=0; i< forTimes;) {
        if(nums[i]===0) {
            nums.splice(i,1);
            nums.push(0);
            forTimes --;
        } else {
            i++;
        }
    }
};

// Runtime: 105 ms
// Beats: 64.44%
