const $2DShape = require('./Shape');

function Triangle(a = 0, b = 0, c = 0) {
	this.a = a;
	this.b = b;
	this.c = c;

	this.type = 'Triangle';

	this.draw = function () {
		return 'Drawing a ' + this.type;
	};

	this.toString = function () {
		return this.type + ': ' + this.a + ', ' + this.b + ', ' + this.c;
	};

	this.area = function () {
		return (this.a * this.b) / 2;
	};

	this.perimeter = function () {
		return this.a + this.b + this.c;
	};

	this.getType = function () {
		return this.type;
	};

	this.setA = function (a) {
		this.a = a;
	};

	this.setB = function (b) {
		this.b = b;
	};

	this.setC = function (c) {
		this.c = c;
	};

	this.getA = function () {
		return this.a;
	};

	this.getB = function () {
		return this.b;
	};

	this.getC = function () {
		return this.c;
	};

	this.getSides = function () {
		return [this.a, this.b, this.c];
	};
}

Triangle.prototype = new $2DShape();

module.exports = Triangle;
