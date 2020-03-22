const chainMaker = {
	chainData: [],
	getLength() {
		return this.chainData.length;
	},
	clearChains() {
		this.chainData = [];
	},
	addLink(value) {
		this.chainData.push(`( ${String(value)} )`);
		return this;
	},
	removeLink(position) {
		if (!Number(position) || position > this.getLength() || position < 1) {
			this.clearChains();
			throw new Error();
		} else if (Number(position)) {
			this.chainData.splice(position - 1, 1);
			return this;
		}
	},
	reverseChain() {
		this.chainData.reverse();
		return this;
	},
	finishChain() {
		const finish = this.chainData.join(('~~'));
		this.clearChains();
		return finish;
	}
};


module.exports = chainMaker;
