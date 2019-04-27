/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
	let max = getMaxPowerOfThree();
	return n > 0 && max % n === 0;
};

var getMaxPowerOfThree = function() {
	let item = 1;
	while (item < Number.MAX_SAFE_INTEGER - 1) {
		item *= 3;
	}
	return item / 3;
}

export default isPowerOfThree;
