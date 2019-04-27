/**
 * @param {string} s
 * @return {number}
 */

let map = {
	default: 0,
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000
}
var romanToInt = function(s) {
	let r = 0,
		lk = 'default';
	for (let i = s.length - 1; i >= 0; i--) {
		let k = s[i];
		let v = map[k];
		if (v >= map[lk]) {
			r += v;
		} else {
			r -= v;
		}
		lk = k;
	}
	return r;
};

export default romanToInt;
