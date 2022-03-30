const calcProductPrice = require('./calcProductPrice');

const correctItems = [
	{ name: 'book', price: 100 },
	{ name: 'pencil', price: 1 },
	{ name: 'pen', price: 10 },
];

const correctOptions = {
	taxRate: 0.08,
	shippingRate: 0.1,
};

const wrongItems = 'string';
const wrongTaxOptions = {
	taxRate: 'string',
};

const wrongShippingOptions = {
	shippingRate: 'string',
};

test('Testing return types and values', () => {
	expect(typeof calcProductPrice(correctItems, correctOptions)).toBe('object');
	expect(calcProductPrice(correctItems, correctOptions)).toEqual({
		totalItems: 111,
		tax: 8.88,
		shipping: 11.1,
		totalWithCosts: 130.98,
	});
});

test('Testing wrong data Types', () => {
	expect(() => calcProductPrice(wrongItems, correctOptions)).toThrow(TypeError);
	expect(() => calcProductPrice(correctItems, wrongTaxOptions)).toThrow(
		TypeError,
	);
	expect(() => calcProductPrice(correctItems, wrongShippingOptions)).toThrow(
		TypeError,
	);
});
