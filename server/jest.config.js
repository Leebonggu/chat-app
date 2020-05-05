module.exports = {
  collectCoverageFrom: [
    'src/**/*.{js}',
    '!**/app.js',
    '!**/coverage/**',
    '!**/node_modules/**'
  ],
  coveragePathIgnorePatterns: [
    'node_modules'
  ],
  converageTreshhold: {
    global: {
      branches: 1,
      functions: 1,
      lines: 1,
      statements: 1
    },
  },
  "coverageReporters": ['json', 'lcov', 'text', 'text-summary'],
  verbose: true
}
