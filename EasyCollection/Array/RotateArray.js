/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let length = nums.length,
    moveOne,
    i;

  k = k % length;
  if (k != 0) {
    if (k < length / 2) {
      for (i = 0; i < k; i++) {
        moveOne = nums[length - 1];
        nums.pop();
        nums.unshift(moveOne);
      }
    } else {
      for (i = 0; i < length - k; i++) {
        moveOne = nums[0];
        nums.shift();
        nums.push(moveOne);
      }
    }
  }
};
