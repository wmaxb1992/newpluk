#!/bin/bash

# Setup script for Pluk App seed data generator

echo "Setting up Pluk App seed data generator..."

# Install dependencies
echo "Installing dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env file..."
  cat > .env << EOL
AWS_REGION=us-east-1
GRAPHQL_ENDPOINT=https://7pmhulha6vfsxhc6iqghyux52e.appsync-api.us-east-1.amazonaws.com/graphql
GRAPHQL_API_KEY=da2-tnt5itq4gvb5ddu3ynaw6t42mi
EOL
  echo ".env file created."
else
  echo ".env file already exists."
fi

# Make the script executable
chmod +x run-seed-data.sh

echo "Setup complete. You can now run the seed data generator with:"
echo "./run-seed-data.sh"
