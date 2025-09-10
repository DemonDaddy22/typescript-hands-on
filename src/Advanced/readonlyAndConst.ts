// Readonly property in a type
type User = {
  readonly id: number;
  name: string;
};

let u: User = { id: 1, name: 'Alice' };
u.name = 'Bob'; // ✅ allowed
u.id = 2; // ❌ Error: cannot assign to readonly property

// Readonly array
let nums: ReadonlyArray<number> = [1, 2, 3];
nums.push(4); // ❌ Error

let colors = ['red', 'green'] as const;
// type = readonly ["red", "green"]

colors[0] = 'blue'; // ❌ Error: cannot modify
