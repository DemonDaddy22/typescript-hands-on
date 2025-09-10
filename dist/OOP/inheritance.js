"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shape {
    color;
    constructor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    radius;
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    get getColor() {
        return `Circle color is: ${super.getColor}`;
    }
}
const circle = new Circle('red', 5);
console.log(circle.getColor);
//# sourceMappingURL=inheritance.js.map