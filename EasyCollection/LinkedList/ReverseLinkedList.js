/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
	let currentNode = head;
	let lastNode = null;
	while (currentNode !== null) {
		let next = currentNode.next;
		currentNode.next = lastNode;
		lastNode = currentNode;
		currentNode = next;
	}
	return lastNode;
};
