/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	let length = prices.length,
		lastValue = length > 0 ? prices[0] : 0,
		delta = 0,
		sum = 0;

	for (let i = 0; i < length; i++) {
		delta = prices[i] - lastValue;
		if (delta > 0) {
			sum += delta;
		}
		lastValue = prices[i];
	}

	return length > 0 ? sum : 0;
};
