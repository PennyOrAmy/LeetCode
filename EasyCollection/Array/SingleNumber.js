/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let length = nums.length;
	result = nums[0];
	for (let i = 1; i < length; i++) {
		result = result ^ nums[i];
	}
	return result;
};
