module.exports = (api) => {
  api.cache(false)

  return ({
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
            store: './src/store',
          },
          extensions: ['.ts', '.tsx', '.js', '.jsx'],
          root: './src/',
        },
      ],
      ['module:react-native-dotenv', {
        "allowList": [
          "API_URL",
          "GOOGLE_WEBCLIENT_ID",
        ]
      }]
    ],
    presets: ['module:metro-react-native-babel-preset'],
  })
};
