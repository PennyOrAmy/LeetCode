/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
	let a = 0,
		b = 0,
		isOdd = true;
	nums.forEach((i) => {
		if (isOdd) {
			a = Math.max(a + i, b);
		} else {
			b = Math.max(a, b + i);
		}
		isOdd = !isOdd;
	});
	return Math.max(a, b);
};

export default rob;
