/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
	const length = s.length;
	if (length !== t.length) return false;

	let charStoreS = [];
	for (let i = 0; i < length; i++) {
		const key = s.charCodeAt(i) - 97;
		charStoreS[key] = charStoreS[key] ? charStoreS[key] + 1 : 1;
	}
	let charStoreT = [];
	for (let i = 0; i < length; i++) {
		const key = t.charCodeAt(i) - 97;
		const charInS = charStoreS[key];
		if (!charInS) return false;
		charStoreT[key] = charStoreT[key] ? charStoreT[key] + 1 : 1;
		if (charStoreT[key] > charInS) return false;
	}
	return true;
};

export default isAnagram;

// 证错比证对容易；越早跳出越高效
