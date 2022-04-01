const $2DShape = require('./Shape');
const Triangle = require('./Triangle.js');

const shape = new $2DShape();

test('Shape is a type of $2DShape', () => {
	expect(shape instanceof $2DShape).toBe(true);
});

test('Shape.area()', () => {
	expect(() => shape.area()).toThrow(ReferenceError);
});

test('Shape.perimeter()', () => {
	expect(() => shape.perimeter()).toThrow(ReferenceError);
});

test('Shape.toString()', () => {
	expect(() => shape.toString()).toThrow(ReferenceError);
});

test('Shape.draw()', () => {
	expect(() => shape.draw()).toThrow(ReferenceError);
});

test('$2DShape.addShape()', () => {
	const triangle = new Triangle(3, 4, 5);
	$2DShape.addShape(triangle);
	$2DShape.addShape(triangle);
	$2DShape.addShape(triangle);

	expect($2DShape.shapes.length).toBe(3);
	expect($2DShape.shapes[0] instanceof Triangle).toBe(true);
});

test('$2DShape.getTotalArea()', () => {
	const triangle = new Triangle(3, 4, 5);
	$2DShape.addShape(triangle);
	$2DShape.addShape(triangle);
	$2DShape.addShape(triangle);

	expect($2DShape.shapes.length).toBe(6);
	expect($2DShape.getTotalArea()).toBe(36);
});

test('$2DShape.getTotalPerimeter()', () => {
	const triangle = new Triangle(3, 4, 5);
	$2DShape.addShape(triangle);
	$2DShape.addShape(triangle);
	$2DShape.addShape(triangle);

	expect($2DShape.shapes.length).toBe(9);
	expect($2DShape.getTotalPerimeter()).toBe(108);
});
