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
var isPalindrome = function(head) {
	let i = 0,
		temp = head,
		vals = [];
	while (temp !== null) {
		vals.push(temp.val);
		temp = temp.next;
		i++;
	}

	i = 0;
	let length = vals.length;
	while (i < length) {
		if (vals[i] !== vals[length - i - 1]) {
			return false;
		}
		i++;
	}
	return true;
};

export default isPalindrome;
