# Polyrepo Transition Scripts

This directory contains scripts that were used to transition the Pluk App from a monorepo to a polyrepo structure. These scripts can be used for maintenance and further development of the polyrepo structure.

## Available Scripts

### `complete-polyrepo-transition.js`

The main script that orchestrates the entire polyrepo transition process. It runs all the other scripts in sequence.

```bash
node complete-polyrepo-transition.js
```

### `extract-shared-deps.js`

Extracts shared dependencies from the pluk-ecosystem packages and creates a local package for each app to use.

```bash
node extract-shared-deps.js
```

### `update-app-dependencies.js`

Updates each app's package.json to reference local shared packages and removes dependencies on the pluk-ecosystem.

```bash
node update-app-dependencies.js
```

### `update-metro-config.js`

Updates the metro.config.js file for each app to properly handle the local shared packages.

```bash
node update-metro-config.js
```

### `update-babel-config.js`

Updates the babel.config.js file for each app to properly handle the local shared packages.

```bash
node update-babel-config.js
```

### `create-separate-repos.sh`

Creates separate git repositories for each app and moves them outside the current monorepo structure.

```bash
./create-separate-repos.sh
```

## Running Individual Apps

After the transition, you can use the `run-app.sh` script in the root directory to run any of the apps:

```bash
./run-app.sh consumer    # Run the consumer app
./run-app.sh driver      # Run the driver dashboard
./run-app.sh farmer      # Run the farmer dashboard
```

## Maintenance

If you need to update shared packages across all apps, you'll need to:

1. Make the changes in one app's shared directory
2. Copy those changes to the other apps' shared directories
3. Rebuild the shared packages in each app

This can be automated with a script similar to `extract-shared-deps.js` but modified to sync changes between apps.
