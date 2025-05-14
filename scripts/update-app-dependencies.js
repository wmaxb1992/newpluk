#!/usr/bin/env node

/**
 * This script updates each app's package.json to reference local shared packages
 * and removes dependencies on the pluk-ecosystem.
 */

const fs = require('fs');
const path = require('path');

// Paths
const ROOT_DIR = path.resolve(__dirname, '..');
const APPS = ['consumer-app', 'driver-dashboard', 'farmer-dashboard'];
const PACKAGES_DIR = path.join(ROOT_DIR, 'pluk-ecosystem', 'packages');

// Get all shared package names
const sharedPackages = fs.readdirSync(PACKAGES_DIR)
  .filter(dir => fs.statSync(path.join(PACKAGES_DIR, dir)).isDirectory());

// Update each app's package.json
APPS.forEach(app => {
  const packageJsonPath = path.join(ROOT_DIR, app, 'package.json');
  
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    // Add local dependencies
    if (!packageJson.dependencies) {
      packageJson.dependencies = {};
    }
    
    sharedPackages.forEach(pkg => {
      // Remove any @pluk/* dependencies
      if (packageJson.dependencies[`@pluk/${pkg}`]) {
        delete packageJson.dependencies[`@pluk/${pkg}`];
      }
      
      // Add local reference
      packageJson.dependencies[`@${app}/${pkg}`] = `file:./shared/${pkg}`;
    });
    
    // Update scripts to include building shared packages
    if (!packageJson.scripts) {
      packageJson.scripts = {};
    }
    
    packageJson.scripts.prebuild = 'npm run build:shared';
    packageJson.scripts['build:shared'] = 'for dir in ./shared/*/; do (cd "$dir" && npm run build); done';
    
    // Write updated package.json
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log(`Updated package.json for ${app}`);
  }
});

console.log('App dependencies updated!');
