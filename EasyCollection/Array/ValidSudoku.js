/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // Each row must have the numbers 1-9 occuring just once.
  for (let i = 0; i < 9; i++) {
    let result = containsDuplicate(board[i]);
    if (result) {
      return false;
    }
  }

  // Each column must have the numbers 1-9 occuring just once.
  for (let i = 0; i < 9; i++) {
    let array = [];
    for (let j = 0; j < 9; j++) {
      array.push(board[j][i]);
    }
    let result = containsDuplicate(array);
    if (result) {
      return false;
    }
  }

  // And the numbers 1-9 must occur just once in each of the 9 sub-boxes of the grid.
  for (let h = 0; h < 9;) {
    for (let v = 0; v < 9;) {
      let array = [];
      for (let i = h; i < h + 3; i++) {
        for (let j = v; j < v + 3; j++) {
          array.push(board[i][j]);
        }
      }
      let result = containsDuplicate(array);
      if (result) {
        return false;
      }
      v = v + 3;
    }
    h = h + 3;
  }
  return true;
};

var containsDuplicate = function(nums) {
  let result = false,
    newNums = [],
    value;
  for (let i = 0; i < nums.length; i++) {
    value = nums[i];
    if (value === '.') {
      continue;
    } else if (typeof(newNums[value]) !== 'undefined') {
      result = true;
      break;
    } else {
      newNums[value] = value;
    }
  }
  return result;
};
