/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	let hLength = haystack.length,
		nLength = needle.length;
	for (var i = 0;; i++) {
		for (var j = 0;; j++) {
			if (j === nLength) {
				return i;
			}
			if (i + j === hLength) {
				return -1;
			}
			if (haystack.charAt(i + j) !== needle.charAt(j)) {
				break;
			}
		}
	}
};
