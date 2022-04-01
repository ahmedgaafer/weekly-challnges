// Generic Shape class
class $2DShape {
	static shapes = [];

	static addShape(shape) {
		this.shapes.push(shape);
	}

	static getTotalArea() {
		return this.shapes.reduce(function (acc, shape) {
			return acc + shape.area();
		}, 0);
	}

	static getTotalPerimeter() {
		return this.shapes.reduce(function (acc, shape) {
			return acc + shape.perimeter();
		}, 0);
	}

	area() {
		throw new ReferenceError('Cannot call area() on abstract class');
	}

	perimeter() {
		throw new ReferenceError('Cannot call perimeter() on abstract class');
	}

	draw() {
		throw new ReferenceError('Cannot call draw() on abstract class');
	}

	toString() {
		throw new ReferenceError('Cannot call toString() on abstract class');
	}
}

$2DShape.prototype = new $2DShape();

module.exports = $2DShape;
