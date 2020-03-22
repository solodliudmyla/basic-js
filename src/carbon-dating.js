const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
	if (typeof sampleActivity === "number"
		|| typeof sampleActivity == "boolean"
		|| typeof sampleActivity === "object"
		|| typeof sampleActivity === "undefined"
		|| parseFloat(sampleActivity) <= 0
		|| parseFloat(sampleActivity) > 15
		|| isNaN(parseFloat(sampleActivity))) {
		return false;
	} else {
		return Math.ceil((Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)))
			/ (Math.LN2.toPrecision(3) / HALF_LIFE_PERIOD));
	}
};
