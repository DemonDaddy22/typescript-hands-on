"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function parseJson(json) {
    return JSON.parse(json);
}
const result = parseJson('{"x":10}');
// Using `any` → unsafe
const unsafe = result.y.toUpperCase(); // may crash
// Using `unknown` → forces check
if (typeof result === 'object' && result !== null && 'x' in result) {
    console.log(result.x); // ✅ safe
}
//# sourceMappingURL=anyAndUnknown.js.map