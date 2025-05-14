# Pluk App Polyrepo Transition Guide

This guide explains how to work with the new polyrepo structure of the Pluk App ecosystem.

## Overview

The Pluk App has been transitioned from a monorepo to a polyrepo structure. Each application is now a standalone repository with its own dependencies and shared components.

- **Consumer App**: Mobile app for end users to browse and purchase produce
- **Farmer Dashboard**: Dashboard for farmers to manage inventory and orders
- **Driver Dashboard**: Mobile app for delivery drivers

## Working with the New Structure

### Running Apps

Each app can now be run independently:

```bash
# From the root directory
./run-app.sh consumer    # Run the consumer app
./run-app.sh farmer      # Run the farmer dashboard
./run-app.sh driver      # Run the driver dashboard

# Or navigate to each app directory
cd consumer-app
npm start
```

### Shared Components

Shared components are now managed through local copies in each app's `shared/` directory. This approach:

1. Makes each app self-contained and independently deployable
2. Eliminates complex workspace dependencies
3. Allows for app-specific customization of shared components when needed

#### Making Changes to Shared Components

When you need to modify a shared component:

1. Make the change in the appropriate app's `shared/` directory
2. Test the change thoroughly in that app
3. If the change should be applied to all apps, copy the updated component to the other apps' `shared/` directories

Example workflow for updating a shared UI component:

```bash
# 1. Make changes in the consumer app
cd consumer-app/shared/ui/components
# Edit the component...

# 2. Test the changes
cd ../../../
npm start

# 3. Copy the changes to other apps
cp -R shared/ui/components/MyComponent.tsx ../farmer-dashboard/shared/ui/components/
cp -R shared/ui/components/MyComponent.tsx ../driver-dashboard/shared/ui/components/
```

### Version Control

Each app now has its own git repository. After running the `create-separate-repos.sh` script, you'll have:

- `/Users/maxwoldenberg/Desktop/Pluk-App-Repos/consumer-app/`
- `/Users/maxwoldenberg/Desktop/Pluk-App-Repos/farmer-dashboard/`
- `/Users/maxwoldenberg/Desktop/Pluk-App-Repos/driver-dashboard/`

Each repository can be versioned independently with its own release cycle.

### Dependency Management

Each app manages its own dependencies. When updating dependencies:

1. Update the dependencies in one app
2. Test thoroughly
3. If the update should be applied to all apps, update the other apps' dependencies

```bash
# Example: Updating Expo SDK in the consumer app
cd consumer-app
npm install expo@latest
```

## Best Practices

1. **Independent Versioning**: Use semantic versioning for each app independently
2. **Shared Component Changes**: Document all changes to shared components in a changelog
3. **Synchronization**: Periodically synchronize shared components across apps to maintain consistency
4. **Testing**: Always test changes thoroughly in each app after copying shared components
5. **Documentation**: Keep READMEs updated in each app with app-specific information

## Troubleshooting

### Metro Bundler Issues

If you encounter Metro bundler issues:

1. Check that the Metro configuration is correct:
   ```bash
   cat app-name/metro.config.js
   ```

2. Ensure all dependencies are installed:
   ```bash
   cd app-name
   npm install
   ```

3. Clear Metro cache:
   ```bash
   cd app-name
   npm start -- --reset-cache
   ```

### Shared Component Inconsistencies

If you notice inconsistencies in shared components across apps:

1. Use the diff tool to identify differences:
   ```bash
   diff -r consumer-app/shared/ui farmer-dashboard/shared/ui
   ```

2. Synchronize the components:
   ```bash
   cp -R consumer-app/shared/ui/* farmer-dashboard/shared/ui/
   ```

## Additional Resources

- [Project Structure and Rules](./project-structure-and-rules.md)
- [Scripts Documentation](./scripts/README.md)
