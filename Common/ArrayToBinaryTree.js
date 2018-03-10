function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(array) {
  let preRoot = buildTreeNode(new TreeNode(-1), -1);
  return preRoot.right;

  function buildTreeNode(node, i) {
    let leftIndex = 2 * i + 1;
    if (array[leftIndex]) {
      node.left = buildTreeNode(new TreeNode(array[leftIndex]), leftIndex);
    }
    let rightIndex = 2 * i + 2;
    if (array[rightIndex]) {
      node.right = buildTreeNode(new TreeNode(array[rightIndex]), rightIndex);
    }
    return node;
  }
}
