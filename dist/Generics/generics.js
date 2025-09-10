"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// basic
function identity(arg) {
    return arg;
}
const num = identity(42);
const str = identity('Hello, TypeScript!');
const userResponse = {
    data: { id: 1, name: 'Alice' },
    success: true,
};
// class
class Box {
    content;
    constructor(content) {
        this.content = content;
    }
}
const numBox = new Box(100);
const strBox = new Box('TypeScript'); // type inferred as string
// generic constraints
function getLength(item) {
    return item.length;
}
console.log(getLength('hello')); // ✅ works
console.log(getLength([1, 2, 3])); // ✅ works
console.log(getLength({ length: 10, value: 'test' })); // ✅ works
// getLength(123);      // ❌ Error: number has no length
// multiple generics
function pair(key, value) {
    return [key, value];
}
const p1 = pair('age', 30);
// [ "age", 30 ]
const p2 = pair('id', 101);
// inferred as [string, number]
//# sourceMappingURL=generics.js.map