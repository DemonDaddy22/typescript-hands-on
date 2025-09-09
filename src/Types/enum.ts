enum Shape {
  Square,
  Circle,
  Triangle,
}

function getArea(shape: Shape, dimension: number): number {
  switch (shape) {
    case Shape.Square:
      return dimension * dimension;
    case Shape.Circle:
      return Math.PI * dimension * dimension;
    case Shape.Triangle:
      return (Math.sqrt(3) / 4) * dimension * dimension;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

console.log('Square area:', getArea(Shape.Square, 4));
