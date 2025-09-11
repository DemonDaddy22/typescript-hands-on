"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getValue(obj, key) {
    return obj[key];
}
const person = { name: 'John', age: 30, city: 'New York' };
console.log(getValue(person, 'name'));
// console.log(getValue(person, 'job')); // Error: Argument of type '"job"' is not assignable to parameter of type '"name" | "age" | "city"'.
//# sourceMappingURL=keyof.js.map