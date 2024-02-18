// import type { Config } from 'next/jest';

// const config: Config = {
//   preset: 'ts-jest',
//   setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
//   verbose: true,
//   transform: {
//     '\\.[jt]sx?$': 'babel-jest',
//     '^.+\\.(t|j)sx?$': 'ts-jest',
//   },
//   testEnvironment: 'jest-environment-jsdom',
// };

import type { Config } from 'jest';
import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
};

export default createJestConfig(config);
