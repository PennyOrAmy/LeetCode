/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let match = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	let stack = [];

	for (let i = 0, j = s.length; i < j; i++) {
		let t = s.charAt(i);
		if (match[t]) {
			stack.push(match[t]);
		} else {
			if (stack.pop() !== t) {
				return false;
			}
		}
	}

	return stack.length === 0;
};
