module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            '@aws-amplify/react-native': '@aws-amplify/react-native',
            '@aws-amplify/core': '@aws-amplify/core',
            '@aws-amplify/api': '@aws-amplify/api',
            '@aws-amplify/api-graphql': '@aws-amplify/api-graphql',
            '@aws-amplify/datastore': '@aws-amplify/datastore',
            '@react-native-community/netinfo': '@react-native-community/netinfo',
          },
        },
      ],
    ],
  };
};
