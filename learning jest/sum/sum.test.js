const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

test('adding strings to throw error', () => {
	expect(() => sum('1', 2)).toThrow(TypeError);
	expect(() => sum(1, '2')).toThrow(TypeError);
});

test('adding Infinity and - Infinity', () => {
	expect(sum(Infinity, -Infinity)).toBe(0);
});

test('adding Infinity and any number', () => {
	expect(sum(Infinity, 9)).toBe(Infinity);
});

test('adding -Infinity and any number', () => {
	expect(sum(-Infinity, 9)).toBe(-Infinity);
});
