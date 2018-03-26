/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

var levelOrder = function(root) {
	let arr = [];
	loop(root, 0);

	function loop(node, depth) {
		if (node) {
			loop(node.left, depth + 1);
			loop(node.right, depth + 1);
			if (arr[depth] === undefined) {
				arr[depth] = [];
			}
			arr[depth].push(node.val);
		}
	}
	return arr;
};
