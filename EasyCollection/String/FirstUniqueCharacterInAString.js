/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	let match = [],
		length = s.length;
	for (let i = 0; i < length; i++) {
		let key = s.charCodeAt(i) - 97,
			item = match[key];
		if (typeof(item) === 'undefined') {
			match[key] = 1;
		} else {
			match[key] = item + 1;
		}
	}

	for (let i = 0; i < length; i++) {
		let key = s.charCodeAt(i) - 97,
			item = match[key];
		if (item === 1) {
			return i;
		}
	}

	return -1;
};
