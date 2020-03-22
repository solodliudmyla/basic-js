module.exports = function repeater(str, options) {
	return build(str, options.repeatTimes, options.separator, options);
};

const additionStr = (str, repeatTime, separator) => {
	if (typeof str === 'undefined') {
		return '';
	} else if (typeof repeatTime === 'undefined') {
		repeatTime = 1;
	} else if (typeof separator === 'undefined') {
		separator = '';
	}
	let resultAddition = '';
	for (let i = 0; i < repeatTime; i++) {
		if (i === repeatTime - 1) {
			separator = '';
		}
		resultAddition += str + separator;
	}
	return resultAddition;
};

const build = (str, repeatTime, separator, options) => {
	if (typeof repeatTime === 'undefined') {
		repeatTime = 1;
	} else if (typeof separator === 'undefined') {
		separator = '+';
	}
	const addition = additionStr(options.addition, options.additionRepeatTimes, options.additionSeparator);
	let resultStr = '';
	for (let i = 0; i < repeatTime; i++) {
		if (i === repeatTime - 1) {
			separator = '';
		}
		resultStr += str + addition + separator;
	}
	return resultStr;
};
  