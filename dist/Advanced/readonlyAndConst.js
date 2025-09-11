"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let u = { id: 1, name: 'Alice' };
u.name = 'Bob'; // ✅ allowed
// u.id = 2; // ❌ Error: cannot assign to readonly property
// Readonly array
let nums = [1, 2, 3];
// nums.push(4); // ❌ Error
let colors = ['red', 'green'];
// type = readonly ["red", "green"]
// colors[0] = 'blue'; // ❌ Error: cannot modify
//# sourceMappingURL=readonlyAndConst.js.map