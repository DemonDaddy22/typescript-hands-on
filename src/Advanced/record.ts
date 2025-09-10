// Example 1: Basic usage
type UserRoles = Record<'admin' | 'editor' | 'viewer', boolean>;

const roles: UserRoles = {
  admin: true,
  editor: false,
  viewer: true,
};

// Example 2: Index signature alternative
type Scores = Record<string, number>;

const marks: Scores = {
  math: 95,
  science: 88,
};
