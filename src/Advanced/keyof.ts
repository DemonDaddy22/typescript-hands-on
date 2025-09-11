function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: 'John', age: 30, city: 'New York' };

console.log(getValue(person, 'name'));
console.log(getValue(person, 'job')); // Error: Argument of type '"job"' is not assignable to parameter of type '"name" | "age" | "city"'.
