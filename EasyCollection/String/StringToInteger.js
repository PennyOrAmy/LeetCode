/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
	let i = 0,
		t = str.trim(),
		length = t.length,
		s = '',
		symbolNum = 0,
		hasMinus = false;
	const INT_MAX = 2147483647,
		INT_MIN = -2147483648;

	while (i < length) {
		let char = t[i];
		let charCode = char.charCodeAt(0);
		if ((47 < charCode && charCode < 58)) {
			s += char;
		} else if (char === '-') {
			hasMinus = true;
			symbolNum++;
		} else if (char === '+') {
			symbolNum++;
		} else {
			break;
		}
		i++;
	}

	if (s.length === 0 || symbolNum > 1) return 0;

	let n = (hasMinus ? -1 : 1) * parseInt(s);
	if (n > INT_MAX) return INT_MAX;
	if (n < INT_MIN) return INT_MIN;
	return n;
};
