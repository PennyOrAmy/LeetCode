/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	let length = strs.length;
	let prefix = length > 0 ? strs[0] : '';

	if (length < 2) {
		return prefix;
	}

	for (let i = 1; i < length; i++) {
		let item = strs[i],
			times = Math.min(prefix.length, item.length);
		let temp = '';
		for (let j = 0; j < times; j++) {
			if (item[j] === prefix[j]) {
				temp += item[j];
			} else {
				break;
			}
		}
		if (temp === "") {
			return temp;
		} else {
			prefix = temp;
		}
	}
	return prefix;
};
