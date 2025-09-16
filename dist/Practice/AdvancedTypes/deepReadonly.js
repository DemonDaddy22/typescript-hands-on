"use strict";
// create a DeepReadonly utility type
// DeepReadonly<T> -> returns a type with all the properties of T set to readonly recursively
Object.defineProperty(exports, "__esModule", { value: true });
const user = {
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
//# sourceMappingURL=deepReadonly.js.map