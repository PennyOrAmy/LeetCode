/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
	let l = nums.length;
	let sum = 0;

	for (let i = 0, j = nums.length; i < j; i++) {
		sum += nums[i];
	}

	return l * (l + 1) / 2 - sum;
};

export default missingNumber;
