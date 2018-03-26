/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
	if (n == 1) {
		return '1';
	}

	let result = '1';
	for (let i = 1; i < n; i++) {
		result = loop(result);
	}

	return result;

	function loop(input) {
		let length = input.length;
		let times = length + 1;
		let last = input[0],
			count = 0,
			result = '';
		for (let i = 0; i < times; i++) {
			if (last === input[i]) {
				count += 1;
			} else {
				result += count + last;
				count = 1;
				last = input[i];
			}
		}
		return result;
	}
};
