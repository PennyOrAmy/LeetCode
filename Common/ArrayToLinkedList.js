// Definition for singly-linked list.
function ListNode(val) {
	this.val = val;
	this.next = null;
}

function buildLinkedList(arr) {
	var preNode = new ListNode();
	var lastNode = preNode;
	for (var i = 0, j = list.length; i < j; i++) {
		var thisNode = new ListNode(list[i]);
		lastNode.next = thisNode;
		lastNode = thisNode;
	}
	return preNode.next;
}
