/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
	let result = false,
		newNums = [],
		value;
	for (let i = 0; i < nums.length; i++) {
		value = nums[i];
		if (typeof(newNums[value]) !== 'undefined') {
			result = true;
			break;
		} else {
			newNums[value] = value;
		}
	}
	return result;
};
