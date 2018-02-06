/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let counter = 0,
    lastValue,
    numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    if (nums[i] === lastValue) {
      delete nums[i];
      counter++;
    } else {
      lastValue = nums[i];
    }
  }

  nums.sort(function(a, b) {
    return a - b;
  });
  nums.splice(numsLength - counter, counter);

  return nums.length;
};
