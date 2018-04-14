/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
	/**
	 * @param {integer} n Total versions
	 * @return {integer} The first bad version
	 */
	return function(n) {
		let begin = 0
		let end = n;
		while (begin !== end) {
			let i = Math.floor((begin + end) / 2);
			let j = 1 + i;
			let ri = isBadVersion(i);
			let rj = isBadVersion(j);
			if (ri) {
				if (rj) {
					end = i;
				} else {
					return i;
				}
			} else {
				if (rj) {
					return j;
				} else {
					begin = j;
				}
			}
		}
	};
};
