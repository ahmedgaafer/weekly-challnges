function sum(a, b) {
	if (typeof a !== 'number' || typeof b !== 'number')
		throw new TypeError('Arguments must be numbers');
	if (
		(a === Infinity && b === -Infinity) ||
		(a === -Infinity && b === Infinity)
	)
		return 0;
	if (a === Infinity || b === Infinity) return Infinity;
	if (a === -Infinity || b === -Infinity) return -Infinity;

	return a + b;
}

module.exports = sum;
