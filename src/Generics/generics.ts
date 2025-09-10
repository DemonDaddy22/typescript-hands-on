// basic
function identity<T>(arg: T): T {
  return arg;
}

const num = identity<number>(42);
const str = identity('Hello, TypeScript!');

// interface
interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: { id: 1, name: 'Alice' },
  success: true,
};

// class
class Box<T> {
  constructor(public content: T) {}
}

const numBox = new Box<number>(100);
const strBox = new Box('TypeScript'); // type inferred as string

// generic constraints
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

console.log(getLength('hello')); // ✅ works
console.log(getLength([1, 2, 3])); // ✅ works
console.log(getLength({ length: 10, value: 'test' })); // ✅ works
// getLength(123);      // ❌ Error: number has no length
