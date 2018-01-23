/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var length = nums.length;

  result = nums[0];
  for (var i = 1; i < length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

// Runtime: 88 ms
// Beats: 85.50%
