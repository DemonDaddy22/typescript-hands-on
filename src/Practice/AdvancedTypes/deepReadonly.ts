// create a DeepReadonly utility type
// DeepReadonly<T> -> returns a type with all the properties of T set to readonly recursively

type DeepReadonly<T> = keyof T extends never
  ? T
  : {
      readonly [K in keyof T]: T[K] extends Function ? T[K] : T[K] extends object ? DeepReadonly<T[K]> : T[K];
    };

type User = {
  id: string;
  name: string;
  address: {
    street: string;
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  phones: number[];
  username: () => unknown;
  interests: any;
};

type ShallowReadonlyUser = Readonly<User>;
type DeepReadonlyUser = DeepReadonly<User>;

const user: DeepReadonlyUser = {
  id: '1',
  name: 'Rohan',
  address: {
    street: '123 Main St',
    city: 'Metropolis',
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
  phones: [1234567890, 9876543210],
  username: () => 'rohan123',
  interests: { hobby: 'coding' },
};
