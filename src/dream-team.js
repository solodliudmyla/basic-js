module.exports = function createDreamTeam(members) {
	if (!members || typeof members === 'undefined') {
		return false;
	}
	const arr = Array.from(members);
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] === 'string') {
			result.push(arr[i].trim()[0].toLocaleUpperCase());
		}
	}
	return result.sort().join('').toLocaleUpperCase();
};