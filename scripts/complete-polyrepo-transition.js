#!/usr/bin/env node

/**
 * This script completes the transition from monorepo to polyrepo
 * by running all the necessary update scripts in sequence.
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// Paths
const ROOT_DIR = path.resolve(__dirname, '..');
const SCRIPTS_DIR = __dirname;
const APPS = ['consumer-app', 'driver-dashboard', 'farmer-dashboard'];

console.log('Starting polyrepo transition...');

// Make scripts executable
execSync(`chmod +x ${path.join(SCRIPTS_DIR, '*.js')}`, { stdio: 'inherit' });

// Step 1: Extract shared dependencies
console.log('\n--- Step 1: Extracting shared dependencies ---');
require('./extract-shared-deps');

// Step 2: Update app dependencies
console.log('\n--- Step 2: Updating app dependencies ---');
require('./update-app-dependencies');

// Step 3: Update Metro config
console.log('\n--- Step 3: Updating Metro configurations ---');
require('./update-metro-config');

// Step 4: Update Babel config
console.log('\n--- Step 4: Updating Babel configurations ---');
require('./update-babel-config');

// Step 5: Create README for each app
console.log('\n--- Step 5: Creating README for each app ---');
APPS.forEach(app => {
  const readmePath = path.join(ROOT_DIR, app, 'README.md');
  const readmeContent = `# ${app.charAt(0).toUpperCase() + app.slice(1).replace('-', ' ')}

This is a standalone application that was extracted from the Pluk App monorepo.

## Getting Started

1. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

2. Start the development server:
   \`\`\`
   npm start
   \`\`\`

## Shared Components

This app includes local copies of shared components in the \`shared/\` directory.
These components were originally part of the Pluk ecosystem monorepo.
`;

  fs.writeFileSync(readmePath, readmeContent);
  console.log(`Created README for ${app}`);
});

// Step 6: Create a script to run each app independently
console.log('\n--- Step 6: Creating run scripts ---');
const runScriptContent = `#!/bin/bash

# This script helps run each app independently

case "$1" in
  consumer)
    cd consumer-app && npm start
    ;;
  driver)
    cd driver-dashboard && npm start
    ;;
  farmer)
    cd farmer-dashboard && npm start
    ;;
  *)
    echo "Usage: $0 {consumer|driver|farmer}"
    exit 1
    ;;
esac
`;

fs.writeFileSync(path.join(ROOT_DIR, 'run-app.sh'), runScriptContent);
execSync(`chmod +x ${path.join(ROOT_DIR, 'run-app.sh')}`, { stdio: 'inherit' });
console.log('Created run-app.sh script');

console.log('\nPolyrepo transition complete!');
console.log('\nNext steps:');
console.log('1. Test each app by running: ./run-app.sh consumer|driver|farmer');
console.log('2. Create separate git repositories for each app');
console.log('3. Move each app to its own directory outside the current structure');
console.log('4. Update CI/CD pipelines for each app');
