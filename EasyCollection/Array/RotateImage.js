/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var width = matrix[0].length - 1;
  if (width < 1) {
    return;
  }

  let times = Math.floor((width + 1) / 2);
  for (let i = 0; i < times; i++) {
    loop(i);
  }

  function loop(i) {
    var w = width - i;
    for (let a = i; a < w; a++) {
      let temp = matrix[i][a];
      matrix[i][a] = matrix[w - a + i][i];
      matrix[w - a + i][i] = matrix[w][w - a + i];
      matrix[w][w - a + i] = matrix[a][w];
      matrix[a][w] = temp;
    }
  }
};
