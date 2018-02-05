/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
  let r = '';
  for (let i = s.length - 1; i >= 0; i--) {
    r += s.charAt(i);
  }
  return r;
};
