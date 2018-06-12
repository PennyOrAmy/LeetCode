/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
	if (numRows < 1) return [];

	let result = [
		[1]
	];
	let point = 1;
	while (point < numRows) {
		let last = result[point - 1];
		let temp = new Array(point + 1);

		let mid = Math.floor((point + 1) / 2);
		let mp = 0;
		while (mp <= mid) {
			let left = last[mp - 1] || 0;
			let right = last[mp] || 0;
			temp[mp] = temp[point - mp] = left + right;
			mp++;
		}
		result[point] = temp;
		point++;
	}
	return result;
};
