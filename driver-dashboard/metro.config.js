
const { getDefaultConfig } = require('@expo/metro-config');
const path = require('path');

const defaultConfig = getDefaultConfig(__dirname);

// Add shared packages to watchFolders
defaultConfig.watchFolders = [
  path.resolve(__dirname, 'shared')
];

// Fix the Metro resolver to handle React Native properly
defaultConfig.resolver.assetExts.push('cjs');

// Fix the isAssetFile function to handle all asset extensions
defaultConfig.resolver.sourceExts = ['js', 'jsx', 'ts', 'tsx', 'json'];

// Add any additional configuration specific to this app
defaultConfig.transformer.babelTransformerPath = require.resolve('metro-react-native-babel-preset');

// Handle symlinks properly
defaultConfig.resolver.disableHierarchicalLookup = true;
defaultConfig.resolver.nodeModulesPaths = [
  path.resolve(__dirname, 'node_modules'),
];

module.exports = defaultConfig;
