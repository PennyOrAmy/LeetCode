/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	let r = [],
		i = 0;
	while (i++ < n) {
		let t = '';
		if (i % 3 === 0) {
			t += 'Fizz';
		}
		if (i % 5 === 0) {
			t += 'Buzz';
		}
		if (t === '') {
			t += i;
		}
		r.push(t);
	};
	return r;
};

export default fizzBuzz;
