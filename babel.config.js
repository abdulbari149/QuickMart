module.exports = {
  plugins: [
    [
      'babel-plugin-module-resolver',
      {
        alias: {
          assets: './src/assets',
          components: './src/components',
          hooks: './src/hooks',
          icons: './src/assets/icons',
          navigation: './src/navigation',
          locales: './src/locales',
          containers: './src/containers',
          screens: './src/screens',
          styles: './src/styles',
          utils: './src/utils',
          storybook: './storybook',
          types: './src/types',
          api: './src/api',
          logging: './src/logging',
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        root: './src/',
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
