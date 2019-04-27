/**
 * @param {number} n - a positive integer
 * @return {number}
 */

var hammingWeight = function(n) {
	if (n === 0) return 0;

	let pow = 0,
		match = 0,
		r = 0;
	while (true) {
		let t = Math.pow(2, pow);
		if (t <= n) {
			match = t;
			pow++;
		} else {
			break;
		}
	}
	n = n % match;
	r += 1;
	r += hammingWeight(n);
	return r;
};

export default hammingWeight;
