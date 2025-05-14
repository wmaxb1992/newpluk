const { getDefaultConfig } = require('@expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.extraNodeModules = {
  '@aws-amplify/react-native': require.resolve('@aws-amplify/react-native'),
  '@aws-amplify/core': require.resolve('@aws-amplify/core'),
  '@aws-amplify/api': require.resolve('@aws-amplify/api'),
  '@aws-amplify/api-graphql': require.resolve('@aws-amplify/api-graphql'),
  '@aws-amplify/datastore': require.resolve('@aws-amplify/datastore'),
  '@react-native-community/netinfo': require.resolve('@react-native-community/netinfo'),
};

module.exports = defaultConfig;
