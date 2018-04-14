/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
	m--;
	n--;
	while (n > -1) {
		let index = m + n + 1;
		if (nums1[m] === undefined || nums1[m] < nums2[n]) {
			nums1[index] = nums2[n];
			n--;
		} else {
			nums1[index] = nums1[m];
			m--;
		}
	}
};
