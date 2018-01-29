/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  var length = digits.length;
  var hasCarry = true;
  var i = length - 1;

  while (hasCarry) {
    if (i < 0) {
      digits.unshift(1);
      hasCarry = false;
    } else {
      var oldValue = digits[i];
      var newValue = oldValue + hasCarry;
      digits[i] = newValue % 10;
      hasCarry = newValue >= 10;
      i--;
    }
  }

  return digits;
};

// Runtime: 93 ms
// Beats: 55.80%
