type Position = 'HR' | 'Manager' | 'Dev';

// mapped types
type EmployeeDetails = {
  [K in Position]: string[];
};

type Readonly<T> = {
  readonly [K in keyof T]: T[K];
};

const employees: Readonly<EmployeeDetails> = {
  HR: ['Alice', 'Bob'],
  Manager: ['Charlie'],
  Dev: ['Dave', 'Eve'],
};

// remapping keys and prefixing
type User = {
  id: number;
  name: string;
  email: string;
};

type PrefixedUser = {
  [K in keyof User as `user_${K}`]: User[K];
};
// { user_id: number; user_name: string; user_email: string }

// remapping keys and filtering
type AuthenticatedUser = User & { password: string };
type PublicUser = {
  [K in keyof AuthenticatedUser as Exclude<K, 'password'>]: AuthenticatedUser[K];
};
// { id: number; name: string; email: string }
