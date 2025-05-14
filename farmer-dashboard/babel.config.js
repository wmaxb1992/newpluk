
module.exports = function(api) {
  api.cache(true);
  
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['@babel/plugin-proposal-export-namespace-from'],
      ['@babel/plugin-transform-modules-commonjs'],
      ['@babel/plugin-transform-runtime'],
      ['@tamagui/babel-plugin'],
      ['transform-inline-environment-variables']
    ],
    // This is critical for handling shared packages
    babelrcRoots: [
      '.',
      './shared/*',
    ],
  };
};
