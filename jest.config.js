/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/$1',
  },
  resetMocks: true,
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': [
      'babel-jest', {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          ['@babel/preset-react', { runtime: 'automatic' }],
          '@babel/preset-typescript',
        ],
      },
    ],
  },
}
