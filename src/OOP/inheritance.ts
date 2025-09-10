class Shape {
  private color: string;

  constructor(color: string) {
    this.color = color;
  }

  public get getColor(): string {
    return this.color;
  }
}

class Circle extends Shape {
  private radius: number;

  constructor(color: string, radius: number) {
    super(color);
    this.radius = radius;
  }

  public override get getColor(): string {
    return `Circle color is: ${super.getColor}`;
  }
}

const circle = new Circle('red', 5);
console.log(circle.getColor);
