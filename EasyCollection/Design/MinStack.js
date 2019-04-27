/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.s = [];
	this.ms = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	this.s.unshift(x);

	if (this.ms.length === 0 || this.ms[0] >= x) {
		this.ms.unshift(x);
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	let temp = this.s.shift();
	if (this.ms[0] === temp) {
		this.ms.shift();
	}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.s[0];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.ms[0];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

export default MinStack;
