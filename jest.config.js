module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transform: {
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.jest.json',
      },
    ],
  },
  testMatch: ['<rootDir>/__tests__/**/*.test.(js|jsx|ts|tsx)'],
  transformIgnorePatterns: ['node_modules/(?!(@react-native|react-native)/)'],
  setupFiles: [
    '<rootDir>/__mocks__/asyncStorage.mock.ts',
    '<rootDir>/__mocks__/quizUtil.mock.ts',
    '<rootDir>/__mocks__/api.mock.ts',
  ],
  setupFilesAfterEnv: ['@testing-library/react-native/extend-expect'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.ts',
    uuid: require.resolve('uuid'),
  },
};
