#!/bin/bash

# This script helps create separate git repositories for each app
# and moves them outside the current monorepo structure

# Define the base directory where new repos will be created
BASE_DIR="/Users/maxwoldenberg/Desktop/Pluk-App-Repos"
CURRENT_DIR="/Users/maxwoldenberg/Desktop/Pluk-App-1.3"
APPS=("consumer-app" "driver-dashboard" "farmer-dashboard")

# Create base directory if it doesn't exist
mkdir -p "$BASE_DIR"

echo "Creating separate repositories for each app..."

for app in "${APPS[@]}"; do
  echo "Processing $app..."
  
  # Create new directory for the app
  NEW_APP_DIR="$BASE_DIR/$app"
  mkdir -p "$NEW_APP_DIR"
  
  # Copy app files to new directory
  echo "Copying $app files to $NEW_APP_DIR..."
  cp -R "$CURRENT_DIR/$app/"* "$NEW_APP_DIR/"
  
  # Initialize git repository
  echo "Initializing git repository for $app..."
  cd "$NEW_APP_DIR"
  git init
  
  # Create .gitignore
  cat > .gitignore << EOF
# Node
node_modules/
npm-debug.log
yarn-error.log
yarn-debug.log
.pnp/
.pnp.js

# Expo
.expo/
dist/
web-build/

# Native
*.orig.*
*.jks
*.p8
*.p12
*.key
*.mobileprovision

# Metro
.metro-health-check*

# debug
npm-debug.*
yarn-debug.*
yarn-error.*

# macOS
.DS_Store
*.pem

# local env files
.env*.local
.env

# typescript
*.tsbuildinfo

# IDE
.idea/
.vscode/
EOF
  
  # Initial commit
  git add .
  git commit -m "Initial commit: Extract $app from monorepo"
  
  echo "$app repository created at $NEW_APP_DIR"
  echo "-----------------------------------"
done

echo "All repositories created successfully!"
echo ""
echo "Next steps:"
echo "1. Test each app in its new location"
echo "2. Set up remote repositories (GitHub, GitLab, etc.)"
echo "3. Push your local repositories to the remote"
echo "4. Set up CI/CD pipelines for each app"
