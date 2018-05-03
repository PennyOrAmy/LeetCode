/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
	this.oNums = nums;
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
	return this.oNums;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
	let temp = [],
		oNums = this.oNums,
		l = oNums.length,
		o = {};
	while (temp.length < l) {
		let index = Math.floor(Math.random() * l);
		if (o[index] === undefined) {
			temp.push(oNums[index]);
			o[index] = index;
		}
	}
	return temp;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = Object.create(Solution).createNew(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
