/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let INT_MAX = Math.pow(2, 31),
    isMinus = x < 0,
    r = 0;

  x = Math.abs(x);
  while (x >= 1) {
    r = r * 10 + Math.floor(x % 10);
    x /= 10;
  }

  if (r > INT_MAX) {
    r = 0;
  }
  if (isMinus) {
    r = 0 - r;
  }
  return r;
};

//  To number, there is 64-bit for save
//  The JavaScript number format allows you to exactly represent all integers
//  between −9007199254740992 and 9007199254740992 (Math.pow(2, 53))
//  It's only Math.pow(2, 31) for Array index
