/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let i = -1,
		l = prices.length,
		k = prices[0],
		max = 0;
	while (i++ < l) {
		if (i + 1 < l) {
			k = Math.min(k, prices[i]);
			max = Math.max(max, prices[i + 1] - k);
		}
	}
	return max;
};

export default maxProfit;
