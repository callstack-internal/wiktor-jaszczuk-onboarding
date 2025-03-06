module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@app': './src/app',
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@services': './src/services',
        },
      },
    ],
  ],
};
