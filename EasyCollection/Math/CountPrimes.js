/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
	let i = 1,
		j = 1,
		item,
		limit = Math.sqrt(n),
		array = Array(n).fill(false);
	while (i++ <= limit) {
		if (!array[i]) {
			j = i - 1;
			while (j++ < n) {
				item = i * j;
				if (item < n) {
					array[item] = true;
				} else {
					break;
				}
			}
		}
	}

	let size = 0;
	array.forEach((i) => {
		if (i) {
			size++;
		}
	});
	return Math.max(0, n - 1 - 1 - size);
};

export default countPrimes;
