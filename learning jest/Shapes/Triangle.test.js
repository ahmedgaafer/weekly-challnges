const Triangle = require('./Triangle.js');
const $2DShape = require('./Shape.js');

test('Triangle is a type of $2DShape', () => {
	expect(Triangle.prototype instanceof $2DShape).toBe(true);
});

test('Triangle.area()', () => {
	const triangle = new Triangle(3, 4, 5);

	expect(triangle.area()).toBe(6);
});

test('Triangle.perimeter()', () => {
	const triangle = new Triangle(3, 4, 5);

	expect(triangle.perimeter()).toBe(12);
});

test('Triangle.toString()', () => {
	const triangle = new Triangle(3, 4, 5);

	expect(triangle.toString()).toBe('Triangle: 3, 4, 5');
});

test('Triangle.getType()', () => {
	const triangle = new Triangle(3, 4, 5);

	expect(triangle.getType()).toBe('Triangle');
});

test('Triangle.getSides()', () => {
	const triangle = new Triangle(3, 4, 5);

	expect(triangle.getSides()).toEqual([3, 4, 5]);
});

test('Triangle.setA()', () => {
	const triangle = new Triangle(3, 4, 5);

	triangle.setA(4);

	expect(triangle.getA()).toBe(4);
});

test('Triangle.setB()', () => {
	const triangle = new Triangle(3, 4, 5);

	triangle.setB(5);

	expect(triangle.getB()).toBe(5);
});

test('Triangle.setC()', () => {
	const triangle = new Triangle(3, 4, 5);

	triangle.setC(6);

	expect(triangle.getC()).toBe(6);
});

test('Triangle.getA()', () => {
	const triangle = new Triangle(3, 4, 5);

	expect(triangle.getA()).toBe(3);
});

test('Triangle.getB()', () => {
	const triangle = new Triangle(3, 4, 5);

	expect(triangle.getB()).toBe(4);
});

test('Triangle.getC()', () => {
	const triangle = new Triangle(3, 4, 5);

	expect(triangle.getC()).toBe(5);
});

test('Triangle.draw()', () => {
	const triangle = new Triangle(3, 4, 5);

	expect(triangle.draw()).toBe('Drawing a Triangle');
});
