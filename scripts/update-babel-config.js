#!/usr/bin/env node

/**
 * This script updates the babel.config.js file for each app to properly
 * handle the local shared packages.
 */

const fs = require('fs');
const path = require('path');

// Paths
const ROOT_DIR = path.resolve(__dirname, '..');
const APPS = ['consumer-app', 'driver-dashboard', 'farmer-dashboard'];

// Babel config template
const babelConfigTemplate = `
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
`;

// Update babel.config.js for each app
APPS.forEach(app => {
  const babelConfigPath = path.join(ROOT_DIR, app, 'babel.config.js');
  fs.writeFileSync(babelConfigPath, babelConfigTemplate);
  console.log(`Updated babel.config.js for ${app}`);
});

console.log('Babel configurations updated!');
