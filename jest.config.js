module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  transformIgnorePatterns: [
    "node_modules/(?!(msw)/)",
  ],
  moduleNameMapping: {
    '^msw$': 'msw',
    '^msw/node$': 'msw/node',
  },
};
  
 