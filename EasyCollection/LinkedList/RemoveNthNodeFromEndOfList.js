/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let currentNode = head,
		length = 0;
	while (currentNode !== null) {
		currentNode = currentNode.next;
		length++;
	}

	let lastIndex = length - n - 1;
	if (lastIndex < 0) {
		head = head.next;
	} else {
		let count = 0;
		currentNode = head;
		while (count < length) {
			if (count === lastIndex) {
				currentNode.next = currentNode.next.next;
				break;
			}
			currentNode = currentNode.next;
			count++;
		}
	}

	return head;
};
