/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	let fast = head,
		slow = head;
	while (true) {
		if (fast === null || slow === null) {
			return false;
		}
		if (fast.next !== null) {
			fast = fast.next.next;
		} else {
			return false;
		}
		slow = slow.next;

		if (fast === slow) {
			return true;
		}
	}
};
