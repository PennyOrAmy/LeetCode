/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

function LRC(root) {
	let arr = [];
	loop(root);

	function loop(node) {
		if (node) {
			if (node.left || node.right) {
				loop(node.left);
				loop(node.right);
			}
			arr.push(node.val);
		} else {
			arr.push(null);
		}
	}
	return arr;
}

function RLC(root) {
	let arr = [];
	loop(root);

	function loop(node) {
		if (node) {
			if (node.left || node.right) {
				loop(node.right);
				loop(node.left);
			}
			arr.push(node.val);
		} else {
			arr.push(null);
		}
	}
	return arr;
}

var isSymmetric = function(root) {
	if (root === null) return true;

	let ll = LRC(root.left);
	let rl = RLC(root.right);

	for (let i = 0, j = ll.length; i < j; i++) {
		if (ll[i] !== rl[i]) {
			return false;
		}
	}
	return true;
};

// recursion
/* var isSymmetric = function(root) {
  if (root === null) return true;
  return ST(root.left, root.right)
};

function ST(l, r) {
  if (l === null && r === null)
    return true;
  else if (l !== null && r !== null) {
    return l.val === r.val && ST(l.left, r.right) && ST(l.right, r.left);
  } else return false;
} */

export default isSymmetric;
