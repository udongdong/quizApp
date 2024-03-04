module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
        alias: {
          '~': './src',
        },
      },
    ],
  ],
};
