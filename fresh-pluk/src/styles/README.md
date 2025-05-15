# Pluk App Theme System

This guide explains how to use the centralized theming system for consistent styling across all components.

## Theme Structure

The theme system is organized into:

1. **Base variables** - colors, spacing, typography, etc.
2. **Component styles** - pre-defined styles for common components
3. **Layout styles** - common layout patterns

## Using the Theme

### Basic Usage

Import the theme in your component style files:

```typescript
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.md,
  },
  title: {
    fontSize: theme.typography.sizes.lg,
    color: theme.colors.text.primary,
  }
});
```

### Using Component Styles

For components with pre-defined styles in the theme:

```typescript
import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    ...theme.componentStyles.button.base,
    ...theme.componentStyles.button.primary,
  },
  buttonText: {
    ...theme.componentStyles.button.text,
    ...theme.componentStyles.button.primaryText,
  },
});
```

### Extending Component Styles

Override or extend theme styles:

```typescript
export const styles = StyleSheet.create({
  specialButton: {
    ...theme.componentStyles.button.base,
    ...theme.componentStyles.button.primary,
    borderRadius: theme.borderRadius.round, // Override with round corners
    marginTop: theme.spacing.lg, // Add additional margin
  },
});
```

## Available Theme Components

The theme includes pre-styled components:

- `theme.componentStyles.button` - Button styles
- `theme.componentStyles.input` - Input field styles
- `theme.componentStyles.card` - Card styles
- `theme.componentStyles.listItem` - List item styles
- `theme.componentStyles.carousel` - Carousel styles
- `theme.componentStyles.categoryCard` - Category card styles
- `theme.componentStyles.subcategoryButton` - Subcategory button styles

## Best Practices

1. **Always use theme values** for colors, spacing, typography, etc.
2. **Avoid hardcoded values** in style definitions
3. **Extend existing components** when possible instead of creating new ones
4. **Be consistent** with spacing and typography

## Example Component

```tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export const MyButton = ({ title, onPress, type = 'primary' }) => {
  return (
    <TouchableOpacity 
      style={[
        styles.button, 
        type === 'secondary' && styles.secondaryButton
      ]} 
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};
```

And the corresponding styles:

```tsx
import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

export const styles = StyleSheet.create({
  button: {
    ...theme.componentStyles.button.base,
    ...theme.componentStyles.button.primary,
  },
  secondaryButton: {
    ...theme.componentStyles.button.secondary,
  },
  buttonText: {
    ...theme.componentStyles.button.text,
    ...theme.componentStyles.button.primaryText,
  },
});
``` 