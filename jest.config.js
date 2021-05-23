module.exports = {
  roots: ['entities', 'features', 'nestjs/src', 'persistance'],
  testMatch: ['**/*.test\\.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
};
