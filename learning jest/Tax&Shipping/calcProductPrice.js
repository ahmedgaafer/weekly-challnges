const DEFAULT_TAX_RATE = 0.08;
const DEFAULT_SHIPPING_RATE = 0.1;

function round(number) {
	return Math.round((number + Number.EPSILON) * 100) / 100;
}

function calcProductPrice(
	items,
	{ taxRate = DEFAULT_TAX_RATE, shippingRate = DEFAULT_SHIPPING_RATE } = {},
) {
	if (!Array.isArray(items))
		throw new TypeError('Expected items to be an array');
	if (!Number.isFinite(taxRate))
		throw new TypeError('Expected taxRate to be a number');
	if (!Number.isFinite(shippingRate))
		throw new TypeError('Expected shippingRate to be a number');

	const totalItems = round(items.reduce((acc, item) => acc + item.price, 0));
	const tax = round(totalItems * taxRate);
	const shipping = round(totalItems * shippingRate);
	const totalWithCosts = round(totalItems + tax + shipping);

	return {
		totalItems,
		tax,
		shipping,
		totalWithCosts,
	};
}

module.exports = calcProductPrice;
