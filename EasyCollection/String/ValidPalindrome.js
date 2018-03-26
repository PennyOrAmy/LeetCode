/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
	let i = 0,
		j = s.length - 1;
	let char1, char2;
	while (i < j) {
		char1 = s.charAt(i).toLowerCase();
		char2 = s.charAt(j).toLowerCase();
		if (!isAlphanumeric(char1)) {
			i++;
			continue;
		}
		if (!isAlphanumeric(char2)) {
			j--;
			continue;
		}
		if (char1 != char2) {
			return false;
		} else {
			i++;
			j--;
		}
	}
	return true;

	function isAlphanumeric(char) {
		let charCode = char.charCodeAt(0);
		if ((96 < charCode && charCode < 123) || (47 < charCode && charCode < 58)) {
			return true;
		}
		return false;
	}
};
