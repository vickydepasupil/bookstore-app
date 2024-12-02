/** @returns {Promise<import('jest').Config>} */
module.exports = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '^src/(.*)$': '<rootdir>/src/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^constants/(.*)$': '<rootDir>/src/constants/$1',
    '^context/(.*)$': '<rootDir>/src/context/$1',
    '^public/(.*)$': '<rootDir>/public/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/__tests__/**/*.test.tsx'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
};
