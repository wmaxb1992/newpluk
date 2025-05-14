#!/usr/bin/env node

/**
 * This script extracts shared dependencies from the pluk-ecosystem packages
 * and creates a local package for each app to use.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Paths
const ROOT_DIR = path.resolve(__dirname, '..');
const ECOSYSTEM_DIR = path.join(ROOT_DIR, 'pluk-ecosystem');
const PACKAGES_DIR = path.join(ECOSYSTEM_DIR, 'packages');
const APPS = ['consumer-app', 'driver-dashboard', 'farmer-dashboard'];

// Create shared directory for each app if it doesn't exist
APPS.forEach(app => {
  const sharedDir = path.join(ROOT_DIR, app, 'shared');
  if (!fs.existsSync(sharedDir)) {
    fs.mkdirSync(sharedDir, { recursive: true });
    console.log(`Created shared directory for ${app}`);
  }
});

// Copy each package to each app's shared directory
fs.readdirSync(PACKAGES_DIR).forEach(packageName => {
  const packageDir = path.join(PACKAGES_DIR, packageName);
  if (fs.statSync(packageDir).isDirectory()) {
    APPS.forEach(app => {
      const destDir = path.join(ROOT_DIR, app, 'shared', packageName);
      
      // Create destination directory
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // Copy package files
      execSync(`cp -R ${path.join(packageDir, '*')} ${destDir}`, { stdio: 'inherit' });
      
      // Update package.json to use local path
      const packageJsonPath = path.join(destDir, 'package.json');
      if (fs.existsSync(packageJsonPath)) {
        const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
        packageJson.name = `@${app}/${packageName}`;
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      }
      
      console.log(`Copied ${packageName} to ${app}/shared`);
    });
  }
});

console.log('Shared dependencies extraction complete!');
