const {defaults: tsjPreset} = require('ts-jest/presets');

module.exports = {
  // ...tsjPreset,
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    // ...tsjPreset.transform,
    // '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    // '^.+\\.(js|jsx|ts|tsx)$':
    //   '<rootDir>/node_modules/react-native/jest/preprocessor.js',

    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
      },
    ],
  },
  testMatch: ['<rootDir>/__tests__/**/*.test.(js|jsx|ts|tsx)'],
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native)/)'],
  setupFiles: ['<rootDir>/__mocks__/jestSetupFile.ts'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    uuid: require.resolve('uuid'),
    // '@/(.*)$': '<rootDir>/src/$1',
    // '^@root(.*)$': '<rootDir>/src$1',
    // '^@screens(.*)$': '<rootDir>/src/screens$1',
    // alias: {
    //   '^@root(.*)$': '<rootDir>/src$1',
    //   '^@screens(.*)$': '<rootDir>/src/screens$1',
    // },
  },
};
