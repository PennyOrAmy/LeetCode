/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	if (root === null) {
		return 0;
	}
	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

export default maxDepth;
