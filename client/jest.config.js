module.exports = {
  "testURL": "http://localhost",
  "transform": {
    "^.+\\.(js)$": "<rootDir>/node_modules/babel-jest",
    "^(?!.*\\.(js|jsx|mjs|css|json)$)": "<rootDir>/config/jest/fileTransform.js",
    "^.+\\.(css|less|scss)$": "<rootDir>/config/jest/cssTransform.js"
  },
  "collectCoverageFrom": ["src/**/*.js"],
  "coverageThreshold": {
    "global": {
      "branches": 1,
      "functions": 1,
      "lines": 1,
      "statements": 1
    }
  },
  "coverageReporters": ["lcov", "text", "text-summary"],
  "setupFiles": ["<rootDir>/jest.setup.js"]
}
