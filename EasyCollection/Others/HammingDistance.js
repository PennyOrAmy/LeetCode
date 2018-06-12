/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
	let xs = x.toString(2),
		ys = y.toString(2);
	let xl = xs.length,
		yl = ys.length;
	let count = 0;
	while (xl > 0 || yl > 0) {
		xl--;
		yl--;
		let xv = xs[xl] || '0';
		let yv = ys[yl] || '0';
		if (xv !== yv) {
			count++;
		}
	}
	return count;
};
