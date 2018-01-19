/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var length = prices.length;
  var lastValue = length > 0 ? prices[0] : 0;
  var delta = 0;
  var sum = 0;

  for (var i = 0; i < length; i++) {
    delta = prices[i] - lastValue;
    if (delta > 0) {
      sum += delta;
    }
    lastValue = prices[i];
  }

  return length > 0 ? sum : 0;
};
// Runtime: 102 ms
// Beats: 53.93%
