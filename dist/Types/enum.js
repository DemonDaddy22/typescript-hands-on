"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape;
(function (Shape) {
    Shape[Shape["Square"] = 0] = "Square";
    Shape[Shape["Circle"] = 1] = "Circle";
    Shape[Shape["Triangle"] = 2] = "Triangle";
})(Shape || (Shape = {}));
function getArea(shape, dimension) {
    switch (shape) {
        case Shape.Square:
            return dimension * dimension;
        case Shape.Circle:
            return Math.PI * dimension * dimension;
        case Shape.Triangle:
            return (Math.sqrt(3) / 4) * dimension * dimension;
        default:
            const _exhaustiveCheck = shape;
            return _exhaustiveCheck;
    }
}
console.log('Square area:', getArea(Shape.Square, 4));
//# sourceMappingURL=enum.js.map