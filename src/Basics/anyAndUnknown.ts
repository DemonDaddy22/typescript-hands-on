function parseJson(json: string): unknown {
  return JSON.parse(json);
}

const result = parseJson('{"x":10}');

// Using `any` → unsafe
const unsafe = (result as any).y.toUpperCase(); // may crash

// Using `unknown` → forces check
if (typeof result === 'object' && result !== null && 'x' in result) {
  console.log(result.x); // ✅ safe
}
