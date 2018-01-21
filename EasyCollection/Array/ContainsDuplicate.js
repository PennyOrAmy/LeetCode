/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  var result = false, newNums = [], value;
  for(var i = 0; i < nums.length; i ++) {
      value = nums[i];
      if(typeof(newNums[value]) !== 'undefined') {
          result = true;
          break;
      } else {
          newNums[value] = value;
      }
  }
  return result;
  // Runtime: 125 ms
  // Beats: 70.16%
};
