/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
	let hoz = []
	let ver = []
	let w = matrix[0].length;
	let h = matrix.length;

	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
			if (matrix[i][j] === 0) {
				hoz[i] = 0;
				ver[j] = 0;
			}
		}
	}
	for (let i = 0; i < h; i++) {
		for (let j = 0; j < w; j++) {
 			if (hoz[i] === 0 || ver[j] === 0) {
				matrix[i][j] = 0;
			}
		}
	}
};

export default setZeroes;
