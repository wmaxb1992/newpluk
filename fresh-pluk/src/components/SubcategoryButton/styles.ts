import { StyleSheet } from 'react-native';
import theme from '../../styles/theme';

// Override the theme's subcategory button styles with a more compact version
export const styles = StyleSheet.create({
  button: {
    minWidth: 70, // Reduced width
    height: 26, // Reduced height
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.sm,
    paddingHorizontal: 2, // Minimal horizontal padding
    paddingVertical: 0, // No vertical padding
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginHorizontal: 2,
  },
  selectedButton: {
    backgroundColor: theme.colors.primary,
    borderColor: theme.colors.primary,
  },
  title: {
    fontSize: theme.typography.sizes.xs, // Smaller font size
    fontWeight: '500',
    color: theme.colors.text.primary,
    textAlign: 'center',
  },
  selectedTitle: {
    color: theme.colors.text.inverse,
  },
});