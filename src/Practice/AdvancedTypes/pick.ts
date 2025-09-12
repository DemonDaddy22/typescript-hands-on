// create a Pick utility type similar to TypeScript's built-in Pick
// Pick<T, K> -> returns a type from type T with only the keys in union K

type Pick<T, K extends keyof T> = {
  [R in K]: T[R];
};

type User = {
  id: string;
  name: string;
  email: string;
  age: number;
};

type PublicUser = Pick<User, 'id' | 'name'>;
