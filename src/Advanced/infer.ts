// infer type of elements in an array
type ElementType<T> = T extends (infer R)[] ? R : T;
type Str = ElementType<Array<string>>; // string
type Num = ElementType<number[]>; // number

// infer type of elements in a Promise
type PromiseType<T> = T extends Promise<infer R> ? R : T;
type Resolved = PromiseType<Promise<number>>; // number

// generic unpack type
type Unpack<T> = T extends (infer R)[] ? R : T extends Promise<infer R> ? R : T;
type U1 = Unpack<string[]>; // string
type U2 = Unpack<Promise<boolean>>; // boolean
type U3 = Unpack<number>; // number

// modify types
type Position = 'AwesomeHR' | 'AwesomeManager' | 'AwesomeDev';
type RemoveAwesome<T> = T extends `Awesome${infer R}` ? R : Text;
type NewPosition = RemoveAwesome<Position>; // "HR" | "Manager" | "Dev"

// modify types with prefix
type RemoveWithPrefix<T, Prefix extends string> = T extends `${Prefix}${infer R}` ? R : T;
type NewPosition2 = RemoveWithPrefix<Position, 'Awesome'>; // "HR" | "Manager" | "Dev"
