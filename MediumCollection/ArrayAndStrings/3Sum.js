/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	let l = nums.length;
	let exist = {};
	let result = [];

	nums.sort((a, b) => {
		return a - b;
	});

	for (let k = 0; k < l; ++k) {
		if (nums[k] > 0) break;
		if (k > 0 && nums[k] == nums[k - 1]) continue;
		let target = 0 - nums[k];
		let i = k + 1,
			j = l - 1;
		while (i < j) {
			if (nums[i] + nums[j] == target) {
				result.push([nums[k], nums[i], nums[j]]);
				while (i < j && nums[i] == nums[i + 1]) {
					++i;
				};
				while (i < j && nums[j] == nums[j - 1]) {
					--j;
				};
				++i;
				--j;
			} else if (nums[i] + nums[j] < target) {
				++i;
			} else {
				--j;
			};
		}
	}
	return result;
};
