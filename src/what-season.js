module.exports = function getSeason(date) {
	if (type(date) === 'date' || type(date) === 'undefined') {
		try {
			switch (date.getMonth()) {
				case 11:
				case 0:
				case 1:
					return 'winter';
				case 2:
				case 3:
				case 4:
					return 'spring';
				case 5:
				case 6:
				case 7:
					return 'summer';
				case 8:
				case 9:
				case 10:
					return 'autumn';
			}
		} catch (e) {
			return ('Unable to determine the time of year!');
		}
	}
	throw 'Error on invalid argument';
};

const type = (value) => {
	let regex = /^\[object (\S+?)]$/;
	let matches = Object.prototype.toString.call(value).match(regex) || [];
	return (matches[1] || 'undefined').toLowerCase();
};
