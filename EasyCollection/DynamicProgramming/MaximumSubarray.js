/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
	let sum = 0,
		max = -Infinity;
	nums.forEach((num) => {
		sum = Math.max(sum + num, num);
		max = Math.max(sum, max);
	});
	return max;
};
