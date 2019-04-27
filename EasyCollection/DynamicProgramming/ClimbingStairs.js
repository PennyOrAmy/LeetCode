/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function(n) {
	let a = 1,
		b = 1;
	while (n-- > 0) {
		b += a;
		a = b - a;
	}
	return a;
};

export default climbStairs;
